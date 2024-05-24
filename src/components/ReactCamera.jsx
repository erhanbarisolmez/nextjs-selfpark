import { useEffect, useRef } from 'react';

export const ReactCamera = () => {
  const webcamRef = useRef(null);
  const socketRef = useRef(null);

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

  const openCamera = async () => {
    try {
      // Bildirim izni yoksa, kullanıcıya izin iste
      await requestNotificationPermission();
      // Kamera erişim izni al
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Kamerayı video etiketine bağla
      if (webcamRef.current) {
        webcamRef.current.srcObject = mediaStream;
      }

      // WebSocket bağlantısı açıksa "openCamera" mesajını gönder
      if (socketRef.current.readyState === WebSocket.OPEN) {
        socketRef.current.send("openCamera");
      }
    } catch (error) {
      console.error('Kamera erişimi sağlanamadı', error);
    }
  };

  return (
    <div>
      <button id="cameraButton" onClick={openCamera}>Kamerayı Aç</button>
      <video ref={webcamRef} autoPlay style={{ width: '100%' }}></video>
    </div>
  );
};
