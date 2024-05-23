import { useRef } from 'react';
import Webcam from 'react-webcam';

export const ReactCamera = () => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    sendPhoto(imageSrc);
  };

  const sendPhoto = (photo) => {
    const ws = new WebSocket('ws://192.168.4.88:8080');

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: 'photo', payload: photo }));
    };
  };

  return (
    <div>
      
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
        videoConstraints={{
          facingMode: 'user'
        }}
      />
      <button onClick={capture}>Fotoğraf Çek ve Gönder</button>
    </div>
  );
};


