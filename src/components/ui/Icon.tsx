import { useEffect, useState } from "react";

type IconProps = {
  src: string;
  size?: number;
  className?: string;
};

export function Icon({ src, size = 24, className = "" }: IconProps) {
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    fetch(src)
      .then((r) => r.text())
      .then(setSvg);
  }, [src]);

  if (!svg) return <span style={{ width: size, height: size }} />;

  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
