import {Box, CircularProgress, Pagination} from "@mui/material";
import {PostsList} from "../postsList/PostsList.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import {api} from "../../services/apiService/apiService.ts";
import {Post} from "./types.ts";

export const AllPosts = () => {
  const [fetchingData, setFetchingData] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(0)
  const [postCount, setPostCount] = useState(0)
  const [currentPosts, setCurrentPosts] = useState<Post[]>([])
  const getPosts = async () => {
    setFetchingData(true)
    try {
      const response = await api.getAllPosts(currentPage)
      setPostCount(response.data.allPosts.count);
      setCurrentPosts(response.data.allPosts.posts)
    } catch (error) {
      setPostCount(0);
      setCurrentPosts([])
    } finally {
      setFetchingData(false)
    }
  }

  useEffect(() => {
    getPosts()
  }, [currentPage])

  const getNumberOfPages = () => {
    const number = Math.ceil(postCount/ currentPosts.length)
    setNumberOfPages(number)
  }

  useEffect(() => {
    getNumberOfPages()
  }, [postCount])

  const handlePagination = (_event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  }

  if (fetchingData) {
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
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <PostsList currentPosts={currentPosts}/>
        </Box>
        {numberOfPages > 1 && <Pagination
          color="primary"
          size="large"
          count={numberOfPages || 1}
          sx={{marginTop: '20px'}}
          onChange={handlePagination}
          page={currentPage}
        />}
      </Box>
    )
  };
