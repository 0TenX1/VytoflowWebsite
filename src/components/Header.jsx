import { vytoflowLogo } from "../assets";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 bg-neutral-50 backdrop-blur-sm border-b border-neutral-600 lg:bg-neutral-50 lg:backdrop-blur-sm">
      <div className="flex items-center px-1 lg:px-5 xl:px-5 max-lg:py-4">
        <a className="block w-[10rem] lg:-mr-5" href="#hero">
          <img src={vytoflowLogo} width={190} height={80} alt="Vytoflowtech" />
        </a>
      </div>
    </div>
  );
};

export default Header;
