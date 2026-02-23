import ProductCard from "./components/ProductCard";
import "./App.css"
function App() {
  // const product = {
  //   name: "لپتاپ ایسوس",
  //   price: "25,000,000 تومان",
  //   image: "https://th.bing.com/th?id=OIF.Da0Czw0pLLD7uhEYz%2fCWbg&w=204&h=204&c=7&r=0&o=7&pid=1.7&rm=3"
  // };
  const products = [
    {
      name: " ساعت هوشمند",
      price: "5,000,000 تومان",
      image: "https://static.mercdn.net/item/detail/orig/photos/m21721083335_1.jpg?1736729359"
    },
    {
      name: "گوشی  ایفون",
      price: "15,000,000 تومان",
      image: "https://www.ixbt.com/img/n1/news/2021/2/5/26.03_large.jpg"
    },
    {
      name: "هدفون بی‌سیم",
      price: "2,500,000 تومان",
      image: "https://tse3.mm.bing.net/th/id/OIP.QRNXXz1I0uMRV3aklZeg7wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];
  return (
    <div className="app-container">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default App;