import React from 'react'
import { workHistoryData as data } from '@/data'


const WorkHistory = () => {

  const dataMapping = data.map((item, index) => {
    return (
      <div key={index} className="border-4 border-solid border-borderBlue m-8 bg-offWhite rounded-lg px-3">
        <h2  className="text-center text-4xl text-accent3 pt-3">{item.title}</h2>
        <h3 className="text-xl">{item.company}</h3>
        <p className="text-md">{item.location}</p>
        <p><span>{item.startDate}</span> - <span>{item.endDate}</span></p>
        <ul className="list-disc px-3 pb-4">
          {item.duties.map((duty, index) => {
            return (
              <li key={index} className="px-1 py-2">{duty}</li>
            )
          })}
        </ul>
      </div>
    )
  })

  return (
    <section>
      {dataMapping}
    </section>
  )
}

export default WorkHistory