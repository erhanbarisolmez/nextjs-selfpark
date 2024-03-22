import { ListContent } from '@/components/ListContent';
import { useThemeHook } from '@/hooks/useThemeHook';
import { useState } from 'react';
const customerList = [
  {
    id: 1,
    name: 'Ahmet',
    capacity: 100,
    workHours: '08:30 - 20:30',
    freeParkingDuration: '2 hourse',
    phone: "5469985",
    role: "Manager"
  },
  {
    id: 2,
    name: 'Ayşe',
    capacity: 200,
    workHours: '07:00 - 20:00',
    freeParkingDuration: '2 hourse',
    phone: " 5467985",
    role: "Manager"
  },
  {
    id: 3,
    name: 'Arzu',
    capacity: 150,
    workHours: '24 hours',
    freeParkingDuration: '2 hourse',
    phone: " 5464985",
    role: "Manager"

  },
  {
    id: 4,
    name: 'Murat',
    capacity: 150,
    workHours: '24 hours',
    freeParkingDuration: '2 hourse',
    phone: " 5427985",
    role: "Manager"

  },
  {
    id: 5,
    name: 'Mehmet',
    capacity: 150,
    workHours: '24 hours',
    freeParkingDuration: '2 hourse',
    phone: " 5417985",
    role: "Employee"

  },
  {
    id: 6,
    name: 'Burak',
    capacity: 150,
    workHours: '24 hours',
    freeParkingDuration: '2 hourse',
    phone: " 5427985",
    role: "Employee"
  },
  {
    id: 7,
    name: 'Barış',
    capacity: 150,
    workHours: '24 hours',
    freeParkingDuration: '2 hourse',
    phone: " 5467983",
    role: "Employee"
  }
]

export const ListCustomerContent = () => {
  const [search, setSearch] = useState("")
  const { getThemeStyles } = useThemeHook();
  const { textColor, isDarkMode, buttonColor, backgroundColor } = getThemeStyles();
  const filterList = customerList.filter((customer => 
    customer.name.toLowerCase().includes(search) ||
    customer.phone.toLowerCase().includes(search)
    ));
  return (
    <div>
      <ListContent
        column1={'Name'}
        row1={'name'}
        column2={'Phone'}
        row2={'phone'}
        column4={'Actions'}
        filterList={filterList}
        setSearch={setSearch} />
    </div>
  )
}
