import React from 'react'

export default function RecordsTable({data}) {
   
  return (
    <div>
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
