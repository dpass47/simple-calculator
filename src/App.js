import './styles/App.scss';
import { useState } from 'react';
import { evaluate, format } from 'mathjs';

const operators = ['+', '-', '*', '/'];

function App() {
	const [displayNumber, setDisplayNumber] = useState({
		currentVal: '0',
		prevVal: '0',
		formula: '0',
		currentSign: 'pos',
	});

	function handleNumbers(e) {
		if (displayNumber.currentVal.length > 15) {
			setDisplayNumber({
				...displayNumber,
				currentVal: 'DIGIT LIMIT MET',
			});
			setTimeout(() => {
				setDisplayNumber({
					...displayNumber,
				});
			}, 1000);
		} else {
			setDisplayNumber((displayNumber) =>
				displayNumber.currentVal === '0' ||
				operators.some((operator) =>
					displayNumber.currentVal.includes(operator)
				)
					? {
							...displayNumber,
							currentVal: e.target.value,
							prevVal: displayNumber.currentVal,
							formula:
								displayNumber.formula === '0'
									? e.target.value
									: displayNumber.formula + e.target.value,
					  }
					: displayNumber.currentVal.length > 15 ||
					  displayNumber.currentVal === 'DIGIT LIMIT MET'
					? { ...displayNumber }
					: {
							...displayNumber,
							currentVal: displayNumber.formula.includes('=')
								? e.target.value
								: displayNumber.currentVal + e.target.value,
							prevVal: displayNumber.currentVal,
							formula: displayNumber.formula.includes('=')
								? e.target.value
								: displayNumber.formula === '0'
								? displayNumber.currentVal + e.target.value
								: displayNumber.currentSign === 'neg'
								? displayNumber.formula + '-' + e.target.value
								: displayNumber.formula + e.target.value,
					  }
			);
		}
	}

	function handleDecimal() {
		setDisplayNumber({
			...displayNumber,
			currentVal: displayNumber.currentVal.includes('.')
				? displayNumber.currentVal
				: operators.some((operator) =>
						displayNumber.currentVal.includes(operator)
				  )
				? '.'
				: displayNumber.currentVal + '.',
			formula: displayNumber.formula.includes('=')
				? displayNumber.currentVal.includes('.')
					? displayNumber.currentVal
					: displayNumber.currentVal + '.'
				: displayNumber.currentVal.includes('.')
				? displayNumber.formula
				: displayNumber.formula + '.',
		});
	}

	function expressionCalculation(x) {
		if (displayNumber.currentVal === '0' && x === '-') {
			setDisplayNumber({
				...displayNumber,
				currentVal: '-',
				currentSign: 'neg',
			});
		} else {
			setDisplayNumber({
				...displayNumber,
				prevVal: displayNumber.currentVal,
				currentVal: x,
				formula: displayNumber.formula.includes('=')
					? displayNumber.currentVal + `${x}`
					: displayNumber.formula === '0'
					? displayNumber.currentVal + `${x}`
					: displayNumber.formula.endsWith('.')
					? displayNumber.formula + `0${x}`
					: displayNumber.formula + `${x}`,
			});
		}
	}

	function handleOperators(e) {
		if (e.target.value === 'AC') {
			setDisplayNumber({
				currentVal: '0',
				prevVal: '0',
				formula: '0',
				currentSign: 'pos',
				lastClicked: '',
			});
		}

		if (e.target.value === '+') {
			expressionCalculation('+');
		}

		if (e.target.value === '-') {
			expressionCalculation('-');
		}

		if (e.target.value === '/') {
			expressionCalculation('/');
		}

		if (e.target.value === '*') {
			expressionCalculation('*');
		}
	}

	function handleCalculation(e) {
		if (
			operators.some((operator) =>
				displayNumber.formula.endsWith(operator)
			)
		) {
			setDisplayNumber({
				...displayNumber,
				currentVal: 'INVALID FORMULA',
			});

			setTimeout(() => {
				setDisplayNumber({
					...displayNumber,
					currentVal: displayNumber.currentVal,
				});
			}, 2000);
		} else {
			var answer = evaluate(displayNumber.formula).toString();

			if (answer.length > 15) {
				answer = format(Number(answer));
			}

			setDisplayNumber({
				...displayNumber,
				currentVal: answer,
				formula: displayNumber.formula.endsWith('.')
					? displayNumber.formula + '0 =' + answer
					: displayNumber.formula + '=' + answer,
			});
		}
	}

	return (
		<div className="App">
			<div className="calc-container">
				<div className="display">
					<p
						className={
							displayNumber.formula === '0'
								? 'formula hidden'
								: 'formula'
						}
					>
						{displayNumber.formula}
					</p>
					<p className="solution">{displayNumber.currentVal}</p>
				</div>
				<div className="input-container">
					<button
						className="clear"
						value="AC"
						onClick={(e) => handleOperators(e)}
					>
						AC
					</button>
					<button
						className="divide"
						value="/"
						onClick={(e) => handleOperators(e)}
					>
						/
					</button>
					<button
						className="multiply"
						value="*"
						onClick={(e) => handleOperators(e)}
					>
						x
					</button>
					<button
						className="number-inputs"
						value="7"
						onClick={(e) => handleNumbers(e)}
					>
						7
					</button>
					<button
						className="number-inputs"
						value="8"
						onClick={(e) => handleNumbers(e)}
					>
						8
					</button>
					<button
						className="number-inputs"
						value="9"
						onClick={(e) => handleNumbers(e)}
					>
						9
					</button>
					<button
						className="subtract"
						value="-"
						onClick={(e) => handleOperators(e)}
					>
						-
					</button>
					<button
						className="number-inputs"
						value="4"
						onClick={(e) => handleNumbers(e)}
					>
						4
					</button>
					<button
						className="number-inputs"
						value="5"
						onClick={(e) => handleNumbers(e)}
					>
						5
					</button>
					<button
						className="number-inputs"
						value="6"
						onClick={(e) => handleNumbers(e)}
					>
						6
					</button>
					<button
						className="add"
						value="+"
						onClick={(e) => handleOperators(e)}
					>
						+
					</button>
					<button
						className="number-inputs"
						value="1"
						onClick={(e) => handleNumbers(e)}
					>
						1
					</button>
					<button
						className="number-inputs"
						value="2"
						onClick={(e) => handleNumbers(e)}
					>
						2
					</button>
					<button
						className="number-inputs"
						value="3"
						onClick={(e) => handleNumbers(e)}
					>
						3
					</button>
					<button
						className="number-inputs zero"
						value="0"
						onClick={(e) => handleNumbers(e)}
					>
						0
					</button>
					<button
						className="number-inputs"
						value="."
						onClick={handleDecimal}
					>
						.
					</button>
					<button
						className="equal"
						value="="
						onClick={(e) => handleCalculation(e)}
					>
						=
					</button>
				</div>
			</div>
			<p className="credits">
				Coded by <a href="https://devdante.com">Dante Passalacqua</a>
			</p>
		</div>
	);
}

export default App;
