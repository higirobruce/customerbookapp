import React from 'react'

export default function RecordsTable({data}) {
   
  return (
    <div className='flex justify-center flex-col w-full'>
        <div className='grid grid-cols-6 gap-3 border-b-2 mb-3 text-lg font-semibold'>
                <div>Date</div>
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
