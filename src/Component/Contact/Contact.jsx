import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="text-center w-50 m-auto mt-5">
 <div>
 <form action="">
 <div className="mb-3">
    
    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1"  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
    <button  className="btn btn-primary mt-2">submit</button>
  </div>
      </form>

</div>

    </div>
    
    </>
  )
}
