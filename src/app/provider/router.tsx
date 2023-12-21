import {createBrowserRouter} from "react-router-dom";
import {Paths} from "./paths";
import {PostsPage} from "../../Pages/PostsPage/PostsPage";
import {PostPage} from "../../Pages/PostPage/PostPage";


export const router = createBrowserRouter([
  {
    path:Paths.posts,
    element:<PostsPage/>
  },
  {
    path:Paths.post,
    element:<PostPage/>
  }
]);