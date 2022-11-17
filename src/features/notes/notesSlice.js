import { createSlice } from '@reduxjs/toolkit'


import axios from 'axios'

const initialState = {
    notes: []
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotesList: (state, action) => {
      state.notes = action.payload
    },
    addNotes: (state, action) => {
      (state.notes).push(action.payload)
    },
    editNotes : (state, action) => {
      state.notes = state.notes.filter( note => note.id !== action.payload.id)
      state.notes.push(action.payload)
    },
    deleteNotes : (state, action) => {
      state.notes = state.notes.filter( note => note.id !== action.payload.id)
    }
   },
})

export const { setNotesList, addNotes, editNotes, deleteNotes } = notesSlice.actions

export default notesSlice.reducer

export const fetchAllNotes = () => (dispatch) => {
  axios
    .get('http://localhost:4000/posts')
    .then((response) => {
      dispatch(setNotesList(response.data))
    })
    .catch((error) => console.log(error))
}

export const addToAPI = (notes) => dispatch => {
  axios
    .post('http://localhost:4000/posts', notes)
    .then((response) => {
      dispatch(addNotes(response.data))
    } )
    .catch((error) => console.log(error))
}

export const editToAPI = (note) => dispatch => {
  axios
    .put(`http://localhost:4000/posts/${note.id}`, note)
    .then((response) => {
      dispatch(editNotes(response.data))
    } )

}

export const deleteToAPI = (note) => dispatch => {
  axios
    .delete(`http://localhost:4000/posts/${note.id}`, note)
    .then((response) => {
      dispatch(deleteNotes(note))
    } )
}