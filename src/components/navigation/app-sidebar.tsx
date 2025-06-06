"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Building2,
  LayoutList,
  FilePlus,
  BookUser,
  UserRoundCog,
  MessageCircleDashed,
  Bell,
  ChartArea,
  Archive,
  Book,
} from "lucide-react";

import { NavMain } from "@/components/navigation/nav-main";
import { NavUser } from "@/components/navigation/nav-user";
import { TeamSwitcher } from "@/components/navigation/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useTranslations } from "next-intl";
import { NavComplaint } from "./nav-complaint";
import { NavUserOfficer } from "./nav-user-officer";
import { NavCommunication } from "./nav-communication";
import { NavAnalytics } from "./nav-analytics";
import { NavInformation } from "./nav-information";
import { NavInterest } from "./nav-interest";

interface AppSidebarProps {
  handleDashboard: () => void;
  handleListCom: () => void;
  handleCreateCom: () => void;
  handleArchiveCom: () => void;
  handleReporterData: () => void;
  handleStaffManagement: () => void;
  handleChat: () => void;
  handleNotification: () => void;
  handleStatistics: () => void;
  handleInformation: () => void;
  handleInterest: () => void;
}

export function AppSidebar({
  handleDashboard,
  handleListCom,
  handleCreateCom,
  handleArchiveCom,
  handleStatistics,
  handleNotification,
  handleChat,
  handleStaffManagement,
  handleReporterData,
  handleInformation,
  handleInterest,
  ...props
}: AppSidebarProps & React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations("SideBar");
  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "TPDOTCOM",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
    navMain: [
      {
        title: t("nav-main-title-1"),
        url: "#",
        icon: Building2,
        isActive: false,
        onClick: handleDashboard,
      },
    ],
    NavComplaint: [
      {
        title: t("nav-complaint-title-1"),
        url: "#",
        icon: LayoutList,
        isActive: false,
        onClick: handleListCom,
      },
      {
        title: t("nav-complaint-title-2"),
        url: "#",
        icon: FilePlus,
        isActive: false,
        onClick: handleCreateCom,
      },
      {
        title: t("nav-complaint-title-3"),
        url: "#",
        icon: Archive,
        isActive: false,
        onClick: handleArchiveCom,
      },
    ],
    NavUserOfficer: [
      {
        title: t("nav-user-officer-title-1"),
        url: "#",
        icon: BookUser,
        isActive: false,
        onClick: handleReporterData,
      },
      {
        title: t("nav-user-officer-title-2"),
        url: "#",
        icon: UserRoundCog,
        isActive: false,
        onClick: handleStaffManagement,
      },
    ],
    NavCommunication: [
      {
        title: t("nav-communication-title-1"),
        url: "#",
        icon: MessageCircleDashed,
        isActive: false,
        onClick: handleChat,
      },
      {
        title: t("nav-communication-title-2"),
        url: "#",
        icon: Bell,
        isActive: false,
        onClick: handleNotification,
      },
    ],
    NavAnalytics: [
      {
        title: t("nav-analytics-title-1"),
        url: "#",
        icon: ChartArea,
        isActive: false,
        onClick: handleStatistics,
      },
    ],
    NavInformation: [
      {
        title: t("nav-information-title-1"),
        url: "#",
        icon: Book,
        isActive: false,
        onClick: handleInformation,
      },
    ],
    NavInterest: [
      {
        title: t("nav-interest-title-1"),
        url: "#",
        icon: Book,
        isActive: false,
        onClick: handleInterest,
      },
    ],
  };
  return (
    <Sidebar collapsible="icon" {...props} className="">
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavComplaint items={data.NavComplaint} />
        <NavUserOfficer items={data.NavUserOfficer} />
        <NavCommunication items={data.NavCommunication} />
        <NavAnalytics items={data.NavAnalytics} />
        <NavInformation items={data.NavInformation} />
        <NavInterest items={data.NavInterest} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
