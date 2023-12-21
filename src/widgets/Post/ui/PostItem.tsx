import React from "react";
import {useNavigate} from "react-router";
import style from "./PostItem.module.scss"
import {Button} from "../../../shared/button/Button";
import {IPost} from "../../../entities/Posts";

type PropsType={
  post?:IPost
}

export const PostItem = ({post}:PropsType) => {

  const navigate=useNavigate()

  return (
      <div className={style.container}>
        <div className={style.number}> {post?.id}</div>
        <div className={style.postItem__title}>{post?.title}</div>
        <div  className={style.postItem_body}>
        {Number(post?.body.length)>100?post?.body.substring(0,100)+'...':post?.body}
        </div>
        <div  onClick={()=>{navigate(`/posts/${post?.id}`)}} className={style.button}>
          <Button >
          Просмотр
          </Button>
        </div>

      </div>
  );
};
