/*
 * @Author: Kang
 * @Date: 2022-01-05 15:26:52
 * @Last Modified by: Kang
 * @LastEditTime: 2022-01-05 16:39:39
 */

import React,{ useState, useEffect, useCallback } from "react"

export function useScrollMon(){
    
    const [showHeader, setShowHeader] = useState(true)

    let sign = 400;

    const scrollFunc = useCallback( e => {

        let osTop = document.documentElement.scrollTop || document.body.scrollTop;  // 滚动条距顶部的距离

        let scoreE = e || window.event;
        
        if(scoreE.wheelDelta) {   
            if(scoreE.wheelDelta > 0 && sign < osTop) {     //当鼠标滚轮向上滚动时并且滚动条大于400时 显示 Header
                setShowHeader(true)
            }
            if(scoreE.wheelDelta < 0 && sign < osTop ) {     //当鼠标滚轮向下滚动时并且滚动条距顶部 大于400时 隐藏 Header
                setShowHeader(false)
            }
        } else if(scoreE.detail) {
            if(scoreE.detail < 0 && sign < osTop ) {    //当鼠标滚轮向上滚动时并且滚动条大于400时 显示 Header
                setShowHeader(true)
            }
            if(scoreE.detail > 0 && sign < osTop) {   //当鼠标滚轮向下滚动时并且滚动条距顶部 大于400时 隐藏 Header
                setShowHeader(false)
            }
        }
    },[])

     

    useEffect(() => {
        //    给页面绑定鼠标滚轮事件,针对火狐的非标准事件 
        window.addEventListener("DOMMouseScroll", scrollFunc)
        //    给页面绑定鼠标滚轮事件，针对Google，mousewheel非标准事件已被弃用，请使用 wheel事件代替
        window.addEventListener("wheel", scrollFunc)
        //    ie不支持wheel事件，若一定要兼容，可使用mousewheel
        window.addEventListener("mousewheel", scrollFunc)
        return () => {
            window.removeEventListener("DOMMouseScroll",scrollFunc)
            window.removeEventListener("wheel",scrollFunc)
            window.removeEventListener("mousewheel",scrollFunc)
        }
    }, [])

    return showHeader;
    
}