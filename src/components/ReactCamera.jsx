'use client'
import { useRef, useState } from 'react';
import Camera from '../../api/services/Camera';
export const ReactCamera = () => {
  const webcamRef = useRef(null);
  const socketRef = useRef(null);
  const [devices, setDevices] = useState([]);

  
  // useEffect(() => {
  //   // WebSocket bağlantısını oluştur
  //   socketRef.current = new WebSocket('ws://192.168.4.88:8001/camera');

  //   // WebSocket bağlantısı açıldığında
  //   socketRef.current.onopen = () => {
  //     console.log("WebSocket connection established");
  //   };

  //   // WebSocket mesajı alındığında
  //   socketRef.current.onmessage = (event) => {
  //     console.log("WebSocket message received", event.data);
  //     const newDevice = JSON.parse(event.data);
  //     // Gelen cihaz bilgisini state'e ekle
  //     setDevices(prevDevices => [...prevDevices, newDevice]);
  //   };

  //   // Component kaldırıldığında WebSocket bağlantısını kapat
  //   return () => {
  //     socketRef.current.close();
  //   }
  // }, []);

  const scanDevice = async () => {
    // Butona tıklandığında, cihazları taramak için "scanDevices" mesajını gönder
    try {

      console.log("Tarama işlemi başlatıldı...")
      const scan = new Camera();
      const scannedDevices = await scan.startScan();
      setDevices(scannedDevices);
      console.log("Tarama işlemi tamamlandı...")
    } catch (error) {
      console.log("scanDevice, error:", error)
    }


  }

  const openCamera = async (ip_address) => {
    // Kamerayı açmak için gerekli işlemleri yapabilirsiniz

    if (!ip_address) {
      console.log("No device selected.");
      return;
    }
    console.log("ip adress", ip_address);
    const cam = new Camera();
    await cam.startCamera(ip_address);

    console.log("opening camera...")
  }

  return (
    <div>
      <br />
      <button onClick={scanDevice}>Cihazları Tara</button>
      <br />
      <ul>
        {devices.map((device, index) => (
          <li key={index}>
            <br />
            {device.label}
            {/* Kamera açma butonu */}
            <button onClick={() => openCamera(device.ip)}>Kamerayı Aç</button>
          </li>
        ))}
      </ul>
      <video ref={webcamRef} autoPlay style={{ width: '100%' }}></video>
    </div>
  );
};
