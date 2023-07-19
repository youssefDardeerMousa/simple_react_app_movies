// import React, { Component } from 'react';
// import sthome from "./Home.module.css"
// export default class Home extends Component {
    
//     state={
//         xname:'youssef'
//     }
//     change=()=>{
//         this.state.xname='ali'
//         this.setState({})
//     }
//     render() {
//         console.log("call the  render methods");
    
//         return (
//           <>
//             <div  className={`h1 pb-5 ${sthome.h1}`}>
//                 <div  className={`h2 ${sthome.h2}`}>
//                     <h1>Home</h1>
//                     <h2>{this.state.xname}</h2>
//                     <button onClick={this.change} className='bg-danger '>change name</button>
//                 </div>
//             </div>
//           </>
//         );
//       }
//       componentDidMount(){
//         console.log("call the  componentDidMount method");
//       }
//       componentDidUpdate(){
//         console.log("call the  componentDidUpdate method");
//       }
//     componentWillUnmount(){
//         console.log("call the  componentWillUnmount method");
 
//     }
//     constructor(){
//         super()
//         console.log("call the constructor method");
//     }
 

 
// }
//movie

import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  let [mymovies,setmovies]=useState([]);
  let [loading,setloading]=useState(false)
  async function movies(type){
    let {data}=await axios.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=752ea130dd776aa8cc20046e6d918a91`)
   setmovies(data.results)
    console.log(data.results);
    setloading(true)
  }
console.log(mymovies);
  useEffect(()=>{
    movies("movie")
  },[])
  return (
    <>
    
    <div className="container mt-5">
      
      <div className="row">
      <div className="my-2">
      <button onClick={()=>{return movies("movie")}} className="btn text-light">movie</button>
      <button onClick={()=>{return movies("tv")}} className="btn text-light">tv</button>
      </div>
        {loading? mymovies.map((x)=>{
            return <div key={x.id} className="col-md-4">
              <img src={`https://image.tmdb.org/t/p/w500`+x.backdrop_path} className='w-100' alt="img1"  />
              <h4 className='text-center'>{x?.title} {x?.name}</h4>
            </div>
          }):<div className='text-center h-100 align-items-center fa-3x'><i className='fas fa-spinner fa-spin  text-success'></i></div>
        }
      </div>
    </div>
    </>
  )
}
