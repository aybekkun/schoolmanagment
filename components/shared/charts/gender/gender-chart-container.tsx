import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { GenderChart } from "./gender-chart";
import { cn } from "@/lib/utils";

export const GenderChartContainer = ({ className = "" }) => {
	return (
		<Card className={cn("flex flex-col", className)}>
			<CardHeader>
				<CardTitle>Статистика</CardTitle>
				<CardDescription>Количество девочек и мальчиков</CardDescription>
			</CardHeader>
			<CardContent className="flex-1">
				<GenderChart boys={20} girls={10} />
			</CardContent>
		</Card>
	);
};
