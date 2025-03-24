"use client";
import { SectionCards } from "@/components/card/section-cards";
import { ChartAreaInteractive } from "@/components/chart/area-chat-interactive";
import { FormCustom } from "@/components/form/form-custom";
import { InputCustom } from "@/components/input/input-custom";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import Switcher from "@/components/Switcher";
import { ComplaintTable } from "@/components/table/complaint-table";
import { ModeToggle } from "@/components/ToggleThemes";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Search, X } from "lucide-react";
import { useState } from "react";
import CardInformation from "@/components/card/card-information";
import ButtonComponent from "@/components/button/button-component";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<string>("dashboard");

  const handleDashboard = () => {
    setActiveMenu("dashboard");
  };
  const handleListCom = () => {
    setActiveMenu("complaint list");
  };
  const handleCreateCom = () => {
    setActiveMenu("create complaint");
  };
  const handleArchiveCom = () => {
    setActiveMenu("archive complaint");
  };
  const handleReporterData = () => {
    setActiveMenu("reporter data");
  };
  const handleStaffManagement = () => {
    setActiveMenu("staff management");
  };
  const handleChat = () => {
    setActiveMenu("live chat");
  };
  const handleNotifications = () => {
    setActiveMenu("notification");
  };
  const handleStatistics = () => {
    setActiveMenu("statistics");
  };
  const handleInformation = () => {
    setActiveMenu("information");
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return (
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <SectionCards />
                <div className="px-4 lg:px-6">
                  <ChartAreaInteractive />
                </div>
              </div>
            </div>
          </div>
        );
      case "complaint list":
        return (
          <div className="flex flex-1 flex-col gap-4 p-4">
            <ComplaintTable />
          </div>
        );
      case "create complaint":
        return (
          <div className="flex flex-1 flex-col gap-4 p-4">
            <FormCustom />
          </div>
        );
      case "archive complaint":
        return (
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-purple-300/50" />
              <div className="aspect-video rounded-xl bg-purple-300/50" />
              <div className="aspect-video rounded-xl bg-purple-300/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-purple-300/50 md:min-h-min" />
          </div>
        );
      case "reporter data":
        return (
          <div className="flex flex-1 flex-col gap-4 p-4">
            <ComplaintTable />
          </div>
        );
      case "staff management":
        return (
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-orange-300/50" />
              <div className="aspect-video rounded-xl bg-orange-300/50" />
              <div className="aspect-video rounded-xl bg-orange-300/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-orange-300/50 md:min-h-min" />
          </div>
        );
      case "live chat":
        return (
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-cyan-300/50" />
              <div className="aspect-video rounded-xl bg-cyan-300/50" />
              <div className="aspect-video rounded-xl bg-cyan-300/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-cyan-300/50 md:min-h-min" />
          </div>
        );
      case "notification":
        return (
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-fuchsia-300/50" />
              <div className="aspect-video rounded-xl bg-fuchsia-300/50" />
              <div className="aspect-video rounded-xl bg-fuchsia-300/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-fuchsia-300/50 md:min-h-min" />
          </div>
        );
      case "statistics":
        return (
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-pink-300/50" />
              <div className="aspect-video rounded-xl bg-pink-300/50" />
              <div className="aspect-video rounded-xl bg-pink-300/50" />
            </div>
            <div className="flex-1 rounded-xl bg-pink-300/50 md:min-h-min" />
          </div>
        );
      case "information":
        return (
          <div className="flex flex-col gap-4 p-4 ">
            <ButtonComponent className={"self-end"}></ButtonComponent>
            <CardInformation />
          </div>
        );

      default:
        return (
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <SectionCards />
                <div className="px-4 lg:px-6">
                  <ChartAreaInteractive />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar
        handleDashboard={handleDashboard}
        handleListCom={handleListCom}
        handleCreateCom={handleCreateCom}
        handleArchiveCom={handleArchiveCom}
        handleReporterData={handleReporterData}
        handleStaffManagement={handleStaffManagement}
        handleChat={handleChat}
        handleNotification={handleNotifications}
        handleStatistics={handleStatistics}
        handleInformation={handleInformation}
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 justify-between">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="ml-1 cursor-pointer" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbPage className="capitalize">
                    {activeMenu}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex relative">
            <InputCustom
              classname=""
              Icon={Search}
              ClearIcon={X}
              isSearch={true}
            />
          </div>
          <div className="flex gap-3 pr-10">
            <Switcher />
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {renderContent()}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
