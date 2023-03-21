import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { QueryClientProvider, QueryClient } from "react-query";
import ProductDetails from "./pages/productDetails/ProductDetails";
import FavoriteContextProvider from "./contexts/FavoriteContext";
import NavBar from "./components/navBar/NavBar";
import SearchParamsContextProvider from "./contexts/SearchParamsContextProvider";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });
  return (
    <>
      <FavoriteContextProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <SearchParamsContextProvider>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<ProductDetails />} />
              </Routes>
            </SearchParamsContextProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </FavoriteContextProvider>
    </>
  );
}

export default App;
