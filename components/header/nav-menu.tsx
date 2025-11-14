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
import { SheetClose } from "../ui/sheet";

interface NavMenuProps extends ComponentProps<typeof NavigationMenu> {
	onLinkClick?: () => void;
}

export default function NavMenu({ onLinkClick, ...props }: NavMenuProps) {
	const pathname = usePathname();

	return (
		<NavigationMenu {...props}>
			<NavigationMenuList className="gap-8 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
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
								onClick={onLinkClick}
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
