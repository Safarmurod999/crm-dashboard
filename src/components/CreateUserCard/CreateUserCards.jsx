import React from 'react'
import './CreateUserCards.css'
import { Link } from 'react-router-dom'




const CreateUserCards = ({title, icon,path}) => {
  return (
    <Link to={path}  className='col-3 creaateUserCard'>
      <h3>
        {title}
      </h3>
      <i className={`bx bx-${icon}`}></i>
    </Link>
  )
}

export default CreateUserCards