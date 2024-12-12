import axios from "axios";
import { createContext, useContext, useState } from "react";

type ProductResponse = {
  id: string;
  name: string;
  price: number;
  avatar: string;
  createdAt: string;
};

async function getProducts() {
  try {
    const res = await axios.get(
      "https://675a2e4e099e3090dbe3eb34.mockapi.io/api/v1/products"
    );
    return res.data as ProductResponse[];
  } catch (error) {
    console.error(error);
  }
}

const ThemeContext = createContext<themeProps>("light");

function App() {
  const [products, setProducts] = useState<ProductResponse[] | undefined>(
    undefined
  );

  const [theme, setTheme] = useState<themeProps>("light");

  const handleGetProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="w-full m-4 flex-row">
        <h1>Products</h1>
        <label htmlFor="theme">
          <input
            type="checkbox"
            name="theme"
            checked={theme === "dark"}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />{" "}
          {` `}
          is Dark mode?
        </label>
        <button onClick={handleGetProducts}>Get Products</button>
        <ProductList products={products} />
      </div>
    </ThemeContext.Provider>
  );
}

type themeProps = "light" | "dark";

type ProductListProps = {
  products?: ProductResponse[];
};

function ProductList({ products }: ProductListProps) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className="flex items-center justify-center w-full mx-auto"
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <ul className="flex flex-wrap gap-2 justify-between items-center">
        {products?.map((product) => (
          <li key={product.id}>
            <img src={product.avatar} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
