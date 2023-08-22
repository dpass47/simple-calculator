import './styles/App.scss';

function App() {
	return (
		<div className="calc-container">
			<div className="display">
				<p className="formula">55</p>
				<p className="solution">55</p>
			</div>
			<div className="input-container">
				<button className="clear" value="AC">
					AC
				</button>
				<button className="divide" value="/">
					/
				</button>
				<button className="multiply" value="*">
					x
				</button>
				<button className="number-inputs" value="7">
					7
				</button>
				<button className="number-inputs" value="8">
					8
				</button>
				<button className="number-inputs" value="9">
					9
				</button>
				<button className="subtract" value="-">
					-
				</button>
				<button className="number-inputs" value="4">
					4
				</button>
				<button className="number-inputs" value="5">
					5
				</button>
				<button className="number-inputs" value="6">
					6
				</button>
				<button className="add" value="+">
					+
				</button>
				<button className="number-inputs" value="1">
					1
				</button>
				<button className="number-inputs" value="2">
					2
				</button>
				<button className="number-inputs" value="3">
					3
				</button>
				<button className="number-inputs zero" value="0">
					0
				</button>
				<button className="number-inputs" value=".">
					.
				</button>
				<button className="equal" value="=">
					=
				</button>
			</div>
		</div>
	);
}

export default App;
