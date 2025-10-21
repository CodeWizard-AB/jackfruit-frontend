import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";

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
				<main className="space-y-10 lg:space-y-28">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
