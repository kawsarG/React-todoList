import React from 'react';
import Note from './components/Note';
import NoteList from './components/NoteList';
import {v4 as uuid} from 'uuid'

class App extends React.Component {
  state={
    notes:[],
    id:uuid(),
    note:'',
    editNote:false
  }
  handleChange=e=>{
    this.setState({note:e.target.value});
  }
  handleSubmit=e=>{
    e.preventDefault();
    const newNote={
      id:this.state.id,
      note:this.state.note
    }
    const newNotes=[...this.state.notes,newNote];
    this.setState({notes:newNotes,id:uuid(),note:'',editNote:false});
  }
  clearNotes=e=>{
    e.preventDefault();
    this.setState({notes:[]})
  }
  handleDelete=id=>{
    const filteredNotes = this.state.notes.filter(note=>note.id!==id)
    this.setState({notes:filteredNotes})
  }
  handleEdit=id=>{
    const filteredNotes = this.state.notes.filter(note=>note.id!==id)
    const selectedNote=this.state.notes.find(note=>note.id===id)
    this.setState({notes:filteredNotes,
      note:selectedNote.note,
      id:id,
      editNote:true
    })
  }
  render(){
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className='text-capitalize text-center'>todo App</h1>
              <Note note={this.state.note} handleChange={this.handleChange} handleSubmit={this.handleSubmit} edit={this.state.editNote}></Note>
              <NoteList notes={this.state.notes} clear={this.clearNotes}
              handleDelete={this.handleDelete} handleEdit={this.handleEdit}></NoteList>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
 
}

export default App;
