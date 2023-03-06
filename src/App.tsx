import Titulo from "./components/titulo";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaListagemLivros from "./pages/PaginaListagemLivros";
import PaginaDetalhesLivros from "./pages/PaginaDetalhesLivros";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaListagemLivros />,
  },
  {
    path: "/:nome",
    element: <PaginaDetalhesLivros />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
