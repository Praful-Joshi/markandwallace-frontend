import { Icon } from "@/components/ui/Icon";

// ── Types ────────────────────────────────────────────────────────────────────

type RowProps =
  | {
      variant: "address";
      address: string;
      distance: string;
      onClick?: () => void;
    }
  | { variant: "info"; label: string; onClick?: () => void }
  | {
      variant: "user";
      name: string;
      phone: string;
      imageSrc: string;
      onClick?: () => void;
    }
  | {
      variant: "transaction-screen-deduction" | "transaction-screen-increment";
      icon: string;
      title: string;
      status: string;
      amount: string;
      onClick?: () => void;
    }
  | {
      variant: "transaction-card-deduction" | "transaction-card-increment";
      icon: string;
      title: string;
      date: string;
      amount: string;
      onClick?: () => void;
    }
  | {
      variant: "language-default" | "language-selected";
      flag: string;
      language: string;
      onClick?: () => void;
    }
  | {
      variant: "message";
      icon: string;
      title: string;
      preview: string;
      date: string;
      onClick?: () => void;
    };

// ── Shared primitives ────────────────────────────────────────────────────────

const rowBase =
  "w-full flex items-center gap-3 px-4 py-3 border-b border-neutral-5 cursor-pointer hover:bg-neutral-5/30 transition-colors";

function RoundedIcon({ src }: { src: string }) {
  return (
    <div className="w-11 h-11 rounded-2xl bg-primary-1 flex items-center justify-center shrink-0">
      <Icon src={src} size={22} className="text-neutral-6" />
    </div>
  );
}

function ChevronRight() {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      className="shrink-0 text-neutral-5"
    >
      <path
        d="M1 1L7 7L1 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Checkmark() {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      className="shrink-0 text-primary-1"
    >
      <path
        d="M1 7L6.5 12.5L17 1"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Variant renderers ────────────────────────────────────────────────────────

function AddressRow(props: Extract<RowProps, { variant: "address" }>) {
  return (
    <button type="button" onClick={props.onClick} className={rowBase}>
      <svg
        width="18"
        height="22"
        viewBox="0 0 18 22"
        fill="none"
        className="shrink-0 text-primary-1"
      >
        <path
          d="M9 0C4.03 0 0 4.03 0 9c0 6.75 9 13 9 13s9-6.25 9-13c0-4.97-4.03-9-9-9zm0 12.5A3.5 3.5 0 1 1 9 5.5a3.5 3.5 0 0 1 0 7z"
          fill="currentColor"
        />
      </svg>
      <span className="text-body1 text-neutral-1 flex-1 text-left">
        {props.address}
      </span>
      <span className="text-caption1 text-neutral-3 shrink-0">
        {props.distance}
      </span>
    </button>
  );
}

function InfoRow(props: Extract<RowProps, { variant: "info" }>) {
  return (
    <button type="button" onClick={props.onClick} className={rowBase}>
      <span className="text-body1 text-neutral-1 flex-1 text-left">
        {props.label}
      </span>
      <ChevronRight />
    </button>
  );
}

function UserRow(props: Extract<RowProps, { variant: "user" }>) {
  return (
    <button type="button" onClick={props.onClick} className={rowBase}>
      <img
        src={props.imageSrc}
        alt={props.name}
        className="w-11 h-11 rounded-full object-cover shrink-0"
      />
      <div className="flex flex-col flex-1 text-left">
        <span className="text-body1 text-neutral-1">{props.name}</span>
        <span className="text-caption1 text-neutral-3">{props.phone}</span>
      </div>
    </button>
  );
}

function TransactionScreenRow(
  props: Extract<
    RowProps,
    { variant: "transaction-screen-deduction" | "transaction-screen-increment" }
  >,
) {
  const isDeduction = props.variant === "transaction-screen-deduction";
  return (
    <button type="button" onClick={props.onClick} className={rowBase}>
      <RoundedIcon src={props.icon} />
      <div className="flex flex-col flex-1 text-left">
        <span className="text-body1 text-neutral-1">{props.title}</span>
        <span className="text-caption1 text-neutral-3">{props.status}</span>
      </div>
      <span
        className={`text-title3 shrink-0 ${isDeduction ? "text-semantic-error" : "text-primary-1"}`}
      >
        {isDeduction ? `- ${props.amount}` : `+ ${props.amount}`}
      </span>
    </button>
  );
}

function TransactionCardRow(
  props: Extract<
    RowProps,
    { variant: "transaction-card-deduction" | "transaction-card-increment" }
  >,
) {
  const isDeduction = props.variant === "transaction-card-deduction";
  return (
    <button type="button" onClick={props.onClick} className={rowBase}>
      <RoundedIcon src={props.icon} />
      <div className="flex flex-col flex-1 text-left">
        <span className="text-body1 text-neutral-1">{props.title}</span>
        <span className="text-caption1 text-neutral-3">{props.date}</span>
      </div>
      <span
        className={`text-title3 font-semibold shrink-0 ${isDeduction ? "text-semantic-error" : "text-primary-1"}`}
      >
        {isDeduction ? `- ${props.amount}` : `+ ${props.amount}`}
      </span>
    </button>
  );
}

function LanguageRow(
  props: Extract<
    RowProps,
    { variant: "language-default" | "language-selected" }
  >,
) {
  const isSelected = props.variant === "language-selected";
  return (
    <button type="button" onClick={props.onClick} className={rowBase}>
      <img
        src={props.flag}
        alt={props.language}
        className="w-10 h-8 ml-0.5 rounded-sm object-cover"
      />
      <span
        className={`text-body1 flex-1 text-left ${isSelected ? "text-neutral-1" : "text-neutral-3"}`}
      >
        {props.language}
      </span>
      {isSelected && <Checkmark />}
    </button>
  );
}

function MessageRow(props: Extract<RowProps, { variant: "message" }>) {
  return (
    <button type="button" onClick={props.onClick} className={rowBase}>
      <RoundedIcon src={props.icon} />
      <div className="flex flex-col flex-1 text-left min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="text-body1 text-neutral-1 truncate">
            {props.title}
          </span>
          <span className="text-caption2 text-neutral-3 shrink-0">
            {props.date}
          </span>
        </div>
        <span className="text-caption1 text-neutral-3 truncate">
          {props.preview}
        </span>
      </div>
    </button>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export function Row(props: RowProps) {
  switch (props.variant) {
    case "address":
      return <AddressRow {...props} />;
    case "info":
      return <InfoRow {...props} />;
    case "user":
      return <UserRow {...props} />;
    case "transaction-screen-deduction":
    case "transaction-screen-increment":
      return <TransactionScreenRow {...props} />;
    case "transaction-card-deduction":
    case "transaction-card-increment":
      return <TransactionCardRow {...props} />;
    case "language-default":
    case "language-selected":
      return <LanguageRow {...props} />;
    case "message":
      return <MessageRow {...props} />;
  }
}
