import { AnimatePresence, motion } from "framer-motion";
import type { Video } from "../data/mockVideos";

interface HiddenVideosProps {
  videos: Video[];
  onRestore: (id: string) => void;
}

const springTransition = { type: "spring" as const, damping: 25, stiffness: 200 };

export default function HiddenVideos({ videos, onRestore }: HiddenVideosProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-[28px] text-on-surface">
          visibility_off
        </span>
        <h1 className="text-on-surface text-xl font-bold">Hidden videos</h1>
        <span className="text-tertiary text-sm">{videos.length} video{videos.length !== 1 ? "s" : ""}</span>
      </div>

      {videos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-tertiary">
          <span className="material-symbols-outlined text-[64px] mb-4 opacity-30">
            visibility_off
          </span>
          <p className="text-lg font-medium">No hidden videos</p>
          <p className="text-sm mt-1">Videos you hide from the home page will appear here.</p>
        </div>
      ) : (
        <motion.div layout transition={springTransition} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          <AnimatePresence mode="popLayout">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                layout
                exit={{ opacity: 0, scale: 0.8 }}
                transition={springTransition}
                className="flex flex-col group"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden bg-surface-container-low mb-3">
                  <img
                    alt={video.title}
                    className="w-full h-full object-cover"
                    style={{ filter: "saturate(0.7)" }}
                    src={video.thumbnailUrl}
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[11px] font-bold px-1.5 py-0.5 rounded leading-none">
                    {video.duration}
                  </div>

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

                  {/* Restore button */}
                  <button
                    onClick={() => onRestore(video.id)}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/85 backdrop-blur-xl border border-black/10 flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
                    aria-label="Restore video"
                  >
                    <span className="material-symbols-outlined text-[18px] text-neutral-700">
                      undo
                    </span>
                  </button>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-surface-container">
                      <img alt={video.channel} className="w-full h-full object-cover" src={video.channelAvatar} />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-on-surface font-semibold line-clamp-2 leading-tight mb-1 text-[15px]">
                      {video.title}
                    </h3>
                    <p className="text-tertiary text-sm flex items-center gap-1">
                      {video.channel}
                      {video.isVerified && (
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
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
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
