import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx'
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import BookDetails from './Components/BookDetails/BookDetails.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listed-books",
        element: <ListedBooks></ListedBooks>
      },
      {
        path:"/pages-to-read",
        element: <PagesToRead></PagesToRead>
      },
      {
        path:"/details/:bookId",
        loader:()=>fetch('data.json'),
        element: <BookDetails></BookDetails>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
