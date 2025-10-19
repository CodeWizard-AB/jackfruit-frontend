export default function SectionHeadline({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="mx-auto space-y-4 mt-4 mb-16 max-w-screen-sm text-center">
			<h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-6xl bg-linear-to-br text-transparent from-primary to-white bg-clip-text">
				{title}
			</h2>
			<p>{description}</p>
		</div>
	);
}
