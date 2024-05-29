'use client'
import { useEffect, useRef, useState } from 'react';

export const ReactCamera = () => {
  const webcamRef = useRef(null);
  const socketRef = useRef(null);
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    // WebSocket bağlantısını oluştur
    socketRef.current = new WebSocket('ws://192.168.4.88:8001/camera');

    // WebSocket bağlantısı açıldığında
    socketRef.current.onopen = () => {
      console.log("WebSocket connection established");
    };

    // WebSocket mesajı alındığında
    socketRef.current.onmessage = (event) => {
      console.log("WebSocket message received", event.data);
      setDevices(prevDevices => [...prevDevices, event.data])
    };

    // Component kaldırıldığında WebSocket bağlantısını kapat
    return () => {
      socketRef.current.close();
    }
  }, []);

  const scanDevice = async () => {
    socketRef.current.send("scanDevices");
    setDevices([]);
  }


  return (
    <div>
      <button onClick={scanDevice}>Cihazları Tara</button>
      <br />
      <ul> 
        {devices.map(device => (
          <li key={device.deviceId}>
            <br />
            {device.label}
            <button onClick={() => openCamera(device)}>Kamerayı Aç</button>
          </li>
        
        ))}
      </ul>
      <video ref={webcamRef} autoPlay style={{ width: '100%' }}></video>
    </div>
  );
};