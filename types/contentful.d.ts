import { Asset } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface BlogFields {
	title: string;
	slug: string;
	excerpt: string;
	coverImage?: Asset;
	content?: Document;
	publishDate: string;
	author: string;
	category: string;
	readTime: number;
}

export type BlogEntry = EntrySkeletonType<BlogFields>;
