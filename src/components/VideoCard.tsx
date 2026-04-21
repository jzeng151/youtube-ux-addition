import { motion } from "framer-motion";
import type { Video } from "../data/mockVideos";
import type { VideoStatus } from "../hooks/useVideoState";

interface VideoCardProps {
  video: Video;
  status: VideoStatus;
  onDismiss: (id: string, title: string) => void;
  onMarkWatched: (id: string) => void;
  onContextMenu: (e: React.MouseEvent, videoId: string) => void;
}

const springTransition = { type: "spring" as const, damping: 25, stiffness: 200 };

export default function VideoCard({
  video,
  status,
  onDismiss,
  onMarkWatched,
  onContextMenu,
}: VideoCardProps) {
  const isWatched = status === "watched";

  return (
    <motion.div
      layout
      exit={{ opacity: 0, scale: 0.8, filter: "grayscale(100%)" }}
      transition={springTransition}
      className="flex flex-col group cursor-pointer"
    >
      <div className="relative aspect-video rounded-lg overflow-hidden bg-surface-container-low mb-3">
        <img
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={isWatched ? { filter: "saturate(0.7)" } : undefined}
          src={video.thumbnailUrl}
          onContextMenu={(e) => onContextMenu(e, video.id)}
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[11px] font-bold px-1.5 py-0.5 rounded leading-none">
          {video.duration}
        </div>

        {isWatched && (
          <>
            {/* Watched badge */}
            <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1 tracking-wide">
              <span
                className="material-symbols-outlined text-[12px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                visibility_off
              </span>
              WATCHED
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/20">
              <div className="h-full bg-[#bc0100] rounded-r-sm" style={{ width: "100%" }} />
            </div>

            {/* Dismiss button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDismiss(video.id, video.title);
              }}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/85 backdrop-blur-xl border border-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 hover:bg-white"
              aria-label="Hide video"
            >
              <span className="material-symbols-outlined text-[16px] text-neutral-700">
                close
              </span>
            </button>
          </>
        )}
      </div>

      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-surface-container">
            <img alt={video.channel} className="w-full h-full object-cover" src={video.channelAvatar} />
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-on-surface font-semibold line-clamp-2 leading-tight mb-1 text-[15px]">
            {video.title}
          </h3>
          <p className="text-tertiary text-sm hover:text-on-surface transition-colors flex items-center gap-1">
            {video.channel}
            {video.isVerified && (
              <span
                className="material-symbols-outlined text-[14px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            )}
          </p>
          <p className="text-tertiary text-sm">
            {video.views} &bull; {video.timestamp}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
