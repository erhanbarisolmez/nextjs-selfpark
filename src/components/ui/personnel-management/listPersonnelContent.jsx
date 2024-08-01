import { ListContent } from '@/components/ListContent';
import { useThemeHook } from '@/hooks/useThemeHook';
import { useState } from 'react';
import ServiceManager from '../../../../api/service_management/ServiceManager';


export const ListPersonnelContent = () => {
  const [search, setSearch] = useState("")
  const [personnel, setPersonnel] = useState([]);
  const { getThemeStyles } = useThemeHook();
  const serviceManager = new ServiceManager();
  const { textColor, isDarkMode, buttonColor, backgroundColor } = getThemeStyles();
 
 
  const filterList = personnel?.length > 0 ? personnel.filter(person =>
    person.firstName.toLowerCase().includes(search) ||
    person.phone.toLowerCase().includes(search)
  ) : [];

  const propertiesName = {
    "parkName": "Park Name",
    "firstName": "First Name",
    "lastName": "Last Name",
    "email": "E-mail",
    "phone": "Phone",
    "task": "Task"
  }
  return (

    <ListContent
      column1={"Park Name"}
      row1={'name'}
      column2={"Role"}
      row2={'role'}
      column4={"Actions"}
      filterList={filterList}
      setSearch={setSearch} 
      propertiesName={propertiesName}
      propertiesShow={[`"parkName", "firstName", "lastName", "email", "phone", "task"`]}
      />

  )
}
