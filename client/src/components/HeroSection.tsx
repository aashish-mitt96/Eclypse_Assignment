import Hero_header from '../assets/Hero_header.png';
import Hero_mp4 from '../assets/Hero_mp4.png';
import arrow_right from '../assets/arrow_right.svg'

const HeroSection = () => {
  return (
    <>
      {/* Hero Header Image */}
      <div className="absolute top-[197px] left-[44px] w-[383px] h-[129px]">
        <img
          src={Hero_header}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="absolute w-[50.94px] h-[18px] top-[308.51px] left-[1339px] font-helvetica font-medium text-[14.57px] leading-[100%] tracking-[-0.02em] text-white">
        © 2025
      </p>

      {/* Hero Main Image */}
      <div
        className="absolute top-[198px] left-[13px] w-[414px] h-[347px] rounded-[1.49px] md:top-[353px] md:left-[50px] md:right-[50px] md:h-[530px] md:w-auto md:rounded-[5px]"
      >
        <img
          src={Hero_mp4}
          alt="hero video"
          className="w-full h-full object-cover rounded-[1.49px] md:rounded-[5px]"
        />
      </div>

      <div
        className="absolute w-[880px] h-[174px] top-[1030px] left-[60px] font-normal text-[48px] leading-[100%]"
        style={{
          fontFamily: '"Neue Montreal", sans-serif',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: '100%',
        }}
      >
        Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
      </div>

      {/* Container with relative positioning */}
      <div
        className="absolute w-[311.97px] h-[41.49px] top-[1320px] left-[50px]"
        style={{ position: 'relative' }} // <-- Added relative positioning here
      >
        <div
          className="w-[301px] border-[#E3E3E3] font-normal text-[25px] leading-[100%] tracking-[-0.02em]"
          style={{ top: '41.49px', position: 'relative' }}
        >
          Learn more about Eclypse
        </div>

        {/* Arrow SVG positioned absolutely inside relative parent */}
        <div
          style={{
            position: 'absolute',
            top: '41.49px',
            left: '273px',
            width: '27.556422715647766px',
            height: '27.556422715647766px',
            transformOrigin: 'center',
          }}
        >
          <img
            src={arrow_right}
            alt="arrow right"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div
          style={{
            position: 'relative',
            top: '43.49px',
            width: '301px',
            border: '1px solid rgba(227, 227, 227, 1)',
            transform: 'rotate(0deg)', // no rotation but explicit
          }}
        >
          {/* Your content here */}
        </div>

      </div>
    </>
  );
};

export default HeroSection;
