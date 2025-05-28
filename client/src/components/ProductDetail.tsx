import Product from '../assets/Product.jpg'
import ProductD from '../assets/ProductD.png'

const ProductDetail = () => {
    return (
        <>
            <div className="w-[800px] h-[58px] absolute top-[2608px] left-[80px] font-normal text-[48px] leading-[100%] tracking-[-0.02em] font-neueMontreal">
                Silhouette No. 1 – Vermilion
            </div>

            {/* Main Product Image */}
            <img
                src={Product}
                alt="Description"
                className="w-[1440px] h-[912px] absolute top-[2850px] left-1/2 -translate-x-1/2"
            />

            {/* ProductD Image aligned on the left portion of the main product */}
            <img
                src={ProductD}
                alt="Left Portion Detail"
                className="absolute top-[2850px] left-[50px] w-auto h-[912px]"
            />
        </>
    )
}

export default ProductDetail
