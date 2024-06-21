import React from 'react'
import "./Main.css"
import { Container, Row, Col, Button } from 'react-bootstrap'
import LineChart from '../LineChart/LineChart'
import BarGraph from '../BarGraph/BarGraph'
import DailyBarGraph from "../DailyBarGraph/DailyBarGraph"
import PieChart from '../PieChart/PieChart'
import Calendar from '../Calender/Calendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger, faClock } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faBell } from '@fortawesome/free-regular-svg-icons/faBell'
import { faMoon } from '@fortawesome/free-regular-svg-icons/faMoon'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { faCalendar } from '@fortawesome/free-regular-svg-icons/faCalendar'
import { faCircleCheck, faCirclePlay, faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons/faGripVertical'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons/faStopwatch'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical'



export default function Main() {
  return (
    <Container className='m-0'>
    <main className='p-3'>
        <section className='d-flex justify-content-between flex-wrap align-items-center'>
            <div >
                <span>Pages / Dashboard</span>
                <h1>Main Dashboard</h1>
            </div>
            <div className='input_field_container'>
                <div>
                    <input type='text' className='header_input_field' placeholder='Search'/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='search_icon_position'/>
                </div>
                <FontAwesomeIcon icon={faBell} className='header_icons'/>
                <FontAwesomeIcon icon={faMoon} className='header_icons'/>
                <FontAwesomeIcon icon={faCircleInfo} className='header_icons'/>
                <img src='images/Avatar.png' className='header_icons'/>
            </div>
        </section>
        <section className='small_all_cards_main_container'>
            <div className='small_cards_conainer p-2 ml-1'>
                <img className='trade_icon_bg p-1 m-3' src='images/trade_icon.png'/>
                <div>
                    <span className='card_earnings_span'>Earnings</span>
                    <h3 className='cards_price_head'>$350.4</h3>
                </div>
            </div>
            <div className='small_cards_conainer p-2'>
                <img className='trade_icon_bg p-1 m-3' src='images/doller_icon.png'/>
                <div>
                    <span className='card_earnings_span'>Spend this month</span>
                    <h3 className='cards_price_head'>$642.39</h3>
                </div>
            </div>
            <div className='small_cards_conainer small_cards_conainer_3 p-2'>
                <div className='ml-3'>
                    <span className='card_earnings_span'>Sales</span>
                    <h3 className='cards_price_head pl-2'>$574.34</h3>
                    <p className='last_month_para'><span className='percent_span'>+23% </span>since last month</p>
                </div>
            </div>
            <div className='small_cards_conainer small_cards_conainer_4 p-2'>
                <div>
                    <span className='card_earnings_span'>Your balance</span>
                    <h3 className='cards_price_head'>$1000</h3>
                </div>
                <div className='down_arrow_img_sec'>
                    <img className='trade_icon_bg p-1 m-3' src='images/ellipse_icon.png'/>
                    <FontAwesomeIcon icon={faChevronDown}/>
                </div>
            </div>
            <div className='small_cards_conainer p-2'>
                <img className='trade_icon_bg p-1 m-3' src='images/tasks_icon.png'/>
                <div>
                    <span className='card_earnings_span'>New tasks</span>
                    <h3 className='cards_price_head'>154</h3>
                </div>
            </div>
            <div className='small_cards_conainer p-2'>
                <img className='trade_icon_bg p-2 m-3' src='images/file_icon.png'/>
                <div>
                    <span className='card_earnings_span'>Total projects</span>
                    <h3 className='cards_price_head'>2935</h3>
                </div>
            </div>
        </section>
        <section>
        <Row>
                    <Col md= {6}>
                        <div className='d-flex flex-column flow_charts_section mt-3 p-5'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span className='calender_icon_sec'>
                                    <FontAwesomeIcon icon={faCalendar} className='calender_icon_style'/>
                                    This Month
                                </span>
                                <img src='images/trade_icon.png' className='common_bg_style'/>
                            </div>
                            <div className='d-flex'>
                                <div className='linechart_left_container'>
                                    <h2 className='mt-4'>$37.5k</h2>
                                    <span className='total_spent_span'>Total Spent <span className='total_spent_green'>+2.45%</span> </span>
                                    <div className='mt-4'>
                                        <FontAwesomeIcon icon={faCircleCheck} className='circle_check_icon_style'/>
                                        <span className='circle_check_icon_style'>On track</span>
                                    </div>
                                </div>
                                <div className=' lineChart_container mt-4'>
                                    <LineChart/>
                                </div> 
                            </div> 
                        </div>
                    </Col>
                    <Col md = {6}>
                    <div className='flow_charts_section mt-3 p-3 p-5'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2 className='weekly_revenue'>Weekly Revenue</h2>
                            <img src='images/trade_icon.png' className='common_bg_style'/>
                        </div>
                        <div className='mt-1'>
                            <BarGraph/>
                        </div>
                    </div>
                    </Col>
        </Row>
        <Row className='mt-3'>
                    <Col md={6}>
                        <div className='d-flex flex-column justify-content-center check_table_section p-3 h-100'>
                            <div className='d-flex justify-content-between align-items-start'>
                                <h3 className='check_table_header'>Check Table</h3>
                                <span className='common_bg_style'>...</span>
                            </div>
                            <table className='w-100 table_border_style'>
                                <thead>
                                    <tr>
                                        <td className='common_table_head_style'>NAME</td>
                                        <td className='common_table_head_style'>PROGRESS</td>
                                        <td className='common_table_head_style'>QUANTITY</td>
                                        <td className='common_table_head_style'>DATE</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='common_table_desc_td'>
                                        <td>
                                            <input type='checkbox' id='checkbox1' />
                                            <label htmlFor='checkbox1' className='d-inline-block mx-2'>Horizon UI PRO</label>
                                        </td>
                                        <td>17.5%</td>
                                        <td>2.458</td>
                                        <td>24.Jan.2021</td>
                                    </tr>
                                    <tr className='common_table_desc_td'>
                                        <td>
                                            <input type='checkbox' id='checkbox2' checked readOnly/>
                                            <label htmlFor='checkbox2' className='d-inline-block mx-2'>Horizon UI Free</label>
                                        </td>
                                        <td>10.8%</td>
                                        <td>1.485</td>
                                        <td>12.Jun.2021</td>
                                    </tr>
                                    <tr className='common_table_desc_td'>
                                        <td>
                                            <input type='checkbox' id='checkbox3' checked readOnly/>
                                            <label htmlFor='checkbox3' className='d-inline-block mx-2'>Weekly Update</label>
                                        </td>
                                        <td>21.3%</td>
                                        <td>1.024</td>
                                        <td>5.Jan.2021</td>
                                    </tr>
                                    <tr className='common_table_desc_td'>
                                        <td>
                                            <input type='checkbox' id='checkbox4' checked readOnly/>
                                            <label htmlFor='checkbox4' className='d-inline-block mx-2'>Venus 3D Asset</label>
                                        </td>   
                                        <td>31.5%</td>
                                        <td>858</td>
                                        <td>78.Mar.2021</td>
                                    </tr>
                                    <tr className='common_table_desc_td'>
                                        <td>
                                            <input type='checkbox' id='checkbox5'/>
                                            <label htmlFor='checkbox5' className='d-inline-block mx-2'>Marketplace</label>
                                        </td>
                                        <td>12.2%</td>
                                        <td>258</td>
                                        <td>17.Dec.2021</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col md= {3}>
                        <div className='d-flex flex-column justify-content-center p-3 daily_traffic_bar_graphs h-100'>
                            <div className='d-flex justify-content-between align-items-start'>
                                <span className='daily_traffic'>Daily traffic</span>
                                <span className='daily_traffic_inc_span'>+2.45%</span>
                            </div>
                            <div className='d-flex justify-content-start'>
                                <h3 className='daily_traffic_main_head'>2.579</h3>
                                <span className='align-self-center daily_traffic_span'>Visitors</span>
                            </div>
                            <div className='mt-5'>
                                <DailyBarGraph/>
                            </div>
                        </div>
                    </Col>
                    <Col md = {3}>
                        <div className='d-flex flex-column justify-content-center p-3 pie_chart_container h-100'>
                            <div className='d-flex justify-content-between'>
                                <span>Your Pie Chart</span>
                                <span>Monthly</span>
                            </div>
                            <div className='d-flex justify-content-center mt-1'>
                                <PieChart/>
                            </div>                            
                            <div className='mt-1 h-25 pie_chart_your_files_sec w-100 p-3 d-flex justify-content-between align-items-center'>
                                <div>
                                    <span className='your_files_span'>Your files</span>
                                    <p className='your_files_percentage fw-bold'>63%</p>
                                </div>
                                <div>
                                    <span className='your_files_span additional_files_span'>System</span>
                                    <p className='your_files_percentage fw-bold'>25%</p>
                                </div>
                            </div>  
                        </div>
                    </Col>
        </Row>
        <Row className='mt-3'>
                   <Col md ={6}>
                        <div className='d-flex flex-column justify-content-center check_table_section p-3 h-100'>
                            <div className='d-flex justify-content-between align-items-start'>
                                <h3 className='check_table_header'>Complex Table</h3>
                                <span className='common_bg_style'>...</span>
                            </div>
                            <table className='w-100 table_border_style'>
                                <thead>
                                    <tr>
                                        <td className='common_table_head_style'>NAME</td>
                                        <td className='common_table_head_style'>STATUS</td>
                                        <td className='common_table_head_style'>DATE</td>
                                        <td className='common_table_head_style'>PROGRESS</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='common_table_desc_td'>
                                        <td>
                                            <label htmlFor='checkbox1' className='d-inline-block'>Horizon UI PRO</label>
                                        </td>
                                        <td className='d-flex justify-content-center align-items-center'>
                                            <FontAwesomeIcon icon={faCircleCheck} className='text-success mx-2'/>
                                            <span>Approved</span>
                                        </td>
                                        <td>18 APR 2021</td>
                                        <td>
                                            <progress max="100" value="70"></progress>
                                        </td>
                                    </tr>
                                    <tr className='common_table_desc_td'>
                                        <td>
                                            <label htmlFor='checkbox2' className='d-inline-block'>Horizon UI Free</label>
                                        </td>
                                        <td>
                                            <FontAwesomeIcon icon={faCircleXmark} className='text-danger mx-2'/>
                                            <span>Disable</span>
                                        </td>
                                        <td>18 APR 2021</td>
                                        <td>
                                            <progress max="100" value="30"></progress>
                                        </td>
                                    </tr>
                                    <tr className='common_table_desc_td'>
                                        <td>
                                            <label htmlFor='checkbox4' className='d-inline-block'>Marketplace</label>
                                        </td>   
                                        <td>
                                            <FontAwesomeIcon icon={faCircleInfo} className='text-warning mx-2'/>
                                            <span>Error</span>
                                        </td>
                                        <td>20 May 2021</td>
                                        <td>
                                            <progress max="100" value="80"></progress>
                                        </td>
                                    </tr>
                                    <tr className='common_table_desc_td'>
                                        <td>
                                            <label htmlFor='checkbox3' className='d-inline-block'>Weekly Update</label>
                                        </td>
                                        <td>
                                            <FontAwesomeIcon icon={faCircleCheck} className='text-success mx-2'/>
                                            <span>Approved</span>
                                        </td>
                                        <td>12 Jul 2021</td>
                                        <td>
                                            <progress max="100" value="50"></progress>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                   </Col>
                   <Col md={3}>
                        <div className='d-flex flex-column justify-content-start tasks_checkbox_container p-3 h-100'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <input className='tasks_checkbox p-2 ' id='taskscheckbox' type='checkbox' checked readOnly/>
                                    <label htmlFor='taskscheckbox' className='d-inline-block mx-2'>Tasks</label>
                                </div>
                                <span className='common_bg_style'>...</span>
                            </div>
                            <div className='mt-3 d-flex flex-column justify-content-between h-100'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <input type='checkbox'/>
                                        <label className='mx-2 d-inline-block common_checkbox_tasks_label'>Landing Page Design</label>
                                    </div>
                                    <FontAwesomeIcon icon={faGripVertical} className='text-secondary'/>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <input type='checkbox' checked readOnly/>
                                        <label className='mx-2 d-inline-block common_checkbox_tasks_label_2 font-bold'>Dashboard Builder</label>
                                    </div>
                                    <FontAwesomeIcon icon={faGripVertical} className='text-secondary'/>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <input type='checkbox' checked readOnly/>
                                        <label className='mx-2 d-inline-block common_checkbox_tasks_label_2 font-bold'>Mobible App Design</label>
                                    </div>
                                    <FontAwesomeIcon icon={faGripVertical} className='text-secondary'/>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <input type='checkbox'/>
                                        <label className='mx-2 d-inline-block common_checkbox_tasks_label'>Illustrations</label>
                                    </div>
                                    <FontAwesomeIcon icon={faGripVertical} className='text-secondary'/>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <input type='checkbox' checked readOnly/>
                                        <label className='mx-2 d-inline-block common_checkbox_tasks_label_2 font-bold'>Promotional LP</label>
                                    </div>
                                    <FontAwesomeIcon icon={faGripVertical} className='text-secondary'/>
                                </div>
                            </div>
                        </div>
                   </Col>
                   <Col md = {3}>
                    <div className='tasks_checkbox_container p-3'>
                            <Calendar/>   
                    </div>
                   </Col>
        </Row>
        <Row className='mt-3'>
                    <Col md = {3}>
                    <div className='d-flex flex-column justify-content-between h-100'>
                    <div className='final_cards_container'>
                            <div className='p-3'>
                                <div className='d-flex align-items-center'>
                                    <img src='images/fire-icon.png'/>
                                    <div className='d-flex flex-column align-items-start mx-3'>
                                        <span className='business_design_span'>Business Design</span>
                                        <h4 className='new_lession_is_available'>New lession is available</h4>
                                    </div>
                                </div>
                                <h2 className='what_do_you_need_head fw-bold mt-3'>What do you need to know to create better products?</h2>
                        </div>                           
                        <div className='final_card_bottom_container'>
                            <div className='p-3'>
                                <div className='d-flex'>
                                        <div className='mx-2'>
                                        <FontAwesomeIcon icon={faStopwatch} className='text-success'/>
                                            <span className='stop_watch_icon_span fw-bold'>85 mins</span>
                                        </div>
                                        <div className='mx-2'>
                                            <FontAwesomeIcon icon={faCirclePlay} className='text-warning'/>
                                            <span className='stop_watch_icon_span fw-bold'>Video format</span>
                                        </div>
                                </div>
                                <div className='mt-3 d-flex justify-content-between align-items-center'>
                                    <div className='position-relative'>
                                        <img className='bottom_images_avatar_1' src='images/avatar_1.png'/>
                                        <img className='bottom_images_avatar_2' src='images/avatar_2.png'/>
                                        <img className='bottom_images_avatar_3' src='images/avatar_3.png'/>
                                        <img className='bottom_images_avatar_4' src='images/avatar_4.png'/>
                                        <img className='bottom_images_avatar_5' src='images/avatar_5.png'/>
                                    </div>
                                    <Button className='bottom_card_button'>
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                            </div>
                    </div>
                    </div>
                        
                    </Col>
                    <Col md = {3}>
                        <div className='d-flex flex-column justify-content-between h-100 final_cards_container_2 p-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h3 className='team_members_head fw-bold'>Team members</h3>
                                <span className='common_bg_style p-2'>
                                    <FontAwesomeIcon icon={faCirclePlus} className='text-primary'/>
                                    </span>
                            </div>
                            <div className='d-flex justify-content-between align-items-center p-1 common_bottom_card_bg w-100'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <img src='images/person-1.png' className='card_images_person_img'/>
                                    <div className='mx-2'>
                                        <h5 className='common_botton_sec_head'>Adela Parkson</h5>
                                        <span className='common_botton_sec_span'>Creative Director</span>
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faEllipsisVertical}/>
                            </div>
                            <div className='d-flex justify-content-between align-items-center p-1  common_bottom_card_bg w-100'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <img src='images/person-2.png' className='card_images_person_img'/>
                                    <div className='mx-2'>
                                        <h5 className='common_botton_sec_head'>Christian Mad</h5>
                                        <span className='common_botton_sec_span'>Product Designer</span>
                                    </div>
                                </div>

                                <FontAwesomeIcon icon={faEllipsisVertical}/>
                            </div>
                            <div className='d-flex justify-content-between align-items-center p-1  common_bottom_card_bg w-100'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <img src='images/person-3.png' className='card_images_person_img'/>
                                    <div className='mx-2'>
                                        <h5 className='common_botton_sec_head'>Jason Statham</h5>
                                        <span className='common_botton_sec_span'>Junior Graphic Designer</span>
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faEllipsisVertical}/>
                            </div>
                        </div>
                    </Col>
                    <Col md = {3}>
                        <div className='final_cards_container_3 p-3 h-100'>
                            <img src='images/thumb-icon.png'/>
                            <h2 className='control_card_property_head fw-bold'>Control card security in-app with a tap</h2>
                            <p className='discover_our_card_para'>Discover our cards benefits, with one tap.</p>
                            <Button className='w-100 bottom_card_button'>Cards</Button>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='h-100 final_cards_container_2 p-3'>
                            <div className='position-relative'>
                                <img className='w-100' src='images/star-bucks-bg.png'/>
                                <img src='images/star-bucks-profile.png' className='star_bucks_profile_img'/>
                                <div className='faClock_icon_bg p-2 text-center'>
                                    <FontAwesomeIcon  className='text-icon' icon={faClock}/>
                                </div>
                            </div>
                            <h2 className='mt-5'>Starbucks</h2>
                            <div>
                                <FontAwesomeIcon icon={faBurger} />
                                <span className='cashback_span fw-light'>10% cashback & off</span>
                            </div>
                        </div>
                    </Col>
        </Row>
        </section>
    </main>
    </Container>
    
  )
}