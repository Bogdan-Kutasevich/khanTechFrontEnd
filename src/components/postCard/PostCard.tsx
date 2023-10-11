import {Post} from "../../types/Post.ts";
import styles from './PostCard.module.css'
import {useEffect, useState} from "react";
import {api} from "../../services/apiService/apiService.ts";
type PostCardProps = {
  post: Post
}
export const PostCard = ({post}: PostCardProps) => {
  const [admin, setAdmin] = useState('')
  const getAdmin = async () => {
    try {
      const res = await api.getAdmin(post.adminId)
      setAdmin(res.data.adminName)
    } catch {
      setAdmin('')
    }
  }
  useEffect(() => {
    getAdmin()
  }, [])
  return (
    <div className={styles.card}>
      <img className={styles.image} src={post.image} alt='image'/>
      <p className={styles.categories}>{post.categories}</p>
      <h2 className={styles.title}>{post.title.slice(0, 20)}</h2>
      <div className={styles.footer}>
        <div className={styles.dateAndAutor}>
          <p className={styles.date}>{post.updatedAt.slice(0, 10)}</p>
          <p className={styles.autor}>{admin}</p>
        </div>
        <p className={styles.timeRead}>{post.readTime}</p>
      </div>
    </div>
  )
}