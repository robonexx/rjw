import '../styles/pages/Home.scss'
import getPostsData from '../data/getPostsData'
import PostPreview from '../components/PostPreview';
import Hero from '../components/hero/Hero';

const HomePage = ({lights}) => {

    const postData = getPostsData()
    const postPreviews = postData.map((post) => (
        <PostPreview key={post.slug} {...post} />
            
    ));

    return (        
        <div className='main'>
            <Hero ligths={lights} />
            <div className='content_wrapper'>

            <div className="left_side">
            <h2>Latest posts</h2>
            <div className='container'>
                {postPreviews}
            </div>
            </div>
            <div className='right_side'>
            <section className="top">
                <h2><span>...</span> <br/>
                             If you are looking for a <b>developer</b> to bring your ideas to life or a experienced <b>danceteacher</b> thats been active for the past 25+ years you come to the right place</h2>    
                </section>
                                        
                    
                <section className="mid">
                            <h2>Im always looking for <span className="highlight">creative solutions</span> in everythings life. <br/> Without creativity we would be standing still</h2>                   
                    </section>
                    <section className="bottom">
                        <div className="bottom left">
                            <h3>
                                <i>My design</i> is equally about <br/>
                            <span className="highlight">what it does</span> 
                            <br/>
                            as much as how it attracts the eye
                            </h3>
                        </div>
                        <div className="bottom right">
                            <h2>As a developer I'm <span className="highlight">focused</span> on finding the best solutions for you problems. <br/> And we will <br/><span className="highlight">work together</span> to do so</h2>
                        </div>
                </section>
            </div>
            </div>
    </div>
    )
}

export default HomePage;