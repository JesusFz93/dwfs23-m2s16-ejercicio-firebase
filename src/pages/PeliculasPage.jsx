import { db } from "../firebase/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const PeliculasPage = () => {
  const crearPelicula = async () => {
    const pelicula = {
      nombre: "Bambi",
      cateogoria: "Animada",
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

  return (
    <>
      <button type="button" className="btn btn-success" onClick={crearPelicula}>
        Crear Pelicula
      </button>
      <button type="button" className="btn btn-info" onClick={obtenerPeliculas}>
        Obtener Peliculas
      </button>
    </>
  );
};

export default PeliculasPage;
