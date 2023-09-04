
import { useLoaderData, useParams } from 'react-router-dom'



export default function CareerDetails() {

    const {id}=useParams()
    const careerT=useLoaderData()

  return (
    <div className='career-details'>
        <h2>Career Details for {careerT.title}</h2>
        <p>Starting Salary: {careerT.salary}</p>
        <p>Starting Location: {careerT.location}</p>
        <div className='details'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias</p>
        </div>
    </div>
  )
}

// loader function
export const careerDetailsLoader=async({params})=>{
    const {id}=params

    const res=await fetch('https://ansuma-noice.github.io/db/db.json/'+id)

    if(!res.ok) throw Error('Could not find that career')

    return res.json()
}
