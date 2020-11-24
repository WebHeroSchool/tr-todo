import React, {useEffect, useState} from "react";
import styles from "../App/App.module.css";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import CardContent from "@material-ui/core/CardContent";


const Todo = () => {
	const appState = {
		items: [
			{
				id: 1,
				value: 'Первое дело',
				isDone: false,
			},
			{
				id: 2,
				value: 'Другое дело',
				isDone: false,
				
			},
			{
				id: 3,
				value: 'Важное дело',
				isDone: false,
			},
		],
		count: 3,
		numTask: 3,
	};
	
	const [items, setItems] =useState(appState.items);
	const [count, setCount] = useState(appState.count);
	const [numTask, setNumTask] = useState(appState.numTask);
	
	useEffect(() => {
		console.log('Монтирование компанента');
	}, []);
	
	useEffect(() => {
		console.log('Изменение компанента');
	});
	
	const onClickAdd = (value, isDone) => {
		
		const newTask = [
			...items,
			{
				value,
				isDone,
				id: numTask + 1,
			},
		];
		
		setItems(newTask);
		setCount(count + 1);
		setNumTask(numTask + 1);
	};
	
	const onClickDone = (id) => {
		const newItemList = items.map((item) => {
			const newItem = { ...item };
			
			if (newItem.id === id) {
				newItem.isDone = !newItem.isDone;
			}
			
			return newItem;
		});
		
		setItems(newItemList);
	};
	
	const onClickDelete = (id) => {
		const index = items.findIndex((elem) => {
			return elem.id === id;
		});
		
		const newItemList = items;
		let newCount = count;
		
		newItemList.splice(index, 1);
		newCount--;
		
		setItems(newItemList);
		setCount(newCount);
	};
	
	return (
		<CardContent>
			<h1 className={styles.title}>Список дел</h1>
			<InputItem onClickAdd={onClickAdd} />
			<ItemList
				items={items}
				onClickDone={onClickDone}
				onClickDelete={onClickDelete}
			/>
			<Footer count={count} />
		</CardContent>
	);
}

export default Todo;