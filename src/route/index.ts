/*
 * @Author: Kang
 * @Date: 2021-12-29 18:14:30
 * @Last Modified by: Kang
 * @LastEditTime: 2022-01-06 13:21:23
 */
import {
    Home,
    WriteArticle
} from "../pages/index";

export const ROUTE_LIST = [
    {
        path: "/",
        component: Home,
    },
    {
        path:'/writeArticle',
        component: WriteArticle
    }
]