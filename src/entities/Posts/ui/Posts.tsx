import {FC, useEffect, useState} from "react";
import {postApi} from "../api/postsApi";
import {PostItem} from "../../../widgets/Post/ui/PostItem";
import style from './Posts.module.scss'

export const Posts: FC = () => {
  const [currentPostStart,setCurrentPostStart]=useState(0)
  const {data:posts, isLoading} =postApi.useFetchAllPostsQuery({limit:7,start:currentPostStart})
  const [isMyFetching,setIsFetchingDown]=useState(false)
  const [isMyFetchingUp,setIsMyFetchingUp]=useState(false)

  useEffect(()=>{
    if(isMyFetching)
    {
      setCurrentPostStart(prev=>{
        return prev<93?prev+1:prev
      })
      setIsFetchingDown(false)
    }
  },[isMyFetching])
  useEffect(()=>{
    if(isMyFetchingUp)
    {
      setCurrentPostStart(prev=>{
        return prev>0?prev-1:prev
      })
      setIsMyFetchingUp(false)
    }
  },[isMyFetchingUp])
  useEffect(()=>{
    document.addEventListener('scroll',scrollHandler)
    return ()=>{
      document.removeEventListener('scroll',scrollHandler)
    }
  },[])
  const scrollHandler=(e:any):void=>{
    if(e.target.documentElement.scrollTop<50)
    {
      setIsMyFetchingUp(true)
    }
    if(e.target.documentElement.scrollHeight-e.target.documentElement.scrollTop-window.innerHeight<50)
    {
      setIsFetchingDown(true)
      window.scrollTo(0,(e.target.documentElement.scrollHeight + e.target.documentElement.scrollTop));
    }
  }
  return (
      <div>
        <div className={style.container}>
          {posts?.map(post=><PostItem key={post.id} post={post}/>)}
        </div>
        {isLoading&&<div>Подождите немного</div>}
      </div>
  );
};
