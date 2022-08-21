/*
 * @Author: Kang
 * @Date: 2021-12-29 18:15:55
 * @Last Modified by: Kang
 * @LastEditTime: 2022-01-06 14:11:38
 */
import React,{ FC, useEffect } from "react";
import './index.less'
import Menus from "compoents/Header/component/menu";
import { NewListItem } from 'compoents/components';
import { useScrollMon } from 'Hooks/ScrollsMonitor'

const Home:FC = () => {
    const menuList = [
        {
            title: '推荐',
            path: '/',
            isHover:false,
            isMaster: true
        },
        {
            title: '后端',
            path: '/feidian',
            isHover:false,
            isMaster: true
        },
        {
            title: '前端',
            path: '/zixun',
            isHover:false,
            isMaster: true
        },
        {
            title: 'Android',
            path: '/kecheng',
            isHover:false,
            isMaster: true
        },
        {
            title: 'IOS',
            path: '/huodong',
            isHover:false,
            isMaster: true
        },
        {
            title: '人工智能',
            path: '/huodong',
            isHover:false,
            isMaster: true
        },
        {
            title: '开发工具',
            path: '/huodong',
            isHover:false,
            isMaster: true
        },
        {
            title: '代码人生',
            path: '/huodong',
            isHover:false,
            isMaster: true
        },
        {
            title: '阅读',
            path: '/huodong',
            isHover:false,
            isMaster: true
        },
    ]
    const navList = [
        {
            title: '热门',
            path: '/remen',
            isHover:false,
        },
        {
            title: '最新',
            path: '/zuixin',
            isHover:false,
        },
        {
            title: '热榜',
            path: '/rebang',
            isHover:false,
        }
    ]
    const newListData = [
        {
            id:1,
            author:'康硕雷',
            time:'1天前',
            label:'前端',
            new:{
                title:'都2022年了，还不用Jenkins自动化部署？',
                text: '前端时间与室友在交流中聊到了互联网每个岗位的职责，然后就聊到了测试岗位！一个同学不禁发问："如果我们开发接到了特别庞大的项目',
                views: '288w',
                giveLike:288,
                comments:288
            }
        },
        {
            id:2,
            author:'康硕雷',
            time:'1天前',
            label:'前端',
            new:{
                title:'都2022年了，还不用Jenkins自动化部署？',
                text: '前端时间与室友在交流中聊到了互联网每个岗位的职责，然后就聊到了测试岗位！一个同学不禁发问："如果我们开发接到了特别庞大的项目',
                views: '288w',
                giveLike:288,
                comments:288
            }
        },
        {
            id:3,
            author:'康硕雷',
            time:'1天前',
            label:'前端',
            new:{
                title:'都2022年了，还不用Jenkins自动化部署？',
                text: '前端时间与室友在交流中聊到了互联网每个岗位的职责，然后就聊到了测试岗位！一个同学不禁发问："如果我们开发接到了特别庞大的项目',
                views: '288w',
                giveLike:288,
                comments:288
            }
        },
        {
            id:4,
            author:'康硕雷',
            time:'1天前',
            label:'前端',
            new:{
                title:'都2022年了，还不用Jenkins自动化部署？',
                text: '前端时间与室友在交流中聊到了互联网每个岗位的职责，然后就聊到了测试岗位！一个同学不禁发问："如果我们开发接到了特别庞大的项目',
                views: '288w',
                giveLike:288,
                comments:288
            }
        },
        {
            id:5,
            author:'康硕雷',
            time:'1天前',
            label:'前端',
            new:{
                title:'都2022年了，还不用Jenkins自动化部署？',
                text: '前端时间与室友在交流中聊到了互联网每个岗位的职责，然后就聊到了测试岗位！一个同学不禁发问："如果我们开发接到了特别庞大的项目',
                views: '288w',
                giveLike:288,
                comments:288
            }
        },
        {
            id:6,
            author:'康硕雷',
            time:'1天前',
            label:'前端',
            new:{
                title:'都2022年了，还不用Jenkins自动化部署？',
                text: '前端时间与室友在交流中聊到了互联网每个岗位的职责，然后就聊到了测试岗位！一个同学不禁发问："如果我们开发接到了特别庞大的项目',
                views: '288w',
                giveLike:288,
                comments:288
            }
        },
        {
            id:7,
            author:'康硕雷',
            time:'1天前',
            label:'前端',
            new:{
                title:'都2022年了，还不用Jenkins自动化部署？',
                text: '前端时间与室友在交流中聊到了互联网每个岗位的职责，然后就聊到了测试岗位！一个同学不禁发问："如果我们开发接到了特别庞大的项目',
                views: '288w',
                giveLike:288,
                comments:288
            }
        },
        {
            id:8,
            author:'康硕雷',
            time:'1天前',
            label:'前端',
            new:{
                title:'都2022年了，还不用Jenkins自动化部署？',
                text: '前端时间与室友在交流中聊到了互联网每个岗位的职责，然后就聊到了测试岗位！一个同学不禁发问："如果我们开发接到了特别庞大的项目',
                views: '288w',
                giveLike:288,
                comments:288
            }
        },
        {
            id:9,
            author:'康硕雷',
            time:'1天前',
            label:'前端',
            new:{
                title:'都2022年了，还不用Jenkins自动化部署？',
                text: '前端时间与室友在交流中聊到了互联网每个岗位的职责，然后就聊到了测试岗位！一个同学不禁发问："如果我们开发接到了特别庞大的项目',
                views: '288w',
                giveLike:288,
                comments:288
            }
        },
        {
            id:10,
            author:'康硕雷',
            time:'1天前',
            label:'前端',
            new:{
                title:'都2022年了，还不用Jenkins自动化部署？',
                text: '前端时间与室友在交流中聊到了互联网每个岗位的职责，然后就聊到了测试岗位！一个同学不禁发问："如果我们开发接到了特别庞大的项目',
                views: '288w',
                giveLike:288,
                comments:288
            }
        },
    ]
    const stylesMenu = {
        fontSize: 13,
    }

    const scroll = useScrollMon();

    return (
        <>
            <div className={`${scroll === false ? "homeMainMenu top" : 'homeMainMenu'}`}>
                <div className="homeMainContain">
                    <Menus stylesMenu={stylesMenu} data={menuList} />
                </div>
            </div>
            <div className="timeline_container">
                <div className="timeline_content">
                    <div className="timeline_entry_list">
                        <div className="entry_list_container">
                            <header>
                                {
                                    navList.map(item =>{
                                        return (
                                            <div key={item.path} className="navItem">{item.title}</div>
                                        )
                                    })
                                }
                            </header>
                            {
                                newListData.map(item => {
                                    return (
                                        <NewListItem key={item.id} data={item} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <aside>
                        <div className="signin_tip">
                            <span className="siginText">上午好！</span>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}
export default Home