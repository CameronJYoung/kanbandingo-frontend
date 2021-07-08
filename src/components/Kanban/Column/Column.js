import React, { useEffect, useState } from 'react';

import KanbanApi from '../../../api/Kanban';
import useFormField from '../../../hooks/useFormField';
import './Column.css'

function Column(props) {
	const [tickets, setTickets] = useState([])

	const columnField = useFormField();

	function update(id) {
		props.handleSelectedTicket(id)
	}

	useEffect(() => {
		KanbanApi.getTicketsByColumnId(props.columnId).then(tickets => {
			setTickets(tickets.data)
		})
	}, [props.columnId])

	function createTicket() {
		KanbanApi.postTicketByColumnId(props.columnId, columnField.value).then(() => {
			KanbanApi.getTicketsByColumnId(props.columnId).then((ticket) => {
				setTickets(ticket.data)
			});
		})
		
	}

	return (
		<div className="Column">
			<h2>{props.columnName}</h2>
			<div className="ticketContainer">
				<div className="ticketList">
					{
						tickets.map((ticket, i) => {
							return <button key={`ticket_tile${ticket.id}`} onClick={() => {
								update(ticket.id)
							}}>Test Ticket {ticket.id}</button>
						})
					}
				</div>
				<div className="columnOptions">
					<input type="text" id="column" {...columnField}></input>
					<button onClick={createTicket}>ADD TICKET</button>
				</div>
			</div>
			
		</div>
	);
}

export default Column;