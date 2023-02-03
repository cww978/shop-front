import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/pages/layout/index'
import Home from '@/pages/home'
import User from '@/pages/user'
import Prodcut from '@/pages/product'
import Shop from '@/pages/shop'

const GetRoutes:FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/home'} replace/>}/>
      <Route path="/" element={<Layout/>}>
        <Route path='home' element={ <Home/>}></Route>
        <Route path='product' element={<Prodcut/>}></Route>
        <Route path='shop' element={<Shop/>}></Route>
        <Route path='user' element={<User/>}></Route>
      </Route>
    </Routes>
  )
}

export default GetRoutes
