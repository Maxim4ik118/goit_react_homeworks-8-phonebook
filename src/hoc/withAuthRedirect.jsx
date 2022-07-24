import React from 'react'

function withAuthRedirect(Component, props) {

    const ComponentWithAuth = (props) => {
        return <Component {...props} />
    }
    // if()
  return (
    <ComponentWithAuth {...props} />
  )
}

export default withAuthRedirect