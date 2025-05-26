import Person1 from '../assets/Person1.png';
import Person2 from '../assets/Person2.png';
import Person3 from '../assets/Person3.png';
import left_arrow from '../assets/left_arrow.svg';

const Testimonial = () => (
  <>
    <div
      className="absolute"
      style={{
        width: "1331px",
        height: "412px",
        top: "4483px",
        left: "50px",
      }}
    >
      <div className="w-[191px] h-[19px] text-white/80 font-roboto font-medium text-[16px] leading-[1] tracking-[0.32em] flex items-center whitespace-nowrap px-1">
        OUR CUSTOMERS
      </div>

      <div className="absolute w-[46px] h-[143px] top-[92px] left-[16px] text-[118.84px] leading-[1] text-[#f7f7f7] font-coolvetica font-normal tracking-[0]">
        “
      </div>

      <div className="absolute w-[750px] h-[104px] top-[112px] left-[84px] text-[48px] leading-[1.09] text-[#d2d2d2] font-neuemontreal font-normal tracking-[0]">
        Understated, but unforgettable. It feels like it was made for me
      </div>

      <div className="absolute w-[169px] h-[36px] top-[304px] left-[82px] text-[24px] leading-[1.5] text-[#c4c4c4] font-neuemontreal whitespace-nowrap font-normal tracking-[0]">
        Random Woman
      </div>

      <div className="absolute top-[352px] left-[84px] w-[58px] h-[24px] text-[16px] leading-[1.5] text-[#535353] font-neuemontreal whitespace-nowrap font-medium tracking-[0]">
        NY, USA
      </div>

      <img
        src={left_arrow}
        alt="Arrow Icon"
        className="absolute top-[148px] left-[1140px] w-[11.97px] h-[23.94px]"
      />

      <img
        src={Person1}
        alt="Profile"
        className="absolute top-[97px] left-[1205px] w-[126px] h-[126px] object-cover"
      />
      <img
        src={Person2}
        alt="Profile"
        className="absolute top-[253px] left-[1233px] w-[69px] h-[69px] object-cover"
      />
      <img
        src={Person3}
        alt="Profile"
        className="absolute top-[343px] left-[1233px] w-[69px] h-[69px] object-cover"
      />
    </div>

    <div
      className="absolute border"
      style={{
        width: "1342px",
        top: "4996px",
        left: "50px",
        borderColor: "rgba(61, 61, 61, 1)",
        borderWidth: "1px",
      }}
    />
  </>
);

export default Testimonial;
