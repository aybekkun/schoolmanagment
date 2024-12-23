"use client";
import { Banknote, BookA, BookText, Group, HandCoins, ReceiptText, SquareUser, Users } from "lucide-react";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui";
import Link from "next/link";

const menuItems = [
	{
		title: "Список",
		items: [
			{
				href: "/list/students",
				label: "Студенты",
				icon: Users,
				visible: ["admin", "teacher", "student"],
			},
			{
				href: "/list/teachers",
				label: "Преподаватели",
				icon: SquareUser,
				visible: ["admin", "teacher", "student"],
			},
			{
				href: "/list/groups",
				label: "Группы",
				icon: Group,
				visible: ["admin", "teacher", "student"],
			},
			{
				href: "/list/subjects",
				label: "Предметы",
				icon: BookA,
				visible: ["admin"],
			},
			{
				href: "/list/subjects-category",
				label: "Категория предметов",
				icon: BookText,
				visible: ["admin"],
			},
		],
	},
	{
		title: "Финансы",
		items: [
			{
				href: "/list/payments",
				label: "Взносы",
				icon: HandCoins ,
				visible: ["admin"],
			},
			{
				href: "/list/expenses",
				label: "Расходы",
				icon: ReceiptText ,
				visible: ["admin"],
			},
			{
				href: "/list/salaries",
				label: "Зарплата",
				icon: Banknote ,
				visible: ["admin"],
			},
		],
	},
];

export const AppSidebarMenuItems = () => {
	const role = "admin";
	return (
		<>
			{menuItems.map((i) => (
				<SidebarGroup key={i.title}>
					<SidebarGroupLabel>{i.title}</SidebarGroupLabel>
					<SidebarMenu>
						{i.items.map(({ href, label, icon: Icon, visible }) => {
							if (visible.includes(role)) {
								return (
									<SidebarMenuItem key={href}>
										<SidebarMenuButton asChild tooltip={label}>
											<Link href={href}>
												<Icon /> <span>{label}</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								);
							}
						})}
					</SidebarMenu>
				</SidebarGroup>
			))}
		</>
	);
};

{
	/* <SidebarGroup>
<SidebarGroupLabel>Главная</SidebarGroupLabel>
<SidebarMenu>
	<SidebarMenuItem>
		<SidebarMenuButton asChild tooltip={"студенты"}>
			<Link href="/admin">
				<Users /> <span>Students</span>
			</Link>
		</SidebarMenuButton>
	</SidebarMenuItem>
</SidebarMenu>
*/
}
