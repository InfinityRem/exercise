import React from "react";
import {useNavigate, useParams} from "react-router";
import {postApi} from "../../../entities/Posts/api/postsApi";
import style from './PostDetails.module.scss'
import {Button} from "../../../shared/button/Button";


export const PostDetails = () => {

  const {id} = useParams()
  const {data:post, isLoading} = postApi.useFetchPostByIdQuery(Number(id));

  const navigate=useNavigate()

if(isLoading) return <h1>Loading...</h1>

  return (
      <div className={style.container} >
        <div className={style.number}> {post?.id}</div>
        <div className={style.postDetails__title}>{post?.title}</div>
        <div  className={style.postDetails__body}>
          {post?.body}
        </div>
        <div onClick={()=>{navigate('/')}} className={style.button}>
          <Button>
            К постам
          </Button>
        </div>
      </div>
  );
};
