"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  FolderKanban,
  LayoutDashboard,
  CalendarDays,
  CheckSquare,
  Users,
  Building2,
  BarChart3,
  Clock3,
  FileText,
  CreditCard,
  Settings,
  LifeBuoy,
  Star,
  Archive,
  Sparkles,
  Plus,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

type NavItem = {
  label: string;
  href: string;
  icon: any;
  badge?: string;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    title: "Workspace",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        label: "Projects",
        href: "/projects",
        icon: FolderKanban,
      },
      {
        label: "Tasks",
        href: "/tasks",
        icon: CheckSquare,
      },
      {
        label: "Calendar",
        href: "/calendar",
        icon: CalendarDays,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        label: "Teams",
        href: "/teams",
        icon: Users,
      },
      {
        label: "Companies",
        href: "/companies",
        icon: Building2,
      },
      {
        label: "Reports",
        href: "/reports",
        icon: BarChart3,
      },
      {
        label: "Activity",
        href: "/activity",
        icon: Clock3,
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        label: "Documents",
        href: "/documents",
        icon: FileText,
      },
      {
        label: "Billing",
        href: "/billing",
        icon: CreditCard,
      },
      {
        label: "Archive",
        href: "/archive",
        icon: Archive,
      },
      {
        label: "Support",
        href: "/support",
        icon: LifeBuoy,
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const { user } = useAuth();

  const [collapsed, setCollapsed] = useState(false);

  const [openGroups, setOpenGroups] = useState({
    Workspace: true,
    Management: true,
    Resources: true,
  });

  const initials = useMemo(() => {
    if (!user?.name) return "FD";

    return user.name
      .split(" ")
      .map((x) => x[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }, [user]);

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [title]: !prev[title as keyof typeof prev],
    }));
  };

  return (
    <aside
      className={`hidden lg:flex h-screen sticky top-0 flex-col border-r border-white/20 bg-white/70 backdrop-blur-3xl transition-all duration-300 dark:bg-slate-950/70 dark:border-white/10 ${
        collapsed ? "w-24" : "w-80"
      }`}
    >
      <div className="flex items-center justify-between border-b border-white/10 p-6">
        <div
          className={`flex items-center gap-3 ${
            collapsed ? "justify-center w-full" : ""
          }`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg">
            <Sparkles className="h-6 w-6" />
          </div>

          {!collapsed && (
            <div>
              <h2 className="font-bold text-slate-900 dark:text-white">
                FlowDesk
              </h2>

              <p className="text-xs text-slate-500">
                Enterprise
              </p>
            </div>
          )}
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-white/5"
        >
          {collapsed ? (
            <ChevronsRight className="h-5 w-5" />
          ) : (
            <ChevronsLeft className="h-5 w-5" />
          )}
        </button>
      </div>
            <div className="flex-1 overflow-y-auto px-4 py-6">
        {!collapsed && (
          <button className="mb-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-90">
            <Plus className="h-5 w-5" />
            New Project
          </button>
        )}

        <nav className="space-y-6">
          {navGroups.map((group) => (
            <div key={group.title}>
              {!collapsed && (
                <button
                  onClick={() => toggleGroup(group.title)}
                  className="mb-3 flex w-full items-center justify-between px-3 text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  {group.title}

                  {openGroups[
                    group.title as keyof typeof openGroups
                  ] ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
              )}

              {(collapsed ||
                openGroups[
                  group.title as keyof typeof openGroups
                ]) && (
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const active =
                      pathname === item.href ||
                      pathname.startsWith(item.href + "/");

                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                          active
                            ? "bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900"
                            : "text-slate-600 hover:bg-white hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                        } ${
                          collapsed
                            ? "justify-center px-3"
                            : ""
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${
                            active
                              ? ""
                              : "text-slate-400 group-hover:text-violet-500"
                          }`}
                        />

                        {!collapsed && (
                          <>
                            <span className="flex-1">
                              {item.label}
                            </span>

                            {item.badge && (
                              <span className="rounded-full bg-violet-100 px-2 py-0.5 text-xs text-violet-700 dark:bg-violet-500/10 dark:text-violet-400">
                                {item.badge}
                              </span>
                            )}
                          </>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        {!collapsed && (
          <div className="mt-8 rounded-3xl border border-white/20 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 p-5 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white">
                <Star className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Upgrade Plan
                </p>

                <p className="text-xs text-slate-500">
                  Unlock enterprise features
                </p>
              </div>
            </div>

            <button className="mt-4 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-slate-900">
              Upgrade Now
            </button>
          </div>
        )}
      </div>

      <div className="border-t border-white/20 p-4 dark:border-white/10">
        <div
          className={`flex items-center gap-3 rounded-2xl bg-white/50 p-3 backdrop-blur-xl dark:bg-white/5 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 font-bold text-white">
            {initials}
          </div>

          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                {user?.name || "User"}
              </p>

              <p className="truncate text-xs text-slate-500">
                {user?.email || "user@example.com"}
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
