"use client";

import { Button } from "@/components/ui/button";
import Logo from "./logo";
import NavigationSheet from "./navigation-sheet";
import NavMenu from "./nav-menu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-150",
				isScrolled
					? "bg-background/80 backdrop-blur-3xl border-b"
					: "bg-transparent"
			)}
		>
			<nav className="h-24 max-w-(--breakpoint-xl) mx-auto">
				<div className="h-full flex items-center justify-between mx-auto px-4">
					<Logo />
					{/* Desktop Menu */}
					<NavMenu className="hidden md:block" />
					<div className="flex items-center gap-3">
						<Button>BOOK A CALL</Button>
						{/* Mobile Menu */}
						<div className="md:hidden">
							<NavigationSheet />
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
