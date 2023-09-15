import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { AddProduct } from './action';
import { RemoveProduct} from './action';



const Card=({products, AddProduct, RemoveProduct})=>{
    const [item, setItem]=useState("");
    const submitHandler=async e=>{
        e.preventDefault();
        if(item!==""){
            await AddProduct({name:item});
            setItem("");
        }
    setItem("");
    }
return(
    <center>
        <div class="card" style={{"width":"18rem"}}>
            <div class="card-body">
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Add Products" value={item} onChange={e=>setItem(e.target.value)}/>
                    <button type="submit" class="btn btn-success">Add Products</button>
                </form>
                <br/>
                {products.map(products=>{
                    return(
                        <div class="border justify-content-end">
                            {products.name}
                            <span onClick={()=>RemoveProduct(products.name)} class="badge square-pill bg-danger">X</span>
                    </div>
                    )
                })}
            </div>
        </div>
    </center>
)} 

const mapStateToProps=state=>({
    products:state
  })
  
  export default connect(mapStateToProps, {AddProduct,RemoveProduct})(Card);