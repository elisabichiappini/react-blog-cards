import postStyle from './Post.module.css';
import image from '../../../img/lollipop.webp';

const PostImage = () => {
    return (
        <figure >  
            <img src={image} alt="Post image" className={postStyle['post-box']}/>
        </figure>

    )
}

export default PostImage;