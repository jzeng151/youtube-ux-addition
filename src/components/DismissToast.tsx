import { motion, AnimatePresence } from "framer-motion";

interface DismissToastProps {
  title: string | null;
  onUndo: () => void;
}

export default function DismissToast({ title, onUndo }: DismissToastProps) {
  return (
    <AnimatePresence>
      {title && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-white/90 backdrop-blur-xl border border-black/[0.08] px-5 py-3 rounded-full flex items-center gap-3 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        >
          <span className="text-tertiary text-xs font-medium">Video hidden.</span>
          <span className="text-on-surface text-sm font-semibold max-w-[200px] truncate">
            {title}
          </span>
          <button
            onClick={onUndo}
            className="text-secondary text-sm font-semibold px-3 py-1 rounded-full hover:bg-surface-container-high transition-colors"
          >
            UNDO
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
