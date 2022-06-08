import { Fragment, useEffect, useState } from "react";

const ProductList = (props) => {
    
    const product = { id: 3, name: 'M1 MacBook', description: 'Normal MacBook on the Market', price: 699.00 };

    const products = [
        { id: 5, name: 'M1 MacBook', description: 'Normal MacBook on the Market', price: 699.00 },
        { id: 6, name: 'M2 MacBook', description: 'Good MacBook on the Market', price: 1699.00 },
        { id: 7, name: 'M3 MacBook', description: 'Better MacBook on the Market', price: 2699.00 },
        { id: 8, name: 'M4 MacBook', description: 'Best MacBook on the Market', price: 3699.00 }
    ];
     
    const titleStyle = {
        fontSize: '40px',
        textAlign: 'center'
    }

    const bottomStyle = {
        fontSize: '8px',
        textAlign: 'center'
    }
    
    useEffect( () => {
        console.log(product);
    })

    return (
        <Fragment>
            
            <h1 style={titleStyle}>List of Products Here</h1>

            {products.map((pr, i) =>
                <Fragment key={i}>

                    <Product3 product={pr}></Product3>
                    <p style={bottomStyle}>This is number {i} in the loop</p>
                </Fragment> 
            )}
            
        </Fragment>
    )
   
};

export default ProductList;

// const Product1 = (props) => {

//     const costStyle = {
//         color: 'red',
//     }

//     // return (
//     //     <div>
//     //         <h1>{product.name} - ID:{product.id}</h1>
//     //         <h4 style={costStyle}>${product.price}</h4>
//     //         <p>{product.description}</p>
//     //     </div>
//     // );
    
// };

const Product3 = (props) => {

    const [product, setProduct] = useState(props.product)

    const rowStyle = {
        borderTop: '1px solid #dddddd',
        padding: '20px'
    }

    const costStyle = {
        color: 'red',
    }

    return (
        <div style={rowStyle}>
            <h3>{product.name} - ID:{product.id}</h3>
            <h6 style={costStyle}>${product.price}</h6>
            <p>{product.description}</p>
        </div>
    )
    
};