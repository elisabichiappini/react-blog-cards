import Post from '../Post/Post';
import { posts } from '../../utils/posts';

const Main = () => {
    return (
        <main className="d-flex flex-column align-items-center justify-content-center gap-4 flex-wrap">
            {
                posts.map(p => (
                    p.published === true && 
                     <Post key={`post-${p.id}`} 
                    title={p.title} 
                    description={p.content} 
                    imgSrc={p.image} 
                    />
                ))
            }
        </main>
    )
}

export default Main; 