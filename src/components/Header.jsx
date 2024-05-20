import { vytoflowLogo } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";

const Header = () => {
  const pathname = useLocation();
  return (
    <div className="fixed top-0 z-50 w-full lg:h-[4.56rem] bg-n-8/90 backdrop-blur-sm border-b-2 border-b-cyan-600 lg:bg-white lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-8 xl:px-10 max-lg:py-4">
        <a
          className="block w-[9rem] xl:mr-8"
          href="#hero"
          style={{ marginTop: "-0.5rem" }}
        >
          <img src={vytoflowLogo} width={190} height={80} alt="Vytoflowtech" />
        </a>
        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:ml-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:justify-end">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-cyan-800 ${
                  item.onlyMobile ? "lg:hidden" : ""
                }px-6 py-6 md:py-8 lg:-mr-0.25 text-sm lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-cyan-600"
                    : "lg:text-n-4"
                }`}
                style={{ marginTop: "-0.35rem" }}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
