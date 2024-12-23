import { FC } from "react";
import { FormModal } from "./form-modal";

export type FormContainerProps = {
	table: "teacher" | "student" | "subject" | "group" | "payment" | "expense" | "salary" | "subjectcategory";
	type: "create" | "update" | "delete";
	data?: any;
	id?: number | string;
	className?: string;
};

export const FormContainer: FC<FormContainerProps> = ({ table, type, data, id, className = `` }) => {
	let relatedData = {};

	return (
		<div className={className}>
			<FormModal table={table} type={type} data={data} id={id} relatedData={relatedData} />
		</div>
	);
};
