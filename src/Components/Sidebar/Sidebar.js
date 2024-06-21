import { faSignal5 } from '@fortawesome/free-solid-svg-icons';
import { faHome, width } from '@fortawesome/free-solid-svg-icons/faHome';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faThLarge } from '@fortawesome/free-solid-svg-icons/faThLarge';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import './Sidebar.css'


const Sidebar = (props) => {
  const {show, showHideBtn} = props;
  const sidebarStyles = {
    backgroundColor: 'white',
    position: 'fixed',
    top: 0,
    left: show ? 0 : '-195px',
    minHeight: '650px',
    width:  '250px',
    transition: 'left 1s ease',
    zIndex: 1000,
    padding: '10px 10px' ,
  };
  const sideberIconsPos = {
    position: 'absolute',
    right: '-4%',
    top: '18%',
    opacity: show ? 0 : 1,
    transitionProperty: 'opacity',
    transitionDelay: show ? '0s': '1s',
  }
  const newImgSidebar = {
    position : 'relative',
    opacity : show ? 1 : 0,
    transitionProperty: 'opacity',
    transitionDelay: show ? '0s': '1s',
  } 
  const showHide = () => {
    showHideBtn();
  }
  return (
    <div style={sidebarStyles} className='d-flex flex-column justify-content-between align-items-start'>
        <Button className={`show_hide_button`} onClick={showHide}>
          {show ? <FontAwesomeIcon icon={faClose}/> :<FontAwesomeIcon icon={faBars}/> }
        </Button>
      <div>
        <h1 className='fw-bold horizon_sidebar_head mt-4 px-2'>HORIZON <span className='fw-light'>Free</span></h1>
        <Nav className="flex-column mt-5">
          <Nav.Link href="#" className='active' ><FontAwesomeIcon className='mx-3 home_icon' icon={faHome}/> Dashboard</Nav.Link>
          <Nav.Link href="#" className='nav_links_style'><FontAwesomeIcon className='mx-3' icon={faShoppingCart}/>NFT Marketplace</Nav.Link>
          <Nav.Link href="#" className='nav_links_style'><FontAwesomeIcon className='mx-3' icon={faSignal5}/>Tables</Nav.Link>
          <Nav.Link href="#" className='nav_links_style'><FontAwesomeIcon className='mx-3' icon={faThLarge}/>Kanban</Nav.Link>
          <Nav.Link href="#" className='nav_links_style'><FontAwesomeIcon className='mx-3' icon={faUser}/>Profile</Nav.Link>
          <Nav.Link href="#" className='nav_links_style'><FontAwesomeIcon className='mx-3' icon={faLock}/>Sign In</Nav.Link>
        </Nav>
      <div style={sideberIconsPos} className=''>
        <Nav className="flex-column">
          <Nav.Link href="#" className='nav_links_style'><FontAwesomeIcon className='mx-3 home_icon' icon={faHome}/></Nav.Link>
          <Nav.Link href="#" className='nav_links_style'><FontAwesomeIcon className='mx-3' icon={faShoppingCart}/></Nav.Link>
          <Nav.Link href="#" className='nav_links_style'><FontAwesomeIcon className='mx-3' icon={faSignal5}/></Nav.Link>
          <Nav.Link href="#" className='nav_links_style'><FontAwesomeIcon className='mx-3' icon={faThLarge}/></Nav.Link>
          <Nav.Link href="#" className='nav_links_style'><FontAwesomeIcon className='mx-3' icon={faUser}/></Nav.Link>
          <Nav.Link href="#" className='nav_links_style'><FontAwesomeIcon className='mx-3' icon={faLock}/></Nav.Link>
        </Nav>
      </div>
      </div>
      <div style={newImgSidebar}>
          <div className='upgrade_pro_sec p-4 d-flex flex-column justify-content-end align-items-center'>
            <h5>Upgrade to PRO</h5>
            <p>to get access to all features connect with Venus World</p>
          </div>
          <img className='rounded_eclipse_pos' src='images/rounded-eclipse.png'/>
          <img className='get_pro_vector_pos' src='images/get-pro-vector.png'/>
      </div>
    </div>
  );
};

export default Sidebar;