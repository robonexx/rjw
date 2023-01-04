import '../styles/pages/Home.scss'
import getPostsData from '../data/getPostsData'
import PostPreview from '../components/PostPreview';

const HomePage = () => {

    const postData = getPostsData()
    const postPreviews = postData.map((post) => (
        <PostPreview key={post.slug} {...post} />
            
    ));

    return (        
    <div className='main'>
            <h1>PreViews</h1>
            <div className='container'>
                {postPreviews}
            </div>
    </div>
    )
}

export default HomePage;