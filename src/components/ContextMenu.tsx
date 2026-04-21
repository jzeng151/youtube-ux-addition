import { useEffect, useRef } from "react";

interface ContextMenuProps {
  x: number;
  y: number;
  onMarkWatched: () => void;
  onClose: () => void;
}

export default function ContextMenu({ x, y, onMarkWatched, onClose }: ContextMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="fixed z-[200] bg-white/90 backdrop-blur-xl border border-black/[0.08] rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.08)] py-1 min-w-[180px] overflow-hidden"
      style={{ top: y, left: x }}
    >
      <button
        onClick={() => {
          onMarkWatched();
          onClose();
        }}
        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-on-surface hover:bg-surface-container-high transition-colors"
      >
        <span className="material-symbols-outlined text-[18px]">visibility</span>
        Mark as watched
      </button>
    </div>
  );
}
