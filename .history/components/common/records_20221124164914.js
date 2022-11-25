import React from 'react'

export default function RecordsTable({data}) {
   
  return (
    <div>
        <div className='grid grid-cols-6 gap-3'>
                <div className='text-lg font-semibold border-b-2 mb-3'>Date</div>
                <div>Designation</div>
                <div>Qty</div>
                <div>Amount</div>
                <div>Payment</div>
                <div>Client</div>
            </div>
        {data.map($=>{
            return <div className='grid grid-cols-6 gap-3'>
                <div>{$.date}</div>
                <div>{$.designation}</div>
                <div>{$.qty}</div>
                <div>{$.amount}</div>
                <div>{$.payment}</div>
                <div>{$.client}</div>
            </div>
        })}
    </div>
  )
}
