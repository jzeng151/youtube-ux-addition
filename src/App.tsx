import { useState, useCallback } from "react";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import CategoryChips from "./components/CategoryChips";
import VideoGrid from "./components/VideoGrid";
import ShortsGrid from "./components/ShortsGrid";
import HiddenVideos from "./components/HiddenVideos";
import DismissToast from "./components/DismissToast";
import ContextMenu from "./components/ContextMenu";
import { mockVideos, allVideos } from "./data/mockVideos";
import { useVideoState } from "./hooks/useVideoState";

interface ContextMenuState {
  x: number;
  y: number;
  videoId: string;
}

export default function App() {
  const { getStatus, markWatched, dismiss, undoDismiss, latestDismissed, dismissedVideos } =
    useVideoState();

  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace("#", "");
    return hash || "home";
  });
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastTitle, setToastTitle] = useState<string | null>(null);

  const handleNavigate = useCallback((page: string) => {
    window.location.hash = page;
    setCurrentPage(page);
  }, []);

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

  const handleRestore = useCallback((id: string) => {
    undoDismiss(id);
  }, [undoDismiss]);

  const hiddenVideos = allVideos.filter((v) => dismissedVideos.some((d) => d.id === v.id));

  return (
    <>
      <TopNav />

      <div className="flex pt-16">
        <Sidebar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          hiddenCount={dismissedVideos.length}
        />

        <main className="flex-1 md:ml-64 p-6 bg-surface">
          {currentPage === "home" && (
            <>
              <CategoryChips />
              <VideoGrid
                videos={mockVideos}
                getStatus={getStatus}
                onDismiss={handleDismiss}
                onMarkWatched={markWatched}
                onContextMenu={handleContextMenu}
              />
              <ShortsGrid />
            </>
          )}
          {currentPage === "hidden" && (
            <HiddenVideos videos={hiddenVideos} onRestore={handleRestore} />
          )}
          {currentPage !== "home" && currentPage !== "hidden" && (
            <div className="flex flex-col items-center justify-center py-20 text-tertiary">
              <span className="material-symbols-outlined text-[64px] mb-4 opacity-30">
                construction
              </span>
              <p className="text-lg font-medium">Coming soon</p>
            </div>
          )}
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
