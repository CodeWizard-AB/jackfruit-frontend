"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./logo";
import NavMenu from "./nav-menu";
import { useState } from "react";

export default function NavigationSheet() {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent className="px-6 py-3">
				<Logo />
				<NavMenu
					orientation="vertical"
					className="[&>div]:h-full"
					onLinkClick={() => setOpen(false)}
				/>
			</SheetContent>
		</Sheet>
	);
}
