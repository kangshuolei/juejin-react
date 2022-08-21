/*
 * @Author: Kang
 * @Date: 2022-01-05 10:23:03
 * @Last Modified by: Kang
 * @LastEditTime: 2022-01-05 17:41:12
 */
import React,{ FC, useState } from "react";
import './index.less'
import Comments from 'assets/images/comments.png'
import CommentsHover from 'assets/images/comments_hover.png'
import GiveLike from 'assets/images/giveLike.png'
import GiveLikeHover from 'assets/images/giveLike_hover.png'
import Views from 'assets/images/views.png'

type newListObj = {
    author:string,  //发布作者
    time:string,    //发布时间
    label:string,   //发布标签
    new:{
        title:string,   //发布标题
        text: string,   //发布内容
        views: string,  //文章浏览数量
        giveLike:number,    //文章点赞数量
        comments:number     //文章评论数量
    }
}

type Iprops = {
    data: newListObj
}


const NewListItem:FC<Iprops> = (props) => {

    let { data } = props

    const [backColor, setBackColor] = useState('RGB(255,255,255)');
    const [GiveLikeImg, setGiveLikeImg] = useState(GiveLike)
    const [hoverGiveLikeText, setGiveLikeHoverText] = useState('#4e5969')
    const [CommentImg, setCommentImg] = useState(Comments)
    const [hoverCommentText, setCommentHoverText] = useState('#4e5969')

    const toggleHover = item => {
        item === true ?  setBackColor('RGB(250,250,250)') : setBackColor('RGB(255,255,255)')
    }

    const GiveLikeHoverFun = item => {
        if( item === true ){
            setGiveLikeImg(GiveLikeHover)
            setGiveLikeHoverText('#1d7dfa')
        }else{
            setGiveLikeImg(GiveLike)
            setGiveLikeHoverText('#4e5969')
        }
    }

    const CommentsHoverFun = item => {
        if( item === true ){
            setCommentImg(CommentsHover)
            setCommentHoverText('#1d7dfa')
        }else{
            setCommentImg(Comments)
            setCommentHoverText('#4e5969')
        }
    }

    return (
        <div style={{backgroundColor:backColor}} onMouseEnter={()=>toggleHover(true)} onMouseLeave={()=>toggleHover(false)} className="new_main">
            <div className="new_message">
                <div className="author">{data.author}</div>
                <div className="time">{data.time}</div>
                <div className="label">
                    <div className="lable_item">{data.label}</div>
                </div>
            </div>
            <div className="new_content">
                <div className="new_title">{data.new.title}</div>
                <div className="new_text">{data.new.text}</div>
                <div className="new_interactive">
                    <div className="interactiveItem">
                        <img src={Views} alt="es-lint want to get" />
                        <div>{data.new.views}</div>
                    </div>
                    <div className="interactiveItem" onMouseEnter={()=>GiveLikeHoverFun(true)} onMouseLeave={()=>GiveLikeHoverFun(false)}>
                        <img src={GiveLikeImg} alt="es-lint want to get" />
                        <div style={{color:hoverGiveLikeText}}>{data.new.giveLike}</div>
                    </div>
                    <div className="interactiveItem" onMouseEnter={()=>CommentsHoverFun(true)} onMouseLeave={()=>CommentsHoverFun(false)}>
                        <img src={CommentImg} alt="es-lint want to get" />
                        <div style={{color:hoverCommentText}} >{data.new.comments}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewListItem;