import React from 'react'
import {DatePicker} from 'antd'
import { Input } from 'semantic-ui-react'

export default function Form() {
  return (
    <div className='flex justify-center items-center'>
       <div className='grid grid-cols-3 gap-5'>
      
      <div className='flex flex-col space-y-1 items-start'>
        <div>Date</div>
        <div><DatePicker size='large'/></div>
      </div>

      <div className='flex flex-col space-y-1 items-start'>
        <div>Designation</div>
        <div><Input size='tiny'/></div>
      </div>

      <div className='flex flex-col space-y-1 items-start'>
        <div>Quantity</div>
        <div><Input size='tiny' type='number'/></div>
      </div>

      <div className='flex flex-col space-y-1 items-start'>
        <div>Amount</div>
        <div><Input size='tiny' type='number'/></div>
      </div>

      <div className='flex flex-col space-y-1 items-start'>
        <div>Payment</div>
        <div><Input size='tiny' type='number'/></div>
      </div>

      <div className='flex flex-col space-y-1 items-start'>
        <div>Client</div>
        <div><Input size='tiny' /></div>
      </div>
    </div>
    </div>

  )
}
