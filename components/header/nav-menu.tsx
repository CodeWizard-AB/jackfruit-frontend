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

export default function NavMenu(props: ComponentProps<typeof NavigationMenu>) {
	const pathname = usePathname();

	return (
		<NavigationMenu {...props}>
			<NavigationMenuList className="gap-4 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
				{navItems.map((item) => (
					<NavigationMenuItem key={item.name}>
						<NavigationMenuLink asChild>
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
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
