import { useState, useCallback, useEffect } from "react";

export type VideoStatus = "unwatched" | "watched" | "dismissed";

interface DismissedEntry {
  id: string;
  title: string;
  dismissedAt: number;
}

interface PersistedState {
  videos: Record<string, VideoStatus>;
  recentlyDismissed: DismissedEntry[];
}

const STORAGE_KEY = "youtube-ux-video-state";
const MAX_DISMISSED = 10;

function loadState(): PersistedState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { videos: {}, recentlyDismissed: [] };
}

function saveState(state: PersistedState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useVideoState() {
  const [state, setState] = useState<PersistedState>(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const getStatus = useCallback(
    (id: string): VideoStatus => state.videos[id] ?? "unwatched",
    [state.videos]
  );

  const markWatched = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      videos: { ...prev.videos, [id]: "watched" },
    }));
  }, []);

  const dismiss = useCallback((id: string, title: string) => {
    setState((prev) => {
      const recentlyDismissed = [
        { id, title, dismissedAt: Date.now() },
        ...prev.recentlyDismissed,
      ].slice(0, MAX_DISMISSED);
      return {
        videos: { ...prev.videos, [id]: "dismissed" },
        recentlyDismissed,
      };
    });
  }, []);

  const undoDismiss = useCallback((id: string) => {
    setState((prev) => ({
      videos: { ...prev.videos, [id]: "watched" },
      recentlyDismissed: prev.recentlyDismissed.filter((e) => e.id !== id),
    }));
  }, []);

  const latestDismissed =
    state.recentlyDismissed.length > 0 ? state.recentlyDismissed[0] : null;

  return { getStatus, markWatched, dismiss, undoDismiss, latestDismissed };
}
