import React from "react";
import { useState } from "react";
import EditModal from "../components/EditModal";
import Input from "../components/Input";
import Output from "../components/Output";
import "./Home.css";

function Home() {
  const [tareas, setTareas] = useState([]);
  const [idEditada, setIdEditada] = useState("");
  const [verEditar, setVerEditar] = useState(false);

  const agregarTarea = (objeto) => {
    setTareas([...tareas, objeto]);
  };

  const borrarTarea = (id) => {
    const nuevaLista = tareas.filter((tarea) => {
      if (tarea.id == id) {
        return false;
      } else {
        return true;
      }
    });
    setTareas(nuevaLista);
  };

  const cambiarVerEditar = (id) => {
    setVerEditar(!verEditar);
    setIdEditada(id);
  };

  const editarTareaFinal = (tareaEditada, prioridadEditada) => {
    const arrayFiltrada = tareas.map((e) => {
      if (e.id == idEditada) {
        return {
          tarea: tareaEditada,
          prioridad: prioridadEditada,
          id: idEditada,
        };
      } else {
        return e;
      }
    });
    setTareas(arrayFiltrada);
    setVerEditar(false);
  };

  return (
    <main>
      <h1>¡Lista de tareas!</h1>
      <Input agregarTarea={agregarTarea} />
      <h3>Tareas</h3>
      <Output
        tareas={tareas}
        borrarTarea={borrarTarea}
        cambiarVerEditar={cambiarVerEditar}
      />
      <p className="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
      {verEditar ? <EditModal editarTareaFinal={editarTareaFinal} /> : <></>}
    </main>
  );
}

export default Home;
