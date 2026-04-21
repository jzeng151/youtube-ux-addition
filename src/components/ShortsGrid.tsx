import { mockShorts } from "../data/mockShorts";

export default function ShortsGrid() {
  return (
    <div className="mb-12 border-y border-outline-variant/10 py-6">
      <div className="flex items-center gap-2 mb-4 px-2">
        <span
          className="material-symbols-outlined text-[#bc0100] text-2xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          bolt
        </span>
        <h2 className="text-xl font-bold tracking-tight">Shorts</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {mockShorts.map((short) => (
          <div key={short.id} className="flex flex-col gap-2 cursor-pointer group">
            <div className="relative aspect-[9/16] w-full bg-surface-container-high rounded-xl overflow-hidden">
              <img
                alt={short.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={short.thumbnailUrl}
              />
            </div>
            <div className="flex flex-col px-1">
              <h3 className="text-sm font-semibold line-clamp-2 leading-snug">
                {short.title}
              </h3>
              <p className="text-tertiary text-xs mt-0.5">{short.views}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
