import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import React from 'react'

const { Header } = Layout

function Menubar({ user, setUser }){
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100vw' }}>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="0"><Link to="/">LOGO</Link></Menu.Item>
        {user
          ? <>
            <Menu.Item key="3">Post Quote</Menu.Item>
            <Menu.Item key="4" onClick={() => setUser(null)}>Logout</Menu.Item>
          </>
          : <>
            <Menu.Item key="1"><Link to="/login">Login</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/signup">Sign Up</Link></Menu.Item>
          </>
        }
      </Menu>
    </Header>
  )
}

export default Menubar