import React from 'react'
import { useContact,OpenProps } from '../context/OpenProvider';
import { FaBars } from "react-icons/fa"

export default function Header() {
  const OpenContext=useContact()
  const {open,openSidebar}=OpenContext as OpenProps
  return (
    <div>
      <main>
        <button
          onClick={openSidebar}
          className={`${open ? '-translate-x-8' : 'translate-x-0'
            } fixed top-2 transition transform ease-linear duration-500 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800`}
        >
          <FaBars className="w-5 h-5" />
        </button>
      </main>
    </div>
  )
}
