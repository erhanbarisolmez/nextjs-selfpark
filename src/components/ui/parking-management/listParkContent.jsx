'use client'
import { ListContent } from '@/components/ListContent';
import { useEffect, useState } from 'react';
import Park from "../../../api/Park";


export const ListParkContent = () => {
  const [search, setSearch] = useState("")
  const [parks, setParks] = useState([]);
  const [selectedParkId, setSelectedParkId] = useState(false);

  useEffect(() => {
    
    const fetchData = async() => {
      try {
        const parkService = new Park();
        const token = localStorage.getItem("token");
        const parkList = await parkService.read_park_all(token);
        setParks(parkList);
      } catch (error) {
        console.error("Error fetching park data : ", error)
      }
    }
      
    fetchData();
    
  }, []);

  const filterList = parks.filter(item => item.park_name.toLowerCase().includes(search))
  const propertiesName = {
    "park_name": "Park Name",
    "capacity": "Capacity",
    "work_hours": "Work Hours",
    "free_time": "Free Time"
  }
  

  const handleConfirmDelete = async (parkId) => {
    setSelectedParkId(parkId);
    console.log("state id: ",parkId);

    if (parkId) {
      const park = new Park();
      const token = localStorage.getItem('token');
      await park.deletePark(parkId, token);
      const updatedParks = parks.filter(item => item.id !== parkId);
      setParks(updatedParks);
    }
  }
  //  SAVE
  const handleSaveClick = async (id,editData) => {
    try {
      const park = new Park();
      const token = localStorage.getItem('token');
      const updated = await park.update_park(id,editData,token);
      console.log("başarılı: ", updated);
    } catch (error) {
      console.error("Error updating park: ", error)
    }

  } 

  return (
    
    <ListContent
      column1={"Name"}
      row1={"park_name"}
      column4={"Actions"}
      filterList={filterList}
      infoCardHeader={"park_name"}
      setSearch={setSearch} 
      propertiesShow={[`park_name`, "capacity", "work_hours", "free_time"]}
      propertiesName={propertiesName}
      deleteOnClick={handleConfirmDelete}
      handleSaveClick={handleSaveClick}
      />
  )
 
}


