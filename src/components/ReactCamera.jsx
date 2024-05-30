'use client'
import Camera from '@/api/Camera';
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
      const newDevice = JSON.parse(event.data);
      // Gelen cihaz bilgisini state'e ekle
      setDevices(prevDevices => [...prevDevices, newDevice]);
    };

    // Component kaldırıldığında WebSocket bağlantısını kapat
    return () => {
      socketRef.current.close();
    }
  }, []);

  const scanDevice = async () => {
    // Butona tıklandığında, cihazları taramak için "scanDevices" mesajını gönder
    if (socketRef.current.readyState === WebSocket.OPEN) {
      // Mevcut cihazları temizle
      setDevices([]);
      socketRef.current.send("scanDevices");
    } else {
      console.log("WebSocket is not open");
    }
  }

  const openCamera = async () => {
    // Kamerayı açmak için gerekli işlemleri yapabilirsiniz
    const cam = new Camera();
    await cam.startCamera();

    console.log("opening camera...")
  }

  return (
    <div>
      <button onClick={openCamera}>Kamera aç</button>
      <br />
      <button onClick={scanDevice}>Cihazları Tara</button>
      <br />
      <ul>
        {devices.map(device => (
          <li key={device.deviceId}>
            <br />
            {device.label}
            {/* Kamera açma butonu */}
            <button onClick={() => openCamera(device)}>Kamerayı Aç</button>
          </li>
        ))}
      </ul>
      <video ref={webcamRef} autoPlay style={{ width: '100%' }}></video>
    </div>
  );
};
