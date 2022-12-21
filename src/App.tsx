import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { QueryClientProvider, QueryClient } from "react-query";
import ProductDetails from "./pages/productDetails/ProductDetails";
import FavoriteContextProvider from "./contexts/FavoriteContext";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <FavoriteContextProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<ProductDetails />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </FavoriteContextProvider>
    </>
  );
}

export default App;
