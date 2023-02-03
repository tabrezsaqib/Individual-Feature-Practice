import React from 'react'

function Child(props) {

    let details={
        name: "Tabrez",
        age: "26"
    }
    props.func(details);
  return (
    <div>Child
    </div>
  )
}

export default Child