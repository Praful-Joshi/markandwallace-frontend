type TabBarItem = {
  key: string;
  label: string;
  icon: string; // path to SVG asset
};

type TabBarProps = {
  items: TabBarItem[];
  activeKey: string;
  onChange: (key: string) => void;
};

export function TabBar({ items, activeKey, onChange }: TabBarProps) {
  return (
    <div className="w-full bg-neutral-6 shadow-card-small flex items-center justify-between px-6 py-3 rounded-2xl">
      {items.map((item) => {
        const isActive = item.key === activeKey;

        if (isActive) {
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onChange(item.key)}
              className="flex items-center gap-2 bg-primary-1 text-neutral-6 rounded-full px-4 py-2 text-caption1 cursor-pointer transition-opacity hover:opacity-80"
            >
              <img src={item.icon} alt="" className="w-5 h-5" />
              {item.label}
            </button>
          );
        }

        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onChange(item.key)}
            className="flex items-center justify-center w-10 h-10 cursor-pointer hover:opacity-60 transition-opacity"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-5 h-5 opacity-40"
            />
          </button>
        );
      })}
    </div>
  );
}
