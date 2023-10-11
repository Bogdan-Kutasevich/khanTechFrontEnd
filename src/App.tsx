import {Footer} from "./components/footer/Footer.tsx";
import {Header} from "./components/header/Header.tsx";
import "./App.css"
import "./variables.css"
import {SureAway} from "./components/sureAway/SureAway.tsx";
import {Latest} from "./components/latest/Latest.tsx";
import {api} from "./services/apiService/apiService.ts";
import {useEffect, useState} from "react";
import {UniquePosts} from "./types/UniquePosts.ts";
import {Post} from "./types/Post.ts";
import {UniquePost} from "./components/uniquePost/UniquePost.tsx";
import {Box, CircularProgress} from "@mui/material";
import {AllPosts} from "./components/allPosts/AllPosts.tsx";

function App() {
  const [uniquePosts, setUniquePosts] = useState<UniquePosts | null>(null)
  const [latestThree, setLatestThree] = useState<Post[] | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(true)

  const getUniquePosts = async () => {
    try {
      const res = await api.getUniques()
      setUniquePosts(res.data.uniquePosts)
    } catch {
      setUniquePosts(null)
    }
  }

  const getLatestThree = async () => {
    try {
      const res = await api.getThreeLast()
      setLatestThree(res.data.threeLastPosts)
    } catch {
      setLatestThree(null)
    }
  }
  const getData = async () => {
    try {
      await Promise.all([getUniquePosts(), getLatestThree()])
    } finally {
      setIsFetching(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  if (isFetching) {
    return (
      <Box sx={{
        height:'100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <div  className="app">
      <Header/>
      <div  className="mainContainer">
        <main className="mainContent">
          <div className="sureAwayAndLatest">
            {uniquePosts && <SureAway uniquePosts={uniquePosts.randomPost}/>}
            {latestThree && <Latest latestThree={latestThree}/>}
          </div>
          <div className='randomPost'>
            {uniquePosts && <UniquePost uniquePosts={uniquePosts.uniquePost}/>}
          </div>
          <div className="allPosts">
            <AllPosts/>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default App
