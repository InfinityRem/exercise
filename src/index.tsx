import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import {RouterProvider} from "react-router";
import {setupStore} from "./app/redux/store";
import {Provider} from "react-redux";
import {withRouter} from "./app/provider";



const store = setupStore()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);


root.render(

      <Provider store={store}>
        <RouterProvider router={withRouter}/>
      </Provider>
);

