import NavigationBar from "../../components/NavigationBar";
import {Blog} from "../../interfaces/Blog";
import {getBlogs} from "../../services/getBlogEntries";
import BlogPreview from "../../components/BlogPreview";
import React from "react";
import Head from "next/head";
import ResponsiveWrapper from "../../components/ResponsiveWrapper";

const Blogs = () => {
    const [blogs, setBlogs] = React.useState<Blog[]>([]);

    React.useEffect(() => {
        getBlogs().then((blogs) => {
            setBlogs(blogs);
        });
    }, []);

    function groupBlogsByYear(blogs: Blog[]) {
        return blogs.reduce((acc, blog) => {
            const year = new Date(blog.date).getFullYear();
            if (!acc[year]) {
                acc[year] = [];
            }
            acc[year].push(blog);
            return acc;
        }, {} as Record<string, Blog[]>);
    }

    return (
        <>
            <NavigationBar />
            <Head>
                <title>Tobias Spilleman - Blog</title>
                <link rel="icon" type="image/x-icon" href="/assets/logo-image.png"/>
            </Head>
                <ResponsiveWrapper>
                    <h1 className="text-black text-5xl font-bold mb-10">Blog</h1>
                    <div className="flex flex-row flex-wrap justify-between w-full">
                        {blogs.length === 0 ? (
                        <div className="w-full">
                            <h2 className="italic mb-5">Nothing to see here yet. I´m working on new content.</h2>
                        </div>
                        ) : (
                            Object.entries(groupBlogsByYear(blogs)).map(([year, blogs]) => (
                                <div key={year} className="mb-10 w-full">
                                    <h2 className="text-3xl font-bold mb-5" key={year + 100}>{year}</h2>
                                    {blogs.map((blog) => (
                                        <BlogPreview blogEntry={blog} key={blog.id}/>
                                    ))}
                                </div>
                            ))
                        )}
                    </div>
                </ResponsiveWrapper>
        </>
    )
}

export default Blogs;