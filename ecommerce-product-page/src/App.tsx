import { useEffect, useState } from 'react';
import { Header } from './Components/Header/Header';
import { Product } from './Components/Product/Product';
import { getProductData } from './data/get-product-data';
import { fetchedProductData } from './types/fetched-data';
import { CartContext } from './utils/Context/cart-context';
import { Cart } from './types/cart-types';

function App() {
  const [productInfo, setProductInfo] = useState<fetchedProductData | null>(
    null
  );
  const [cart, setCart] = useState<Cart>({
    totalCost: 0,
    cartItems: [],
  });

  useEffect(() => {
    getProductInfo();
  }, []);

  const getProductInfo = async () => {
    const data = await getProductData();
    const parsedData: fetchedProductData = await JSON.parse(data);
    setProductInfo(parsedData);
  };

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        {productInfo && <Product productInfo={productInfo} />}
      </CartContext.Provider>
    </>
  );
}

export default App;
