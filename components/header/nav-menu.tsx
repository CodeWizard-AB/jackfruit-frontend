import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navItems } from "@/lib/content";
import Link from "next/link";
import { ComponentProps } from "react";

export default function NavMenu(props: ComponentProps<typeof NavigationMenu>) {
	return (
		<NavigationMenu {...props}>
			<NavigationMenuList className="gap-4 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
				{navItems.map((item) => (
					<NavigationMenuItem key={item.name}>
						<NavigationMenuLink asChild>
							<Link href={item.link}>{item.name}</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
