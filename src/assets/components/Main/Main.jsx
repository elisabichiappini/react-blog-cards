import Post from '../Post/Post';
import './Main.css';
import { posts } from '../../utils/posts';
import StylePost from '../Post/Post.module.css';



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
        <main>
            <div className="info d-flex flex-column justify-content-center align-items-center">
                <div className="labels text-center">
                    <h3 >All tags</h3>
                    <div className={`${StylePost['tags']} gap-8`}>
                        {uniqueTags.map((tag, index) => (
                            <span
                                key={`allTag-${index}`}
                                className={StylePost['tag'] + ' ' + StylePost[`tag-${tag}`] + ' ' + 'gap-16'}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
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
                </div>
            </div>
        </main>
    );
}