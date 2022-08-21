/*
 * @Author: Kang
 * @Date: 2021-12-30 22:13:08
 * @Last Modified by: Kang
 * @LastEditTime: 2022-01-05 16:42:25
 */
import React,{FC} from "react";
import styles from './index.module.less'

type menuObj = {
    title: string,  //菜单标题
    path: string,   //菜单跳转路径
    isHover: boolean,  //菜单是否触碰
    isMaster: boolean   //是否是主菜单
}

type styleObj = {
    fontSize: number,   //菜单字体大小
}

type Iprops = {
    data: Array<menuObj>,   //菜单数据
    stylesMenu: styleObj    //菜单字体大小
}
 
const Menus:FC<Iprops> = (props) => {

    let { data,stylesMenu } = props

    const toggleHover = (item:menuObj) => {
        item.isHover = !item.isHover
    }
    return (
        <div className={styles.menuMain}>
            {
                data.map(item => {
                    return (
                        <div style={{...stylesMenu}} key={item.title} className={` ${styles.menuMainItem} ${item.isHover === true ? `${styles.hover}` : null }`} onMouseEnter={()=>toggleHover(item)} onMouseLeave={()=>toggleHover(item)}>
                            {item.title}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Menus;