import Image from 'next/image'
import { motion } from 'framer-motion'
// styles
import './Hero.scss'

const Hero = ({lights}) => {

    lights ? console.log('on') : console.log('off')

    return (
        <div className='hero'>
            <div className='hero_img'>             
                
           {/*  <Image               
                src='/images/coffee.png'
                    fill                    
                    alt='logo'
                    priority
                ></Image> */}
                <Image      
                  className='profile'  
                    src='/images/robprofile.png'
                    width={200}
                    height={200}
                    alt='logo'
                    priority
                ></Image>
                <p>That coffee looks good right?</p>              
            </div>
            <section className="mid-section-top child">
                <h2><span>...</span> <br/>
                             If you are looking for a <b>developer</b> to bring your ideas to life or a experienced <b>danceteacher</b> thats been active for the past 25+ years you come to the right place</h2>    
                </section>
                                        
                    
                <section className="mid-section child">
                            <h2>I'm always looking for <span className="highlight">creative solutions</span> in everythings life. <br/> Without creativity we would be standing still</h2>                   
                    </section>
                    <section className="bottom-section child">
                        <div className="bottom-section-left">
                            <h3>
                                <i>My design</i> is equally about <br/>
                            <span className="highlight">what it does</span> 
                            <br/>
                            as much as how it attracts the eye
                            </h3>
                        </div>
                        <div className="bottom-section-right">
                            <h2>As a developer I'm <span className="highlight">focused</span> on finding the best solutions for you problems. <br/> And we will <br/><span className="highlight">work together</span> to do so</h2>
                        </div>
                </section>
                
        </div>
    )
}

export default Hero