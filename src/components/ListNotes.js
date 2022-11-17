import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteToAPI, fetchAllNotes } from "../features/notes/notesSlice";

const ListNotes = () => {
  let notes = useSelector((state) => state.notes.notes);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllNotes());
  }, [dispatch]);

  const handleEdit = (id) => {
    const theNote = notes.find((note) => note.id === id);
    navigate(`edit/${theNote.id}`);
  };

  const handleDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    const confirmed = confirm('¿Desea ELIMINAR este paciente?')
    if (confirmed) {
      const theNote = notes.find((note) => note.id === id);
      dispatch(deleteToAPI(theNote))
    }
  };

  return (
    <div>
      <div className="rounded-xl bg-slate-200 mx-6 mt-6 pb-4">
        <div className="grid grid-cols-5 rounded-t-xl bg-slate-100">
          <p className="col-start-1 mx-6">Materia</p>
          <p className="col-start-2 mx-6">Profesor</p>
          <p className="col-start-3 mx-6">Calificacion</p>
        </div>

        {notes.map((note) => (
          <div
            key={note.id}
            className="grid grid-cols-5 mx-6 bg-slate-200 border-slate-300 border-b-2 items-center"
          >
            <p className="col-start-1 ">{note.materia}</p>
            <p className="col-start-2 ml-2">{note.profesor}</p>
            <p className="col-start-3 ml-8">{note.calificacion}</p>
            <button
              className="bg-blue-500 hover:bg-blue-400 rounded-md mx-4 text-white my-2"
              onClick={() => handleEdit(note.id)}
            >
              Editar
            </button>
            <button
              className="bg-red-500 hover:bg-red-400 rounded-md mx-4 text-white my-2"
              onClick={() => handleDelete(note.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <div className="bg-green-400 hover:bg-green-300 cursor-pointer p-1 rounded-full flex mx-20 my-8">
        <Link className="m-auto text-3xl font-bold" to={"/add"}>
          Agregar +
        </Link>
      </div>
    </div>
  );
};

export default ListNotes;
