import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Store } from "../ContextProvider/AppProvider";
import axios from "axios";
// import { products } from "../../../backend/database/dummydata";

const Detailedproductpage = () => {
  const { list, singledata, setSingledata } = useContext(Store);
  let { id } = useParams();
  const fetchdata = async (id) => {
    const res = await axios.get(
      `http://localhost:3000/product/productlist/${id}`,
    );
    console.log(res.data, "data");
    setSingledata(res.data);
  };
  useEffect(() => {
    fetchdata(id);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {console.log(singledata)}
      {singledata?.image && (
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Product Image */}
            <div className="bg-gray-50 flex  items-center justify-center p-8">
              <img
                src={singledata.image}
                alt={singledata.title}
                className="w-full max-w-md h-[350px] object-contain rounded-xl"
              />
            </div>

            {/* Product Details */}
            <div className="p-8 text-black">
              <p className="text-sm text-gray-500 mb-2">
                {singledata.category}
              </p>

              <h1 className="text-3xl !text-black font-bold mb-3">
                {singledata.title}
              </h1>

              <div className="flex items-center gap-3 mb-5">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  ⭐ {singledata.rating}
                </span>

                <span className="text-gray-500">
                  {singledata.stock} items available
                </span>
              </div>

              <p className="text-3xl font-bold text-blue-600 mb-5">
                ₹{singledata.price}
              </p>

              <p className="text-gray-600 leading-7 mb-6">
                {singledata.description}
              </p>

              {/* Basic Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-3">
                  <p className="text-sm text-gray-500">Brand</p>
                  <p className="font-semibold">{singledata.brand}</p>
                </div>

                <div className="border rounded-lg p-3">
                  <p className="text-sm text-gray-500">Color</p>
                  <p className="font-semibold">{singledata.color}</p>
                </div>

                <div className="border rounded-lg p-3">
                  <p className="text-sm text-gray-500">Warranty</p>
                  <p className="font-semibold">{singledata.warranty}</p>
                </div>

                <div className="border rounded-lg p-3">
                  <p className="text-sm text-gray-500">Stock</p>
                  <p className="font-semibold">{singledata.stock}</p>
                </div>
              </div>

              {/* Button */}
              <button className="w-full bg-[#3E2723] text-white py-3 rounded-lg font-semibold hover:bg-[#5D4037] transition">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Features
      <div className="border-t p-8">

        <h2 className="text-2xl font-bold !text-black mb-5">
          Product Features
        </h2>

        <div className="flex  flex-wrap gap-3">

          {singledata.features.map((feature, index) => (
            <span
              key={index}
              className="bg-gray-100   text-gray-700 px-4 py-2 rounded-lg"
            >
              ✓ {feature}
            </span>
          ))}

        </div>

      </div> */}
        </div>
      )}
    </div>
  );
};

export default Detailedproductpage;
