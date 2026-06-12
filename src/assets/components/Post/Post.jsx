import postStyle from './Post.module.css';
import Button from '../Button/Button';


const Post = ({ title, description, imgSrc, tags}) => {
    return (
        <>
            <div className="post" >
               
                <figure >
                    <img src={imgSrc} alt="Post image" className={postStyle['post-box']} />
                </figure>
                <div className={postStyle.post}>
                    <h2 className={postStyle['pt-8']}>{title}</h2>
                    <p className={postStyle['pt-8']}>
                        {description}
                    </p>
                    <ul className={postStyle['tags']}>
                        {
                            tags.map((t,index) => (
                                <li key={`tag-${index}`} className={`${postStyle['tag']} ${postStyle[`tag-${t}`]}`}>
                                    {t}
                                </li>
                            ))
                        }
                    </ul>   
                    <Button />
                </div>
            </div>
        </>
    )
}

export default Post;