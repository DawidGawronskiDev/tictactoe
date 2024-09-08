import clsx from "clsx";
import { Player } from "../classes/Player";
import useGameContext from "../store/GameContextProvider";

const Score = ({ player }: { player?: Player }) => {
  const { gameController } = useGameContext();

  return (
    <div
      className={clsx("flex items-center justify-center rounded-xl", {
        "bg-c-700": !player?.getMark(),
        "bg-c-200": player?.getMark() && player.getMark() === "x",
        "bg-c-300": player?.getMark() && player.getMark() === "o",
      })}
    >
      <div className="*:text-center">
        <p>{player ? player.getMark() : "Ties"}</p>
        <h2>{player ? player.getScore() : gameController.getTies()}</h2>
      </div>
    </div>
  );
};

export default Score;
