import Header from "./components/Header";
import { Board } from "./components/Board";
import Scoreboard from "./components/Scoreboard";

export default function App() {
  return (
    <main className="font-outfit bg-c-500 min-h-screen flex items-center justify-center flex-col gap-5">
      <Header />
      <Board />
      <Scoreboard />
    </main>
  );
}
