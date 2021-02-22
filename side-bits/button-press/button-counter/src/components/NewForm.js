import React from 'react'

function NewForm(props) {

  return (
    <>
    <form onSubmit={props.func.handleNew}>
      <button type="submit">New</button>
      <input type="text" name="title" id="title" onChange={props.func.handleChange}/>
    </form>
    </>
  )
}

export default NewForm
