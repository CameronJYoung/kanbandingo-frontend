import React, { useEffect, useState } from 'react';

import KanbanApi from '../../../api/Kanban';
import useFormField from '../../../hooks/useFormField';
import Column from '../Column/Column';
import './Board.css';

function Board(props) {
	const [columns, setColumns] = useState([])

	const columnField = useFormField();

	function createColumn() {
		KanbanApi.postColumnByBoardId(props.id, columnField.value).then(() => {
			KanbanApi.getColumnsByBoardId(props.id).then((comments) => {
				setColumns(comments.data)
			});
		})
		
	}

	function testing() {
		KanbanApi.getColumnsByBoardId(props.id).then(res => {
			setColumns(res.data)
		})
	}

	useEffect(() => {
		let mounted = true;
		KanbanApi.getColumnsByBoardId(props.id).then(res => {
			console.log(res.data);
			if (mounted) {
				setColumns(res.data)
			}
		})
		
		return function cleanup() {
			mounted = false
		}
	}, [props.id])

	return (
		<div className="Board">
			<div className="columnContainer">
				{
					
					columns.map((item, index) => {
						return <Column testing={testing} key={`column_${item.id}`} handleSelectedTicket={props.handleSelectedTicket} boardId={props.id} columnId={item.id} columnName={item.name} ></Column>
					})
				}
			</div>
			<div className="columnMenu">
				<h3>Add Column</h3>
				<input type="text" id="column" {...columnField}></input>
				<button className="addColumn" onClick={createColumn}>
					+
				</button>
			</div>
		</div>
	);
}

export default Board;