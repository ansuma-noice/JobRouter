import React from 'react'
// import { BrowserRouter,Routes,Route,Link, NavLink } from 'react-router-dom'

// pages
import Home from './pages/home'
import About from './pages/about'
import Faq from './pages/help/faq'
import Contact, { contactAction } from './pages/help/contact'
import NotFound from './pages/NotFound'
import Careers,{ careersLoader } from './pages/careers/Careers'
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails'
import CareersError from './pages/careers/CareersError'

import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route  path='about' element={<About/>}/>
        <Route path='help' element={<HelpLayout/>}>
          <Route path='faq' element={<Faq/>}/>
          <Route path='contact' element={<Contact/>} action={contactAction}/>
        </Route>

        <Route path='careers' element={<CareersLayout/>} errorElement={<CareersError/>}   >
          <Route index element={<Careers/>} loader={careersLoader}/>
          <Route path=':id' element={<CareerDetails/>} loader={careerDetailsLoader} />
        </Route>

        <Route path='*' element={<NotFound/>} />
      </Route>
  )
)

function App() {
  return (
    // <BrowserRouter>
    // <header>
    //   <nav>
    //     <h1>JobRouter</h1>
    //     {/* <Link to='/'>Home</Link>doesn't become active */ }


    //     <NavLink to='/'>Home</NavLink>
    //     <NavLink to='about'>About</NavLink>
    //   </nav>
    // </header>
    //  <main>
    //   <Routes>
    //     <Route path='/' element={<Home/>}></Route>
    //     <Route  path='about' element={<About/>}></Route>
    //   </Routes>
    //  </main>
    
    // </BrowserRouter>
    <>
    <RouterProvider router={router} />
    </>

  )
}

export default App
