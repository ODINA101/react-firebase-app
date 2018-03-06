import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note';
import NoteForm from './NoteForm';
import {DB_config} from './Config';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {

constructor(props) {
  super(props);
this.addNote = this.addNote.bind(this);
this.app = firebase.initializeApp(DB_config);
this.database = this.app.database().ref().child("notes");




  this.state = {
    notes:[],
  }





}

componentWillMount() {
  const prevNotes = this.state.notes;
this.database.on("child_added",snap =>{
  prevNotes.push({
    id:snap.key,
     noteContent:snap.val().noteContent
  })
  this.setState({
    notes:prevNotes.reverse()
  })
})
}

addNote(note) {
this.database.push().set({noteContent:note})
}
  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
        </div>
   <div className="App">
        <div style={{texTalign:"center"}}>
        {
          this.state.notes.map((note)=> {
          return(
            <Note noteContent={note.noteContent} noteId={note.id} key={note.id}/>
                )

           })

        }
        </div>
</div>

  <div className="row justify-content-md-center">

<NoteForm addNote={this.addNote} style={{texTalign:"center",position:"fixed",bottom:"0px"}}/>
</div>

</div>
    );
  }
}

export default App;
