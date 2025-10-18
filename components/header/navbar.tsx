import { Button } from "@/components/ui/button";
import Logo from "./logo";
import NavigationSheet from "./navigation-sheet";
import NavMenu from "./nav-menu";

export default function Navbar() {
	return (
		<header>
			<nav className="h-24 bg-background fixed w-full top-0">
				<div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
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
