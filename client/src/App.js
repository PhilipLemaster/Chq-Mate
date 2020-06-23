import React from 'react';
import PostLogNav from './components/PostLogNav';
import EditProfileForm from './components/EditProfileForm';
import JumboSplash from './components/JumboSplash';
import PreLogNav from './components/PreLogNav';
import CreateAccountForm from './components/CreateAccountForm';
import MatchCard from './components/MatchCard';

function App() {

  return (
    <div>
      <PostLogNav />
      <MatchCard />
      {/* <CreateAccountForm /> */}
      {/* <PreLogNav /> */}
     
      {/* <EditProfileForm /> */}
      {/* <JumboSplash /> */}
    </div>
  );
}

export default App;