import styles from './SureAway.module.css'
import {Post} from "../../types/Post.ts";
import {useEffect, useState} from "react";
import {api} from "../../services/apiService/apiService.ts";

type Props = {
  uniquePosts: Post
}
export const SureAway = ({uniquePosts} : Props) => {
  const [admin, setAdmin] = useState('')
  const getAdmin = async () => {
    try {
      const res = await api.getAdmin(uniquePosts.adminId)
      setAdmin(res.data.adminName)
    } catch {
      setAdmin('')
    }
  }
  useEffect(() => {
    getAdmin()
  }, [])

  return (
    <section className={styles.sureAwaySection}>
      <div className={styles.image}>
        <img src={uniquePosts.image} className={styles.img} alt='image'/>
      </div>
      <div className={styles.info}>
        <p className={styles.categories}>{uniquePosts.categories}</p>
        <h2 className={styles.title}>{uniquePosts.title}</h2>
        <p className={styles.text}>{uniquePosts.postText}</p>
        <div className={styles.footer}>
          <div className={styles.dateAndAutor}>
            <p className={styles.date}>{uniquePosts.updatedAt.slice(0, 10)}</p>
            <p className={styles.autor}>{admin}</p>
          </div>
          <p className={styles.timeRead}>{uniquePosts.readTime}</p>
        </div>
      </div>
    </section>
  )
}