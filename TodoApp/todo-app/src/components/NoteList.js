import React, { Component } from 'react'
import NoteItem from './NoteItem'

export default class NoteList extends Component {
    render() {
        const {notes,clear,handleEdit,handleDelete} = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className='text-capitalize text-center mb-3'>All Notes</h3>
                { notes.length<1 && <h3 className='text-danger text-center'>You have no Notes !!!</h3>}
                {
                    notes.map(note=>{
                        return <NoteItem key={note.id} title={note.note}
                        handleDelete={()=>handleDelete(note.id)}
                        handleEdit={()=>handleEdit(note.id)}></NoteItem>
                    })
                }
                {
                    notes.length<1? <button className='btn btn-danger btn-block disabled my-5'onClick={clear}>Clear All Notes</button>:<button className='btn btn-danger btn-block my-5'onClick={clear}>Clear All Notes</button>
                }
                
                <p className='text-center'>Made with <i className='fa fa-heart text-danger'></i> By Kawsar Ahmed</p>
            </ul>
        )
    }
}
