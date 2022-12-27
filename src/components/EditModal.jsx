import React from "react";
import { useState } from "react";

function EditModal(props) {
  const [tareaEditada, setTareaEditada] = useState("");
  const [prioridadEditada, setPrioridadEditada] = useState("");

  const editarTareaInput = (e) => {
    setTareaEditada(e.target.value);
  };

  const editarTareaSelect = (e) => {
    setPrioridadEditada(e.target.value);
  };

  return (
    <div className="modalContainer">
      <div className="editContainer">
        <input
          onChange={editarTareaInput}
          type="text"
          name="tarea"
          placeholder="edite tarea aqui"
        />
        <select onChange={editarTareaSelect} name="prioridad">
          <option value="" disabled selected>
            Prioridad
          </option>
          <option value="prioridad-baja">baja</option>
          <option value="prioridad-media">media</option>
          <option value="prioridad-alta">alta</option>
        </select>
        <button
          onClick={() => {
            props.editarTareaFinal(tareaEditada, prioridadEditada);
          }}
        >
          send
        </button>
      </div>
    </div>
  );
}

export default EditModal;
