import {
  BarChart3,
  FileBadge,
  Gauge,
  MapPinned,
  Route as RouteIcon,
  Settings,
  ShieldCheck,
  Truck,
  UserRound,
  Users,
  Wallet,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { ModuleKey } from "./i18n-dictionary";

export type NavGroupKey = "operations" | "fleet" | "administration";

export type NavItem = {
  key: ModuleKey;
  path:
    | "/"
    | "/movements"
    | "/trips"
    | "/drivers"
    | "/vehicles"
    | "/gps-tracking"
    | "/maintenance"
    | "/documents"
    | "/expenses"
    | "/reports"
    | "/users"
    | "/settings";
  icon: LucideIcon;
  group: NavGroupKey;
};

export const NAV_ITEMS: NavItem[] = [
  { key: "dashboard", path: "/", icon: Gauge, group: "operations" },
  { key: "movements", path: "/movements", icon: Users, group: "operations" },
  { key: "trips", path: "/trips", icon: RouteIcon, group: "operations" },
  { key: "gps", path: "/gps-tracking", icon: MapPinned, group: "operations" },
  { key: "drivers", path: "/drivers", icon: UserRound, group: "fleet" },
  { key: "vehicles", path: "/vehicles", icon: Truck, group: "fleet" },
  { key: "maintenance", path: "/maintenance", icon: Wrench, group: "fleet" },
  { key: "documents", path: "/documents", icon: FileBadge, group: "fleet" },
  { key: "expenses", path: "/expenses", icon: Wallet, group: "administration" },
  { key: "reports", path: "/reports", icon: BarChart3, group: "administration" },
  { key: "users", path: "/users", icon: ShieldCheck, group: "administration" },
  { key: "settings", path: "/settings", icon: Settings, group: "administration" },
];

export const NAV_GROUPS: NavGroupKey[] = ["operations", "fleet", "administration"];

export function navItem(key: ModuleKey): NavItem {
  const item = NAV_ITEMS.find((i) => i.key === key);
  if (!item) throw new Error(`Unknown module ${key}`);
  return item;
}

export function pageHead(title: string, description: string) {
  const fullTitle = `${title} — LETH Operations`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  };
}
