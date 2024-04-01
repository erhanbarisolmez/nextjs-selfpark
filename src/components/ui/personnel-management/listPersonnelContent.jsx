import { ListContent } from '@/components/ListContent';
import { useThemeHook } from '@/hooks/useThemeHook';
import { useState } from 'react';
const personnelList = [
  {
    id: 1,
    name: 'Ahmet',
    capacity: 100,
    workHours: '08:30 - 20:30',
    freeParkingDuration: '2 hourse',
    email: 'oıqjweı@aisjd.com',
    role: 'Manager',
  },
  {
    id: 2,
    name: 'Ayşe',
    capacity: 200,
    workHours: '07:00 - 20:00',
    freeParkingDuration: '2 hourse',
    role: 'Employee'
  },
  {
    id: 3,
    name: 'Arzu',
    capacity: 150,
    workHours: '24 hours',
    freeParkingDuration: '2 hourse',
    role: 'Manager'
  },
  {
    id: 4,
    name: 'Murat',
    capacity: 150,
    workHours: '24 hours',
    freeParkingDuration: '2 hourse',
    role: 'Employee'
  },
  {
    id: 5,
    name: 'Mehmet',
    capacity: 150,
    workHours: '24 hours',
    freeParkingDuration: '2 hourse',
    role: 'Manager'
  },
  {
    id: 6,
    name: 'Burak',
    capacity: 150,
    workHours: '24 hours',
    freeParkingDuration: '2 hourse',
    role: 'Employee'
  },
  {
    id: 7,
    name: 'Barış',
    capacity: 150,
    workHours: '24 hours',
    freeParkingDuration: '2 hourse',
    role: 'Employee'
  }
]

export const ListPersonnelContent = () => {
  const [search, setSearch] = useState("")
  const { getThemeStyles } = useThemeHook();
  const { textColor, isDarkMode, buttonColor, backgroundColor } = getThemeStyles();
  const filterList = personnelList.filter(person =>
    person.name.toLowerCase().includes(search) ||
    person.role.toLowerCase().includes(search)
  );
  return (

    <ListContent
      column1={"Name"}
      row1={'name'}
      column2={"Role"}
      row2={'role'}
      column4={"Actions"}
      filterList={filterList}
      setSearch={setSearch} />

  )
}
