import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.svg'
import { useMenuQuery } from '../../Hooks/useMenuQuery'
import {Wrapper, Content} from './Header.styles'

const Header = () => {

  const {site, menu} = useMenuQuery()


  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <img src={logo} alt={site.siteMetadata.title} />
        </Link>
      </Content>
    </Wrapper>
  )
}

export default Header