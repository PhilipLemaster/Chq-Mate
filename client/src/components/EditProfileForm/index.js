import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Card, Col } from 'reactstrap';
import './style.css';
import GameDropdown from '../GameDropdown';
import API from "../../utils/API";
import Card from "../Card";
import { List } from "../List";
import Book from "../Book";

class EditProfileForm extends Component {
  state = {
    profiles: [],
    q: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // getBooks = () => {
  //   API.getBooks(this.state.q)
  //     .then(res =>
  //       this.setState({
  //         books: res.data
  //       })
  //     )
  //     .catch(() =>
  //       this.setState({
  //         books: [],
  //         message: "No New Books Found, Try a Different Query"
  //       })
  //     );
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.getBooks();
  // };

  handleProfileSave = id => {
    const profile = this.state.profiles.find(profile => profile.id === id);

    API.saveProfile({
      // googleId: book.id,
      gamertag: profile.profileInfo.gamertag,
      console: profile.profileInfo.console,
      bio: profile.profileInfo.bio,
      topgame: profile.profileInfo.topgame,
      style: profile.profileInfo.style,
      image: profile.profileInfo.image
    }).then(() => this.getProfiles());
  };

  render() {
    return (
    <div>
      <h1 className='ePHeading'>EDIT PROFILE</h1>
      <Form className='wholeForm'>
        <FormGroup>
          <Label for="gamertag">Gamertag</Label>
          <Input type="text" name="gamertag" id="gamertag" placeholder="CaptainTeal" />
        </FormGroup>
        <FormGroup>
          <Label for="consoleSelect">Primary Console</Label>
          <Input type="select" name="conSelect" id="consoleSelect">
            <option>Xbox One</option>
            <option>Playstation 4</option>
            <option>Nintendo Switch</option>
            <option>PC</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="styleSelect">Type</Label>
          <Input type="select" name="styleSelect" id="styleSelect">
            <option>Casual</option>
            <option>Competitive</option>
            <option>Speedrunner</option>
          </Input>
        </FormGroup>
        <GameDropdown />
        <FormGroup className="fGameGroup">
          <Label for="favGame">Top Game</Label>
          <Input type="text" name="game" id="favGame" readOnly/>
        </FormGroup>
        <FormGroup className= 'uBGroup'>
          <Label for="userBio">User Bio</Label>
          <Input type="textarea" name="text" id="userBio" maxLength="100" />
          <FormText color="muted">
          Max Length: 100 characters
          </FormText>
        </FormGroup>
        <FormGroup className="picGroup">
          <Label for="profilePicture">Profile Picture</Label>
          <Input type="file" name="file" id="profilePicture" />
          <FormText color="muted">
            Ensure that profile image is appropriate and follows all Chq Mate terms of use
          </FormText>
        </FormGroup>
          <Col size="md-12">
            <button>submit</button>
            <Card title="Results">
              {this.state.profiles.length ? (
                <div>
                  {this.state.profiles.map(profile => (
                    <div
                      key={profile.id}
                      gamertag={profile.volumeInfo.title}
                      console={profile.volumeInfo.subtitle}
                      bio={profile.volumeInfo.infoLink}
                      topgame={profile.volumeInfo.authors.join(", ")}
                      style={profile.volumeInfo.description}>
                      image={book.volumeInfo.imageLinks.thumbnail}
                      <Button className="submitBut" onClick={() => this.handleProfileSave(profile.id)}>Submit</Button>
                    </div>
                  ))}
                </div>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
      </Form>
    </div>
  );
}
}




// const EditProfileForm = (props) => {
//   return (
//     <div>
//       <h1 className='ePHeading'>EDIT PROFILE</h1>
//       <Form className='wholeForm'>
//         <FormGroup>
//           <Label for="gamertag">Gamertag</Label>
//           <Input type="text" name="gamertag" id="gamertag" placeholder="CaptainTeal" />
//         </FormGroup>
//         <FormGroup>
//           <Label for="consoleSelect">Primary Console</Label>
//           <Input type="select" name="conSelect" id="consoleSelect">
//             <option>Xbox One</option>
//             <option>Playstation 4</option>
//             <option>Nintendo Switch</option>
//             <option>PC</option>
//           </Input>
//         </FormGroup>
//         <FormGroup>
//           <Label for="styleSelect">Type</Label>
//           <Input type="select" name="styleSelect" id="styleSelect">
//             <option>Casual</option>
//             <option>Competitive</option>
//             <option>Speedrunner</option>
//           </Input>
//         </FormGroup>
//         <GameDropdown />
//         <FormGroup className="fGameGroup">
//           <Label for="favGame">Top Game</Label>
//           <Input type="text" name="game" id="favGame" readOnly/>
//         </FormGroup>
//         <FormGroup className= 'uBGroup'>
//           <Label for="userBio">User Bio</Label>
//           <Input type="textarea" name="text" id="userBio" maxLength="100" />
//           <FormText color="muted">
//           Max Length: 100 characters
//           </FormText>
//         </FormGroup>
//         <FormGroup className="picGroup">
//           <Label for="profilePicture">Profile Picture</Label>
//           <Input type="file" name="file" id="profilePicture" />
//           <FormText color="muted">
//             Ensure that profile image is appropriate and follows all Chq Mate terms of use
//           </FormText>
//         </FormGroup>
//         <Button className="submitBut">Submit</Button>
//       </Form>
//     </div>
//   );
// }

export default EditProfileForm;