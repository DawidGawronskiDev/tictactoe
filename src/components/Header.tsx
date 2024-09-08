import Logo from "../../src/assets/logo.svg";
import IconO from "../../src/assets/icon-o.svg";
import IconX from "../../src/assets/icon-x.svg";
import useGameContext from "../store/GameContextProvider";
import ButtonReset from "./ButtonReset";

const Header = () => {
  const { gameController } = useGameContext();

  return (
    <div className="w-11/12 max-w-[460px] mx-auto grid grid-cols-3 gap-5 h-14 *:h-full">
      <div className="place-content-center">
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <div className="bg-c-600 rounded-lg gap-4 flex items-center justify-center h-full">
          <img
            src={
              gameController.getCurrentPlayer().getMark() === "x"
                ? IconX
                : IconO
            }
            alt=""
            className="w-5 h-5 text-red-500"
          />
          <h4 className="text-c-700">Turn</h4>
        </div>
      </div>
      <div className="place-self-end place-content-center">
        <ButtonReset />
      </div>
    </div>
  );
};

export default Header;
