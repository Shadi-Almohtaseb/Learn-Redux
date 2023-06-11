import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/reducers/counterReducer";
import { deleteProduct, fetchProducts } from "../redux/reducers/dataReducer";
import Loading from "./Loading";
// import "../App.css";

const Home = () => {
  const [inputValue, setInputValue] = useState();
  const count = useSelector((state) => state.counter.value);
  const loading = useSelector((state) => state.data.loading);
  const products = useSelector((state) => state.data.value);
  console.log(loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl pt-10">Counter</h1>
      <div className="flex items-center justify-center gap-10">
        <button
          className="border-2 text-2xl border-blue-500 bg-blue-500 px-4 py-2 rounded-md text-white font-bold my-5 hover:bg-transparent duration-200 cursor-pointer hover:text-blue-500"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className="font-bold text-3xl">{count}</span>
        <button
          className="border-2 text-2xl border-blue-500 bg-blue-500 px-4 py-2 rounded-md text-white font-bold my-5 hover:bg-transparent duration-200 cursor-pointer hover:text-blue-500"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div>
        <input
          type="number"
          placeholder="enter value..."
          onChange={(e) => setInputValue(Number(e.target.value))}
          value={inputValue}
          className="border-2 border-blue-400 rounded-full px-3 py-[5px]"
        />
        <button
          className="border-2 border-blue-500 bg-blue-500 px-4 py-2 rounded-full text-white font-bold ml-5 my-5 hover:bg-transparent duration-200 cursor-pointer hover:text-blue-500"
          onClick={() => dispatch(incrementByValue(inputValue))}
        >
          Add
        </button>
      </div>
      <div>
        {loading ? (
          <Loading />
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white pr-16 pl-8 py-8 my-5 rounded-2xl mx-8  flex items-center justify-center"
            >
              <div className="pr-16">
                <h1 className="font-bold text-2xl mb-5">{product.title}</h1>
                <h1>{product.description}</h1>
              </div>
              <div>
                <img src={product.image} alt="image" width={200} />
                <button
                  className={`border-2 text-2xl border-red-500 bg-red-500 px-4 py-2 rounded-md text-white font-bold my-5 hover:bg-transparent duration-200 cursor-pointer hover:text-red-500`}
                  onClick={() => {
                    dispatch(deleteProduct(product.id));
                  }}
                >
                  Delete Product
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
