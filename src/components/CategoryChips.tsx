import { useState } from "react";

const categories = [
  "All",
  "Music",
  "Gaming",
  "Live",
  "Cinema",
  "Productivity",
  "Technology",
  "Design Systems",
  "Cinematography",
];

export default function CategoryChips() {
  const [selected, setSelected] = useState("All");

  return (
    <div className="flex gap-3 mb-8 overflow-x-auto hide-scrollbar pb-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-4 py-1.5 rounded-md font-medium text-sm whitespace-nowrap transition-colors ${
            selected === cat
              ? "bg-on-surface text-surface"
              : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
