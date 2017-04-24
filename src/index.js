import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

class RenderDisgest extends React.Component {
  render () {
    return (
      <div>foo bar</div>
    )
  }
}

export default {
  digest: () => renderToStaticMarkup(<RenderDisgest />)
}
