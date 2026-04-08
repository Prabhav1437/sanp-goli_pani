import { useState } from "react";

export default function RPS() {
    const [move, setMove] = useState("");
    const [result, setResult] = useState("");
    const [myWin , setmyWin] = useState(0)
    const [compWin , setcompWin] = useState(0)
    const [tie , setTie] = useState(0)
    const [history, setHistory] = useState([]);
    
    function getComputerMove() {
        const a = Math.random();

        if (a < 0.33) return "Rock";
        else if (a < 0.66) return "Paper";
        else return "Scissor";
    }

    function play(userMove) {
        const computerMove = getComputerMove();
        setMove(`You: ${userMove} | Computer: ${computerMove}`);

        if (userMove === computerMove) {
            setResult("It's a tie!");
            setTie(tie + 1)
        } 
        else if (
            (userMove === "Rock" && computerMove === "Scissor") ||
            (userMove === "Paper" && computerMove === "Rock") ||
            (userMove === "Scissor" && computerMove === "Paper")
        ) {
            setResult("You win!");
            setmyWin(myWin + 1)
        } 
        else {
            setcompWin(compWin + 1)
            setResult("Computer wins!");
        }
        hello();
    }
    function reset() {
        setMove("");
        setResult("");
        setmyWin(0);
        setcompWin(0);
        setTie(0);
        setHistory([]);
    }
    function hello() {
        const newHistory = [...history, move + " - " + result];
        setHistory(newHistory);
    }
    return (
        <div className="min-h-screen flex items-center justify-center p-8">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-amber-900 mb-8">Rock Paper Scissors</h2>

                <div className="flex gap-4 justify-center mb-8">
                    <button onClick={() => play("Rock")} className="px-6 py-2 bg-blue-300 hover:bg-blue-400 text-amber-900 font-semibold rounded-lg transition">Rock</button>
                    <button onClick={() => play("Paper")} className="px-6 py-2 bg-blue-300 hover:bg-blue-400 text-amber-900 font-semibold rounded-lg transition">Paper</button>
                    <button onClick={() => play("Scissor")} className="px-6 py-2 bg-blue-300 hover:bg-blue-400 text-amber-900 font-semibold rounded-lg transition">Scissor</button>
                    <button onClick={reset} className="px-6 py-2 bg-red-300 hover:bg-red-400 text-amber-900 font-semibold rounded-lg transition">Reset</button>
                </div>

                <h3 className="text-lg text-amber-800 mb-4 h-6">{move}</h3>
                <h2 className="text-2xl font-bold text-amber-900 mb-6">{result}</h2>
                <h2 className="text-lg text-amber-800">My Wins: {myWin} || Computer Wins: {compWin} || Tie: {tie}</h2>

                <div id="history" className="mt-8">
                    <h3 className="text-xl font-bold text-amber-900 mb-4">Game History</h3>
                    <p>{history.map((entry, index) => <p key={index}>{entry}</p>)}</p>
                </div>
            </div>
        </div>
    );
}