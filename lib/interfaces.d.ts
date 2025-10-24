interface Blog {
	title: string;
	slug: string;
	excerpt: string;
	coverImage: {
		fields: {
			file: {
				url: string;
			};
		};
	};
	content: object;
	publishDate: Date;
	author: string;
	category: string;
	readTime: number;
}
