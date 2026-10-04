import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="block h-2.5 w-2.5 rounded-[2px] bg-lime" />
      <span className="text-xs font-semibold uppercase tracking-[0.02em] text-white">
        {children}
      </span>
    </div>
  );
}
