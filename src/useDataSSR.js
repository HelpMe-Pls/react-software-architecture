import { useContext, useState } from 'react';
import { InitialDataContext } from './InitialDataContext';

export const useDataSSR = (resourceName, loadFunc) => {
	const context = useContext(InitialDataContext);
	
	// get the `articles`: 
	const [data, setData] = useState(context._data[resourceName]);

	if (context._isServerSide) {
		context._requests.push(
			loadFunc().then(result => (context._data[resourceName] = result))
		);
	}
	// Check on the frontend if there's `_data`, if not,
	// then fetch it from the frontend and set it with the return value of `loadFunc`
	else if (!data) {
		loadFunc().then(result => {
			context._data[resourceName] = result;
			setData(result);
		});
	}

	return data;
}
