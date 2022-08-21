/*
 * @Author: Kang
 * @Date: 2022-01-06 13:22:21
 * @Last Modified by: Kang
 * @LastEditTime: 2022-01-07 13:40:45
 */
import React,{ FC, useState, useEffect } from "react";
import { Editor } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import mermaid from '@bytemd/plugin-mermaid'
import "./index.less"
import "bytemd/dist/index.min.css";
import "highlight.js/styles/vs.css";
import zhHans from "bytemd/lib/locales/zh_Hans.json"; 
import "assets/css/smart-blue.css"
import 'juejin-markdown-themes/dist/juejin.min.css'
import { Button } from "antd";
import {ReactSVG} from 'react-svg'
import switchSvg from  'assets/images/switch.svg'
import '@wangeditor/editor/dist/css/style.css'
import { Editor as EditorFu, Toolbar } from '@wangeditor/editor-for-react'

const plugins = [
    gfm(),
    highlight(),
    mermaid()
    // Add more plugins here
]

const WriteArticle:FC = () => {

    const [value, setValue] = useState('')

    const [isMarkDown, setisMarkDown] = useState(false)

    const [editor, setEditor] = useState(null) // 存储 editor 实例
    const defaultContent = [] // 编辑器默认内容，空内容
    
    const toolbarConfig = {} // 菜单栏配置
    
    // 编辑器配置
    const editorConfig = {
        placeholder: '请输入内容...',
        onCreated: (editor) => {
            // 编辑器创建之后，记录 editor 实例，重要 ！！！ （有了 editor 实例，就可以执行 editor API）
            setEditor(editor)
        },
        onChange: (editor) => {
            // editor 选区或者内容变化时，获取当前最新的的 content
            console.log('changed', editor.children)
        }
    }
    
    // 组件销毁时，及时销毁 editor 实例，重要！！！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])


    const uploadImage = async (files) => {
      return [
        {
          title: files.map((i) => i.name),
          url: 'http'
        }
      ]
    }

    const switchMark = () => {
      
    }

    return (
        <>
          <div className="markHeader">
            {
              isMarkDown ? (<input className="HeaderInput" placeholder="输入文章标题..."  spellCheck="false" maxLength={80} />) : 
              (
                <div>123</div>
              )
            }
            
            <div className="rightMain">
              <div className="rightText">保存成功</div>
              <div>
                <Button type="default">草稿箱</Button>
              </div>
              <div>
                <Button type="primary">发布</Button>
              </div>
              <div className="switchMark"><ReactSVG onClick={switchMark} src={switchSvg} /></div>
              <div>头像</div>
            </div>
          </div>
          {
            isMarkDown ? (<Editor
              locale={zhHans}
              value={value}
              uploadImages={uploadImage}
              plugins={plugins}
              onChange={(v) => {
                setValue(v)
                  }}
              />) : 
              (
                <div style={{ border: '1px solid #ccc', zIndex: 100}}>
                    {/* 渲染 toolbar */}
                    <Toolbar
                        editor={editor}
                        defaultConfig={toolbarConfig}
                        style={{ borderBottom: '1px solid #ccc' }}
                    />

                    {/* 渲染 editor */}
                    <EditorFu
                        defaultConfig={editorConfig}
                        defaultContent={defaultContent}
                        style={{ height: '500px' }}
                    />
                </div>
              )
          }
        </>
    )
}

export default WriteArticle;