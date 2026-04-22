interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  hiddenCount?: number;
}

export default function Sidebar({ currentPage, onNavigate, hiddenCount = 0 }: SidebarProps) {
  const items = [
    { icon: "home", label: "Home", page: "home", fill: true },
    { icon: "bolt", label: "Shorts", page: "shorts" },
    { icon: "subscriptions", label: "Subscriptions", page: "subscriptions" },
  ];

  const libraryItems = [
    { icon: "video_library", label: "Library", page: "library" },
    { icon: "history", label: "History", page: "history" },
  ];

  const bottomItems = [
    { icon: "settings", label: "Settings" },
    { icon: "flag", label: "Report" },
    { icon: "help", label: "Help" },
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-neutral-50 flex flex-col p-4 gap-2 overflow-y-auto hidden md:flex font-['Roboto',sans-serif] text-sm font-medium">
      {items.map((item) => (
        <a
          key={item.label}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(item.page);
          }}
          className={`flex items-center gap-6 px-4 py-3 rounded-lg transition-colors scale-100 hover:translate-x-1 duration-200 cursor-pointer ${
            currentPage === item.page
              ? "bg-neutral-200 text-neutral-900"
              : "text-neutral-600 hover:bg-neutral-200/50"
          }`}
          href={`#${item.page}`}
        >
          <span
            className={`material-symbols-outlined ${currentPage === item.page && item.fill ? "text-[#bc0100]" : ""}`}
            style={currentPage === item.page && item.fill ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            {item.icon}
          </span>
          <span>{item.label}</span>
        </a>
      ))}

      <hr className="my-3 border-transparent" />

      <div className="px-4 pb-2 text-neutral-900 font-bold tracking-tight">
        Library
      </div>

      {libraryItems.map((item) => (
        <a
          key={item.label}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(item.page);
          }}
          className={`flex items-center gap-6 px-4 py-3 rounded-lg transition-colors scale-100 hover:translate-x-1 duration-200 cursor-pointer ${
            currentPage === item.page
              ? "bg-neutral-200 text-neutral-900"
              : "text-neutral-600 hover:bg-neutral-200/50"
          }`}
          href={`#${item.page}`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span>{item.label}</span>
        </a>
      ))}

      {/* Hidden videos link */}
      <a
        onClick={(e) => {
          e.preventDefault();
          onNavigate("hidden");
        }}
        className={`flex items-center gap-6 px-4 py-3 rounded-lg transition-colors scale-100 hover:translate-x-1 duration-200 cursor-pointer ${
          currentPage === "hidden"
            ? "bg-neutral-200 text-neutral-900"
            : "text-neutral-600 hover:bg-neutral-200/50"
        }`}
        href="#hidden"
      >
        <span
          className="material-symbols-outlined"
          style={currentPage === "hidden" ? { fontVariationSettings: "'FILL' 1" } : undefined}
        >
          visibility_off
        </span>
        <span>Hidden videos</span>
        {hiddenCount > 0 && (
          <span className="ml-auto text-xs text-neutral-400">{hiddenCount}</span>
        )}
      </a>

      <div className="mt-auto pt-6 flex flex-col gap-2 border-t border-neutral-200">
        {bottomItems.map((item) => (
          <a
            key={item.label}
            className="flex items-center gap-6 px-4 py-3 text-neutral-600 hover:bg-neutral-200/50 rounded-lg transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
