import { Mark } from "../types";
import { Field } from "./Field";

export class GameBoard {
  board: Field[];

  constructor() {
    this.board = GameBoard.getEmptyBoard();
  }

  getFields = () => {
    return this.board;
  };

  setField = (mark: Mark, index: number) => {
    this.board.forEach((field) => {
      if (field.getIndex() === index) {
        field.setMark(mark);
      }
    });
  };

  setFields = (fields: Field[]) => {
    this.board = fields;
  };

  printBoard = () => {
    console.log(this.board);
  };

  static getEmptyBoard = () => {
    return Array.from({ length: 9 }, (_, index) => new Field("", index));
  };
}
