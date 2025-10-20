import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen pt-20 flex items-center justify-center">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="max-w-2xl mx-auto text-center space-y-8">
					<div className="space-y-4">
						<h1 className="text-9xl font-black text-gold">404</h1>
						<h2 className="text-4xl md:text-5xl font-bold">Page Not Found</h2>
						<p className="text-xl text-muted-foreground">
							The page you&apos;re looking for doesn't exist or has been moved.
						</p>
					</div>

					<Link href="/">
						<Button size="lg" className="gap-2" data-testid="button-home">
							<Home className="w-5 h-5" />
							Back to Home
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
