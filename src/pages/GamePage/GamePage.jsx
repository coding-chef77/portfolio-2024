import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.6 },
  },
};

const Board = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, auto);
`;

const MotionBoard = motion(Board);

const Cell = styled.div`
  width: var(--cell-size);
  height: var(--cell-size);
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverEffect }) =>
      hoverEffect ? "lightgrey" : "transparent"};
  }

  &:nth-child(-n + 3) {
    border-top: none;
  }

  &:nth-last-child(-n + 3) {
    border-bottom: none;
  }

  &:nth-child(3n) {
    border-right: none;
  }

  &:nth-child(3n + 1) {
    border-left: none;
  }

  &.x::before,
  &.x::after {
    content: "";
    position: absolute;
    width: calc(var(--mark-size) * 0.15);
    height: var(--mark-size);
    background-color: white;
  }

  &.x::before {
    transform: rotate(45deg);
  }

  &.x::after {
    transform: rotate(-45deg);
  }

  &.circle::before,
  &.circle::after {
    content: "";
    position: absolute;
    border-radius: 50%;
  }

  &.circle::before {
    width: var(--mark-size);
    height: var(--mark-size);
    background-color: #aaa;
  }

  &.circle::after {
    width: calc(var(--mark-size) * 0.7);
    height: calc(var(--mark-size) * 0.7);
    background-color: white;
  }
`;

const WinningMessage = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-size: 5rem;

  &.show {
    display: flex;
  }

  button {
    font-size: 3rem;
    background-color: #f0f0f0;
    color: black;
    border: 1px solid #fff;
    padding: 0.5em 1em;
    cursor: pointer;

    &:hover {
      background-color: #4caf50;
      color: white;
      border-color: #4caf50;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
:root {
  --cell-size: 100px;  // Default cell size
  --mark-size: calc(var(--cell-size) * 0.9);
}

@media (max-width: 450px) {
  :root {
    --cell-size: 60px; // Reduced cell size for smaller screens
    --mark-size: calc(var(--cell-size) * 0.9);
  }
}
`;

const GamePage = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [circleTurn, setCircleTurn] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (cells[index] || winner) return;

    const newCells = [...cells];
    newCells[index] = circleTurn ? CIRCLE_CLASS : X_CLASS;
    setCells(newCells);
    if (checkWin(newCells, circleTurn ? CIRCLE_CLASS : X_CLASS)) {
      setWinner(circleTurn ? CIRCLE_CLASS : X_CLASS);
    } else if (isDraw(newCells)) {
      setWinner("draw");
    } else {
      setCircleTurn(!circleTurn);
    }
  };

  const startGame = () => {
    setCells(Array(9).fill(null));
    setWinner(null);
    setCircleTurn(false);
  };

  return (
    <>
      <GlobalStyle />
      <MotionBoard
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cells.map((cell, index) => (
          <Cell
            key={index}
            className={cell}
            onClick={() => handleClick(index)}
            // The hoverEffect prop is used only for styling, not passed to the DOM
          />
        ))}
      </MotionBoard>
      {winner && (
        <WinningMessage className={winner !== null ? "show" : ""}>
          <div data-winning-message-text>
            {winner === "draw"
              ? "Uavgjort!"
              : `${winner === CIRCLE_CLASS ? "O" : "X"} Vant!`}
          </div>
          <button onClick={startGame}>Spill igjen</button>
        </WinningMessage>
      )}
    </>
  );
};

function checkWin(cells, currentClass) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cells[index] === currentClass;
    });
  });
}

function isDraw(cells) {
  return cells.every((cell) => cell !== null);
}

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const X_CLASS = "x";
const CIRCLE_CLASS = "circle";

export default GamePage;
