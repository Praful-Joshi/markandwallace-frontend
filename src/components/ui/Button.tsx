type ButtonVariant = "primary" | "text" | "icon" | "link";

type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900";

const variants: Record<ButtonVariant, string> = {
  primary:
    "h-12 px-6 text-body1 bg-primary-1 text-neutral-6 hover:bg-primary-700",
  text: "text-body1 text-primary-1 hover:underline",
  icon: "h-10 w-10 bg-primary-1 text-neutral-6",
  link: "text-caption1 text-primary-1 underline underline-offset-2",
};

const disabledStyles: Record<ButtonVariant, string> = {
  primary: "h-12 px-6 text-body1 bg-primary-4 text-neutral-6",
  text: "text-body1 text-neutral-4",
  icon: "h-10 w-10 bg-primary-4 text-neutral-6",
  link: "text-body1 text-neutral-4 underline underline-offset-2",
};

export function Button({
  variant = "primary",
  children,
  onClick,
  href,
  disabled = false,
  className = "",
}: ButtonProps) {
  const cls = [
    base,
    disabled ? disabledStyles[variant] : variants[variant],
    disabled ? "cursor-not-allowed pointer-events-none" : "cursor-pointer",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={cls} aria-disabled={disabled}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
