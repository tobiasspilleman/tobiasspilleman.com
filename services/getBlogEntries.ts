import { Blog } from "../interfaces/Blog";

export const getBlogs = async (): Promise<Blog[]> => {
    try {
        const response = await fetch("https://www.tobiasspilleman.com/data/blogs.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blogsData: Blog[] = await response.json();
        return blogsData;
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
        return [];
    }
};