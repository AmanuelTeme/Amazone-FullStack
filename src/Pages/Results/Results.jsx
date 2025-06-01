// import React from 'react'
import React, { useEffect, useState } from 'react'

// import css
import styles from './Results.module.css'

// import components
import ProductCard from '../../Components/Product/ProductCard'
import LayOut from '../../Components/LayOut/LayOut'

// import useParams from react-router-dom
import {useParams} from 'react-router-dom'

// import axios
import axios  from 'axios'

// import endpoint
import { productUrl } from '../../Api/endPoints'



function Results() {

  // state for products from the category
  const [results, setResults] = useState([]);

  // get categoryName from useParams
  const {categoryName} =useParams()


  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
       setResults(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])



  
  return (
    <LayOut> 
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
          
          <div className={styles.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
          
      </section>
    </LayOut>
  )
}

export default Results