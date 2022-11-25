import React,{useState} from 'react'
import {DatePicker} from 'antd'
import { Button, Input } from 'semantic-ui-react'
import moment from 'moment'

export default function Form() {
  let [date, setDate] = useState(moment())
  return (
    <div className='grid grid-cols-3 gap-5'>
      
      <div className='flex flex-col space-y-1 items-start'>
        <div>Date</div>
        <div><DatePicker size='large' value={date} onChange={(date, dateString)=>setDate(date)}/></div>
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

      <Button color='blue'>Submit</Button>
    </div>
  )
}
