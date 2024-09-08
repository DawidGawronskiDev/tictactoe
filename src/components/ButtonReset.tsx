import { GameBoard } from "../classes/GameBoard";
import IconRestart from "../icons/IconRestart";
import useGameContext from "../store/GameContextProvider";

const ButtonReset = () => {
  const { gameController, handleGameBoard } = useGameContext();

  const handleRestart = () => {
    gameController.restart();
    handleGameBoard(GameBoard.getEmptyBoard());
  };

  return (
    <button
      onClick={handleRestart}
      disabled={!gameController.getWinner() && !gameController.getTie()}
      className="aspect-square bg-c-700 w-14 grid place-content-center rounded-xl"
    >
      <IconRestart />
    </button>
  );
};

export default ButtonReset;
