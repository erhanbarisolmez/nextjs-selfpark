'use client'
import { ListContent } from '@/components/ListContent';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import Park from "../../../../api/Park";


export const ListParkContent = () => {
  const [search, setSearch] = useState("")
  const [parks, setParks] = useState([]);
  const [selectedParkId, setSelectedParkId] = useState(null);
  const {token} = useAuth();
  
  useEffect(() => {
    
    const fetchData = async() => {
      try {
        const parkService = new Park();
        if (!token) {
          throw new Error("No token found.")
        }
        const parkList = await parkService.read_park_all(token);
        setParks(parkList);
      } catch (error) {
        console.error("Error fetching park data : ", error)
      }
    }
      
    fetchData();
    
  }, []);

  const filterList = parks.filter(item => item.parkName.toLowerCase().includes(search))
  const propertiesName = {
    "parkName": "Park Name",
    "capacity": "Capacity",
    "workHours": "Work Hours",
    "freeTime": "Free Time"
  }
  

  const handleConfirmDelete = async (parkId) => {
    setSelectedParkId(parkId);
    console.log("state id: ",parkId);

    if (parkId) {
      const park = new Park();
      await park.deletePark(parkId, token);
      const updatedParks = parks.filter(item => item.id !== parkId);
      setParks(updatedParks);
    }
  }
  //  SAVE
  const handleSaveClick = async (id,data) => {
    try {
      const park = new Park();
      const updated = await park.update_park(id,data,token);
      console.log("başarılı: ", updated);

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
      />
  )
 
}


