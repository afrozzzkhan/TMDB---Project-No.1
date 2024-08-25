import { useState, useEffect } from "react";
import ProductCard from "../productCard";
function Products () {

    let [productss, setProductss] = useState([]);

    useEffect(function() {

        fetch('https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products').then((response)=>{

            return response.json();
        }).then((res)=>{
            console.log(res);
            setProductss(res);
        })

    },[])


    return (
        <div>
           { productss.map(function(product){

                return <ProductCard name={product.title} price={product.price} key={product.id} />
            })}
        </div>
      )
}

export default Products;