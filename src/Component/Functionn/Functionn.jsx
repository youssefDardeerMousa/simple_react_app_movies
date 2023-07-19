import React, { useEffect, useState } from 'react'

export default function Functionn() {
    let [x,setX]=useState("youssef");
    let[count,setcount]=useState(0)
    /**
     * هتلاقي المتغير عبارة عن 
     * Hook
     * مرجع اراي فيها قيمة ابتدائية تعتبر
     * state
     * setState والداله اللي هتغير القيمه دي ودي تعتبر 
       للاراي دي  destructing ف احنا ممكن نعمل
        let [x,setX]=useState("youssef")
    */
    // console.log(x);
    // console.log(count);

    function change(){
        setX("ali")
    }
    function changecount(){
        count+=1
        setcount(count)
    }
    useEffect(()=>{
        console.log("useEffect Mount");
    },[])
    // useEffect(()=>{
    //     console.log("useEffect2 update");
    // })
    useEffect(()=>{
        console.log("useEffect2 update");
    },[x,count])
    useEffect(()=>{
        return ()=>{
            console.log("bye bye bye");
        }
    },[])
  return (
    <>
    <h1 className="text-center">{x}</h1>
    <h1 className="text-center">{count}</h1>
    <div className="text-center my-3">
    <button onClick={change} className="btn btn-danger"> change Name</button>
    <button onClick={changecount} className="btn btn-danger ms-3"> change count</button>


    </div>
    </>
  )
}
