import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as aiIcons from 'react-icons/ai'
import * as ioIcons from 'react-icons/io'

export const SidebarData=[
    {
        title:'Home',
        path:'/',
        icon:<aiIcons.AiFillHome/>,
        cname:'nav-text'
    },
    {
        title:'Reports',
        path:'/reports',
        icon:<ioIcons.IoIosPaper/>,
        cname:'nav-text'
    },
    {
        title:'Products',
        path:'/products',
        icon:<FaIcons.FaCartPlus/>,
        cname:'nav-text'
    },
    {
        title:'Team',
        path:'/team',
        icon:<ioIcons.IoMdPeople/>,
        cname:'nav-text'
    },
    {
        title:'Message',
        path:'/messages',
        icon:<aiIcons.AiOutlineMessage/>,
        cname:'nav-text'
    },
    {
        title:'Analytics',
        path:'/analytics',
        icon:<ioIcons.IoMdAnalytics/>,
        cname:'nav-text'
    },
]

