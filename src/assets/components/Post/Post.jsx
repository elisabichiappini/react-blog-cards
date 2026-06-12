import postStyle from './Post.module.css';
import imgPost from '../../../img/lollipop.webp';
import Button from '../Button/Button';
const Post = () => {
    return (
        <>
            <div className="post">
                <figure >
                    <img src={imgPost} alt="Post image" className={postStyle['post-box']} />
                </figure>
                <div className={postStyle.post}>
                    <h2 className={postStyle['pt-8']}>title</h2>
                    <p className={postStyle['pt-8']}>
                        lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.
                    </p>
                    <h6> Title</h6>
                    <Button />
                </div>
            </div>
        </>
    )
}

export default Post;