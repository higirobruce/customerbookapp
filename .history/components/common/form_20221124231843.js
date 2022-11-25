import React from 'react'
import {DatePicker} from 'antd'
import { Input } from 'semantic-ui-react'

export default function Form() {
  return (
    <div className='grid grid-cols-6 gap-5'>
      <div className='flex flex-col space-y-1 items-start'>
        <div>Date</div>
        <div><DatePicker size='large'/></div>
      </div>

      <div className='flex flex-col space-y-1 items-start'>
        <div>Designation</div>
        <div><Input size='tiny'/></div>
      </div>
    </div>
  )
}
