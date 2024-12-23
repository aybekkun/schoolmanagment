"use client";
import { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui";

type FormSheetProps = {
	type: "create" | "update" | "delete";
	open?: boolean;
	onOpenChange?: Dispatch<SetStateAction<boolean>>;
};
export const FormSheet: FC<PropsWithChildren<FormSheetProps>> = ({
	open = false,
	type,
	onOpenChange,
	children,
}) => {
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent className="overflow-y-auto">
				<SheetHeader>
					<SheetTitle>{type === "create" ? "Добавить" : "Редактировать"}</SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>
				{children}
			</SheetContent>
		</Sheet>
	);
};
