import {Post} from "../../types/Post.ts";

export type getAllPostsResponseType = {
  status: string
  message: string
  allPosts: {
    posts: Post[]
    count: number
  }
}

export type getThreeLastResponseType = {
  status: string
  message: string
  threeLastPosts: Post[]
}

export type getUniquesLastResponseType = {
  status: string
  message: string
  uniquePosts: {
    randomPost: Post
    uniquePost: Post
  }
}

export type getAdminResponseType = {
  status: string
  message: string
  adminName:string
}