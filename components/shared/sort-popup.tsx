"use client";
import React, { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { useRouter } from "next/navigation";

interface Props {
	className?: string;
	values: {
		type: string;
		label: string;
	}[];
}

export const SortPopup: React.FC<Props> = ({ values, className }) => {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [sortType, setSortType] = useState({
		type: "",
		label: "",
	});

	const onClickSort = () => {
        
    };
	return (
		<Popover onOpenChange={setOpen} open={open}>
			<PopoverTrigger asChild>
				<Button onClick={() => setOpen(!open)} className={className}>
					<ArrowUpDown className="h-4 w-4" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[240px]">
				<ul>
					{values.map((item) => (
						<li key={item.type} onClick={() => onClickSort()} className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">{item.label}</li>
					))}
					<li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">По умолчанию</li>
					<li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">А-Я по алфавиту</li>
					<li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">По возростанию</li>
					<li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">По убыванию</li>
				</ul>
			</PopoverContent>
		</Popover>
	);
};
