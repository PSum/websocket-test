import { useContext, useEffect } from 'react';
import { AppContext } from '../App';

function Content() {
  const { socket } = useContext(AppContext);

  useEffect(() => {
    if (!socket) return;

    socket.on('connect', () => {
      console.log('✅ Connected to server with ID:', socket.id);
    });

    socket.on('message', (data) => {
      console.log('📩 Message from server:', data);
    });

    return () => {
      socket.off('connect');
      socket.off('message');
    };
  }, [socket]);

  return (
    <div>
      <h1>Socket.IO Client Ready</h1>
    </div>
  );
}

export default Content;
