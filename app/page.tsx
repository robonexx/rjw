import styles from '../styles/pages/Home.module.scss'
import Link from 'next/link';
import getPostsData from '../components/lib/getPostsData'
import PostPreview from '../components/PostPreview';

const HomePage = () => {

    const postData = getPostsData()
    const postPreviews = postData.map((post) => (
        <PostPreview key={post.slug} {...post} />
            
    ));

    return (        
    <div className={styles.main}>
            <h1>PreViews</h1>
            <div>{ postPreviews}</div>
    </div>
    )
}

export default HomePage;