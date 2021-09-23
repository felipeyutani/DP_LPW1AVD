import React from 'react'
import { Route } from 'react-router-dom'

import Principal from '../page'

const Routes: React.FC = () => (
    <Route path='/' component={Principal} />
)

export default Routes
