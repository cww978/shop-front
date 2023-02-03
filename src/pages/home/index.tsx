import React from 'react'
import { SearchBar, Swiper } from 'antd-mobile'
import { CheckShieldOutline, GiftOutline } from 'antd-mobile-icons'
import Titile from '@/FC/Title'
import './index.less'

const bannerImgs = ['/imgs/bg/banner1.png', '/imgs/bg/banner2.png']
const bannerItems = bannerImgs.map((src, index) => {
  return (
    <Swiper.Item key={index}>
      <img width={'100%'} src={src} />
    </Swiper.Item>
  )
})

const topTips = ['官方正品保障', '绿色环保安全', '精选优质货源']
const topTipsItems = topTips.map((text, index) => {
  return (
    <div className='tips-item' key={index}>
      <CheckShieldOutline color='orange' fontSize={16} style={{ marginRight: '4px' }}/>
      <span>{text}</span>
    </div>
  )
})

const topTabs = [
  { img: '/imgs/bg/img1.png', text: '新品发布', text_en: 'New product' },
  { img: '/imgs/bg/img2.png', text: '现代简约', text_en: 'Simple style' },
  { img: '/imgs/bg/img3.png', text: '设计师款', text_en: 'Designer design' }
]
const topTabItems = topTabs.map((item, index) => {
  return (
    <div className='top-tab-item' key={index} style={{ backgroundImage: `url(${item.img})` }}>
      <div>{item.text}</div>
      <div>{item.text_en}</div>
    </div>
  )
})

const hotProducts = [
  { img: '/imgs/product/product1.jpg', name: '艺术装饰画', price: '189.00' },
  { img: '/imgs/product/product2.jpg', name: '简约书房凳子', price: '199.00' },
  { img: '/imgs/product/product3.jpg', name: '简约格调木桌', price: '199.00' },
  { img: '/imgs/product/product4.jpg', name: '金属风台灯', price: '199.00' },
  { img: '/imgs/product/product5.jpg', name: '实木简约柜子', price: '199.00' },
  { img: '/imgs/product/product6.jpg', name: '北欧风布艺沙发', price: '199.00' }
]
const hotItems = hotProducts.map((product, index) => {
  return (
    <div className='card-item' key={index}>
      <img className='icon' width={'100%'} src={product.img} />
      <div className='name'>{product.name}</div>
      <div className='number'>￥{product.price}</div>
    </div>
  )
})

const dayProducts = [
  { img: '/imgs/product/product7.jpg', name: '艺术装饰画', price: '189.00' },
  { img: '/imgs/product/product8.jpg', name: '简约书房凳子', price: '199.00' },
  { img: '/imgs/product/product9.jpg', name: '简约格调木桌', price: '199.00' },
  { img: '/imgs/product/product10.jpg', name: '金属风台灯', price: '199.00' },
  { img: '/imgs/product/product11.jpg', name: '实木简约柜子', price: '199.00' },
  { img: '/imgs/product/product12.jpg', name: '北欧风布艺沙发', price: '199.00' }
]
const dayItems = dayProducts.map((product, index) => {
  return (
    <div className='card-big-item' key={index}>
      <img className='icon' width={'100%'} src={product.img} />
      <div className='name'>{product.name}</div>
      <div className='number'>￥{product.price}</div>
      <div className='sale'>
        <GiftOutline fontSize={20} color='withe'/>
      </div>
    </div>
  )
})

const typeProducts = [
  { img: '/imgs/icon/icon1.png', name: '沙发' },
  { img: '/imgs/icon/icon4.png', name: '灯饰' },
  { img: '/imgs/icon/icon2.png', name: '卧室' },
  { img: '/imgs/icon/icon3.png', name: '柜子' }
]
const typeItems = typeProducts.map((type, index) => {
  return (
    <div className='type-item' key={index}>
      <img className='icon' height={'100%'} src={type.img} />
      <div className='name'>{type.name}</div>
    </div>
  )
})

const Home = () => {
  return (
    <div className='home-page'>
      <div className='top-search-box'>
        <SearchBar placeholder='请输入内容' />
      </div>
      <div className='top-banner-box'>
        <Swiper indicatorProps={{ color: 'white' }} autoplay loop autoplayInterval={5000}>{bannerItems}</Swiper>
      </div>
      <div className='top-tips-box'>
        {topTipsItems}
      </div>
      <div className='top-tab-box'>
        {topTabItems}
      </div>
      <div className='hot-box card-box'>
        <div className='title-box'>
          <Titile text='本店热销'/>
        </div>
        <div className='flex-box'>
          {hotItems}
        </div>
      </div>
      <div className='type-box'>
        <div className='type-banner'></div>
        <div className='type-flex'>
          {typeItems}
        </div>
      </div>
      <div className='day-box card-box'>
        <div className='title-box'>
          <Titile text='今日推荐'/>
        </div>
        <div className='flex-box'>
          {dayItems}
        </div>
      </div>
    </div>
  )
}
export default Home
