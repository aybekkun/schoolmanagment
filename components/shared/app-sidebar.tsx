"use client";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui";
import { GraduationCap } from "lucide-react";

import Link from "next/link";
import { AppSidebarMenuItems } from "./app-sidebar-menu-items";

export const AppSidebar = () => {
	return (
		<Sidebar collapsible="icon">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
							asChild
							tooltip={"Главная"}
						>
							<Link href="/admin">
								<GraduationCap />
								<span className="peer-[data-state=collapsed]:hidden">Rayan Academy</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<AppSidebarMenuItems />
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
};
