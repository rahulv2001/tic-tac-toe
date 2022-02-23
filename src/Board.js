import React, { useState } from "react";
import Card from "./Card";
import Footer from "./Footer";

function Board() {


    let [turn, changeTurn] = useState("0");
    let [card, setCard] = useState(Array(9).fill(""));
    let [winner, setWinner] = useState();

    let cells = [...card];

    function handleReset() {
        setWinner(null);
        setCard(Array(9).fill(""));
    }

    function findWinner() {
        let winCombos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6]
            ]
        }

        for (let combo in winCombos) {
            winCombos[combo].forEach(pattern => {
                if (cells[pattern[0]] === "" ||
                    cells[pattern[1]] === "" ||
                    cells[pattern[2]] === "") {
                    
                }
                else if(
                    cells[pattern[0]] === cells[pattern[1]] && cells[pattern[1]] === cells[pattern[2]]
                ) {
                    setWinner(cells[pattern[0]]); 
                }
            })
        }
    }
    function handleClick(num) {
        if (turn === "0") {
            if (cells[num] !== "") {
                alert("Already Occupied");
            }
            else {
                cells[num] = "0";
                changeTurn("X");
            }
        }
        else {
            if (cells[num] !== "") {
                alert("Already Occupied");
            }
            else {
                cells[num] = "X";
                changeTurn("0");
            }
        }

        setCard(cells);
        findWinner();
    }
    
    return (
        <>
            <div className="turn-play">
                <p>Player {turn} turn</p>
            </div>
            <div className="board">
                <Card name="sq sq-1" num={0} playClick={handleClick} value={card[0]} win={winner}/>
                <Card name="sq sq-2" num={1} playClick={handleClick} value={card[1]} win={winner}/>
                <Card name="sq sq-3" num={2} playClick={handleClick} value={card[2]} win={winner}/>
                <Card name="sq sq-4" num={3} playClick={handleClick} value={card[3]} win={winner}/>
                <Card name="sq sq-5" num={4} playClick={handleClick} value={card[4]} win={winner}/>
                <Card name="sq sq-6" num={5} playClick={handleClick} value={card[5]} win={winner}/>
                <Card name="sq sq-7" num={6} playClick={handleClick} value={card[6]} win={winner}/>
                <Card name="sq sq-8" num={7} playClick={handleClick} value={card[7]} win={winner}/>
                <Card name="sq sq-9" num={8} playClick={handleClick} value={card[8]} win={winner}/>
            </div>
            <Footer winner={winner} restart={ handleReset }/>
        </>
    )
}
    
export default Board;