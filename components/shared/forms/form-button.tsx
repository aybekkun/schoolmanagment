"use client";
import { Button } from "@/components/ui";
import { Edit2, Plus, Trash2 } from "lucide-react";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
	type: "create" | "update" | "delete";
	onClick?: Dispatch<SetStateAction<boolean>> | (() => void);
}

export const FormButton: FC<Props> = ({ type = "create", onClick = () => undefined }) => {
	switch (type) {
		case "create":
			return (
				<Button onClick={() => onClick(true)} size={"icon"}>
					<Plus width={20} height={20} />
				</Button>
			);
		case "update":
			return (
				<Button variant={"secondary"} onClick={() => onClick(true)} size={"icon"}>
					<Edit2 width={16} height={16} />
				</Button>
			);
		case "delete":
			return (
				<Button variant={"destructive"} onClick={() => onClick(true)} size={"icon"}>
					<Trash2 width={16} height={16} />
				</Button>
			);
	}
};
