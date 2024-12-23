"use client";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui";

import { FC } from "react";
import { Legend, Pie, PieChart } from "recharts";

interface Props {
	boys: number;
	girls: number;
}
const chartConfig = {
	count: {
		label: "count",
	},
	boys: {
		label: "Boys",
		color: "hsl(var(--chart-1))",
	},
	girls: {
		label: "Girls",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;
export const GenderChart: FC<Props> = ({ boys, girls }) => {
	const data = [
		{
			name: "Мальчики",
			count: boys,
			fill: "var(--color-boys)",
		},
		{
			name: "Девушки",
			count: girls,
			fill: "var(--color-girls)",
		},
	];
	return (
		<ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
			<PieChart>
				<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
				<Pie
					data={data}
					dataKey="count"
					nameKey="name"
					fill="fill"
					legendType="circle"
					label={({ _, percent }) => `${(percent * 100).toFixed(0)}%`}
				/>
				<Legend />
			</PieChart>
		</ChartContainer>
	);
};
