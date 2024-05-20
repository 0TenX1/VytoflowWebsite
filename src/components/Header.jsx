import { vytoflowLogo } from "../assets";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b-2 border-n-9 lg:bg-white lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-5 xl:px-10 max-lg:py-4">
        <a className="block w-[10rem] xl:mr-8" href="#hero">
          <img src={vytoflowLogo} width={190} height={80} alt="Vytoflowtech" />
        </a>
      </div>
    </div>
  );
};

export default Header;
