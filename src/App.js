import React, { Component } from 'react'
import { RouterProvider,createBrowserRouter,createHashRouter } from 'react-router-dom'
import Layout from "./Component/Layout/Layout.jsx"
import Home from './Component/Home/Home'
import About from "./Component/About/About.jsx"
import Contact from "./Component/Contact/Contact.jsx"
import Gallary from './Component/Gallary/Gallery'
import NotFound from './Component/NotFound/NotFound.jsx'
import Games from './Component/Games/Games.jsx'
import Toyes from './Component/Toyes/Toyes.jsx'
import Baby from './Component/baby/Baby.jsx'
import Functionn from './Component/Functionn/Functionn.jsx'
export default class App extends Component {
  router=createHashRouter([
    {
      path: ''
      ,
      element:<Layout/>
      // ,errorElement:<NotFound/>,
      ,children:[
        {index:true,element:<Home/>},
        {path:'/Home',element:<Home/>},
        {path:'/About',element:<About/>},
        // {path:'/Functionn',element:<Functionn/>},
        {path:'/Contact',element:<Contact/>},
        // {path:'/Gallary',element:<Gallary/>,children:[
        //   {index:true,element:<Games/>},
        //   {path:"Toyes",element:<Toyes/>},
        //   {path:"Baby",element:<Baby/>}
        // ]}
 ,{path:'*',element:<NotFound/>}

      ]
    }
  ])
  render() {
    return (
      <RouterProvider router={this.router}/>
    )
  }
}
