import { Blog } from "../interfaces/Blog";
import blogsData from "../assets/res/blogs.json";

export const getBlogs = (): Blog[] => {
    return blogsData as Blog[];
};