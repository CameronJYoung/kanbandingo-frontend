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

	function getTickets() {
		KanbanApi.getTicketsByColumnId(props.columnId).then(tickets => {
			setTickets(tickets.data)
		})
	}

	useEffect(() => {
		getTickets()
	}, [props.columnId])

	function handleTicketDrop(e) {
		e.preventDefault();
		const ticketID = e.dataTransfer.getData('ticket_id');
		console.log(`new_drop_ticket_id_${ticketID}`);
		console.log(`new_drop_column_id_${props.columnId}`);
		
		KanbanApi.moveTicket(ticketID, props.columnId).then(res => {
			getTickets();
			props.testing();
		}).catch(err => {
			console.log(err);
		})
	}

	function handleTicketDragStart(e, id) {
		e.dataTransfer.setData('ticket_id', id);
	}

	function onDragOver(e) {
		e.stopPropagation();
		e.preventDefault();
	}

	function createTicket() {
		KanbanApi.postTicketByColumnId(props.columnId, columnField.value).then(() => {
			KanbanApi.getTicketsByColumnId(props.columnId).then((ticket) => {
				setTickets(ticket.data)
			});
		})
		
	}

	return (
		<div className="Column" >
			<h2>{props.columnName}</h2>
			<div className="ticketContainer" onDrop={(e)=>{handleTicketDrop(e)}} onDragOver={(e)=>{onDragOver(e)}}>
				<div className="ticketList" >
					{
						tickets.map((ticket, i) => {
							return <button draggable='true' onDragStart={(e)=>{handleTicketDragStart(e, ticket.id)}} key={`ticket_tile${ticket.id}`} onClick={() => {
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