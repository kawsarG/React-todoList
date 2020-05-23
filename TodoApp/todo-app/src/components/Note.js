import React, { Component } from 'react'

export default class Note extends Component {
    render() {
        const {note,handleChange,handleSubmit,edit}=this.props
        return (
            <div className='card card-body my-3'>
               <form onSubmit={handleSubmit}>
                   <div className="input-group">
                        <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                                <i className='fa fa-book'></i>
                            </div>
                        </div>
                        <input type="text" className='form-control text-capitalize' placeholder='Add a note' value={note} onChange={handleChange} required/>
                        
                   </div>
                   <button type='submit' className={edit?'btn btn-success btn-block mt-3':
                   'btn btn-primary btn-block mt-3'}>
                       {edit? 'Edit Note': 'Add Note'}
                   </button>
               </form>
            </div>
        )
    }
}
