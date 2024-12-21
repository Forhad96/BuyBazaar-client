import { Outlet, useLocation } from "react-router-dom";

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
import { DashboardLayoutSidebar } from "./components/DashboardLayoutSidebar";
import { Fragment, useEffect, useState } from "react";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <DashboardLayoutSidebar />
      <SidebarInset>
        <DashboardLayoutHeader />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;

const DashboardLayoutHeader = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([
    { name: "Dashboard", href: "/" },
  ]);

  useEffect(() => {
    const pathnames = location.pathname.split("/").filter(x => x);
    const newBreadcrumbs = pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
      return { name, href: routeTo };
    });
    setBreadcrumbs(newBreadcrumbs);
  }, [location]);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb, index) => (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={"/admin/dashboard"}>
                    {breadcrumb.name.charAt(0).toUpperCase() + breadcrumb.name.slice(1)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbPage>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator className="hidden md:block" />
                )}
                </BreadcrumbPage>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};
