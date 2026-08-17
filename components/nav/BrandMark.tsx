/* eslint-disable @next/next/no-img-element */
export function BrandMark({
  className,
  variant = "color",
}: {
  className?: string;
  variant?: "color" | "white";
}) {
  return (
    <img
      src={variant === "white" ? "/brand/icon-white.svg" : "/brand/icon.svg"}
      alt=""
      className={className}
      aria-hidden="true"
    />
  );
}
