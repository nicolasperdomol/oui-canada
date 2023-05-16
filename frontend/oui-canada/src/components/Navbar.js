import React from 'react'
import Dropdown from 'react-dropdown'
import { t } from 'i18next'
import 'react-dropdown/style.css'
import '../styles/css/Navbar.css'

const Navbar = (props) => {
  const languages = [
    'en', 'es'
  ]

  const getLangCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
    if (match) return match[2]
  }

  const setLangCookie = (event) => {
    const lng = event.value
    document.cookie = `i18next=${lng}`
    window.location.reload()
  }

  return (
    <div id='navbar' className='container-fluid'>
      <div className='row'>
        <div id='ouiCanada' className='col-5'><a href='/' className='navbarLink homeTitle'>Oui Canada</a></div>
        <div className='col-1 offset-4'><a href='/about' className='navbarLink'>{t('aboutUs')}</a></div>
        <div className='col-1'><a href='#contactUsRow' className='navbarLink'>{t('contact')}</a></div>
        <div className='col-1'>
          <Dropdown options={languages} onChange={(event) => { setLangCookie(event) }} value={getLangCookie('i18next')} placeholder='Select a language' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
