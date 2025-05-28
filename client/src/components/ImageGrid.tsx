import Frame1 from '../assets/Frame1.png'
import Frame2 from '../assets/Frame2.jpg'
import Frame3 from '../assets/Frame3.jpg'
import Frame4 from '../assets/Frame4.jpg'
import Frame5 from '../assets/Frame5.png'

const ImageGrid = () => {

//   useEffect(() => {
//   fetch('http://localhost:5000/api/products')
//     .then(res => res.json())
//     .then(data => setProducts(data));
//    }, []);

  return (
    <div className="relative w-[1388px] -left-5 mx-auto" style={{ height: '2424px' }}>
      <div className="absolute top-[1510px] left-[50px] w-[883px] h-[489px] rounded-[5px] overflow-hidden">
        <img src={Frame1} alt="Description" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-[1510px] left-[964px] w-[424px] h-[489px] rounded-[5px] overflow-hidden">
        <img src={Frame2} alt="Description" className="w-full h-full object-cover" />
      </div>

      <div className="absolute top-[2027px] left-[50px] w-[424px] h-[397px] rounded-[5px] overflow-hidden">
        <img src={Frame3} alt="Description" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-[2027px] left-[509px] w-[424px] h-[397px] rounded-[5px] overflow-hidden">
        <img src={Frame4} alt="Description" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-[2027px] left-[964px] w-[424px] h-[397px] rounded-[5px] overflow-hidden">
        <img src={Frame5} alt="Description" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default ImageGrid
