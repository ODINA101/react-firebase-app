import React,{Component} from 'react';




export default class NoteForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent:''
    };
    this.handleUserInput = this.handleUserInput.bind(this)
  this.writeNote = this.writeNote.bind(this)
  }


handleUserInput(e) {
  this.setState({
    newNoteContent:e.target.value
  })

}

writeNote() {
  this.setState({
    newNoteContent:''
  });


  this.props.addNote(this.state.newNoteContent);
}

   render() {
     return(
       <div className="row">
<input type="text" style={{width:'300px'}}onChange={this.handleUserInput} value={this.state.newNoteContent} className="form-control" placeholder="enter note"></input>
<button className="btn btn-danger" onClick={this.writeNote} >Add Note</button>
       </div>

     )
   }




}
