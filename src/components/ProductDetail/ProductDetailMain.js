import React from 'react'
import { useState } from 'react'

function ProductDetailMain({productdetail,addtocart,productquantity,setProductquantity}) {
    const [clickcount,setClickcount] = useState(0)

    console.log(clickcount);
    return (
        <div className="container mt-5">
        <div className="row ">
            <div className="col-md-6">
    <h1>{productdetail.nameofproduct}</h1>
    <p style={{lineHeight:"2rem",paddingTop:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, impedit corrupti. Consectetur, distinctio fugiat? Nihil dolores consequatur, unde voluptate ullam dignissimos quasi alias eos rem labore asperiores pariatur repellendus exercitationem tempora corrupti numquam animi aliquam ad molestiae doloremque odit aperiam.</p>
  
    <div className="d-flex ">
    <h2>{productdetail.price}</h2>
    <div className="d-flex">
    <button className="btn" onClick={() => setProductquantity(pre => pre -1)}>-</button>
    <button className="btn" disabled>{productquantity}</button>
    <button className="btn" onClick={() => setProductquantity(pre => pre + 1)}>+</button>
    </div>
    
    </div>
  

    <button className="btn btn-danger mt-3" onClick={() => {
        addtocart(productdetail,productquantity)
        setClickcount(pre => pre  + 1)
        }}
        disabled={clickcount}
        >Add</button>
            </div>
            <div className="col-md-6">
                <img style={{width:"500px"}} src={productdetail.imgofproduct} alt=""/>
            </div>
        </div>
    </div>
    )
}

export default ProductDetailMain
