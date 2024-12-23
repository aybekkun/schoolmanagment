"use client";
import { FC, useEffect, useState } from "react";
import { FormContainerProps } from "./form-container";

import { FormButton } from "./form-button";
import { FormSheet } from "./form-sheet";
import { FormAlert } from "./form-alert";
import { deleteStudent } from "@/lib/actions";
import { useFormState } from "react-dom";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const mapDeleteAction = {
	student: deleteStudent,
} as any;
type Props = FormContainerProps & { relatedData?: any };
const initialState = { success: false, error: false };
export const FormModal: FC<Props> = ({ table, type, data, id, relatedData }) => {
	const [open, setOpen] = useState(false);
	const [state, formAction] = useFormState(mapDeleteAction[table], initialState);
	const router = useRouter();
	
	useEffect(() => {
		if (state.success) {
			toast({
				title: "Success",
				description: "Data deleted successfully",
				duration: 3000,
			});
			setOpen(false);
			router.refresh();
		}
	}, [state, router]);

	return (
		<>
			<FormButton type={type} onClick={setOpen} />
			{open && type !== "delete" ? (
				<FormSheet open={open} onOpenChange={setOpen} type={type}>
					<>aasdad</>
				</FormSheet>
			) : (
				<FormAlert id={1} onSubmit={formAction} onOpenChange={setOpen} open={open} />
			)}
		</>
	);
};
