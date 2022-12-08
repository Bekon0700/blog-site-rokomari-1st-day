import '../src/sass/main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import Main from './layout/Main'
import PostBlog from './pages/post-blog/PostBlog'
import SingleBlog from './pages/single-blog/SingleBlog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post-blogs',
        element: <PostBlog />
      },
      {
        path: '/blog',
        element: <SingleBlog />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
