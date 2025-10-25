import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import DynamicImage from "../ui/DynamicImage";
import Link from "next/link";
import type { BlogFields } from "@/types/contentful";

export default function BlogmedCard({ blog }: { blog: BlogFields }) {
	return (
		<Card className="pt-0 transition-all duration-300 hover:-translate-y-1 flex flex-col">
			<div className="bg-gradient-to-br from-gold/20 to-transparent relative overflow-hidden">
				<DynamicImage
					src={`https:${blog?.coverImage?.fields?.file?.url}`}
					alt={blog.title}
					containerClassName="h-60 w-full"
					childClassName="rounded-t-xl"
				/>
				<div className="absolute top-4 left-4">
					<span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-background">
						{blog.category}
					</span>
				</div>
			</div>

			<CardHeader className="flex-1 flex flex-col">
				<div className="flex items-center justify-between w-full text-xs text-muted-foreground mb-3">
					<span className="flex items-center gap-1">
						<Calendar className="w-3 h-3" />
						{new Date(blog.publishDate).toLocaleDateString("en-US", {
							month: "short",
							day: "numeric",
							year: "numeric",
						})}
					</span>
					<span>{blog.readTime} mins read</span>
				</div>

				<CardTitle className="text-xl mb-3">{blog.title}</CardTitle>

				<CardDescription className="flex-1 mb-4">
					{blog.excerpt}
				</CardDescription>

				<div className="flex items-center justify-between pt-4 w-full border-t border-border">
					<span className="text-sm text-muted-foreground">{blog.author}</span>
					<Link href={`/blog/${blog.slug}`}>
						<Button variant="ghost" size="sm" className="gap-2">
							Read More
							<ArrowRight className="w-4 h-4" />
						</Button>
					</Link>
				</div>
			</CardHeader>
		</Card>
	);
}
