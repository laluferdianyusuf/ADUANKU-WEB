"use client";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import Switcher from "@/components/Switcher";
import { ModeToggle } from "@/components/ToggleThemes";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useState } from "react";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<string>("dashboard");

  const handleDashboard = () => {
    setActiveMenu("dashboard");
  };
  const handleListCom = () => {
    setActiveMenu("list_complaint");
  };
  const handleCreateCom = () => {
    setActiveMenu("create_complaint");
  };
  const handleArchiveCom = () => {
    setActiveMenu("archive_complaint");
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return (
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50"></div>
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div>
        );
      case "list_complaint":
        return (
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 ">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-red-200/50" />
              <div className="aspect-video rounded-xl bg-red-200/50" />
              <div className="aspect-video rounded-xl bg-red-200/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-red-200/50 md:min-h-min" />
          </div>
        );
      case "create_complaint":
        return (
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 ">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-blue-300/50" />
              <div className="aspect-video rounded-xl bg-blue-300/50" />
              <div className="aspect-video rounded-xl bg-blue-300/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-blue-300/50 md:min-h-min" />
          </div>
        );
      case "archive_complaint":
        return (
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 ">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-green-300/50" />
              <div className="aspect-video rounded-xl bg-green-300/50" />
              <div className="aspect-video rounded-xl bg-green-300/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-green-300/50 md:min-h-min" />
          </div>
        );

      default:
        return (
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
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
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 justify-between">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-3 pr-5">
            <ModeToggle />
            <Switcher />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {renderContent()}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
