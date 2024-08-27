import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Job from "./pages/Job"
import Root from "./pages/Root"
import { jobLoader } from "./utils/loader/job"
import { createJobAction } from "./components/Modal"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "jobs",
        element: <Job />,
        loader: jobLoader,
        action: createJobAction,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<RouterProvider router={router} />)
