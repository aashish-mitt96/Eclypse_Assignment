import Accordion from '../components/Accordion'
import Footer from '../components/Footer'
import  HeroSection  from '../components/HeroSection'
import ImageGrid from '../components/ImageGrid'
import Navbar from '../components/Navbar'
import ProductDetail from '../components/ProductDetail'
import Testimonial from '../components/Testimonial'
const HomePage = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <ImageGrid/>
        <ProductDetail/>
        <Accordion/>
        <Testimonial/>
        <Footer/>
    </>
  )
}

export default HomePage