import { Link,useRouteError } from "react-router-dom"


export default function CareersError() {

    const error=useRouteError()
    

  return (
    <div className='careers-error'>
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link path='/'>Back to <b>HOMEPAGE</b></Link>
        </div>
  )
}
