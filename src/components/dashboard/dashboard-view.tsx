import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowUpRight,
  CalendarClock,
  FileWarning,
  Gauge,
  Info,
  MapPinned,
  Route as RouteIcon,
  Truck,
  UserRound,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { EmptyState } from "@/components/layout/empty-state";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { NAV_ITEMS } from "@/lib/navigation";

type KpiKey = keyof ReturnType<typeof useI18n>["t"]["dashboard"]["kpis"];

const KPIS: { key: KpiKey; icon: LucideIcon }[] = [
  { key: "activeMovements", icon: Users },
  { key: "tripsToday", icon: RouteIcon },
  { key: "driversOnDuty", icon: UserRound },
  { key: "vehiclesAvailable", icon: Truck },
  { key: "openMaintenance", icon: Wrench },
  { key: "expiringDocuments", icon: FileWarning },
];

export function DashboardView() {
  const { t } = useI18n();
  const d = t.dashboard;

  return (
    <div className="mx-auto max-w-7xl">
      <PageHeader title={d.title} description={d.subtitle} icon={Gauge} />

      <div className="mb-6 flex items-start gap-3 rounded-lg border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-foreground">
        <Info className="mt-0.5 size-4 shrink-0 text-signal-strong" />
        <p>{d.setupNotice}</p>
      </div>

      <section className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {KPIS.map(({ key, icon: Icon }) => (
          <Card key={key} className="gap-0 py-0 shadow-xs">
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-muted-foreground">{d.kpis[key]}</span>
                <Icon className="size-4 text-muted-foreground/70" />
              </div>
              <div
                className="mt-3 font-display text-3xl font-semibold tabular-nums text-muted-foreground/50"
                aria-label={t.common.noData}
              >
                —
              </div>
              <div className="mt-1 text-[11px] text-muted-foreground">{t.common.awaitingData}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-5">
        <Panel
          className="lg:col-span-3"
          title={d.panels.todayMovements.title}
          description={d.panels.todayMovements.description}
          to="/movements"
        >
          <EmptyState icon={CalendarClock} message={d.panels.todayMovements.empty} className="h-full min-h-64" />
        </Panel>
        <Panel
          className="lg:col-span-2"
          title={d.panels.fleetMap.title}
          description={d.panels.fleetMap.description}
          to="/gps-tracking"
        >
          <EmptyState
            icon={MapPinned}
            message={d.panels.fleetMap.empty}
            className="nautical-grid h-full min-h-64"
          />
        </Panel>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <Panel title={d.panels.alerts.title} description={d.panels.alerts.description} to="/documents">
          <EmptyState icon={AlertTriangle} message={d.panels.alerts.empty} />
        </Panel>
        <Panel
          title={d.panels.maintenance.title}
          description={d.panels.maintenance.description}
          to="/maintenance"
        >
          <EmptyState icon={Wrench} message={d.panels.maintenance.empty} />
        </Panel>
      </section>

      <section className="mt-6">
        <Card className="shadow-xs">
          <CardHeader>
            <CardTitle className="font-display text-base">{d.modules.title}</CardTitle>
            <CardDescription>{d.modules.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {NAV_ITEMS.filter((i) => i.key !== "dashboard").map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-3 rounded-md border bg-card px-3 py-2.5 transition-colors hover:border-primary/30 hover:bg-accent"
                  >
                    <item.icon className="size-4 shrink-0 text-primary" />
                    <span className="min-w-0 flex-1 truncate text-sm font-medium">
                      {t.modules[item.key].title}
                    </span>
                    <Badge variant="secondary" className="shrink-0 text-[10px] font-normal">
                      {t.common.notConfigured}
                    </Badge>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function Panel({
  title,
  description,
  to,
  className,
  children,
}: {
  title: string;
  description: string;
  to: "/movements" | "/gps-tracking" | "/documents" | "/maintenance";
  className?: string;
  children: React.ReactNode;
}) {
  const { t } = useI18n();
  return (
    <Card className={`flex flex-col shadow-xs ${className ?? ""}`}>
      <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
        <div>
          <CardTitle className="font-display text-base">{title}</CardTitle>
          <CardDescription className="mt-1">{description}</CardDescription>
        </div>
        <Link
          to={to}
          className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-primary hover:underline"
        >
          {t.common.open}
          <ArrowUpRight className="size-3.5 rtl:-scale-x-100" />
        </Link>
      </CardHeader>
      <CardContent className="flex-1">{children}</CardContent>
    </Card>
  );
}
