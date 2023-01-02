import Link from "next/link"
import { PostInterface } from "./PostInterface"

import styles from './PostPreviews.module.scss'

const PostPreview = (props: PostInterface) => {
    
    return (
        <div  key={props.title} className={styles.card}>
        <Link href={`/posts/${props.slug}`}>
            <h2 >{props.title}</h2>
            <p>{props.subtitle}</p>
            <p>{props.date}</p>
        </Link>
        </div>  
    )
}

export default PostPreview