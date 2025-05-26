import Hero_header from '../assets/Hero_header.png';
import Hero_mp4 from '../assets/Hero_mp4.png';

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

      {/* Hero Main Image */}
      <div
        className="absolute top-[353px] left-[50px] right-[50px] h-[530px] rounded-[5px]"
      >
        <img
          src={Hero_mp4}
          alt="hero video"
          className="w-full h-full object-cover rounded-[5px]"
        />
      </div>
      <div
        className="absolute  w-[800px]  h-[174px]  top-[1030px] 
    left-[60px] 
    font-normal 
    text-[48px] 
    leading-[100%] 
    tracking-[-0.02em] 
  "
      >
        Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
      </div>

      <div
        className="
    absolute 
    w-[311.97px] 
    h-[41.49px] 
    top-[1320px] 
    left-[50px]
  "
      >
        <div
          className="
    w-[301px]
    border-[#E3E3E3] 
    top-[41.49px] 
    font-normal 
    text-[24px] 
    leading-[100%] 
    tracking-[-0.02em]
  "
        >
          Learn more about Eclypse
        </div>
      </div>
    

    </>
  );
};

export default HeroSection;
