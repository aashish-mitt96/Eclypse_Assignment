import Product from '../assets/Product.jpg'

const ProductDetail = () => {
    return (
        <>
            <div className="w-[800px] h-[58px] absolute top-[2608px] left-[43px] font-normal text-[48px] leading-[100%] tracking-[-0.02em] font-neueMontreal">
                Silhouette No. 1 – Vermilion
            </div>
            <img
                src={Product}
                alt="Description"
                className="w-[1440px] h-[912px] absolute top-[2850px] left-[-1px]"
            />
        </>
    )
}

export default ProductDetail