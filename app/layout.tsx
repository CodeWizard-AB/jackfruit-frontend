import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/header/navbar";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "JackFruit Company",
	description: "A multipurpose software company",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${font.className} antialiased dark`}>
				<Navbar />
				<main className="space-y-24">{children}</main>
			</body>
		</html>
	);
}
