import React from 'react'
import { workHistoryData as data } from '@/data/workHistoryData'


const WorkHistory = () => {

  const dataMapping = data.map((item, index) => {
    return (
      <div key={index}>
        <h2>{item.title}</h2>
        <h3>{item.company}</h3>
        <p><span>{item.startDate}</span> - <span>{item.endDate}</span></p>
        <ul>
          {item.duties.map((duty, index) => {
            return (
              <li key={index}>{duty}</li>
            )
          })}
        </ul>
      </div>
    )
  })

  return (
    <section>
      <h1>Where I've Worked</h1>
      {dataMapping}
    </section>
  )
}

export default WorkHistory