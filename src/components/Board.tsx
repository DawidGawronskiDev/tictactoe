import useGameContext from "../store/GameContextProvider";
import Field from "./Field";

export const Board = () => {
  const { gameBoard } = useGameContext();

  return (
    <ul className="grid grid-cols-3 grid-rows-3 gap-5 w-11/12 max-w-[460px] mx-auto aspect-square">
      {gameBoard.map((field) => (
        <Field key={field.index} field={field} />
      ))}
    </ul>
  );
};
