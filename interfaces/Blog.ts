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
    title: string;
    date: string;
    chapters: Chapter[];
    tags: string[];
}