import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { FinanceChart } from "./finance-chart";
import { cn } from "@/lib/utils";
const data = [
	{
		name: "Jan",
		income: 4000,
		expense: 2400,
	},
	{
		name: "Feb",
		income: 3000,
		expense: 1398,
	},
	{
		name: "Mar",
		income: 2000,
		expense: 9800,
	},
	{
		name: "Apr",
		income: 2780,
		expense: 3908,
	},
	{
		name: "May",
		income: 1890,
		expense: 4800,
	},
	{
		name: "Jun",
		income: 2390,
		expense: 3800,
	},
	{
		name: "Jul",
		income: 3490,
		expense: 4300,
	},
	{
		name: "Aug",
		income: 3490,
		expense: 4300,
	},
	{
		name: "Sep",
		income: 3490,
		expense: 4300,
	},
	{
		name: "Oct",
		income: 3490,
		expense: 4300,
	},
	{
		name: "Nov",
		income: 3490,
		expense: 4300,
	},
	{
		name: "Dec",
		income: 3490,
		expense: 4300,
	},
];

export const FinanceChartContainer = ({ className = "" }) => {
	return (
		<Card className={cn("flex flex-col", className)}>
			<CardHeader>
				<CardTitle>Расходы и доходы</CardTitle>
				<CardDescription>статистика за год</CardDescription>
			</CardHeader>
			<CardContent className="flex-1">
				<FinanceChart data={data} />
			</CardContent>
		</Card>
	);
};