import React, {useContext} from 'react'
import userImg from '../images/user.jpg'
import { AppContext } from '../App';
import './header.css';

function Header({ toggleActive }) {
    const { library, setLibrary, bag, setBag } = useContext(AppContext);
  return (
    <header className='header'>
          <a href="#" className="menu" onClick={toggleActive}>
              <i class="bi bi-list"></i>
        </a>
        <div className="userItems">
            <a href="#" className="icon">
                  <i class="bi bi-heart"></i>
                  <span className="like">{library.length}</span>
            </a>
            <a href="#" className="icon">
                  <i class="bi bi-basket"></i>
                  <span className="bag">{bag.length}</span>
            </a>
            <div className="avatar">
                <a href="#">
                    <img src={userImg} alt="User Image" />
                </a>
                <div className="user">
                    <span>User Name</span>
                    <a href="#">View Profile</a>
                </div>
            </div>

        </div>
    
    </header>
  )
}

export default Header