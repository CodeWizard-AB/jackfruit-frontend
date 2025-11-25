import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "JACKFRUIT |  Illuminating Ideas with Elegance and Brilliance",
	description:
		"JACKFRUIT brings visionary concepts to life, blending sophistication, artistry, and ingenuity to create digital realms that inspire awe.",
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
				<main className="space-y-10 lg:*:pb-28">{children}</main>
				<Footer />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
