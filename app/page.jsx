import '../styles/pages/Home.scss'
import getPostsData from '../data/getPostsData'
import PostPreview from '../components/PostPreview';
import Hero from '../components/hero/Hero'

const HomePage = () => {

    const postData = getPostsData()
    const postPreviews = postData.map((post) => (
        <PostPreview key={post.slug} {...post} />
            
    ));

    return (        
        <div className='main'>
            <Hero />
            <h2>Editorial previews</h2>
            <div className='container'>
                {postPreviews}
            </div>
    </div>
    )
}

export default HomePage;