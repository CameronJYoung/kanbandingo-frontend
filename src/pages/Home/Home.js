import React, { useEffect, useState } from 'react';

import './Home.css';
import AuthError from '../../components/AuthError/AuthError'
import BoardList from '../../components/Kanban/BoardList/BoardList'
import Board from '../../components/Kanban/Board/Board'
import Ticket from '../../components/Kanban/Ticket/Ticket'
import AuthApi from '../../api/Auth'
import KanbanApi from '../../api/Kanban' 


function Home() {
	const [auth, setAuth] = useState(false);
	const [selectedBoardId, setSelectedBoardId] = useState();
	const [selectedTicketId, setSelectedTicketId] = useState(0);

	function handleSelectedBoard(newBoardId) {
		setSelectedBoardId(newBoardId);
	}

	function handleSelectedTicket(newTicketId) {
		setSelectedTicketId(newTicketId);
	}

	function openTicket() {
		if (selectedTicketId !== 0) {
			return <Ticket ticketId={selectedTicketId} handleSelectedTicket={handleSelectedTicket} ></Ticket>
		}
	}

	useEffect(() => {
		AuthApi.verify().then(res => {
			setAuth(res)
			
		})
	}, [])

	return (
		<div className="Home">
			<header>
				<h1>HOME</h1>
			</header>
			<div className="boardContainer">
				{
					auth ? <BoardList handleSelectedBoard={handleSelectedBoard} ></BoardList>:<AuthError></AuthError>
				}
				{
					selectedBoardId ? <Board id={selectedBoardId} handleSelectedTicket={handleSelectedTicket} ></Board>:<div>Select Board</div>
				}
			</div>
			{
				openTicket()
					
				
			}
			
		</div>	
	);
}

export default Home;