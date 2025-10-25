import BannerSection from "@/components/sections/banner-section";
import DynamicImage from "@/components/ui/DynamicImage";
import { clientContentful } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import type { BlogEntry } from "@/types/contentful";
import { Asset } from "contentful";

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
	const coverAsset = blogPost?.coverImage as Asset;

	return (
		<>
			<BannerSection>
				<DynamicImage
					src={`https:${coverAsset?.fields?.file?.url || ""}`}
					alt={slug}
					containerClassName="md:h-[500px] aspect-video w-full"
					childClassName="rounded-xl object-cover"
				/>
			</BannerSection>
			<article className="max-w-4xl mx-auto text-lg leading-relaxed">
				{blogPost.content &&
					documentToReactComponents(blogPost.content as Document)}
			</article>
		</>
	);
}
