import Navbar2 from "../components/Navbar2"
import ShippingAddress from "../components/ShippingAddress"

const Checkout = () => {
  return (
    <>
      <div className="w-[1440px] h-[1024px] mx-auto bg-[rgba(255,255,255,1)]">
        <Navbar2 />
        <ShippingAddress />
      </div>
    </>
  )
}

export default Checkout