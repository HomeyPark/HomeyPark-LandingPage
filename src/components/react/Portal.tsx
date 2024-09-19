import React from 'react'
import ReactDOM from 'react-dom'

interface PortalProps {
  children: React.ReactNode
  root: HTMLElement
}

const Portal: React.FC<PortalProps> = ({ children, root }) => {
  if (!root) return null

  return ReactDOM.createPortal(children, root)
}

export default Portal
