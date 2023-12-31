import React, { useContext } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import "./navbar.scss"
import { AuthContext } from '../../context/authContext';



const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext)
  
  const { currentUser } = useContext(AuthContext)


  return (
    <div className='navbar'>
      <div className="left">
        <Link to={"/"} style={{textDecoration:"none"}}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon/>
        {darkMode ? 
          <DarkModeOutlinedIcon onClick={toggle} />
          :
          <WbSunnyOutlinedIcon onClick={toggle} />
        }
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="search" placeholder='Search...' />
        </div>
      </div>

      <div className="right">
        <PersonOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src={currentUser.profilePicture} alt="userImage" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar