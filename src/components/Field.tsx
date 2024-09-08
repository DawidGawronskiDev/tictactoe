import clsx from "clsx";
import { Field as FieldType } from "../classes/Field";
import IconX from "../icons/IconX";
import useGameContext from "../store/GameContextProvider";
import IconO from "../icons/IconO";

const isWinningField = (winningFields: number[], fieldIndex: number) => {
  return winningFields.indexOf(fieldIndex) !== -1;
};

const Field = ({ field }: { field: FieldType }) => {
  const { gameController, handleGameBoard } = useGameContext();

  const fieldIndex = field.getIndex();
  const fieldMark = field.getMark();
  const winningFields = gameController.getWinningFields();

  const handlePlaceMark = (index: number) => {
    gameController.placeMark(index);

    handleGameBoard([...gameController.getGameBoard()]);
  };

  return (
    <li
      onClick={() => handlePlaceMark(fieldIndex)}
      className={clsx("grid place-content-center rounded-xl ", {
        "bg-c-600": !fieldMark,
        "bg-c-600 text-c-200":
          !isWinningField(winningFields, fieldIndex) && fieldMark === "x",
        "bg-c-600 text-c-300":
          !isWinningField(winningFields, fieldIndex) && fieldMark === "o",
        "bg-c-200 text-c-600":
          isWinningField(winningFields, fieldIndex) && fieldMark === "x",
        "bg-c-300 text-c-600":
          isWinningField(winningFields, fieldIndex) && fieldMark === "o",
      })}
    >
      {fieldMark === "x" && <IconX />}
      {fieldMark === "o" && <IconO />}
    </li>
  );
};

export default Field;
