import { createFileRoute } from "@tanstack/react-router";
import { Check, Settings } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Lang } from "@/lib/i18n-dictionary";
import { useI18n } from "@/lib/i18n";
import { pageHead } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/settings")({
  head: () =>
    pageHead("Settings", "Language, direction and organisation preferences for LETH Operations."),
  component: SettingsPage,
});

function SettingsPage() {
  const { t, lang, setLang } = useI18n();
  const options: { value: Lang; label: string; sample: string }[] = [
    { value: "en", label: t.settings.english, sample: "LTR · Aa" },
    { value: "ar", label: t.settings.arabic, sample: "RTL · أب" },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader title={t.modules.settings.title} description={t.modules.settings.description} icon={Settings} />

      <Card className="shadow-xs">
        <CardHeader>
          <CardTitle className="font-display text-base">{t.settings.languageTitle}</CardTitle>
          <CardDescription>{t.settings.languageDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <div role="radiogroup" aria-label={t.settings.languageTitle} className="grid gap-3 sm:grid-cols-2">
            {options.map((o) => {
              const selected = lang === o.value;
              return (
                <button
                  key={o.value}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setLang(o.value)}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-lg border px-4 py-3 text-start transition-colors",
                    selected ? "border-primary bg-primary/5 ring-1 ring-primary" : "hover:bg-accent",
                  )}
                >
                  <div>
                    <div className="text-sm font-medium">{o.label}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{o.sample}</div>
                  </div>
                  {selected ? (
                    <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-3.5" />
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6 shadow-xs">
        <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
          <div>
            <CardTitle className="font-display text-base">{t.settings.otherTitle}</CardTitle>
            <CardDescription className="mt-1">{t.settings.otherBody}</CardDescription>
          </div>
          <Badge variant="secondary" className="shrink-0 font-normal">
            {t.common.notAvailable}
          </Badge>
        </CardHeader>
      </Card>
    </div>
  );
}
