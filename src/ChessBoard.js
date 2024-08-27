import React from 'react';
import './ChessBoard.css'; 

const pieceSymbols = {
  'wr': '♖', 
  'wn': '♘',
  'wb': '♗', 
  'wq': '♕', 
  'wk': '♔', 
  'wp': '♙', 
  'BR': '♜', 
  'BN': '♞', 
  'BB': '♝', 
  'BQ': '♛', 
  'BK': '♚', 
  'BP': '♟'  
};

const ChessBoard = () => {
  const board = [
    ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'],
    ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP'],
    ['BR', 'BN', 'BB', 'BQ', 'BK', 'BB', 'BN', 'BR']
  ];

  

  return (
    <div className="chess-board">
      {board.map((row, rowIndex) => (
        <div className="chess-row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div className="chess-cell" key={colIndex}>
              {pieceSymbols[cell] || ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;

