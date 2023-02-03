import React from 'react'
import { SideBar } from 'antd-mobile'
import { GiftOutline } from 'antd-mobile-icons'
import styles from './index.module.less'

const sideTabs = [
  { name: '家装家具' },
  { name: '沙发椅子' },
  { name: '灯饰照明' },
  { name: '餐桌茶几' },
  { name: '柜子' },
  { name: '装饰品' }
]

const products = [
  { img: '/imgs/product/product1.jpg', name: '北欧风吊灯', price: '500.00' },
  { img: '/imgs/product/product2.jpg', name: '金属风吊灯', price: '199.00' },
  { img: '/imgs/product/product3.jpg', name: '简约沙发', price: '199.00' },
  { img: '/imgs/product/product4.jpg', name: '简约凳子', price: '199.00' },
  { img: '/imgs/product/product5.jpg', name: '简约格调木桌', price: '199.00' }
]

const Product = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.side}>
          <SideBar>
            {sideTabs.map((tab, index) => {
              return (
                <SideBar.Item className={styles.side_item} key={index} title={tab.name} />
              )
            })}
          </SideBar>
        </div>
        <div className={styles.main}>
          {products.map((product, index) => {
            return (
              <div className={styles.product} key={index}>
                <img className={styles.product_img} src={product.img} />
                <div className={styles.product_flex}>
                  <div className={styles.product_name}>{product.name}</div>
                  <div className={styles.product_price}>￥{product.price}</div>
                </div>
                <div className={styles.sale}>
                  <GiftOutline fontSize={16} color='#ffffff'/>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Product
