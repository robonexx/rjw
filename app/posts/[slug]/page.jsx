import fs from 'fs'
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter'
import getPostsData from '../../../data/getPostsData';
import Link from 'next/link';

// styles
import '../../../styles/pages/Posts.scss'


const getPostsContent = (slug) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content)
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }))
}


const ContentPage = (props) => {
    const slug = props.params.slug;
    const post = getPostsContent(slug)
    return (
        <>
            <div className='post_container' key={slug}>
                <div className='post'>
                    <Link href="/"><span>{ '<' }</span>Go Back </Link> 
                        <h1>{post.data.title}</h1>
                            <Markdown>{post.content}</Markdown>
                        </div>
            </div>
        </>
    )
}

export default ContentPage;