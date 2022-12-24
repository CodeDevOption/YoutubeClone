import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='flex items-center h-[10vh] p-2 sticky z-10 bg-black top-0 justify-between'>
     <Link to="/" className='flex items-center'>
      <img src={logo} alt="logo" className='h-11' />
     </Link>
     <SearchBar />
    </div>
  )
}
  
export default Navbar