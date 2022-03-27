import React from 'react'
import './SearchInput.scss'
import {BsSearch} from 'react-icons/bs'
export const SearchInput = () => {
  return (
    <div>
        <input 
        className='search_input'
        placeholder='Поиск в системе'
        />
        <div className='search_icons'>
        </div>
    </div>
  )
}
