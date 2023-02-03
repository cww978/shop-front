import React, { FC } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppOutline, UserOutline, AppstoreOutline, ShopbagOutline } from 'antd-mobile-icons'
import { SafeArea, TabBar } from 'antd-mobile'

import './index.less'

const Bottom:FC = () => {
  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />
    },
    {
      key: '/product',
      title: '产品中心',
      icon: <AppstoreOutline />
    },
    {
      key: '/shop',
      title: '购物车',
      icon: <ShopbagOutline />
    },
    {
      key: '/user',
      title: '个人中心',
      icon: <UserOutline/>
    }
  ]
  const navigate = useNavigate()
  const getActivePath = ():string => {
    const { hash, pathname } = location
    return hash === '' ? pathname : hash.substring(1, hash.length)
  }

  const setRouteActive = (value: string):void => {
    navigate(value)
  }

  return (
    <TabBar className="layout_bottom" activeKey={getActivePath()} safeArea={true} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

const Layout:FC = () => {
  return (
    <div className='layout'>
      <Outlet></Outlet>
      <SafeArea position='bottom'></SafeArea>
      <Bottom></Bottom>
    </div>
  )
}
export default Layout
