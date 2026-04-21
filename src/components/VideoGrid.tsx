import { AnimatePresence, motion } from "framer-motion";
import VideoCard from "./VideoCard";
import type { Video } from "../data/mockVideos";
import type { VideoStatus } from "../hooks/useVideoState";

interface VideoGridProps {
  videos: Video[];
  getStatus: (id: string) => VideoStatus;
  onDismiss: (id: string, title: string) => void;
  onMarkWatched: (id: string) => void;
  onContextMenu: (e: React.MouseEvent, videoId: string) => void;
}

const springTransition = { type: "spring" as const, damping: 25, stiffness: 200 };

export default function VideoGrid({
  videos,
  getStatus,
  onDismiss,
  onMarkWatched,
  onContextMenu,
}: VideoGridProps) {
  const visibleVideos = videos.filter((v) => getStatus(v.id) !== "dismissed");

  return (
    <motion.div layout transition={springTransition} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 mb-12">
      <AnimatePresence mode="popLayout">
        {visibleVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            status={getStatus(video.id)}
            onDismiss={onDismiss}
            onMarkWatched={onMarkWatched}
            onContextMenu={onContextMenu}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
