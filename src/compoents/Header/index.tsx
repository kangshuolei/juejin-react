/*
 * @Author: Kang
 * @Date: 2021-12-30 09:40:32
 * @Last Modified by: Kang
 * @LastEditTime: 2022-01-06 14:40:37
 */
import React,{FC} from 'react'
import { Input, Dropdown, Menu, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import styles from './index.module.less'
import Menus from './component/menu'
import { useNavigate  } from 'react-router-dom';



const Header:FC = (props) => {   


    let navigate  = useNavigate();

    const menu = (
        <Menu>
          <Menu.Item key="1">发布沸点</Menu.Item>
        </Menu>
    );

    const menuList = [
        {
            title: '首页',
            path: '/',
            isHover:false,
            isMaster: true
        },
        {
            title: '沸点',
            path: '/feidian',
            isHover:false,
            isMaster: true
        },
        {
            title: '资讯',
            path: '/zixun',
            isHover:false,
            isMaster: true
        },
        {
            title: '课程',
            path: '/kecheng',
            isHover:false,
            isMaster: true
        },
        {
            title: '活动',
            path: '/huodong',
            isHover:false,
            isMaster: true
        },
    ]

    const stylesMenu = {
        fontSize: 16,
    }

    const writeArticleHandle = () => {
        navigate('/WriteArticle')
    }

    return (
        <div className={styles.Header_main}>
            <div className={styles.Header_main_container}>
                <img  className={styles.Header_container_logo} src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7abc2b532f725d394feaf0141547ade7.svg" alt="稀土掘金"   />
                <Menus stylesMenu={stylesMenu} data={menuList} />
                <div className={styles.Header_link_main}>
                    <img className={styles.Header_container_link} src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/703c1aa0961b4e0cbf97070af56eb4ea~tplv-k3u1fbpfcp-zoom-1.image" alt="稀土掘金"    />
                </div>
                <div className={styles.Header_search_input}>
                    <Input placeholder="探索稀土掘金"  
                        suffix={
                              <img  src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/8f68a2223e9650f14d6e6781cdcd717a.svg"  />
                          }
                    />
                </div>
                <div className={styles.creationBtn}>
                    <Button 
                    >
                        创作工作者
                    </Button>
                </div>
                <div className={styles.writeArticle}>
                    <Dropdown.Button
                        type="primary"
                        icon={<DownOutlined />}
                        overlay={menu}
                        trigger={['click']}
                        onClick={writeArticleHandle}
                        >
                        写文章
                    </Dropdown.Button>
                </div>
                <div className={styles.message}>
                    <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/c7f91fad712592633383df6aa430c93c.svg" />
                </div>
                <div className={styles.photo}>
                    <img src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3791/5070639578~120x256.image" />
                </div>
            </div>
        </div>
    )
}

export default Header