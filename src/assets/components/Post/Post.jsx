
import PostImage from './PostImage';
import PostText from './PostText';

const Post = () => {
    return (
        <>
            <div className="post">
                <PostImage />
                <PostText
                    title="My First Post"
                    description="This is my first post!"
                    like={3}
                />
            </div>
        </>
    )
}

export default Post;