import React, { useEffect, useState } from 'react';

import KanbanApi from '../../../api/Kanban';
import useFormField from '../../../hooks/useFormField';
import './Ticket.css'

function Ticket(props) {
	const [ticketData, setTicketData] = useState({});
	const [comments, setComments] = useState([]);

	const commentField = useFormField();

	function update(id) {
		props.handleSelectedTicket(id)
	}

	function createComment() {
		KanbanApi.postCommentByTicketId(props.ticketId, commentField.value).then(() => {
			KanbanApi.getCommentsByTicketId(props.ticketId).then((comments) => {
				setComments(comments.data)
			});
		})
		
	}

	useEffect(() => {
		KanbanApi.getTicketById(props.ticketId).then((ticket) => {
			setTicketData(ticket.data)
		});
		KanbanApi.getCommentsByTicketId(props.ticketId).then((comments) => {
			console.log(comments.data);
			setComments(comments.data)
		});
	}, [props.ticketId])

	return (
		<div className="Ticket">
			<button className="closeTicket" onClick={() => {
				update(0);
			}}>
				X
			</button>

			{ticketData.description}<br></br><br></br><br></br>
			<div className="commentContainer">
				{
					comments.map((comment, id) => {
						return <><div>{comment.content}</div><br></br></>
					})
				}
				<input type="text" id="comment" {...commentField}></input>
				<button onClick={createComment}>Add Comment</button>
			</div>
		</div>
	);
}

export default Ticket;