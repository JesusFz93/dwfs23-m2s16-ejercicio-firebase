import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const PeliculasPage = () => {
  const crearPelicula = async () => {
    const pelicula = {
      nombre: "Bambi",
      categoria: "Animada",
      imagen: "https://images8.alphacoders.com/798/thumb-1920-798164.jpg",
    };

    const tabla = collection(db, "peliculas");
    await addDoc(tabla, pelicula);
    await obtenerPeliculas();
  };

  const obtenerPeliculas = async () => {
    const resp = await getDocs(collection(db, "peliculas"));
    const peliculas = resp.docs.map((pelicula) => {
      return {
        id: pelicula.id,
        ...pelicula.data(),
      };
    });

    console.log(peliculas);
  };

  const obtenerPelicula = async () => {
    const documento = doc(db, "peliculas", "obDiKswNPSdx76uHfPMx");
    const resp = await getDoc(documento);
    const pelicula = {
      id: resp.id,
      ...resp.data(),
    };
    console.log(pelicula);
  };

  const actualizarPelicula = async () => {
    const pelicula = {
      nombre: "Bambi 3",
    };

    const documento = doc(db, "peliculas", "obDiKswNPSdx76uHfPMx");
    await updateDoc(documento, pelicula);
    await obtenerPelicula();
  };

  const eliminarPelicula = async () => {
    const documento = doc(db, "peliculas", "obDiKswNPSdx76uHfPMx");
    await deleteDoc(documento);
    await obtenerPeliculas();
  };

  const mostrarVariable = () => {
    const variable_entorno = import.meta.env.VITE_VARIABLE_ENTORNO;
    console.log(variable_entorno);
  };

  return (
    <>
      <button type="button" className="btn btn-success" onClick={crearPelicula}>
        Crear Pelicula
      </button>
      <button type="button" className="btn btn-info" onClick={obtenerPeliculas}>
        Obtener Peliculas
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={obtenerPelicula}
      >
        Obtener Pelicula
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={actualizarPelicula}
      >
        Actualizar Pelicula
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={eliminarPelicula}
      >
        Eliminar Pelicula
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={mostrarVariable}
      >
        Mostrar variable
      </button>
    </>
  );
};

export default PeliculasPage;
