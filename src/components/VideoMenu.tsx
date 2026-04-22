import { useEffect, useRef, useState } from "react";

interface VideoMenuProps {
  onClose: () => void;
  anchorRef: React.RefObject<HTMLButtonElement | null>;
}

const menuItems = [
  { icon: "playlist_add", label: "Add to queue" },
  { icon: "schedule", label: "Save to Watch later" },
  { icon: "bookmark_add", label: "Save to playlist" },
  { icon: "download", label: "Download video" },
  { icon: "share", label: "Share" },
  { icon: "not_interested", label: "Not interested" },
  { icon: "remove_circle_outline", label: "Don't recommend channel" },
  { icon: "flag", label: "Report" },
];

export default function VideoMenu({ onClose, anchorRef }: VideoMenuProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    if (anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 4,
        left: rect.right - 240,
      });
    }
  }, [anchorRef]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    // Use pointerdown to match YouTube's instant-close behavior
    document.addEventListener("pointerdown", handleClick);
    return () => document.removeEventListener("pointerdown", handleClick);
  }, [onClose]);

  if (!position) return null;

  return (
    <div
      ref={ref}
      className="fixed z-[200] bg-white/95 backdrop-blur-xl border border-black/[0.08] rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] py-2 w-[240px] overflow-hidden animate-in fade-in"
      style={{ top: position.top, left: position.left }}
    >
      {menuItems.map((item) => (
        <button
          key={item.label}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="w-full flex items-center gap-4 px-4 py-2 text-sm text-on-surface hover:bg-black/[0.04] transition-colors"
        >
          <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
            {item.icon}
          </span>
          {item.label}
        </button>
      ))}
    </div>
  );
}
