type TabProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

export function Tab({
  label,
  active = false,
  onClick,
  className = "",
}: TabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "h-12 w-full rounded-full text-body1 transition-colors cursor-pointer",
        active ? "bg-primary-1 text-neutral-6" : "bg-primary-4 text-neutral-1",
        className,
      ].join(" ")}
    >
      {label}
    </button>
  );
}
