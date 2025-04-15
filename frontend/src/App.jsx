import { createContext, useState} from 'react';
import Content from './components/Content'
import './App.css';

export const AppContext = createContext();

function App() {
  const [test, setTest] = useState(false)

  return (
  <>
<AppContext.Provider value={{ test, setTest }}>
    <Content/>
</AppContext.Provider>
  </>
  );
}

export default App;