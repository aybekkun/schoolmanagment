import { ServerPagination, Table, TableSearch, Title, UserAvatar } from "@/components/shared";
import { FormContainer } from "@/components/shared/forms/form-container";
import { FormModal } from "@/components/shared/forms/form-modal";
import { Button } from "@/components/ui";
import { Eye } from "lucide-react";
const data = [
	{
		id: 1,
		name: "John",
		surname: "Doe",
		phone: "+99891 380 97 23",
		address: "Nukus, 1 mkr",
		groups: [{ name: "Group 1" }, { name: "Group 2" }, { name: "Group 3" }],
	},
	{
		id: 2,
		name: "John",
		surname: "Doe",
		phone: "+99891 380 97 23",
		address: "Nukus, 1 mkr",
		groups: [{ name: "Group 1" }, { name: "Group 2" }, { name: "Group 3" }],
	},
	{
		id: 3,
		name: "John",
		surname: "Doe",
		phone: "+99891 380 97 23",
		address: "Nukus, 1 mkr",
		groups: [{ name: "Group 1" }, { name: "Group 2" }, { name: "Group 3" }],
	},
];
const StudentList = () => {
	const role = "admin";
	const columns = [
		{
			header: "Info",
			accessor: "info",
		},
		{
			header: "Группы",
			accessor: "groups",
			className: "hidden md:table-cell",
		},
		{
			header: "Адрес",
			accessor: "address",
			className: "hidden lg:table-cell",
		},
		...(role === "admin"
			? [
					{
						header: "Действия",
						accessor: "action",
					},
			  ]
			: []),
	];

	const renderRow = (item: any) => (
		<tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
			<td>
				<UserAvatar {...item} />
			</td>
			<td className="hidden md:table-cell"> {item.groups.map((group: any) => group.name).join(",")}</td>
			<td className="hidden md:table-cell">{item.address}</td>
			<td>
				<div className="flex items-center gap-2">
					<Button variant={"ghost"} size={"icon"}>
						<Eye />
					</Button>
					{role === "admin" && (
						<>
							<FormContainer table="student" type="update" id={item.id} />
							<FormContainer table="student" type="delete" id={item.id} />
						</>
					)}
				</div>
			</td>
		</tr>
	);

	return (
		<div>
			<div className="flex justify-between">
				<Title text="Все студенты" className="hidden md:block " size="sm" />
				<div className="flex gap-4">
					<TableSearch />
					<FormModal table="student" type="create" />
					{/* <SortPopup /> */}
				</div>
			</div>
			<Table columns={columns} renderRow={renderRow} data={data}/>
			<ServerPagination count={data.length} />
		</div>
	);
};

export default StudentList;
