import { useEffect, useState } from 'react';
import { Header } from './Components/Header/Header';
import { Product } from './Components/Product/Product';
import { getProductData } from './data/get-product-data';
import { fetchedProductData } from './types/fetched-data';

function App() {
  const [productInfo, setProductInfo] = useState<fetchedProductData | null>(
    null
  );

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
      <Header />
      {/* for example sake, with woudl probably render a error modal if the fetch failed */}
      {productInfo && <Product productInfo={productInfo} />}
    </>
  );
}

export default App;
