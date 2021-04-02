import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import Form from "./components/Form";
import Header from "./components/Header";
import ListCard from "./components/ListCard";
import Spinner from "./components/Spinner";
import { getTotalPages } from "./components/helpers/helpers";
function App() {
  const [category, Searchcategory] = useState("");
  const [arrayImages, SetArrayImages] = useState([]);
  const [paginaActual, SetPaginaActual] = useState(1);
  const [TotalPaginas, SetTotalPaginas] = useState(1);
  const [Loading, SetLoading] = useState(false);
  useEffect(() => {
    const handleGetData = async () => {
      const cantidadporpagina = 30;
      const myKey = "20981664-2ad3b0286af766197e433ea18";
      if (category === "") {
        const url = `https://pixabay.com/api/?key=${myKey}&pretty=true&per_page=${cantidadporpagina}&page=${paginaActual}`;
        try {
          const response = await axios.get(url);
          SetLoading(true);
          setTimeout(() => {
            SetLoading(false);
            SetArrayImages(response.data.hits);
            //mando total de paginas en el paginador
            SetTotalPaginas(
              getTotalPages(response.data.totalHits, cantidadporpagina)
            );
          }, 2000);
        } catch (error) {
          console.log(error);
        }
      } else {
        const url = `https://pixabay.com/api/?key=${myKey}&pretty=true&q=${category}&per_page=${cantidadporpagina}&page=${paginaActual}`;
        try {
          const response = await axios.get(url);
          SetLoading(true);
          setTimeout(() => {
            SetLoading(false);
            SetArrayImages(response.data.hits);
            //mando total de paginas en el paginador
            SetTotalPaginas(
              getTotalPages(response.data.totalHits, cantidadporpagina)
            );
          }, 2000);
        } catch (error) {
          console.log(error);
        }
      }
    };
    handleGetData();
    const upPage = document.querySelector("#upPage");
    upPage.scrollIntoView({ behavior: "smooth" });
  }, [category, paginaActual]);
  const handleBeforePage = () => {
    if (paginaActual === 1) return;
    SetPaginaActual(paginaActual - 1);
  };
  const handleAfterPage = () => {
    if (paginaActual === TotalPaginas) return;
    SetPaginaActual(paginaActual + 1);
  };
  return (
    <main className="App">
      <Header />
      <section className="wrapperSection" id="upPage">
        <Form Searchcategory={Searchcategory} />
      </section>
      <section className="wrapperSection">
        {Loading ? <Spinner /> : <ListCard arrayImages={arrayImages} />}
      </section>
      <section className="wrapperSection">
        <div className="wrapperButtons">
          {paginaActual === 1 ? null : (
            <button className="button" onClick={handleBeforePage}>
              &laquo; Anterior
            </button>
          )}
          {paginaActual === TotalPaginas ? null : (
            <button className="button" onClick={handleAfterPage}>
              Siguiente: &raquo;
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
