import 'swagger-ui-react/swagger-ui.css'

import { Layout, Menu } from 'antd'
import qs from 'qs'
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import SwaggerUI from 'swagger-ui-react'

import swaggerIcon from 'src/assets/swagger-icon.png'
import useGetDocumentationList from 'src/hooks/useGetDocumentationList'

const { Sider, Content } = Layout
const { Item: MenuItem } = Menu

const StyledLayout = styled(Layout)`
  height: 100vh;
`

const StyledMenu = styled(Menu)`
  overflow-y: scroll;
  background-color: #000;
  border-right: 0;
`

const StyledSider = styled(Sider)`
  height: 100%;
  background-color: #000;
`

const StyledContent = styled(Content)`
  overflow: scroll;
`

const App: React.FC = () => {
  const [{ apiDocList }, getApiDocList] = useGetDocumentationList()
  const { search, pathname } = useLocation()
  const { url: activeUrl } = qs.parse(search, { ignoreQueryPrefix: true })

  useEffect(getApiDocList, [])

  console.log(apiDocList)

  return (
    <StyledLayout>
      <StyledSider>
        <img width="100%" src={swaggerIcon} alt="" />
        <StyledMenu selectedKeys={[activeUrl as string]}>
          {apiDocList.map(({ label, url }) => (
            <MenuItem
              key={url}
              onClick={({ domEvent }) => domEvent.preventDefault()}
            >
              <Link to={`${pathname}?${qs.stringify({ url })}`}>{label}</Link>
            </MenuItem>
          ))}
        </StyledMenu>
      </StyledSider>
      <StyledContent>
        <SwaggerUI url={activeUrl as string} />
      </StyledContent>
    </StyledLayout>
  )
}

export default App
