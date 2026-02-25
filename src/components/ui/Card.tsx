import walletIcon from "@/assets/icons/wallet-43 1.svg";
import bankIcon from "@/assets/icons/ 33.svg";
import plusIcon from "@/assets/icons/ 12.svg";
import { Icon } from "@/components/ui/Icon";

type CardVariant =
  | "beneficiary-add"
  | "beneficiary-user"
  | "account"
  | "transfer";

type CardProps = {
  variant: CardVariant;
  label?: string;
  imageSrc?: string;
  onClick?: () => void;
};

const containerBase =
  "flex flex-col items-center justify-center gap-3 rounded-2xl shadow-card cursor-pointer transition-opacity hover:opacity-80";

const containerVariants: Record<CardVariant, string> = {
  "beneficiary-add": "w-[100px] h-[120px] bg-neutral-6",
  "beneficiary-user": "w-[100px] h-[120px] bg-neutral-6",
  account: "w-[100px] h-[100px] bg-neutral-6",
  transfer: "w-[120px] h-[100px] bg-primary-1 !items-start px-4",
};

const labelVariants: Record<CardVariant, string> = {
  "beneficiary-add": "",
  "beneficiary-user": "text-body-3 text-neutral-1 text-center",
  account: "text-caption2 text-neutral-3 text-center leading-tight px-2",
  transfer: "text-caption2 text-neutral-6 text-left leading-tight",
};

function CardIcon({
  variant,
  imageSrc,
}: {
  variant: CardVariant;
  imageSrc?: string;
}) {
  switch (variant) {
    case "beneficiary-add":
      return (
        <div className="w-14 h-14 rounded-full bg-primary-4 flex items-center justify-center">
          <Icon src={plusIcon} className="text-neutral-6" />
        </div>
      );
    case "beneficiary-user":
      return (
        <img
          src={imageSrc}
          alt=""
          className="w-14 h-14 rounded-full object-cover"
        />
      );
    case "account":
      return <Icon src={walletIcon} className="w-8 h-8 text-neutral-4" />;

    case "transfer":
      return <Icon src={bankIcon} className="w-8 h-8 text-neutral-4" />;
  }
}

export function Card({ variant, label, imageSrc, onClick }: CardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${containerBase} ${containerVariants[variant]}`}
    >
      <CardIcon variant={variant} imageSrc={imageSrc} />
      {variant !== "beneficiary-add" && (
        <span className={labelVariants[variant]}>{label}</span>
      )}
    </button>
  );
}
