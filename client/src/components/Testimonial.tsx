import Person1 from '../assets/Person1.png';
import Person2 from '../assets/Person2.png';
import Person3 from '../assets/Person3.png';
import left_arrow from '../assets/left_arrow.svg';

const Testimonial = () => (
  <>
    <div className="absolute w-[1331px] h-[412px] top-[4483px] left-1/2 transform -translate-x-1/2">

      {/* Left Section */}
      <div className="w-[191px] h-[19px] text-white/80 flex items-center whitespace-nowrap px-1 text-[16px] leading-[1] tracking-[0.32em] font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>
        OUR CUSTOMERS
      </div>
      <div className="absolute w-[46px] h-[143px] top-[92px] left-[16px] text-[#f7f7f7] text-[118.84px] leading-[1]" style={{ fontFamily: 'Coolvetica, sans-serif', fontWeight: 400 }}>
        “
      </div>
      <div className="absolute w-[750px] h-[104px] top-[112px] left-[84px] text-[#d2d2d2] text-[48px] leading-[1.09]" style={{ fontFamily: 'Neue Montreal, sans-serif', fontWeight: 400 }}>
        Understated, but unforgettable. It feels like it was made for me
      </div>
      <div className="absolute w-[169px] h-[36px] top-[304px] left-[82px] text-[#c4c4c4] text-[24px] leading-[1.5] whitespace-nowrap" style={{ fontFamily: 'Neue Montreal, sans-serif', fontWeight: 400 }}>
        Random Woman
      </div>
      <div className="absolute top-[352px] left-[84px] w-[58px] h-[24px] text-[#535353] text-[16px] leading-[1.5] whitespace-nowrap font-medium" style={{ fontFamily: 'Neue Montreal, sans-serif' }}>
        NY, USA
      </div>
      
      {/* Right Section */}
      <img src={left_arrow} alt="Arrow Icon" className="absolute top-[148px] left-[1140px] w-[11.97px] h-[23.94px]"/>
      <img src={Person1} alt="Profile" className="absolute top-[97px] left-[1205px] w-[126px] h-[126px] object-cover"/>
      <img src={Person2} alt="Profile" className="absolute top-[253px] left-[1233px] w-[69px] h-[69px] object-cover"/>
      <img src={Person3} alt="Profile" className="absolute top-[343px] left-[1233px] w-[69px] h-[69px] object-cover"/>
    </div>

    {/* Border */}
    <div className="absolute border w-[1342px] left-1/2 transform -translate-x-1/2" style={{ top: '4996px', borderColor: 'rgba(61, 61, 61, 1)', borderWidth: '1px' }}/>
  </>
);

export default Testimonial;
