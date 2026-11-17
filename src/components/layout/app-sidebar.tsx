import { Link, useRouterState } from "@tanstack/react-router";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { useI18n } from "@/lib/i18n";
import { NAV_GROUPS, NAV_ITEMS } from "@/lib/navigation";

import { BrandMark } from "./brand-mark";

export function AppSidebar() {
  const { t, dir } = useI18n();
  const { setOpenMobile, isMobile } = useSidebar();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);

  return (
    <Sidebar collapsible="icon" side={dir === "rtl" ? "right" : "left"}>
      <SidebarHeader className="border-b border-sidebar-border px-3 py-4 group-data-[collapsible=icon]:px-2">
        <div className="flex items-center gap-3">
          <BrandMark />
          <div className="min-w-0 group-data-[collapsible=icon]:hidden">
            <div className="truncate font-display text-[15px] font-semibold tracking-wide text-sidebar-accent-foreground">
              {t.app.name}
            </div>
            <div className="truncate text-[11px] uppercase tracking-[0.14em] text-sidebar-foreground/60 rtl:tracking-normal rtl:normal-case">
              {t.app.company}
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="py-2">
        {NAV_GROUPS.map((group) => (
          <SidebarGroup key={group}>
            <SidebarGroupLabel className="text-[11px] uppercase tracking-[0.12em] text-sidebar-foreground/50 rtl:tracking-normal">
              {t.groups[group]}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV_ITEMS.filter((i) => i.group === group).map((item) => {
                  const active = isActive(item.path);
                  const label = t.modules[item.key].title;
                  return (
                    <SidebarMenuItem key={item.key}>
                      <SidebarMenuButton
                        asChild
                        isActive={active}
                        tooltip={label}
                        className="relative h-9 text-start text-sidebar-foreground/85 data-[active=true]:text-sidebar-accent-foreground data-[active=true]:before:absolute data-[active=true]:before:inset-y-1.5 data-[active=true]:before:start-0 data-[active=true]:before:w-[3px] data-[active=true]:before:rounded-full data-[active=true]:before:bg-sidebar-primary"
                      >
                        <Link
                          to={item.path}
                          onClick={() => {
                            if (isMobile) setOpenMobile(false);
                          }}
                        >
                          <item.icon />
                          <span>{label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3 group-data-[collapsible=icon]:hidden">
        <p className="text-[11px] leading-relaxed text-sidebar-foreground/55">{t.app.tagline}</p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
