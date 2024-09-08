import { Field } from "./Field";
import { GameBoard } from "./GameBoard";
import { Player } from "./Player";

export class GameController {
  winner: Player | null = null;
  players: Player[];
  currentPlayer: Player;
  gameboard: GameBoard;
  ties: number = 0;
  winningFields: number[] = [];
  tie = false;

  constructor(players: Player[], gameBoard: GameBoard) {
    this.players = players;
    this.currentPlayer = players[0];
    this.gameboard = gameBoard;
  }

  getWinner = () => {
    return this.winner;
  };

  getPlayers = () => {
    return this.players;
  };

  getCurrentPlayer = () => {
    return this.currentPlayer;
  };

  getGameBoard = () => {
    return this.gameboard.getFields();
  };

  getTies = () => {
    return this.ties;
  };

  getWinningFields = () => {
    return this.winningFields;
  };

  getTie = () => {
    return this.tie;
  };

  setWinner = (player: Player | null) => {
    this.winner = player;
  };

  setCurrentPlayer = (player: Player) => {
    this.currentPlayer = player;
  };

  setWinningFields = (fieldsIndexes: number[]) => {
    this.winningFields = fieldsIndexes;
  };

  setTie = (value: boolean) => {
    this.tie = value;
  };

  printWinner = () => {
    console.log(this.winner);
  };

  printWinningFields = () => {
    console.log(this.winningFields);
  };

  printTie = () => {
    console.log(this.tie);
  };

  checkTie = () => {
    const fields = this.gameboard
      .getFields()
      .filter((field) => field.getMark() !== "");

    return fields.length === 9 && !this.getWinner();
  };

  checkWinner = (gameboard: Field[]) => {
    let isWinner: boolean = false;
    let winningFields: number[] = [];

    GameController.getWinningCombinations().forEach((comb) => {
      if (
        gameboard[comb[0]].mark === gameboard[comb[1]].mark &&
        gameboard[comb[1]].mark === gameboard[comb[2]].mark &&
        gameboard[comb[0]].mark != ""
      ) {
        winningFields.push(...comb);
        isWinner = true;
      }
    });

    this.setWinningFields(winningFields);
    return isWinner;
  };

  changeCurrentPlayer = () => {
    if (this.getWinner()) return;
    this.currentPlayer =
      this.getCurrentPlayer() === this.players[0]
        ? this.players[1]
        : this.players[0];
  };

  placeMark = (index: number) => {
    if (!GameController.isFieldEmpty(this.getGameBoard(), index)) return;
    if (this.getWinner()) return;

    this.gameboard.setField(this.currentPlayer.getMark(), index);
    this.evaluateGameState();
  };

  evaluateGameState = () => {
    if (this.checkWinner(this.getGameBoard())) {
      this.handleWinner();
    } else if (this.checkTie()) {
      this.handleTie();
    } else {
      this.changeCurrentPlayer();
    }
  };

  handleTie = () => {
    this.setTie(true);
    this.incrementTies();
  };

  handleWinner = () => {
    this.getCurrentPlayer().incrementScore();
    this.setWinner(this.currentPlayer);
  };

  incrementTies = () => {
    this.ties++;
  };

  restart = () => {
    this.gameboard.setFields(GameBoard.getEmptyBoard());
    this.setCurrentPlayer(this.players[0]);
    this.setWinner(null);
    this.setTie(false);
    this.setWinningFields([]);
  };

  static isFieldEmpty = (fields: Field[], index: number): boolean => {
    return fields[index].mark === "";
  };

  static getWinningCombinations = () => {
    return [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];
  };
}
