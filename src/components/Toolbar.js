import React from 'react'
import { Toolbar as ReakitToolbar, ToolbarItem, Button} from 'reakit'

const Toolbar = ({toolbar}) => {
  return (
    <ReakitToolbar {...toolbar}>
        <ToolbarItem
          as={Button}
          className="px-3"
          onClick={() => alert('click!')}
        >
          About
        </ToolbarItem>
        <ToolbarItem
          as={Button}
          className="px-3"
          onClick={() => alert('click!')}
        >
          Services
        </ToolbarItem>
        <ToolbarItem
          as={Button}
          className="px-3"
          onClick={() => alert('click!')}
        >
          Portfolio
        </ToolbarItem>
      </ReakitToolbar>
  )
}

export default Toolbar
