import { createContext, useContext, useState, type ReactNode } from "react";
import { Player } from "../classes/Player";
import { GameBoard } from "../classes/GameBoard";
import { Field } from "../classes/Field";
import { GameController } from "../classes/GameController";

const players = [new Player("John", "o"), new Player("Dick", "x")];

const initialState = {
  players,
  gameboard: new GameBoard(),
};

type GameContextType = {
  gameController: GameController;
  gameBoard: Field[];
  handleGameBoard: (fields: Field[]) => void;
};

export const GameContext = createContext<GameContextType>({
  gameController: new GameController(
    initialState.players,
    initialState.gameboard
  ),
  gameBoard: initialState.gameboard.getFields(),
  handleGameBoard: () => {},
});

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [gameController] = useState(
    () => new GameController(initialState.players, initialState.gameboard)
  );

  const [gameBoard, setGameBoard] = useState(
    initialState.gameboard.getFields()
  );

  const handleGameBoard = (fields: Field[]) => {
    setGameBoard(fields);
  };

  return (
    <GameContext.Provider
      value={{ gameController, gameBoard, handleGameBoard }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  return useContext(GameContext);
};

export default useGameContext;
