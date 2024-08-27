import React from "react"
import { Link, Outlet } from "react-router-dom"

const Root = () => {
  return (
    <div>
      <header className="flex py-2 gap-2 h-16 item-center justify-between bg-primary px-16">
        <Link to={"/"} className="flex items-center ">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="h-8 min-w-[90px] text-white"
          />
        </Link>
        <Link to={"/jobs"} className="flex items-center  text-white font-bold">
          Offres d'emploi
        </Link>
      </header>
      <main className="px-8 py-4 w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default Root
