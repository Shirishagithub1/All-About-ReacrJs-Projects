function ProductCard({ title, price, image, rating ,category}) {


    console.log(rating)
    return (
        
        <div className="card">
            
            <img src={image} />
            <p className="cat1">{category}</p>
            
            <p>{title}</p>
            <p> Price :{price}</p>
            <h4 >Rating :{rating.rate} </h4>
            

        </div>

    )
}

export default ProductCard