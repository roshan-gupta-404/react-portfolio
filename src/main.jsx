import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home, About, Contact, User, Github } from './components/Index.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'

// First Way to route.
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>,
      
//       },
//       {
//         path:'about',
//         element:<About/>,
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])


// Second Way to route.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element= {<Home/>} />
      <Route path='about' element= {<About/>} />
      <Route path='contact' element= {<Contact/>} />
      <Route path='user/:name' element= {<User/>} />
      <Route 
      loader={githubInfoLoader}
      // Loader allow us to fire api call even before useEffect or loading of components. It listen to hover and execute codes. We can write total api calls in this. Read documentations for more.
      path='github' element= {<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
