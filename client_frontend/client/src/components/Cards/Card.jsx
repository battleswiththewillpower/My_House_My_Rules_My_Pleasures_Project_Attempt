import axios from 'axios'
import React, { useEffect, useState} from 'react'
// import {Link} from 'react-router-dom'

const Card = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(reponse=>{
                console.log(reponse.data)
                setProducts(reponse.data)
            })
            .catch(err=>console.log(err))
    }, [])

    

    }

  return (
    <div>
                {
                    products.map((product, i)=>{
                        return (
                            <tr key={i}>
                                
                                <td> {product.title}</td>
                                {/* <td>${product.price}</td> */}
                                <td>{product.description}</td>
                                
                                {/* <td><button onClick={()=>handleDelete(product._id)}>Delete</button></td> */}
                                
                            </tr>
                        )
                    })
                }

    </div>
  )
}

export default Card