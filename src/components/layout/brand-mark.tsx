import { Anchor } from "lucide-react";

import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-md bg-signal text-signal-foreground",
        className,
      )}
      aria-hidden
    >
      <Anchor className="size-5" strokeWidth={2.25} />
    </div>
  );
}
