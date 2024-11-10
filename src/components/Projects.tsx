import React from 'react'
import Heading from './Heading'
import Crad from './Card'
import Card from './Card'

const data =[


    {
        id:0,

        title: "static  Interactive resume",
        desc: "A Typescript-based intreactive resume built with html and Css",
        img: "/Screenshot_10-11-2024_51912_127.0.0.1.jpeg",
        tags: ["HTML","Node", "CSS", "Typescript"]
    

    },

]





const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
     <Heading title= 'My Projects' />
     <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2  lg:grid-cols-3 place-items-center'>
      {data.map((el) => <Card 
       key={el.id}
       title={el.title}
       desc={el.desc}
       img={el.img}
       tags={el.tags}
      />)}
     </div>
    </div>
  )
}

export default Projects