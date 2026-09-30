import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Store } from "../ContextProvider/AppProvider";

const ProductComponent=()=>{
   
     const { list } = useContext(Store);
    const navigate=useNavigate();
    // useEffect(()=>{

        
    //     // const loadProduct=()=>{
    //     //     const localdata=localStorage.getItem('product');

    //     //     if(localdata){
    //     //         setData(JSON.parse(localdata));
    //     //     }
    //     // }
    //     // loadProduct();
    //     // window.addEventListener('productUpdated',loadProduct);

    //     // return()=>{
    //     //     window.removeEventListener('productUpdated',loadProduct);
    //     // }
    // },[]);

    


    return (
    <div className="bg-gray-100 flex flex-wrap gap-6 p-6">

{list.map((list) => (
<div
key={list.id}
className="group w-[310px] min-h-[220px] bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-xl transition"
>

{/* NEW: image */}
<div className="relative w-full h-44 mb-5 overflow-hidden rounded-lg bg-gray-100">
<img
src={list.image}
alt={list.title}
onError={(e) => { e.target.src = "https://placehold.co/400x300?text=No+Image"; }}
className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
/>
<span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-full">
{list.category}
</span>
</div>

<h2 className="text-xl !text-black font-bold text-gray-800 mb-5">
                    Product #{list.id}
</h2>

<p className="text-gray-700 mb-3">
<span className="font-semibold">Title:</span>{" "}
{list.title}
</p>

<p className="text-xl font-bold text-blue-600 mb-3"><span className="font-semibold">Price:</span>{" "}
                    ₹{list.price}
</p>

<p className="text-gray-700 mb-3">
<span className="font-semibold">Category:</span>{" "}
{list.category}
</p>

<p className="text-gray-700">
<span className="font-semibold">Rating:</span>{" "}
                    ⭐ {list.rating}
</p>

<p className="text-gray-700" onClick={()=>{navigate(`/Detailproductpage/${list.id}`)}}>
                    see details ..
</p>

</div>
        ))}

</div>
);
}
export default ProductComponent;