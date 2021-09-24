import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '../Ui/Button'
import './Navbar.css'
function Navbar() {
    const[menuState,setMenuState] = useState(false)
    const [buttonState,setButtonState] = useState(true)
    const menuHandler = () =>setMenuState(!menuState)
    const closeMobileMenu = () => setMenuState(false)

    const handleButton = () =>{
        if(window.innerWidth<=960){
            setButtonState(false)
        }else{
            setButtonState(true) 
        }
    }
    window.addEventListener('resize',handleButton)
    return (
        <nav className="navbar">
            <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                Travel  <i class="fab fa-typo3"></i>
            </Link>
              <div className="menu-icon" onClick={menuHandler}>
              <i className={menuState ?'fas fa-times' : 'fas fa-bars'} />
               </div>  
               <ul className={menuState ?'nav-menu active' : 'nav-menu'}>
                  <li className="nav-item">
                      <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                          صفحه اصلی
                      </Link>
                      </li> 
                      <li className="nav-item">
                      <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                          گردشگری
                      </Link>
                      </li>
                      <li className="nav-item">
                      <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                          تور
                      </Link>
                      </li>
                      <li>
                          <Link
                           to="/"
                           className="nav-links-mobile"
                           onClick={closeMobileMenu}
                           >
                               ثبت نام
                           </Link>
                      </li>
                   </ul> 
                   {
                       buttonState ?
                    <Button buttonStyle="btn--outline" to="/">
                        ثبت نام
                    </Button>:null
                   }
            </div>
        </nav>
    )
}

export default Navbar
