import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";

const Hero = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      const api = await fetch("https://dummyjson.com/products");
      const datas = await api.json();
      //   console.log(datas.products);
      setProducts(datas.products);
    };
    getPost();
  }, []);
  return (
    <div>
      <div className="m-10 grid grid-cols-3 gap-14 container px-20">
        {products.map((value) => {
          return (
            <div
              className=" flex items-center space-x-4 bg-slate-50 m-2 rounded py-3"
              key={value.id}
            >
              <img src={value.images[0]} className="w-40" />
              <div className="space-y-1">
                <h1 className="text-lg">{value.title}</h1>
                <div className="flex items-center">
                  <CiStar
                    className={
                      value.rating > 1 ? "text-yellow-400 fill-current" : ""
                    }
                  />
                  <CiStar
                    className={
                      value.rating > 2 ? "text-yellow-400 fill-current" : ""
                    }
                  />
                  <CiStar
                    className={
                      value.rating > 3 ? "text-yellow-400 fill-current" : ""
                    }
                  />
                  <CiStar
                    className={
                      value.rating > 4 ? "text-yellow-400 fill-current" : ""
                    }
                  />
                  <CiStar
                    className={
                      value.rating > 5 ? "text-yellow-400 fill-current" : ""
                    }
                  />
                  <p className="px-1 text-sm">{value.rating} ratings</p>
                </div>
                <h1 className="text-3xl">
                  <span className="text-sm">₹</span>
                  {value.price}
                </h1>
                <button
                  className="bg-yellow-400 px-3 py-1 rounded-xl text-sm"
                  id="btn"
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
