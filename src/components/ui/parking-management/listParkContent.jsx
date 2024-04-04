'use client'
import { ListContent } from '@/components/ListContent';
import { useState } from 'react';
const parkList = [
  {
    id: 1,
    name: 'Park A',
    capacity: 100,
    workHours: '08:30 - 20:30',
    freeParkingDuration: '2 hourse',
  },
  {
    id: 2,
    name: 'Park B',
    capacity: 200,
    workHours: '07:00 - 20:00',
    freeParkingDuration: '2 hourse',
  },
  {
    id: 3,
    name: 'Park C',
    capacity: 150,
    workHours: '24 hours',
    freeParkingDuration: '2 hourse',
  },
  {
    id: 4,
    name: 'Beylikdüzü',
    capacity: 150,
    workHours: '24 hours',
    freeParkingDuration: '2 hourse',
  }
]

export const ListParkContent = () => {
  const [search, setSearch] = useState("")
  const filterList = parkList.filter(park => park.name.toLowerCase().includes(search));

  return (
    <ListContent
      column1={"Name"}
      row1={'name'}
      column4={"Actions"}
      filterList={filterList}
      setSearch={setSearch} />
  )
}


