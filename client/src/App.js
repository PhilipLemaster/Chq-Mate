import React from 'react';
import './app.css'
import PostLogNav from './components/PostLogNav';
import EditProfileForm from './components/EditProfileForm';
import JumboSplash from './components/JumboSplash';
import PreLogNav from './components/PreLogNav';
import CreateAccountForm from './components/CreateAccountForm';
import MatchCards from './components/MatchCards';

function App() {

  return (
    <div>
      <PostLogNav />
      <div className='cardContainer'>
        <MatchCards profImg="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"/>
      </div>
      
      {/* <CreateAccountForm /> */}
      {/* <PreLogNav /> */}
     
      {/* <EditProfileForm /> */}
      {/* <JumboSplash /> */}
    </div>
  );
}

export default App;