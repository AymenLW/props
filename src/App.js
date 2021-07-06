import react from 'react'
import FullName from './Profile/component/FullName';
import Profession from './Profile/component/Profession';
import Bio from './Profile/component/Bio';

import './App.css';
import  A from './component/imagee.jpg' 
function App() {
  return (
    <div className="App">
    <FullName fullName="aymen"/>
    <Profession profession="developpeur"/>
    <Bio bio="bio"/>
     
    </div>
  );
}

export default App;
