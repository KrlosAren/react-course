import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategories = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    console.log('handle input change');
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length > 2) {
      setCategories(cb => [inputValue, ...cb])
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategories.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategories
