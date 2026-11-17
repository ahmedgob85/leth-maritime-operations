import { CircleDashed } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ModuleKey } from "@/lib/i18n-dictionary";
import { useI18n } from "@/lib/i18n";
import { navItem } from "@/lib/navigation";

import { PageHeader } from "./page-header";

export function ModulePage({ moduleKey }: { moduleKey: ModuleKey }) {
  const { t } = useI18n();
  const copy = t.modules[moduleKey];
  const item = navItem(moduleKey);

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        title={copy.title}
        description={copy.description}
        icon={item.icon}
        actions={
          <Badge variant="secondary" className="font-normal">
            {t.common.notAvailable}
          </Badge>
        }
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardContent className="flex flex-col items-center justify-center gap-4 py-16 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <CircleDashed className="size-7" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold">{t.modulePage.statusTitle}</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                {t.modulePage.statusBody}
              </p>
            </div>
          </CardContent>
        </Card>

        {copy.scope.length > 0 && (
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground rtl:tracking-normal">
                {t.common.plannedScope}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {copy.scope.map((line) => (
                  <li key={line} className="flex gap-3 text-sm">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
