import { useState } from 'react';
import ContainerItems from './ContainerItems';
import AddItemsContainer from './AddItemsContainer';
import './App.css';

function App() {
	const [taskList, setTaskList] = useState([]);

	const removeFromList = (item) => {
		const newList = [...taskList];
		const itemIndex = newList.indexOf(item);
		newList.splice(itemIndex, 1);
		setTaskList(newList);
	};

	const addToList = (item) => {
		setTaskList([...taskList, item]);
	};
	return (
		<div>
			<h1>Minha lista de tarefas do dia</h1>
			<AddItemsContainer addToList={addToList} />
			<ContainerItems
				taskList={taskList}
				removeFromList={removeFromList}
			/>
		</div>
	);
}

export default App;
