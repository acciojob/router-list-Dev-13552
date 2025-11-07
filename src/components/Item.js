import React from 'react'

const Item = (props) => {
    const {id} = props.match.params
  return (
    <div>
      <h1>Item {id}</h1>
      <p>Description for Item {id}</p>
    </div>
  )
}

export default Item
