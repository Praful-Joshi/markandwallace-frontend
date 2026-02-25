import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import searchIcon from "@/assets/icons/ 44.svg";

// ── Types ────────────────────────────────────────────────────────────────────

type TextFieldBaseProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  caption?: string;
  disabled?: boolean;
};

type TextFieldProps =
  | (TextFieldBaseProps & { variant?: "default" })
  | (TextFieldBaseProps & {
      variant: "dropdown";
      options: string[];
      onSelect: (option: string) => void;
    })
  | (TextFieldBaseProps & { variant: "search" })
  | (TextFieldBaseProps & {
      variant: "exchange";
      currency: string;
      onCurrencyChange: () => void;
      label?: string;
    });

// ── Shared styles ────────────────────────────────────────────────────────────

const inputWrapperBase =
  "w-full h-12 flex items-center rounded-full border px-4 transition-colors";
const borderDefault = "border-neutral-5";
const borderActive = "border-neutral-1";
const inputBase =
  "flex-1 bg-transparent outline-none text-body2 text-neutral-1 placeholder:text-neutral-4 min-w-0";

// ── Sub-components ───────────────────────────────────────────────────────────

function FieldLabel({ label }: { label: string }) {
  return (
    <span className="text-caption1 text-neutral-4 mb-1 ml-1 block">
      {label}
    </span>
  );
}

function FieldCaption({ caption }: { caption: string }) {
  return (
    <span className="text-caption1 text-primary-1 mt-1 ml-1 block">
      {caption}
    </span>
  );
}

function ChevronDown({ active }: { active: boolean }) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      className={`shrink-0 transition-colors ${active ? "text-neutral-1" : "text-neutral-4"}`}
    >
      <path
        d="M1 1L7 7L13 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      className="shrink-0 text-neutral-1"
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

function SortIcon() {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      className="shrink-0 text-neutral-4"
    >
      <path
        d="M7 1V15M7 1L4 4M7 1L10 4M7 15L4 12M7 15L10 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Variant components ───────────────────────────────────────────────────────

function DefaultField({
  value,
  onChange,
  placeholder,
  label,
  caption,
  disabled,
}: Extract<TextFieldProps, { variant?: "default" }>) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || !!value;

  return (
    <div className="w-full">
      {label && <FieldLabel label={label} />}
      <div
        className={`${inputWrapperBase} ${isActive ? borderActive : borderDefault}`}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? "Text input"}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={inputBase}
        />
      </div>
      {caption && <FieldCaption caption={caption} />}
    </div>
  );
}

function DropdownField({
  value,
  onChange,
  placeholder,
  label,
  caption,
  disabled,
  onSelect,
}: Extract<TextFieldProps, { variant: "dropdown" }>) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || !!value;

  return (
    <div className="w-full">
      {label && <FieldLabel label={label} />}
      <div
        className={`${inputWrapperBase} ${isActive ? borderActive : borderDefault}`}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? "Text input"}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={inputBase}
        />
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            onSelect(value);
          }}
          className="ml-2 cursor-pointer"
        >
          <ChevronDown active={isActive} />
        </button>
      </div>
      {caption && <FieldCaption caption={caption} />}
    </div>
  );
}

function SearchField({
  value,
  onChange,
  placeholder,
  disabled,
}: Extract<TextFieldProps, { variant: "search" }>) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || !!value;

  return (
    <div className="w-full">
      <div
        className={`${inputWrapperBase} ${isActive ? borderActive : borderDefault} gap-2`}
      >
        <Icon src={searchIcon} size={18} className="text-neutral-4 shrink-0" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? "Search"}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={inputBase}
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="ml-1 text-neutral-4 hover:text-neutral-1 transition-colors cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

function ExchangeField({
  value,
  onChange,
  placeholder,
  label,
  disabled,
  currency,
  onCurrencyChange,
}: Extract<TextFieldProps, { variant: "exchange" }>) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || !!value;

  return (
    <div className="w-full">
      {label && <FieldLabel label={label} />}
      <div
        className={`${inputWrapperBase} ${isActive ? borderActive : borderDefault} pr-0 overflow-hidden`}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? "Text input"}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${inputBase} pr-2`}
        />
        {/* Divider */}
        <div className="w-px h-6 bg-neutral-5 shrink-0" />
        {/* Currency selector */}
        <button
          type="button"
          onClick={onCurrencyChange}
          className="flex items-center gap-2 px-3 h-full cursor-pointer hover:bg-neutral-5/40 transition-colors"
        >
          <span
            className={`text-body2 ${isActive ? "text-neutral-1" : "text-neutral-4"}`}
          >
            {currency}
          </span>
          <SortIcon />
        </button>
      </div>
    </div>
  );
}

// ── TextField with Label+Chevron variant ─────────────────────────────────────
// This is the "Label / Active" variant from image 2 — input with chevron right

function LabelChevronField({
  value,
  onChange,
  placeholder,
  label,
  caption,
  disabled,
}: Extract<TextFieldProps, { variant?: "default" }>) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || !!value;

  return (
    <div className="w-full">
      {label && <FieldLabel label={label} />}
      <div
        className={`${inputWrapperBase} ${isActive ? borderActive : borderDefault}`}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? "Text input"}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={inputBase}
        />
        {isActive && <ChevronRight />}
      </div>
      {caption && <FieldCaption caption={caption} />}
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export function TextField(props: TextFieldProps) {
  switch (props.variant) {
    case "dropdown":
      return <DropdownField {...props} />;
    case "search":
      return <SearchField {...props} />;
    case "exchange":
      return <ExchangeField {...props} />;
    default:
      return <DefaultField {...props} />;
  }
}

// Export label-chevron variant as a named component since it's
// structurally the same as default but with a different right element
export { LabelChevronField as TextFieldWithChevron };
