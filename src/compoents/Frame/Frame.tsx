/*
 * @Author: Kang
 * @Date: 2021-12-29 18:06:01
 * @Last Modified by: Kang
 * @LastEditTime: 2022-01-06 23:23:25
 */
import React,{FC, ReactNode} from 'react'
import Header from '../Header'
import './index.less'
import { useScrollMon } from 'Hooks/ScrollsMonitor'
import { useLocation } from 'react-router-dom'

type Iprops = { 
    children: ReactNode   //单页面的路由页面
}

const Frame:FC<Iprops> = ({ children },props) => {

    const scroll = useScrollMon();
    const location = useLocation();
    const hideHeaderPath = ['/WriteArticle']
    const hideHeader = hideHeaderPath.includes(location.pathname.trim())


    return (
        <div>
            {
                hideHeader ? null :  (    
                    <div className="main-header-box" >
                        <div className={`${scroll === false ? "headerMain top" : 'headerMain'}`}>
                            <Header />
                        </div>
                    </div>
                )
            }
            {
                children
            }
        </div>
    )
}
export default Frame;