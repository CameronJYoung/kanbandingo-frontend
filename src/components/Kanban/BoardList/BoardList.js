import React, { useEffect, useState } from 'react';

import useFormField from '../../../hooks/useFormField';
import KanbanApi from '../../../api/Kanban';
import './BoardList.css'

function BoardList(props) {
	const [boardItems, setBoardItems] = useState([]);

	const newBoardField = useFormField();

	function update(id) {
		props.handleSelectedBoard(id)
	}

	function updateBoardItems() {
		KanbanApi.postBoard(newBoardField.value).then(() => {
			KanbanApi.getUserBoards().then(res => {

				setBoardItems(res.data)
			
			})
		})
	}


	useEffect(() => {
		let mounted = true;
		KanbanApi.getUserBoards().then(res => {
			if (mounted) {
				setBoardItems(res.data)
			}
		})
		
		return function cleanup() {
			mounted = false
		}
	}, [])

	return (
		<div className="BoardList">
			<div>
				{
					boardItems.map((item, index) => {
						return <button className='boardBtn' onClick={() => {
							update(item.id)
						}} key={`boardItem${index}`} ><h2>{item.name}</h2></button>
					})
				}
			</div>
			<div className="boardControls">
				<h3>Add Board</h3>
				<span>
					<input type="text" id="comment" {...newBoardField}></input>
					<button onClick={updateBoardItems} >+</button>
				</span>
			</div>
			
		</div>
	);
}

export default BoardList;