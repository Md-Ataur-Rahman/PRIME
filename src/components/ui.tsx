import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "scale";
}) {
  const { ref, inView } = useInView();
  const base =
    variant === "left" ? "reveal-left" : variant === "scale" ? "reveal-scale" : "reveal";
  return (
    <div
      ref={ref}
      className={cn(base, inView && "revealed", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
      <span className="h-px w-8 bg-gold" />
      {children}
      <span className="h-px w-8 bg-gold" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <Reveal>
        <div className={cn(align === "center" && "flex justify-center")}>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
        </div>
        <h2 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-5 text-base leading-relaxed text-navy-muted sm:text-lg">{subtitle}</p>
        )}
      </Reveal>
    </div>
  );
}

type BtnVariant = "gold" | "navy" | "outline";

export function Button({
  variant = "gold",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: BtnVariant }) {
  const styles =
    variant === "gold" ? "btn-gold" : variant === "navy" ? "btn-navy" : "btn-outline";
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide",
        styles,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
