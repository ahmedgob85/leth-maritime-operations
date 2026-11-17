import { Languages } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useI18n } from "@/lib/i18n";

export function AppHeader() {
  const { t, toggleLang, lang } = useI18n();

  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2 border-b bg-card/95 px-3 backdrop-blur supports-[backdrop-filter]:bg-card/80 sm:px-5">
      <SidebarTrigger aria-label={t.header.toggleSidebar} className="rtl:-scale-x-100" />
      <Separator orientation="vertical" className="mx-1 h-5" />
      <span className="truncate text-sm font-medium text-muted-foreground">{t.app.tagline}</span>

      <div className="ms-auto flex items-center gap-2">
        <Badge
          variant="outline"
          className="hidden border-signal/40 bg-signal/10 font-normal text-foreground sm:inline-flex"
        >
          <span className="me-1.5 inline-block size-1.5 rounded-full bg-signal" />
          {t.header.environment}
        </Badge>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleLang}
          aria-label={t.header.language}
          lang={lang === "en" ? "ar" : "en"}
          className="gap-1.5"
        >
          <Languages className="size-4" />
          {t.header.switchTo}
        </Button>
      </div>
    </header>
  );
}
