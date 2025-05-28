import { useNavigate } from "react-router-dom";
import chevronLeft from "../assets/chevron-left.png";
import RedDot from "../assets/Red-Dot.png";
import Red from "../assets/Red.png";

const ShippingAddress = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  // Common classes for inputs and labels (removed font-['Helvetica Neue'] here)
  const labelBaseClass = "absolute text-[18px] font-normal leading-[100%] text-black";
  const inputBaseClass = "absolute rounded-[8px] border-[2px] border-[#C8C8C8] px-4 text-lg";

  const addressLabels = [
    { text: "First Name", top: "top-[361px]", left: "left-[140px]" },
    { text: "Last Name", top: "top-[361px]", left: "left-[478px]" },
    { text: "Street Address", top: "top-[484px]", left: "left-[140px]" },
    { text: "Apt Number", top: "top-[607px]", left: "left-[140px]" },
    { text: "State", top: "top-[607px]", left: "left-[359px]" },
    { text: "Zip", top: "top-[607px]", left: "left-[576px]" },
  ];

  const inputBoxes = [
    { id: "firstName", width: "w-[303px]", height: "h-[67px]", top: "top-[391px]", left: "left-[140px]" },
    { id: "lastName", width: "w-[303px]", height: "h-[67px]", top: "top-[391px]", left: "left-[478px]" },
    { id: "streetAddress", width: "w-[641px]", height: "h-[67px]", top: "top-[514px]", left: "left-[140px]" },
    { id: "aptNumber", width: "w-[203px]", height: "h-[67px]", top: "top-[637px]", left: "left-[141px]" },
    { id: "state", width: "w-[203px]", height: "h-[67px]", top: "top-[638px]", left: "left-[359px]" },
    { id: "zip", width: "w-[203px]", height: "h-[67px]", top: "top-[637px]", left: "left-[578px]" },
  ];

  const fontStyle = { fontFamily: '"Helvetica Neue", sans-serif' };

  return (
    <>
      {/* Back Button */}
      <button
        type="button"
        aria-label="Go Back"
        onClick={handleBack}
        className="w-[38px] h-[38px] absolute top-[195px] left-[95px] cursor-pointer transition-transform duration-300 ease-out hover:scale-105 z-50 bg-transparent border-none p-0"
      >
        <img src={chevronLeft} alt="" className="w-full h-full" />
      </button>

      {/* Red Dot Markers */}
      <img src={RedDot} alt="Indicator Dot" className="w-[39.84px] h-[39.84px] absolute top-[295px] left-[140px]" />
      <img src={Red} alt="" className="w-[16px] h-[16px] absolute top-[307px] left-[152px]" />

      {/* Title */}
      <h1
        style={fontStyle}
        className="absolute top-[199px] left-[168px] w-[199px] h-[30px] text-[25px] font-normal leading-[100%] tracking-normal text-black"
      >
        Shipping Address
      </h1>

      {/* Outer Box */}
      <div className="w-[731px] h-[625px] absolute top-[263px] left-[100px] border-[3px] rounded-[9px] border-[#C3C3C3]" />

      {/* Add New Address */}
      <h2
        style={fontStyle}
        className="absolute top-[300px] left-[200px] w-[203px] h-[30px] text-[25px] font-normal leading-[100%] tracking-normal text-black"
      >
        Add New Address
      </h2>

      {/* Labels */}
      {addressLabels.map(({ text, top, left }) => (
        <label
          key={text}
          style={fontStyle}
          className={`${labelBaseClass} ${top} ${left}`}
          htmlFor={text.toLowerCase().replace(/ /g, "")}
        >
          {text}
        </label>
      ))}

      {/* Input Boxes */}
      {inputBoxes.map(({ id, width, height, top, left }) => (
        <input
          key={id}
          id={id}
          name={id}
          type="text"
          className={`${inputBaseClass} ${width} ${height} ${top} ${left} focus:outline-none focus:ring-2 focus:ring-black`}
          aria-label={id}
          placeholder=""
          style={fontStyle}
        />
      ))}

      {/* Cancel Button */}
      <button
        type="button"
        style={fontStyle}
        className="absolute top-[742px] left-[140px] w-[203px] h-[67px] border-[2px] border-[#C3C3C3] rounded-[8px] text-black text-[20px] font-normal cursor-pointer hover:bg-gray-100"
      >
        Cancel
      </button>

      {/* Save Button */}
      <button
        type="submit"
        className="absolute top-[742px] left-[371px] w-[410px] h-[67px] rounded-[8.71px] bg-black flex items-center justify-center cursor-pointer hover:bg-gray-800"
      >
        <span
          style={fontStyle}
          className="text-white text-[19.35px] font-medium leading-[100%] text-center select-none"
        >
          Save This Address
        </span>
      </button>

      {/* Right Side Box */}
      <div className="w-[572px] h-[625px] absolute top-[263px] left-[852px] rounded-[9px] shadow-[0_0_4px_rgba(0,0,0,0.25)] bg-[#f0f0f0]" />

      {/* Privacy Policy Text */}
      <p
        style={fontStyle}
        className="w-[479px] h-[54px] absolute top-[289px] left-[892px] font-normal text-[18px] leading-[151%] tracking-normal text-[#575757]"
      >
        By placing your order, you agree to our company Privacy policy and Conditions of use.
      </p>

      {/* Divider Line */}
      <hr className="w-[497px] absolute top-[371px] left-[889px] border-[#b0b0b0]" />

      {/* Order Summary */}
      <h2
        style={fontStyle}
        className="absolute top-[399px] left-[889px] w-[178px] h-[30px] text-[25px] font-normal leading-[100%] tracking-normal text-black"
      >
        Order Summary
      </h2>

      {/* Order Details */}
      <p
        style={fontStyle}
        className="absolute top-[474px] left-[889px] w-[327px] h-[21px] text-[18px] font-normal leading-[100%] tracking-normal text-[#575757]"
      >
        Items - Silhouette No. 1 - Vermilion
      </p>
      <p
        style={fontStyle}
        className="absolute top-[513px] left-[889px] w-[207px] h-[21px] text-[18px] font-normal leading-[100%] tracking-normal text-[#575757]"
      >
        Shipping and handling:
      </p>
      <p
        style={fontStyle}
        className="absolute top-[552px] left-[889px] w-[97px] h-[21px] text-[18px] font-normal leading-[100%] tracking-normal text-[#575757]"
      >
        Before tax:
      </p>
      <p
        style={fontStyle}
        className="absolute top-[591px] left-[889px] w-[129px] h-[21px] text-[18px] font-normal leading-[100%] tracking-normal text-[#575757]"
      >
        Tax Collected:
      </p>

      {/* Prices */}
      <p
        style={fontStyle}
        className="absolute top-[474px] left-[1179px] w-[207px] h-[21px] text-[18px] font-normal leading-[100%] tracking-normal text-right text-[#575757]"
      >
        7,999
      </p>
      <p
        style={fontStyle}
        className="absolute top-[513px] left-[1179px] w-[207px] h-[21px] text-[18px] font-normal leading-[100%] tracking-normal text-right text-[#575757]"
      >
        200
      </p>
      <p
        style={fontStyle}
        className="absolute top-[552px] left-[1179px] w-[207px] h-[21px] text-[18px] font-normal leading-[100%] tracking-normal text-right text-[#575757]"
      >
        6,599
      </p>
      <p
        style={fontStyle}
        className="absolute top-[587px] left-[1179px] w-[207px] h-[21px] text-[18px] font-normal leading-[100%] tracking-normal text-right text-[#575757]"
      >
        1,400
      </p>

      {/* Horizontal Divider */}
      <hr className="absolute w-[497px] top-[684px] left-[883px] border-gray-400" />

      {/* Order Total */}
      <h2
        style={fontStyle}
        className="absolute text-black font-normal w-[131px] h-[30px] top-[704px] left-[892px] text-[25px] leading-[100%] tracking-normal"
      >
        Order Total:
      </h2>
      <h2
        style={fontStyle}
        className="absolute text-black font-normal text-right w-[63px] h-[30px] top-[704px] left-[1324px] text-[25px] leading-[100%] tracking-normal"
      >
        8,199
      </h2>

      {/* Place Order Button */}
      <button
        type="submit"
        className="absolute top-[769px] left-[891px] w-[497px] h-[67px] bg-black rounded-[9px] flex items-center justify-center cursor-pointer hover:bg-gray-800"
      >
        <span
          style={fontStyle}
          className="text-white text-[20px] font-medium leading-[100%] text-center select-none"
        >
          Place Order
        </span>
      </button>
    </>
  );
};

export default ShippingAddress;
