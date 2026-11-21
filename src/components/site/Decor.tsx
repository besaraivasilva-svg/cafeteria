import { useId, type ReactNode } from "react";
import bean from "@/assets/coffee-bean.webp";
import { cn } from "@/lib/utils";

export function Starburst({ className, points = 14 }: { className?: string; points?: number }) {
  const pts: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? 50 : 36;
    const a = (Math.PI * i) / points - Math.PI / 2;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
  }
  return (
    <svg viewBox="0 0 100 100" className={cn("fill-current", className)} aria-hidden>
      <polygon points={pts.join(" ")} />
    </svg>
  );
}

export function Bean({ className, rotate = 0 }: { className?: string; rotate?: number }) {
  return (
    <img
      src={bean}
      alt=""
      aria-hidden
      loading="lazy"
      decoding="async"
      style={{ ["--r" as string]: `${rotate}deg`, transform: `rotate(${rotate}deg)` }}
      className={cn("pointer-events-none absolute select-none drop-shadow-xl", className)}
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#inicio" className={cn("flex items-center gap-2 text-espresso", className)}>
      <svg viewBox="0 0 40 32" className="h-7 w-9 fill-current" aria-hidden>
        <ellipse cx="13" cy="17" rx="10" ry="13" transform="rotate(-25 13 17)" />
        <ellipse cx="28" cy="14" rx="9" ry="12" transform="rotate(20 28 14)" />
        <path d="M8 8 C 14 14, 12 22, 18 27" className="fill-none stroke-background" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M25 4 C 31 10, 26 18, 31 24" className="fill-none stroke-background" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-display text-2xl tracking-wide">BRUMA</span>
    </a>
  );
}

export function CurlyArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={cn("fill-none stroke-current", className)} aria-hidden>
      <path d="M4 40 C 30 10, 60 60, 92 26" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M80 22 L 94 24 L 90 38" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RotatingBadge({
  text,
  className,
  children,
}: {
  text: string;
  className?: string;
  children?: ReactNode;
}) {
  const id = `badge-${useId().replace(/:/g, "")}`;
  return (
    <div className={cn("relative grid place-items-center", className)}>
      <svg viewBox="0 0 200 200" className="animate-spin-slow absolute inset-0 size-full" aria-hidden>
        <defs>
          <path id={id} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-current font-display text-[17px] uppercase">
          <textPath href={`#${id}`} textLength={486} lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}
