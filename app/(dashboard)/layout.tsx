import { AppSidebar, Container } from "@/components/shared";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui";

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4 ">
						<SidebarTrigger className="-ml-1" />
					</div>
				</header>
				<main>
					<Container className="mt-5">{children}</Container>
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
