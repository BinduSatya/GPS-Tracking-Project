import carImage from "../assets/images/car.png";

const Header = () => {
  return (
    <div className="flex flex-row items-center font-bold w-30">
      <img src={carImage} alt="cars image" />
      <h1 className="text-white text-l">Arun</h1>
    </div>
  );
};

export default Header;
