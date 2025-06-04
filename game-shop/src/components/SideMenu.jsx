import React, {useState} from 'react'
import navListData from '../data/navListData'
import NavListItem from './NavListItem'
import './sideMenu.css'

function SideMenu({ active }) {
    const [navData, setNavData] = useState(navListData);
  return (
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
      <a href="#" className='logo'>
              <i class="bi bi-steam"></i>
              <span className='brand'>Steam</span>
      </a>
      <ul className="nav">
        {
        navData.map(item => (
            <NavListItem key={item._id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default SideMenu
