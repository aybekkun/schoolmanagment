import { FinanceChartContainer, GenderChartContainer } from "@/components/shared/charts";
import InfoCard from "@/components/shared/info-card";

import { CircleUser, SquareUser, Users } from "lucide-react";

const AdminPage = () => {
	return (
		<div className="space-y-8">
			{/* top */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<InfoCard title="Студенты" value="124" icon={Users} description="общие количество учащихся" />
				<InfoCard title="Преподаватели" value="10" icon={SquareUser} description="общие количество преподавателей" />
				<InfoCard title="Работники" value="2" icon={CircleUser} description="персонал" />
				<InfoCard title="Группы" value="10" icon={CircleUser} description="активные группы" />
			</div>
			{/* center */}
			<div className="flex flex-col-reverse lg:flex-row gap-4">
				<GenderChartContainer className="w-full lg:w-1/3 lg:h-[400px]" />
				<FinanceChartContainer className="w-full lg:w-2/3 lg:h-[400px]" />
			</div>
      {/* bottom */}
		</div>
	);
};

export default AdminPage;
