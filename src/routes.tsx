import React from 'react'
import { Redirect, RouteProps } from 'react-router'

import SwaggerUIPage from './pages/SwaggerUIPage'

const publicRoutes: RouteProps[] = [
  {
    path: '/swagger/ui',
    component: SwaggerUIPage,
    exact: true,
  },
  {
    path: '*',
    render: () => <Redirect to="/swagger/ui" />,
  },
]

export { publicRoutes }
