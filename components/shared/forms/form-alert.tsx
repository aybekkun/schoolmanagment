"use client";
import { Dispatch, FC, SetStateAction } from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui";
interface Props {
	open?: boolean;
	onOpenChange?: Dispatch<SetStateAction<boolean>>;
	onSubmit?: () => void;
	id: string | number;
}

export const FormAlert: FC<Props> = ({ id, open = false, onOpenChange, onSubmit }) => {
	return (
		<AlertDialog open={open} onOpenChange={onOpenChange}>
			<AlertDialogContent asChild>
				<form action={onSubmit}>
					<AlertDialogHeader>
						<input type="text | number" name="id" defaultValue={id} hidden />
						<AlertDialogTitle>Вы абсолютно уверены?</AlertDialogTitle>
						<AlertDialogDescription>
							Это действие невозможно отменить. Это приведет к безвозвратному удалению ваших данных из серверов.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Отменить</AlertDialogCancel>
						<AlertDialogAction type="submit">Да, уверен</AlertDialogAction>
					</AlertDialogFooter>
				</form>
			</AlertDialogContent>
		</AlertDialog>
	);
};
