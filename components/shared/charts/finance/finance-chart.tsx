"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { FC } from "react";

const chartConfig = {
	income: {
		label: "income",
		color: "hsl(var(--chart-1))",
	},
	expense: {
		label: "expense",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;
interface Props {
	data: {
		name: string;
		income: number;
		expense: number;
	}[];
}

export const FinanceChart: FC<Props> = ({ data }) => {
	return (
		<ChartContainer config={chartConfig} className="max-h-[250px] w-full">
			<LineChart
				accessibilityLayer
				data={data}
				margin={{
					left: 12,
					right: 12,
				}}
			>
				<CartesianGrid vertical={false} />

				<XAxis
					dataKey="name"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
					tickFormatter={(value) => value.slice(0, 3)}
				/>
				<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
				<Line dataKey="income" type="monotone" stroke="var(--color-income)" strokeWidth={2} dot={false} />
				<Line dataKey="expense" type="monotone" stroke="var(--color-expense)" strokeWidth={2} dot={false} />
			</LineChart>
		</ChartContainer>
	);
};
