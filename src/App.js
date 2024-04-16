import logo from './logo.svg';
import './App.css';
import { Audio } from 'react-loader-spinner';
function App() {
  return (
    <div className="App">
    <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
    </div>
  );
}

export default App;
