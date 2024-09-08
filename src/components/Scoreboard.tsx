import useGameContext from "../store/GameContextProvider";
import Score from "./Score";

const Scoreboard = () => {
  const { gameController } = useGameContext();

  return (
    <div className="w-11/12 max-w-[460px] mx-auto grid grid-cols-3 gap-5 h-14 *:h-full">
      <Score player={gameController.getPlayers()[0]} />
      <Score />
      <Score player={gameController.getPlayers()[1]} />
    </div>
  );
};

export default Scoreboard;
