import "./productList.css"
import Product from "../product/Product"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My Portfolio</h1>
                <p className="pl-desc">
                    This is my portfolio of my work spanning the 3 month course of the boot camp,
                    many different projects and many more in the works will be added, here
                    is some of my work.
                </p>
            </div>
            <div className="pl-list">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}

export default ProductList