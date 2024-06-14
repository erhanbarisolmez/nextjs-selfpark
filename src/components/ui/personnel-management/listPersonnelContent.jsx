import { ListContent } from '@/components/ListContent';
import { useThemeHook } from '@/hooks/useThemeHook';
import { useState } from 'react';


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
      setSearch={setSearch} 
      />

  )
}
