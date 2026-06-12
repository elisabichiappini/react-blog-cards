import Button from "../Button/Button";
import postStyle from './Post.module.css';

const PostText = (props) => {
    return (
        <div className={postStyle.post}>
            <h2 className={postStyle['pt-8']}>{props.title}</h2>
            <p  className={postStyle['pt-8']}>
                {props.description}
            </p>
            <h6>{props.like} likes</h6>
            <Button/>
        </div>
    )
}

export default PostText;