import { Mark } from "../types";

export class Player {
  private name: string;
  mark: Mark;
  score: number;

  constructor(name: string, mark: Mark) {
    this.name = name;
    this.mark = mark;
    this.score = 0;
  }

  getName = () => {
    return this.name;
  };

  getMark = () => {
    return this.mark;
  };

  getScore = () => {
    return this.score;
  };

  incrementScore = () => {
    this.score++;
  };
}

export type PlayerType = typeof Player;
