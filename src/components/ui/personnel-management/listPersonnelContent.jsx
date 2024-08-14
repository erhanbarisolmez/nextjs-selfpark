import { ListContent } from '@/components/ListContent';
import { useAuth } from '@/hooks/useAuth';
import { useThemeHook } from '@/hooks/useThemeHook';
import { useCallback, useEffect, useState } from 'react';
import ServiceManager from '../../../../api/service_management/ServiceManager';


export const ListPersonnelContent = () => {
  const [search, setSearch] = useState("")
  const [personnel, setPersonnel] = useState([]);
  const { getThemeStyles } = useThemeHook();
  const [personnelId, setPersonnelId] = useState(null);
  const {token} = useAuth();
  const serviceManager = new ServiceManager(token);
  const { textColor, isDarkMode, buttonColor, backgroundColor } = getThemeStyles();

  useEffect(() => {

    personnelData();

  }, []);

  const personnelData = useCallback(async () => {
    try {
      if (!token) {
        throw new Error("No token found.")
      }
      const personnelList = await serviceManager.personnelService.read_personnel_all(token);
      setPersonnel(personnelList);
    } catch (error) {

      console.error("Error fetching personnel data : ", error);
    }
  }, [token, serviceManager])
 
 
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


  const handleConfirmDelete = async (id) => {
    setPersonnelId(id);
    if (parkId) {
      await serviceManager.personnelService.delete_personnel(id);
    }
  }

  const handleSaveClick = async (id, data) => {
    setPersonnelId(id)
    try {
      await serviceManager.personnelService.update_personnel(id, data);

    } catch (error) {
      console.error("Error updating personnel: ", error)
    }
  }


  return (

    <ListContent
      column1={"Personnel Name"}
      row1={'firstName'}
      column2={"Last Name"}
      row2={'lastName'}
      column3={"Phone"}
      row3={'phone'}
      column4={"Actions"}
      filterList={filterList}
      setSearch={setSearch} 
      propertiesShow={["parkName", "firstName", "lastName", "email", "phone", "task"]}
      propertiesName={propertiesName}
      deleteOnClick={handleConfirmDelete}
      handleSaveClick={handleSaveClick}
      searchPlaceholder={"Search Personnel"}
      infoCardHeader={"firstName"}
      />


  )
}
