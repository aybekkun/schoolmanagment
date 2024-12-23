import type { Metadata } from "next";

import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"], // Укажите нужные начертания
	variable: "--font-poppins", // Опционально для кастомной переменной
});

export const metadata: Metadata = {
	title: "Учебный центр Rayan",
	description: "made by Aybekkun",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				{children} <Toaster />
			</body>
		</html>
	);
}
