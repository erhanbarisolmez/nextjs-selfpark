'use client'
import Park from "@/api/Park";
import { ListContent } from '@/components/ListContent';
import { useEffect, useState } from 'react';


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

    if (selectedParkId) {
      const park = new Park();
      const token = localStorage.getItem('token');
      await park.deletePark(selectedParkId, token);
      const updatedParks = parks.filter(item => item.id !== selectedParkId);
      setParks(updatedParks);
      setSelectedParkId(parkId);
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
      />
  )
 
}


