import { clientContentful } from "@/lib/contentful";
import BlogCard from "./blog-card";

export default async function BlogsSection() {
	const { items } = await clientContentful.getEntries({
		content_type: "blogs",
	});

	return (
		<section className="container">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{items.map((item: { fields: any; sys: any }) => (
					<BlogCard key={item.sys.id} blog={item.fields} />
				))}
			</div>
		</section>
	);
}
