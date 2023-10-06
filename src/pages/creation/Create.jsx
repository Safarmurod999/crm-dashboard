import React from 'react'
import CreateUserCards from '../../components/CreateUserCard/CreateUserCards'

const createUserItem = [
  {
    id:1,
    icon:'user-plus',
    title:'Create Assistant',
    path:'/assistantcreate'
  },
  {
    id:2,
    icon:'group',
    title:'Create Group',
    path:'/groupcreate'
  },
  {
    id:3,
    icon:'user',
    title:'Create Student',
    path:'/studentcreate'
  },

]

const Create = () => {
  return (
    <>
      <h1 className='text-2xl'>Createing </h1>
      <br /><br />
      <div className=' create'>
    
      {
        createUserItem.map( item => <CreateUserCards key={item.id} {...item}/>)
      }

      </div>

    </>
  )
}

export default Create
