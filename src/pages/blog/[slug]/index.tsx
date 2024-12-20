import {useRouter} from "next/router";
import {NextPage} from "next";
import NavigationBar from "../../../components/NavigationBar";
import React from "react";
import {Blog} from "../../../interfaces/Blog";
import {getBlogs} from "../../../services/getBlogEntries";
import Head from "next/head";
import ResponsiveWrapper from "../../../components/ResponsiveWrapper";

const BlogEntry: NextPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [blogs, setBlogs] = React.useState<Blog[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getBlogs().then((blogs) => {
            setBlogs(blogs);
            setLoading(false);
        });
    }, []);

    const blog = blogs.find(blog => blog.id === slug);

    if (loading) {
        return null;
    }

    if (blog) {
        return (
            <>
                <Head>
                    <title>{blog.title} - Tobias Spilleman</title>
                    <link rel="icon" type="image/x-icon" href="/assets/logo-image.png"/>
                </Head>
                <NavigationBar/>
                    <ResponsiveWrapper>
                        <h1 className="text-black text-5xl font-bold mb-5">{blog.title}</h1>
                        <img src={blog.headingImage} alt={blog.headingImageAlt}
                             className="w-full h-56 sm:h-80 md:h-96 object-cover rounded-lg"/>
                        <p className="text-gray-400 mb-10 pr-2 w-full text-end">{blog.headingImageAuthor}</p>
                        <p className="text-gray-400 mb-2">{new Date(blog.date).toLocaleDateString('de-DE', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        })} · {blog.readingTime}</p>
                        <div className="flex flex-col w-full">
                            {blog.chapters.map((chapter, index) => (
                                <div key={index} className="mb-5">
                                    <h2 className="text-3xl font-bold mb-3">{chapter.title}</h2>
                                    {chapter.content.map((content, index) => (
                                        <div key={index} className="mb-5">
                                            {content.hasOwnProperty("src") ? (
                                                <img src={(content as any).src} alt={(content as any).alt}
                                                     className="w-full h-56 sm:h-80 md:h-96 object-cover rounded-lg mb-5"/>
                                            ) : (
                                                (content as any).paragraphs.map((paragraph: string, index: number) => (
                                                    <React.Fragment key={index}>
                                                        <p className="text-black text-lg">{paragraph}</p>
                                                        <p>&nbsp;</p>
                                                    </React.Fragment>
                                                ))
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <p>{blog.tags.map((tag, index) => {
                                return <span key={index} className="text-black bg-gray-200 pl-2 pr-2 pt-1 pb-1 rounded-md mr-2">{tag}</span>
                            })}</p>
                        </div>
                    </ResponsiveWrapper>
            </>
        );
    } else {
        return (
            <>
                <NavigationBar />
                <div className="flex flex-col justify-center items-center w-full h-full py-10">
                    <div className="w-1/2 h-full flex justify-center items-center">
                        <h1 className="text-black text-5xl font-bold mb-10">Blog not found</h1>
                    </div>
                </div>
            </>
        );
    }
}

export default BlogEntry;