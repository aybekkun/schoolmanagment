import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, LucideIcon } from "lucide-react";
import { FC } from "react";

interface Props {
	className?: string;
	title?: string;
	value?: string | number;
	description?: string;
	icon?: LucideIcon;
}

const InfoCard: FC<Props> = ({ title = "", description = "", value = "", icon: Icon = DollarSign, className = `` }) => {
	return (
		<Card className={className}>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium">{title}</CardTitle>
				<Icon />
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">{value}</div>
				<p className="text-xs text-muted-foreground">{description}</p>
			</CardContent>
		</Card>
	);
};

export default InfoCard;
