import React, { useState } from "react";
import nextId from "react-id-generator";

function Input(props) {
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  const [nuevaPrioridad, setNuevaPrioridad] = useState("");

  const setInput = (e) => {
    setNuevaDescripcion(e.target.value);
  };
  const setSelect = (e) => {
    setNuevaPrioridad(e.target.value);
  };
  const mandarTarea = (e) => {
    e.preventDefault();
    props.agregarTarea({
      tarea: nuevaDescripcion,
      prioridad: nuevaPrioridad,
      id: nextId(),
    });
  };

  return (
    <form>
      <input
        type="text"
        name="tarea"
        placeholder="Descripción de la tarea"
        onChange={setInput}
      />
      <select name="prioridad" onChange={setSelect}>
        <option value="" disabled selected>
          Prioridad
        </option>
        <option value="prioridad-baja">baja</option>
        <option value="prioridad-media">media</option>
        <option value="prioridad-alta">alta</option>
      </select>
      <button onClick={mandarTarea}>¡Agregar!</button>
    </form>
  );
}

export default Input;
