"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui";
import { cn } from "@/lib/utils";

export const TableSearch = ({ className = "" }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const value = (e.currentTarget[0] as HTMLInputElement).value;
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", "1");
		params.set("search", value);
		router.push(`${pathname}?${params}`);
	};

	return (
		<form onSubmit={handleSubmit} className={cn("relative", className)}>
			<Search className="absolute w-4 h-4 text-zinc-400 left-2 top-1/2 -translate-y-1/2" />
			<Input type="text" placeholder="Search..." className="w-[200px] p-2 pl-10 bg-transparent outline-none" />
		</form>
	);
};
