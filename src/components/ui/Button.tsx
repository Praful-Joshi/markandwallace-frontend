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
    "h-12 px-6 text-body1 bg-primary-900 text-neutral-100 hover:bg-primary-700",
  text: "text-body2 text-primary-900 hover:underline",
  icon: "h-12 w-12 bg-primary-900 text-neutral-100",
  link: "text-body2 text-primary-900 underline underline-offset-2",
};

const disabledStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-100 text-neutral-500",
  text: "text-neutral-500",
  icon: "bg-primary-100 text-neutral-500",
  link: "text-neutral-500",
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
    variants[variant],
    disabled ? disabledStyles[variant] : "",
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
