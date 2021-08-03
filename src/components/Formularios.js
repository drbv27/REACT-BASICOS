import React, { useState } from "react";

/* export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha envaido con exito!");
  };
  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p>Elige tu sabor JS Favorito: </p>
        <input
          type="radio"
          name="sabor"
          id="vanilla"
          value="vanilla"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="">Vanilla</label>
        <input
          type="radio"
          name="sabor"
          id="react"
          value="react"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="">React</label>
        <input
          type="radio"
          name="sabor"
          id="vue"
          value="vue"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="">Vue</label>
        <input
          type="radio"
          name="sabor"
          id="angular"
          value="angular"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="">Angular</label>
        <input
          type="radio"
          name="sabor"
          id="svelte"
          value="svelte"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="">Svelte</label>
        <hr />
        <p>Elige tu lenguaje de programación favorito: </p>
        <select
          name="lenguaje"
          onChange={(e) => setLenguaje(e.target.value)}
          defaultValue=""
        >
          <option value="">- - -</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <hr />
        <label htmlFor="terminos">Acepto terminos y condiciones.</label>
        <input
          type="checkbox"
          name="terminos"
          id="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <br />
        <input type="submit" value="" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>
    </>
  );
} */

export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha envaido con exito!");
  };
  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elige tu sabor JS Favorito: </p>
        <input
          type="radio"
          name="sabor"
          id="vanilla"
          value="vanilla"
          onChange={handleChange}
        />
        <label htmlFor="">Vanilla</label>
        <input
          type="radio"
          name="sabor"
          id="react"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="">React</label>
        <input
          type="radio"
          name="sabor"
          id="vue"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="">Vue</label>
        <input
          type="radio"
          name="sabor"
          id="angular"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="">Angular</label>
        <input
          type="radio"
          name="sabor"
          id="svelte"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="">Svelte</label>
        <hr />
        <p>Elige tu lenguaje de programación favorito: </p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">- - -</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <hr />
        <label htmlFor="terminos">Acepto terminos y condiciones.</label>
        <input
          type="checkbox"
          name="terminos"
          id="terminos"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" value="Enviar" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>
    </>
  );
}
