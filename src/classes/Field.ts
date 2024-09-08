import { Mark } from "../types";

export class Field {
  mark: Mark | "";
  index: number;

  constructor(mark: Mark | "", index: number) {
    this.mark = mark || "";
    this.index = index;
  }

  getMark = () => {
    return this.mark;
  };

  getIndex = () => {
    return this.index;
  };

  setMark = (mark: Mark) => {
    this.mark = mark;
  };
}
