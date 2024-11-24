export interface ImageContent {
    src: string;
    alt: string;
    src_description?: string;
    author?: string;
}

export interface TextContent {
    paragraphs: string[];
}

export interface Chapter {
    title: string;
    content: (ImageContent | TextContent)[];
}

export interface Blog {
    id: number;
    title: string;
    headingImage: string;
    headingImageAlt: string;
    headingImageAuthor: string;
    date: string;
    readingTime: string;
    chapters: Chapter[];
    tags: string[];
    slug: string;
}