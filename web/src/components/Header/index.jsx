import { Container } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'
import { useAuth } from '../../hooks/useAuth'
import { USER_ROLE } from '../../utils/roles'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AdminLogo, Close, Menu, Logo, Receipt, SignOut } from '../../assets'

export function Header({ onSearchChange }) {
  const { signOut, user } = useAuth()
  const [sideMenu, setSideMenu] = useState(false)

  const toggleMenu = () => {
    setSideMenu(!sideMenu)
  }

  return (
    <Container>
      <div className='menu' style={{ left: sideMenu ? '0' : '-100%' }}>
        <div className='header'>
          <button className='close' onClick={toggleMenu}>
            <img src={Close} />
          </button>
          <p className='title'>Menu</p>
        </div>
        <div className='content-menu'>
          <Input
            placeholder='Busque por pratos ou ingredientes'
            onChange={e => onSearchChange(e.target.value)}
            className={'search-menu'}></Input>
          <div className='buttons-menu'>
            <Link className='button-menu' to={'/new'}>
              Novo prato
            </Link>
            <button className='button-menu' onClick={signOut}>
              Sair
            </button>
          </div>
        </div>
      </div>

      <div className='content'>
        <button id='menu' onClick={toggleMenu}>
          <img src={Menu} />
        </button>
        {user.role === USER_ROLE.ADMIN ? (
          <img src={AdminLogo} alt='' />
        ) : (
          <img src={Logo} alt='' />
        )}
        <Input
          placeholder='Busque por pratos ou ingredientes'
          onChange={e => onSearchChange(e.target.value)}
          className={'search-top'}></Input>
        {user.role === USER_ROLE.ADMIN ? (
          <Button title='Novo prato' to='/new' className='top-button' />
        ) : (
          <Button title='Pedidos (0)' icon={Receipt} className='top-button' />
        )}
        <button id='signOut' onClick={signOut}>
          <img src={SignOut} />
        </button>
      </div>
    </Container>
  )
}
