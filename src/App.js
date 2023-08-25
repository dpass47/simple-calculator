import './styles/App.scss';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
	const [displayNumber, setDisplayNumber] = useState({
		currentVal: '0',
		prevVal: '0',
		formula: '0',
		currentSign: 'pos',
		lastClicked: '',
	});

	function handleNumbers(e) {
		if (displayNumber.currentVal.length > 15) {
			setDisplayNumber({
				...displayNumber,
				currentVal: 'MET DIGIT LIMIT',
			});
			setTimeout(() => {
				setDisplayNumber({
					...displayNumber,
					// currentVal: displayNumber.prevVal,
				});
			}, 1000);
		} else {
			setDisplayNumber((displayNumber) =>
				displayNumber.currentVal === '0'
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
					  displayNumber.currentVal === 'MET DIGIT LIMIT'
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
				: displayNumber.currentVal + '.',
			formula: displayNumber.formula.includes('=')
				? displayNumber.currentVal.includes('.')
					? displayNumber.currentVal
					: displayNumber.currentVal + '.'
				: displayNumber.currentVal.includes('.')
				? displayNumber.formula
				: displayNumber.currentVal === '0'
				? displayNumber.formula + '0.'
				: displayNumber.formula + '.',
		});
	}

	function expressionCalculation(x) {
		setDisplayNumber({
			...displayNumber,
			prevVal: displayNumber.currentVal,
			currentVal: '0',
			formula: displayNumber.formula.includes('=')
				? displayNumber.currentVal + `${x}`
				: displayNumber.formula === '0'
				? displayNumber.currentVal + `${x}`
				: displayNumber.formula.endsWith('.')
				? displayNumber.formula + `0${x}`
				: displayNumber.formula + `${x}`,
		});
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
		if (displayNumber.formula.endsWith('-', '+', '/', '*')) {
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
