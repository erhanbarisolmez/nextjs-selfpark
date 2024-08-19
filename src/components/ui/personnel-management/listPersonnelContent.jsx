import { ListContent } from '@/components/ListContent';
import { useAuth } from '@/hooks/useAuth';
import { useThemeHook } from '@/hooks/useThemeHook';
import { useCallback, useEffect, useState } from 'react';
import ServiceManager from '../../../../api/service_management/ServiceManager';
import PersonnelWebSocketService from '../../../../api/websocket/PersonnelWebSocketService';


export const ListPersonnelContent = () => {
  const [search, setSearch] = useState("")
  const [personnel, setPersonnel] = useState([]);
  const { getThemeStyles } = useThemeHook();
  const [personnelId, setPersonnelId] = useState(null);
  const {token} = useAuth();
  const serviceManager = new ServiceManager(token);
  const { textColor, isDarkMode, buttonColor, backgroundColor } = getThemeStyles();
     
  useEffect(() => {
    
    if (personnel) {
       personnelData();
    }
   
    PersonnelWebSocketService.connect(token, onMessageReceived);

    return () => {
      PersonnelWebSocketService.disconnect();
    }
  }, [personnelId]);

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
  }, [token, serviceManager]);
 
 
 const filterList = personnel?.length > 0 ? personnel.filter(person =>
    person.firstName.toLowerCase().includes(search) ||
    person.phone.toLowerCase().includes(search)
  ) : [];

  
  const onMessageReceived = useCallback((topic, message) => {
    const updatedPersonnelInfo = JSON.parse(message.body);
    console.log("Updated personnel info:", updatedPersonnelInfo);
  
    switch (topic) {
      case '/topic/addPersonnel':
        setPersonnel(prevPersonnel => [...prevPersonnel, updatedPersonnelInfo]);
        break;
      case '/topic/updatePersonnel':
        setPersonnel(prevPersonnel =>
          prevPersonnel.map(person =>
            person.id === updatedPersonnelInfo.id ? updatedPersonnelInfo : person
          )
        );
        break;
      case '/topic/deletePersonnel':
        setPersonnel(prevPersonnel =>
          prevPersonnel.filter(person => person.id !== updatedPersonnelInfo)
        );
        break;
      default:
        console.warn("Unknown topic received:", topic);
    }
  }, []);


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
    if (personnelId) {
      await serviceManager.personnelService.delete_personnel(id);
    }
  }

  const handleSave = async (id, data) => {
    setPersonnelId(id);
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
      handleSaveClick={handleSave}
      searchPlaceholder={"Search Personnel"}
      infoCardHeader={"firstName"}
      />


  )
}
