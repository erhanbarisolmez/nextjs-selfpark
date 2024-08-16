'use client'
import { ListContent } from '@/components/ListContent';
import { useAuth } from '@/hooks/useAuth';
import { useCallback, useEffect, useState } from 'react';
import ServiceManager from '../../../../api/service_management/ServiceManager';
import ParkWebSocketService from '../../../../api/websocket/ParkWebSocketService';


export const ListParkContent = () => {
  const [search, setSearch] = useState("")
  const [parks, setParks] = useState([]);
  const [selectedParkId, setSelectedParkId] = useState(null);
  const { token } = useAuth();
  const serviceManager = new ServiceManager(token);

  useEffect(() => {
    fetchData();
    ParkWebSocketService.connect(token, onMessageReceived);

    return () => {
      
      ParkWebSocketService.disconnect();
    };
  }, [token]);

  const fetchData = useCallback(async () => {
    try {
      if (!token) {
        throw new Error("No token found.")
      }
      
      const parkList = await serviceManager.parkService.read_park_all(token);
      setParks(parkList);

      ParkWebSocketService.connect(token, onMessageReceived);

    } catch (error) {
      console.error("Error fetching park data : ", error)
    }
  }, [serviceManager, token]);

  const onMessageReceived = useCallback((topic, message) => {
    const updatedParkInfos = JSON.parse(message.body);
    console.log('updated park ınfos: ', updatedParkInfos);

    if (topic == '/topic/parkInfos') {
      setParks(updatedParkInfos);
    }
 
  }, []);

  const filterList = parks?.length > 0 ? parks.filter(item => item.parkName.toLowerCase().includes(search.toLowerCase())) : [];


  const propertiesName = {
    "parkName": "Park Name",
    "capacity": "Capacity",
    "workHours": "Work Hours",
    "freeTime": "Free Time"
  }


  const handleConfirmDelete = async (parkId) => {
    setSelectedParkId(parkId);
    console.log("state id: ", parkId);

    if (parkId) {
      await serviceManager.parkService.delete_park(parkId);
      fetchData();
    }
  }

  const handleSaveClick = async (id,data) => {
    try {
      await serviceManager.parkService.update_park(id,data);
    } catch (error) {
      console.error("Error updating park: ", error)
    }
  }

  return (

    <ListContent
      column1={"Name"}
      row1={"parkName"}
      column4={"Actions"}
      filterList={filterList}
      infoCardHeader={"parkName"}
      setSearch={setSearch}
      propertiesShow={[`parkName`, "capacity", "workHours", "freeTime"]}
      propertiesName={propertiesName}
      deleteOnClick={handleConfirmDelete}
      handleSaveClick={handleSaveClick}
      searchPlaceholder={"Search Park"}
    />
  )

}


