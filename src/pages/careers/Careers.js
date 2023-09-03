import { useLoaderData,Link } from "react-router-dom"


export default function Careers() {

    const careers=useLoaderData()

  return (
    <div className="careers">
     {careers.map(career=>(
        <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>based in {career.location}</p>
        </Link>
     ))}

    </div>
  )
}

// loader fn
export const careersLoader= async()=>{
    const res = await fetch('https://job-router.onrender.com/careers')

    if(!res.ok) throw Error('Could not fetch the careers')

    return res.json()
}
