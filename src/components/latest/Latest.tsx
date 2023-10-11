import {Post} from "../../types/Post.ts";
import styles from './Latest.module.css'

type Props = {
  latestThree: Post[]
}
export const Latest = ({latestThree} : Props) => {
  return(
    <section className={styles.latestSection}>
      {latestThree.map((post) => (
        <div className={styles.post} style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'}}
        >
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.date}>{post.updatedAt.slice(0, 10)}</p>
        </div>
      ))}
    </section>
  )
}