import { Asset } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface BlogFields {
	title: string;
	slug: string;
	excerpt: string;
	coverImage?: Asset<{
		title: string;
		description: string;
		file: {
			url: string;
			details: unknown;
			fileName: string;
			contentType: string;
		};
	}>;
	content?: Document;
	publishDate: string;
	author: string;
	category: string;
	readTime: number;
}

export type BlogEntry = EntrySkeletonType<BlogFields>;
