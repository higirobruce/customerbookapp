import React from 'react'
import {DatePicker} from 'antd'

export default function Form() {
  return (
    <div className='grid grid-cols-6'>
      <div className='flex flex-col space-y-1 items-start'>
        <div>Date</div>
        <div><DatePicker/></div>
      </div>
    </div>
  )
}
