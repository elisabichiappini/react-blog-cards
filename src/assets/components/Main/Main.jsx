import Post from '../Post/Post';
import { posts } from '../../utils/posts';

export default function Main() {
    const uniqueTags = posts.reduce((acc, post) => {
        post.tags.forEach((tag) => {
            if (!acc.includes(tag)) {
                acc.push(tag);
            }
        });

        return acc;
    }, []);

    return (
        <main className="info">
            <h3 >All tags</h3>
            <div className="tags">
                {uniqueTags.map((tag, index) => (
                    <span
                        key={`allTag-${index}`}
                        className={`tag ${tag}`}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {posts.map(
                (p) =>
                    p.published === true && (
                        <Post
                            key={`post-${p.id}`}
                            title={p.title}
                            description={p.content}
                            imgSrc={p.image}
                            tags={p.tags}
                        />
                    )
            )}
        </main>
    );
}