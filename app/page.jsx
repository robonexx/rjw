import styles from '../styles/pages/Home.module.scss'
import getPostsData from '../data/getPostsData'
import PostPreview from '../components/PostPreview';

const HomePage = () => {

    const postData = getPostsData()
    const postPreviews = postData.map((post) => (
        <PostPreview key={post.slug} {...post} />
            
    ));

    return (        
    <div className={styles.main}>
            <h1>PreViews</h1>
            <div className={styles.container}>
                {postPreviews}
            </div>
    </div>
    )
}

export default HomePage;