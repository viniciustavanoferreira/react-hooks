import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
    const [repository, setRepository] = useState([]);

    useEffect(() => {
        async function callApi() {
            const response = await fetch("https://api.github.com/users/viniciustavanoferreira/repos");
            const repositories = await response.json();
            setRepository(repositories);
        }
        callApi();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo}
                    className="App-logo"
                    alt="logo"/>

                <a className="App-link" href="https://viniciustavanoferreira.wordpress.com/" target="_blank" rel="noopener noreferrer">
                    Vinicius T. Fereira - Systems Analyst
                </a>

                <p>
                    List of some of my GitHub repositories:
                </p>

                <ul>
                  {repository.map(repository => (<li key={repository.id}>{repository.name}</li>))}
                </ul>
            </header>

        </div>

    );
}

export default App;
