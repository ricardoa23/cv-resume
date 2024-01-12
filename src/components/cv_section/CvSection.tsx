import React from 'react'
import { WorkHistory } from '..'



const CvSection = () => {
  return (
    <section className=" flex flex-col  w-2/3 border-white bg-cvbg rounded-md border-4 border-solid position-static  overflow-y-auto m-3">
        <h2>Work History</h2>
        <WorkHistory />
    </section>
  )
}

export default CvSection