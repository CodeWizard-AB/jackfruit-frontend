"use client";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navItems } from "@/lib/content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { Sheet, SheetClose } from "../ui/sheet";

export default function NavMenu(props: ComponentProps<typeof NavigationMenu>) {
	const pathname = usePathname();

	return (
		<NavigationMenu {...props}>
			<NavigationMenuList className="gap-8 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
				{navItems.map((item) => (
					<NavigationMenuItem key={item.name}>
						<NavigationMenuLink asChild>
							<Sheet>
								<SheetClose asChild>
									<Link
										href={item.link}
										className={`${
											pathname === item.link
												? "text-primary hover:text-primary focus:text-primary active:text-primary"
												: ""
										}`}
									>
										{item.name}
									</Link>
								</SheetClose>
							</Sheet>
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
