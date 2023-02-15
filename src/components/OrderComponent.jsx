import React from "react";

export default function OrderComponent({ item }) {
  return (
    <div
      className={`flex flex-col w-full gap-10 bg-white items-center justify-between p-5 rounded-xl mb-10`}
    >
      <div className='flex w-full justify-between items-center'>
        <div>
          <h1 className='font-bold text-3xl text-[#828282]'>
            Black Wooden Beads
          </h1>
          <p className='text-[#E0E0E0]'>#{item.id}</p>
        </div>
        <h1 className='font-bold text-3xl text-[#828282]'>{item.weight} Kg</h1>
      </div>
      <div className='flex w-full justify-start items-center gap-4'>
        <svg
          width='12'
          height='108'
          viewBox='0 0 12 108'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6 104.667C7.47276 104.667 8.66667 103.473 8.66667 102C8.66667 100.527 7.47276 99.3333 6 99.3333C4.52724 99.3333 3.33333 100.527 3.33333 102C3.33333 103.473 4.52724 104.667 6 104.667ZM6 8.66667C7.47276 8.66667 8.66666 7.47276 8.66666 6C8.66666 4.52724 7.47276 3.33333 6 3.33333C4.52724 3.33333 3.33333 4.52724 3.33333 6C3.33333 7.47276 4.52724 8.66667 6 8.66667ZM6.5 102L6.5 96L5.5 96L5.5 102L6.5 102ZM6.5 84L6.5 72L5.5 72L5.5 84L6.5 84ZM6.5 60L6.5 48L5.5 48L5.5 60L6.5 60ZM6.5 36L6.5 24L5.5 24L5.5 36L6.5 36ZM6.5 12L6.5 6L5.5 6L5.5 12L6.5 12ZM6 107.333C8.94552 107.333 11.3333 104.946 11.3333 102C11.3333 99.0545 8.94552 96.6667 6 96.6667C3.05448 96.6667 0.666667 99.0545 0.666667 102C0.666667 104.946 3.05448 107.333 6 107.333ZM6 11.3333C8.94551 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94551 0.666667 6 0.666667C3.05448 0.666667 0.666662 3.05448 0.666662 6C0.666663 8.94552 3.05448 11.3333 6 11.3333ZM7 102L7 96L5 96L5 102L7 102ZM7 84L7 72L5 72L5 84L7 84ZM7 60L7 48L5 48L5 60L7 60ZM7 36L7 24L5 24L5 36L7 36ZM7 12L7 6L5 6L5 12L7 12Z'
            fill='#828282'
          />
        </svg>
        <div className='flex justify-between gap-12 flex-col'>
          <h1>{item.sender_address}</h1>
          <h1>{item.receiver_address}</h1>
        </div>
      </div>

      <div className='flex justify-between items-center w-full'>
        <h1 className='text-[#828282]'>{item.sender_name}</h1>
        <h1 className='font-bold text-3xl text-[#828282]'>
          10,000{item.price}
        </h1>
      </div>
    </div>
  );
}
