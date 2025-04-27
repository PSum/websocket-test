import { createContext, useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Content from './components/Content';
import './App.css';

export const AppContext = createContext();

function App() {
  const [test, setTest] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3000'); // Replace with real URL in prod
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <AppContext.Provider value={{ test, setTest, socket, setSocket }}>
      <Content />
    </AppContext.Provider>
  );
}

export default App;
