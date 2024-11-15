import {Blog} from "../interfaces/Blog";

const BlogPreview = ({ blogEntry } : { blogEntry: Blog }) => {
    return (
        <div className="hover:bg-grey-light rounded w-fill flex flex-row py-2 cursor-pointer">
            <p className="text-gray-700 mr-8 text-lg">{new Date(blogEntry.date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
            <h2 className="text-black text-medium font-bold text-lg">{blogEntry.title}</h2>
        </div>
    )
}

export default BlogPreview;