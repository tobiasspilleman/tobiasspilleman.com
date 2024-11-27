import {Blog} from "../interfaces/Blog";

const BlogPreview = ({ blogEntry } : { blogEntry: Blog }) => {
    return (
        <a href={"/blog/" + blogEntry.id}>
            <div className="hover:bg-grey-light rounded w-full flex flex-row py-2 cursor-pointer">
                <div className="flex justify-between w-full">
                    <div className="flex flex-row ">
                        <p className="text-gray-700 ml-1 mr-8 text-lg">{new Date(blogEntry.date).toLocaleDateString('de-DE', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        })}</p>
                        <h2 className="text-black text-medium font-bold text-lg">{blogEntry.title}</h2>
                    </div>
                    <p className="text-gray-700 text-lg mr-5">
                        {blogEntry.readingTime}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default BlogPreview;