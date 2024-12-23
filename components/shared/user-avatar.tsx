import { FC } from "react";
import { Avatar, AvatarFallback } from "../ui";
import { cn } from "@/lib/utils";

interface Props {
	className?: string;
	name?: string;
	surname?: string;
	phone?: string;
}

export const UserAvatar: FC<Props> = ({ name = "", surname = "", phone, className = `` }) => {
	return (
		<div className={cn("flex items-center", className)}>
			<Avatar className="h-9 w-9">
				<AvatarFallback>{name.charAt(0).toLocaleUpperCase() + surname.charAt(0).toLocaleUpperCase()}</AvatarFallback>
			</Avatar>
			<div className="ml-4 space-y-1">
				<p className="text-sm font-medium leading-none">
					{name} {surname}
				</p>
				<p className="text-sm text-muted-foreground">{phone}</p>
			</div>
		</div>
	);
};
