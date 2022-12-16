import Favorite from "./components/favorite/Favorite";
import Filter from "./components/filter/Filter";
import ProductList from "./components/productsList/ProductsList";

function App() {
  return (
    <div>
      <Filter />
      <ProductList />
      <Favorite />
    </div>
  );
}

export default App;
