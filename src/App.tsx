import { useState, useCallback } from "react";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import CategoryChips from "./components/CategoryChips";
import VideoGrid from "./components/VideoGrid";
import ShortsGrid from "./components/ShortsGrid";
import DismissToast from "./components/DismissToast";
import ContextMenu from "./components/ContextMenu";
import { mockVideos } from "./data/mockVideos";
import { useVideoState } from "./hooks/useVideoState";

interface ContextMenuState {
  x: number;
  y: number;
  videoId: string;
}

export default function App() {
  const { getStatus, markWatched, dismiss, undoDismiss, latestDismissed } =
    useVideoState();

  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastTitle, setToastTitle] = useState<string | null>(null);

  const handleContextMenu = useCallback(
    (e: React.MouseEvent, videoId: string) => {
      e.preventDefault();
      setContextMenu({ x: e.clientX, y: e.clientY, videoId });
    },
    []
  );

  const handleDismiss = useCallback(
    (id: string, title: string) => {
      dismiss(id, title);
      setToastTitle(title);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 5000);
    },
    [dismiss]
  );

  const handleUndo = useCallback(() => {
    if (latestDismissed) {
      undoDismiss(latestDismissed.id);
      setToastVisible(false);
      setToastTitle(null);
    }
  }, [latestDismissed, undoDismiss]);

  return (
    <>
      <TopNav />

      <div className="flex pt-16">
        <Sidebar />

        <main className="flex-1 md:ml-64 p-6 bg-surface">
          <CategoryChips />

          <VideoGrid
            videos={mockVideos}
            getStatus={getStatus}
            onDismiss={handleDismiss}
            onMarkWatched={markWatched}
            onContextMenu={handleContextMenu}
          />

          <ShortsGrid />
        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 h-14 bg-surface/90 backdrop-blur-lg md:hidden flex justify-around items-center px-4 z-50">
        <a className="flex flex-col items-center gap-1 text-[#bc0100]" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            home
          </span>
          <span className="text-[10px] font-medium">Home</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-tertiary" href="#">
          <span className="material-symbols-outlined">bolt</span>
          <span className="text-[10px] font-medium">Shorts</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-tertiary" href="#">
          <span className="material-symbols-outlined text-2xl">add_circle</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-tertiary" href="#">
          <span className="material-symbols-outlined">subscriptions</span>
          <span className="text-[10px] font-medium">Subs</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-tertiary" href="#">
          <span className="material-symbols-outlined">video_library</span>
          <span className="text-[10px] font-medium">Library</span>
        </a>
      </nav>

      <DismissToast title={toastVisible ? toastTitle : null} onUndo={handleUndo} />

      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onMarkWatched={() => markWatched(contextMenu.videoId)}
          onClose={() => setContextMenu(null)}
        />
      )}
    </>
  );
}
