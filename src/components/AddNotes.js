import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addToAPI,
  editToAPI,
  fetchAllNotes,
} from "../features/notes/notesSlice";

const AddNotes = () => {
  const [notes, setNotes] = useState({
    materia: "",
    profesor: "",
    calificacion: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const notesState = useSelector((state) => state.notes.notes);

  const handleChange = (e) => {
    setNotes({
      ...notes,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(fetchAllNotes());
  }, [dispatch]);

  useEffect(() => {
    if (params.id) {
      const theNote = notesState.find((note) => note.id === Number(params.id));
      setNotes(theNote);
    }
  }, [notesState, params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editToAPI(notes));
    } else {
      dispatch(addToAPI(notes));
    }

    navigate("/");
  };

  return (
    <div className="bg-slate-300 h-screen my-4 mx-28">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex-col flex items-center bg-slate-200 p-8 rounded-2xl"
      >
        <div className="my-2 flex justify-center">
          <label>Materia:</label>
          <input
            type="text"
            name="materia"
            value={notes.materia}
            onChange={handleChange}
            className="bg-slate-100 rounded-md mx-2 p-1 w-full"
          ></input>
        </div>
        <div className="my-2 flex justify-center">
          <label>Profesor:</label>
          <input
            type="text"
            name="profesor"
            value={notes.profesor}
            onChange={handleChange}
            className="bg-slate-100 rounded-md mx-2 p-1 w-full"
          ></input>
        </div>
        <div className="my-2 flex justify-center">
          <label>Calificacion:</label>
          <input
            type="number"
            name="calificacion"
            value={notes.calificacion}
            onChange={handleChange}
            className="bg-slate-100 rounded-md mx-2 p-1 w-1/5"
          ></input>
        </div>
        <div className="my-2 flex justify-center">
          <button className="bg-sky-800 hover:bg-sky-700 rounded-xl p-3 w-full text-white">
            {params.id ? "Editar" : "Agregar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNotes;
