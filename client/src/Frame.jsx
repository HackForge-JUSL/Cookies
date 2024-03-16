import React from 'react'
import "./frame.css"
import Schedule from './components/Schedule/Schedule'
import {Link, NavLink, Outlet} from 'react-router-dom'

function Frame() {
  return (
    <>
    <div id="wraper">
        <div id="topbarWraper">
            <div id="topbar">
                <div id="brand">
                    <img src="https://cdn-icons-png.flaticon.com/128/8224/8224757.png" alt="OutShineLogo" />
                    <h1>OutShine</h1>
                </div>
                <div id="profile">
                    <img src="https://cdn-icons-png.flaticon.com/128/4140/4140061.png" alt="" />
                    <h3>Cookies</h3>
                </div>
            </div>
        </div>
        <div id="sidebarWraper">
            <div id="sidebar">
                <div id="options">
                    <NavLink to={"/"} className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive?"text-white":"text-gray-700"} 
                                        ${isActive?"bg-black":""}  
                                        ${isActive?"pointer-events-none":"" } 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent
                                        lg:border-0 hover:text-violet-700 lg:p-0 links`}>
                    <div className="route">
                        <i className="fi fi-rr-calendar-clock"></i>
                        <h2>SCHEDULE</h2>
                    </div>
                    </NavLink>
                    
                    <NavLink to={"/material"} className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive?"text-white":"text-gray-700"} 
                                        ${isActive?"bg-black":""} 
                                        ${isActive?"pointer-events-none":"" } 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                        lg:border-0 hover:text-violet-700 lg:p-0 links`}>
                    <div className="route">
                        <i className="fi fi-rr-books"></i>
                        <h2>MATERIAL</h2>
                    </div>
                    </NavLink>

                    <NavLink to={"/assignment"} className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive?"text-white":"text-gray-700"} 
                                        ${isActive?"bg-black":""} 
                                        ${isActive?"pointer-events-none":"" } 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent
                                         lg:border-0 hover:text-violet-700 lg:p-0 links`}>
                    <div className="route">
                        <i className="fi fi-rr-test"></i>
                        <h2>ASSIGNMENTS</h2>
                    </div>
                    </NavLink>

                    <NavLink to={"/quiz"} className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive?"text-white":"text-gray-700"} 
                                        ${isActive?"bg-black":""}
                                        ${isActive?"pointer-events-none":"" } 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                        lg:border-0 hover:text-violet-700 lg:p-0 links`}>
                    <div className="route">
                        <i class="fi fi-rr-messages-question"></i>
                        <h2>QUIZ</h2>
                    </div>
                    </NavLink>

                    <NavLink to={"/blogs"} className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive?"text-white":"text-gray-700"} 
                                        ${isActive?"bg-black":""} 
                                        ${isActive?"pointer-events-none":"" } 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                        lg:border-0 hover:text-violet-700 lg:p-0 links`}>
                    <div className="route">
                        <i className="fi fi-rr-blog-text"></i>
                        <h2>BLOGS</h2>
                    </div>
                    </NavLink>

                    <NavLink to={"/dashboard"} className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive?"text-white":"text-gray-700"} 
                                        ${isActive?"bg-black":""} 
                                        ${isActive?"pointer-events-none":"" } 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                        lg:border-0 hover:text-violet-700 lg:p-0 links`}>
                    <div className="route">
                        <i className="fi fi-rr-dashboard"></i>
                        <h2>DASHBOARD</h2>
                    </div>
                    </NavLink>

                </div>
            </div>
        </div>
        <div id="mainBody">
            <Outlet />
        </div>
    </div>cd
    </>
  )
}

export default Frame