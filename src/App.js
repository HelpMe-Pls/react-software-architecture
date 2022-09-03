import { RecoilRoot } from 'recoil';
import { CounterButton } from './CounterButton';
import './App.css';

const App = () => {
	return (
		// <RecoilRoot/> == <Provider/> in 'react-redux'
		<RecoilRoot>
			<h1>State Management Example</h1>
			<CounterButton />
		</RecoilRoot>
	);
}

export default App;
