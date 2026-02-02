import React from 'react'
import Macwindow from '../windows/Macwindows'
import githubData from '../../assets/github.json'
import './Github.scss'

const GitCard = ({ data = {id:1, title:"", description:"", tags:[], repoLink:"", demoLink:""}}) => {
  return <div className="card">
    <img src={data.image} alt={data.title} />
    <h1>{data.title}</h1>
    <p>{data.description}</p>

    <div className="tags">
      {
        data.tags.map(tag => <span key={tag}>{tag}</span>)
      }
    </div>

    <div className="urls">
      <a href={data.repoLink}>Repository</a>
      <a href={data.demoLink}>Demo</a>
    </div>
  </div>
}

const Github = () => {
  return (
   <Macwindow>
       <div className="cards">
        {githubData.map(project => {
          return <GitCard key={project.id} data={project} />
        }

        )}
       </div>

   </Macwindow>
  )
}

export default Github
