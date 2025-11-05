import BannerSection from "@/components/sections/banner-section";
import DynamicImage from "@/components/ui/DynamicImage";
import { clientContentful } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document, BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import type { BlogEntry } from "@/types/contentful";
import { Asset } from "contentful";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/sections/cta-section";

const richTextOptions = {
	renderMark: {
		[MARKS.BOLD]: (text: React.ReactNode) => (
			<strong className="font-bold text-foreground">{text}</strong>
		),
		[MARKS.ITALIC]: (text: React.ReactNode) => (
			<em className="italic">{text}</em>
		),
		[MARKS.UNDERLINE]: (text: React.ReactNode) => (
			<u className="underline">{text}</u>
		),
		[MARKS.CODE]: (text: React.ReactNode) => (
			<code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
				{text}
			</code>
		),
	},
	renderNode: {
		[BLOCKS.PARAGRAPH]: (_node: any, children: React.ReactNode) => (
			<p className="mb-6 text-foreground/90 leading-loose tracking-wide">
				{children}
			</p>
		),
		[BLOCKS.HEADING_1]: (_node: any, children: React.ReactNode) => (
			<h1 className="text-4xl font-bold mb-6 mt-10 text-foreground">
				{children}
			</h1>
		),
		[BLOCKS.HEADING_2]: (_node: any, children: React.ReactNode) => (
			<h2 className="text-3xl font-bold mb-5 mt-9 text-foreground">
				{children}
			</h2>
		),
		[BLOCKS.HEADING_3]: (_node: any, children: React.ReactNode) => (
			<h3 className="text-2xl font-semibold mb-4 mt-8 text-foreground">
				{children}
			</h3>
		),
		[BLOCKS.HEADING_4]: (_node: any, children: React.ReactNode) => (
			<h4 className="text-xl font-semibold mb-3 mt-7 text-foreground">
				{children}
			</h4>
		),
		[BLOCKS.HEADING_5]: (_node: any, children: React.ReactNode) => (
			<h5 className="text-lg font-semibold mb-3 mt-6 text-foreground">
				{children}
			</h5>
		),
		[BLOCKS.HEADING_6]: (_node: any, children: React.ReactNode) => (
			<h6 className="text-base font-semibold mb-2 mt-5 text-foreground">
				{children}
			</h6>
		),
		[BLOCKS.UL_LIST]: (_node: any, children: React.ReactNode) => (
			<ul className="list-disc list-inside mb-6 space-y-2 ml-4">{children}</ul>
		),
		[BLOCKS.OL_LIST]: (_node: any, children: React.ReactNode) => (
			<ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
				{children}
			</ol>
		),
		[BLOCKS.LIST_ITEM]: (_node: any, children: React.ReactNode) => (
			<li className="text-foreground/90 leading-7">{children}</li>
		),
		[BLOCKS.QUOTE]: (_node: any, children: React.ReactNode) => (
			<blockquote className="border-l-4 border-primary pl-6 py-4 my-6 italic text-foreground/80 bg-muted/50 rounded-r-lg">
				{children}
			</blockquote>
		),
		[BLOCKS.HR]: () => <Separator className="my-8" />,
		[BLOCKS.EMBEDDED_ASSET]: (node: any) => {
			const { file, title } = node.data.target.fields;
			if (file?.contentType?.startsWith("image/") && file?.url) {
				return (
					<figure className="my-8">
						<DynamicImage
							src={`https:${file.url}`}
							alt={title ? String(title) : ""}
							containerClassName="w-full rounded-lg overflow-hidden"
							childClassName="object-cover"
						/>
						{title && (
							<figcaption className="text-sm text-muted-foreground mt-2 text-center">
								{String(title)}
							</figcaption>
						)}
					</figure>
				);
			}
			return null;
		},
		[INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
			<Link
				href={node.data.uri}
				target="_blank"
				rel="noopener noreferrer"
				className="text-primary hover:underline font-medium"
			>
				{children}
			</Link>
		),
	},
};

export default async function SingleBlog({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const blog = await clientContentful.getEntries<BlogEntry>({
		content_type: "blogs",
		"fields.slug": slug,
		limit: 1,
	});

	const blogPost = blog.items[0]?.fields;
	const coverAsset = blogPost?.coverImage as Asset | undefined;

	if (!blogPost) {
		return null;
	}

	const publishDate = blogPost.publishDate
		? new Date(blogPost.publishDate as string)
		: new Date();
	const title = String(blogPost.title || "");
	const excerpt = blogPost.excerpt ? String(blogPost.excerpt) : null;
	const category = blogPost.category ? String(blogPost.category) : "";
	const author = blogPost.author ? String(blogPost.author) : "";
	const readTime = blogPost.readTime ? Number(blogPost.readTime) : 0;

	return (
		<section className="container">
			<BannerSection>
				<div className="w-full space-y-12">
					{coverAsset?.fields?.file?.url && (
						<div className="relative overflow-hidden rounded-2xl shadow-2xl">
							<DynamicImage
								src={`https:${coverAsset.fields.file.url}`}
								alt={title}
								containerClassName="w-full aspect-video md:h-[600px]"
								childClassName="object-cover"
							/>
							{category && (
								<div className="absolute top-6 left-6">
									<span className="px-4 py-2 text-sm font-semibold rounded-full bg-primary text-primary-foreground shadow-lg backdrop-blur-sm">
										{category}
									</span>
								</div>
							)}
						</div>
					)}

					<div className="space-y-8 max-w-4xl mx-auto">
						{title && (
							<h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-foreground">
								{title}
							</h1>
						)}

						{excerpt && (
							<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
								{excerpt}
							</p>
						)}

						<div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<Calendar className="w-4 h-4" />
								<span>
									{publishDate.toLocaleDateString("en-US", {
										month: "long",
										day: "numeric",
										year: "numeric",
									})}
								</span>
							</div>
							{author && (
								<div className="flex items-center gap-2">
									<User className="w-4 h-4" />
									<span>{author}</span>
								</div>
							)}
							{readTime > 0 && (
								<div className="flex items-center gap-2">
									<Clock className="w-4 h-4" />
									<span>{readTime} min read</span>
								</div>
							)}
						</div>

						<Separator className="my-1" />
					</div>
				</div>
			</BannerSection>

			<article className="max-w-4xl mx-auto mb-28">
				<div className="prose prose-lg dark:prose-invert text-lg max-w-none">
					{blogPost.content &&
						documentToReactComponents(
							blogPost.content as Document,
							richTextOptions
						)}
				</div>
			</article>

			<CTASection />
		</section>
	);
}
