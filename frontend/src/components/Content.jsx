import { useContext, useEffect } from 'react';
import { AppContext } from '../App';

function Content() {
  const { socket, setSocket } = useContext(AppContext);

  useEffect(() => {
    if (!socket) return;

    // The client waits for the server to send the message 'connect' and then executes the code
    socket.on('connect', () => {
      console.log('✅ Connected to server with ID:', socket.id);
    });

    socket.on('message', (data) => {
      console.log("hey")
      console.log('📩 Message from server:', data);
      socket.emit('thisIsAKeyword', 1, "message received")
      console.log('Emitted keyword');
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
