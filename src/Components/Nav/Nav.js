import { Row } from 'react-bootstrap'
import './Nav.css'

const Nav = () => {
  return (
    <Row className='main-nav'>
      <nav>
        <div className='nav-wrapper'>
          <a href="/" className='brand-logo'>PhoneBook</a>
        </div>
      </nav>
    </Row>
  )
}

export default Nav
