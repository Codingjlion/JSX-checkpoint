
import './App.css';
import FullName from './Component/FullName';
import Address from './Component/Profile/Address';
import ProfilePhoto from './Component/Profile/ProfilePhoto';



function App() {
  return (
    <div className="App">

      <div className="App2">
      <ProfilePhoto />
      </div>
      
      <div className="text">
      <FullName />
      <Address />
      </div>
      
    </div>
  );
}

export default App;
