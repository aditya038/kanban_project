import { useEffect, useState } from "react";
import "./App.css";
import { Board, Header } from "./components";

function App() {
  const url= "https://api.quicksell.co/v1/internal/frontend-assignment";
  
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(() => localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(() => localStorage.getItem('sorting') || 'priority');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
        setIsLoading(false);
      } catch (error) {
        setError('Failed to fetch data. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('sorting', sorting);
  }, [grouping, sorting]);

  const userMap = new Map(users.map(user => [user.id, user.name])); // Create a map of user IDs to names

  const groupTickets = (tickets) => {
    const grouped = {};
    tickets.forEach(ticket => {
      const key = grouping === 'user' ? userMap.get(ticket.userId) : ticket[grouping];
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(ticket);
    });
    return grouped;
  };

  const sortTickets = (tickets) => {
    return tickets.sort((a, b) => {
      if (sorting === 'priority') {
        return b.priority - a.priority;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  };

  
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const groupedTickets = groupTickets(tickets);
  Object.keys(groupedTickets).forEach(key => {
    groupedTickets[key] = sortTickets(groupedTickets[key]);
  });

  return (
    <div className="App">
      <Header onGroupingChange={setGrouping} onOrderingChange={setSorting} />
      <Board groupedTickets={groupedTickets} />
    </div>
  );
}

export default App;
