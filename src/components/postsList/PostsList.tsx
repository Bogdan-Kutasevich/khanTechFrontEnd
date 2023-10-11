import {PostCard} from "../postCard/PostCard.tsx";
import {Post} from "../../types/Post.ts";
type PostsListProps = {
  currentPosts: Post[],
}
export const PostsList = ({currentPosts} :PostsListProps) => (
  currentPosts.map((post) => <PostCard post={post} key={post.id}/>)
)
