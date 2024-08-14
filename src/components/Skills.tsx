import React from 'react'



const Skills = ({propos}:{propos:ISkills}) => {
  return (
    <div className='w-full flex text-center items-center gap-3 flex-col justify-center '>
                <h1>{propos?.title}</h1>
               
    </div>
  )
}

export default Skills