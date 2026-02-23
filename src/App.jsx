import React, { useEffect, useState } from 'react'
import './App.css'
import Tetris from 'react-tetris'

export default function App() {
	return (
		<div className='gameWindow'>
			<h1>Tetris</h1>
			<Tetris
				keyboardControls={{
					down: 'MOVE_DOWN',
					left: 'MOVE_LEFT',
					right: 'MOVE_RIGHT',
					space: 'HARD_DROP',
					z: 'FLIP_COUNTERCLOCKWISE',
					x: 'FLIP_CLOCKWISE',
					up: 'FLIP_CLOCKWISE',
					p: 'TOGGLE_PAUSE',
					c: 'HOLD',
					shift: 'HOLD'
				}}
			>
				{({
					HeldPiece,
					Gameboard,
					PieceQueue,
					points,
					linesCleared,
					state,
					controller
				}) => (
					<div>
						<div className='gameboardtext'>
							<p>
								Points:
								<br /> {points}
							</p>
							<p>
								Lines Cleared:
								<br /> {linesCleared}
							</p>
						</div>
						<div className='gameboard'>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-end'
								}}
							>
								<HeldPiece />
							</div>
							<div>
								<Gameboard />
							</div>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-end'
								}}
							>
								<PieceQueue />
							</div>
						</div>

						{(state === 'LOST' || state === 'GAME_OVER') && (
							<div className='game-over-overlay'>
								<h2>Game Over</h2>
								<button onClick={controller.restart}>New game</button>
							</div>
						)}
					</div>
				)}
			</Tetris>
		</div>
	)
}
