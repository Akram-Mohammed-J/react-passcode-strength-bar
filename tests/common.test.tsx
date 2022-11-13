import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import PasswordIndicator from '../src/components/PasswordIndicator/PasswordIndiactor'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<PasswordIndicator password={'Akram@123'} />)
  })
})
