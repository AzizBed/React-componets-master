import MyProfilePic from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Address"
import './App.css';

function App() {
  return (
    <div className="App">
     <MyProfilePic/>
     <FullName/>
     <Adress/>
    </div>
  );
}

export default App;
