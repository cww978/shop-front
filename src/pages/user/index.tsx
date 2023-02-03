import { Button, List } from 'antd-mobile'
import React from 'react'
import styles from './index.module.less'
const defaultAvatarImg = '/imgs/avatar.png'
const User = () => {
  const handleClick = () => {}
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.avatar} src={defaultAvatarImg} width='100%'/>
        <span className={styles.name}>登录/注册</span>
      </div>
      <div className={styles.list}>
        <List mode='card'>
          <List.Item className={styles.list_item} onClick={handleClick}>我的订单</List.Item>
          <List.Item className={styles.list_item} onClick={handleClick}>收获信息</List.Item>
          <List.Item className={styles.list_item} onClick={handleClick}>个人资料</List.Item>
          <List.Item className={styles.list_item} onClick={handleClick}>修改密码</List.Item>
        </List>
      </div>
      <div className={styles.button_box}>
        <Button block size='large' fill='outline' color='danger'>退出登录</Button>
      </div>
    </div>
  )
}
export default User
