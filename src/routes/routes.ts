import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../lazyload/pages/NoLazy";

//import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route {
    to: string
    path: string
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazeLayout" */ '../lazyload/layout/LazyLayout'))


export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/nolazy',
        path: 'nolazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]