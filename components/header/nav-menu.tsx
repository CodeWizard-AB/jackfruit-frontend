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

interface NavMenuProps extends ComponentProps<typeof NavigationMenu> {
	isMobileMenu?: boolean;
}

export default function NavMenu({ isMobileMenu, ...props }: NavMenuProps) {
	const pathname = usePathname();

	return (
		<NavigationMenu {...props}>
			<NavigationMenuList className="gap-8 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
				{navItems.map((item) => (
					<NavigationMenuItem key={item.name}>
						<NavigationMenuLink asChild>
							{isMobileMenu ? (
								<SheetClose asChild>
									<LinkContent link={item.link} name={item.name} />
								</SheetClose>
							) : (
								<LinkContent link={item.link} name={item.name} />
							)}
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

function LinkContent({ link, name }: { link: string; name: string }) {
	const pathname = usePathname();

	return (
		<Link
			href={link}
			className={`${
				pathname === link
					? "text-primary hover:text-primary focus:text-primary active:text-primary"
					: ""
			}`}
		>
			{name}
		</Link>
	);
}
