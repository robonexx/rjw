import styles from '../../../styles/pages/Posts.module.scss'
import fs from 'fs'
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter'
import getPostsData from '../../../components/lib/getPostsData';


const getPostsContent = (slug: string) => {
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


const ContentPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostsContent(slug)
    return (
        <>
            <div  className={styles.posts_page} key={slug}>
            <h1>{post.data.title}</h1>
            <Markdown>{post.content}</Markdown>
            </div>
        </>
    )
}

export default ContentPage;