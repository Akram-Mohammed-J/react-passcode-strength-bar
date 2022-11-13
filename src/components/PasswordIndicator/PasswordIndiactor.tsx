import React, { useEffect } from 'react'
import './PasswordIndicator.scss'

export type PasswordIndicatorProps = {
  password: string
  indicate?: (value: boolean) => void
  show?: boolean
  width?: string | number | undefined
  height?: string | number | undefined
  containerStyle?: React.CSSProperties
  colorConfig?: {
    strong: string
    moderate: string
    weak: string
  }
}

const defaultColorConfig = {
  strong: 'green',
  moderate: '#fcc603',
  weak: 'red',
}
const STRONG_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))(?=.*[a-zA-Z]).{8,}$/gm
const MODERATE_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm
const PasswordIndicator = ({
  password,
  indicate,
  show = true,
  height = '8px',
  width = '230px',
  containerStyle,
  colorConfig = defaultColorConfig,
}: PasswordIndicatorProps) => {
  const defaultContainerStyle: React.CSSProperties = {
    marginTop: '5px',
    marginLeft: '5px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    padding: '3px',
    width: width,
    height: height,
  }
  const validateInput = (value: string) => {
    const indicator = document.getElementById('indicator')
    if (indicator !== null) {
      if (value.match(STRONG_PATTERN)) {
        indicator.style.backgroundColor = colorConfig.strong
        indicator.style.width = '100%'
        indicate?.(true)
      } else if (value.match(MODERATE_PATTERN)) {
        indicator.style.width = '60%'
        indicator.style.backgroundColor = colorConfig.moderate
        indicate?.(true)
      } else {
        indicator.style.width = '20%'
        indicator.style.backgroundColor = colorConfig.weak
        indicate?.(false)
      }
    }
  }
  useEffect(() => {
    if (show && password !== '') {
      validateInput(password)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password, show])

  return (
    <>
      {show && (
        <div style={containerStyle ? containerStyle : defaultContainerStyle}>
          <div id='indicator'></div>
        </div>
      )}
    </>
  )
}

export default PasswordIndicator
