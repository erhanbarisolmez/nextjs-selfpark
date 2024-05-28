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

    };

    // Component kaldırıldığında WebSocket bağlantısını kapat
    return () => {
      socketRef.current.close();
    }
  }, []);

  const requestNotificationPermission = async () => {
    if (Notification.permission !== 'granted') {
      await Notification.requestPermission();
    }
  }

  const openCamera = async (selectedDevice) => {
    try {
      // Bildirim izni yoksa, kullanıcıya izin iste
      await requestNotificationPermission();
      // Kamera erişim izni al
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: selectedDevice.deviceId } });

      // Kamerayı video etiketine bağla
      if (webcamRef.current) {
        webcamRef.current.srcObject = mediaStream;
      }

      // WebSocket bağlantısı açıksa "openCamera" mesajını gönder
      if (socketRef.current.readyState === WebSocket.OPEN) {
        socketRef.current.send("/camera");
      }
    } catch (error) {
      console.error('Kamera erişimi sağlanamadı', error);
    }
  };

  const scanDevices = async () => {
    try {
      const deviceList = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = deviceList.filter(device => device.kind === 'videoinput');
      setDevices(videoDevices);
    } catch (error) {
      console.log("cihaz tarama hatası", error)
    }
  }


  return (
    <div>
      <button onClick={scanDevices}>Cihazları Tara</button>
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
