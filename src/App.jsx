import '../src/sass/main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import Main from './layout/Main'
import PostBlog from './pages/post-blog/PostBlog'
import SingleBlog from './pages/single-blog/SingleBlog'
import CreateTags from './pages/create-tags/CreateTags'
import { Toaster } from 'react-hot-toast'
import Login from './pages/login/Login'
import Registration from './pages/registration/Registration'

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
      },
      {
        path: '/create-tags',
        element: <CreateTags />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Registration />
      },
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Toaster />
      </RouterProvider>
    </div>
  )
}

export default App
