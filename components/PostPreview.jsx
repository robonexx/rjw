import Link from "next/link"
import './PostPreviews.scss'

const PostPreview = (props) => {
    
    return (
        <div  key={props.title} className='card'>
        <Link href={`/posts/${props.slug}`}>
            <h2 >{props.title}</h2>
            <p>{props.subtitle}</p>
            <p>{props.date}</p>
        </Link>
        </div>  
    )
}

export default PostPreview