import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import ClientsMap from '../Map/ClientsMap.jsx';
import api from '../../utils/Api.js';
import Stats from '../Stats/Stats.jsx';

function App() {
  const [filterAge, setFilterAge] = useState([]);
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);

  function handleClientsFilter(age) {
    if (age.length === 0) {
      setFilteredClients(clients);
    } else {
      const acc = [];
      for (let i = 0; i <= age.length - 1; i += 1) {
        clients.forEach((client) => {
          if (client.age === age[i]) {
            acc.push(client);
          }
        });
      }
      setFilteredClients(acc);
    }
  }

  function handleAgeFilter(age) {
    if (filterAge.includes(age)) {
      setFilterAge((state) => state.filter((el) => el !== age));
      handleClientsFilter(filterAge.filter((el) => el !== age));
    } else {
      setFilterAge((state) => [...state, age]);
      handleClientsFilter([...filterAge, age]);
    }
  }

  useEffect(() => {
    api.getClients()
      .then((res) => {
        setClients(res);
        setFilteredClients(res);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <Routes>
          <Route path="/" element={<Stats />} />
          <Route
            path="/clients"
            element={(
              <>
                <div className="app__content">
                  <table className="app__table">
                    <thead>
                      <tr>
                        <th className="app__table-header">
                          <h2 className="app__table-title">
                            Список клиентов
                          </h2>
                          <div className="app__table-buttons">
                            <button
                              type="button"
                              className={filterAge.includes('10-19') ? 'app__table-button app__table-button_active' : 'app__table-button'}
                              onClick={() => handleAgeFilter('10-19')}
                            >
                              10+
                            </button>
                            <button
                              type="button"
                              className={filterAge.includes('20-29') ? 'app__table-button app__table-button_active' : 'app__table-button'}
                              onClick={() => handleAgeFilter('20-29')}
                            >
                              20+
                            </button>
                            <button
                              type="button"
                              className={filterAge.includes('30-39') ? 'app__table-button app__table-button_active' : 'app__table-button'}
                              onClick={() => handleAgeFilter('30-39')}
                            >
                              30+
                            </button>
                            <button
                              type="button"
                              className={filterAge.includes('40-49') ? 'app__table-button app__table-button_active' : 'app__table-button'}
                              onClick={() => handleAgeFilter('40-49')}
                            >
                              40+
                            </button>
                            <button
                              type="button"
                              className={filterAge.includes('50-59') ? 'app__table-button app__table-button_active' : 'app__table-button'}
                              onClick={() => handleAgeFilter('50-59')}
                            >
                              50+
                            </button>
                            <button
                              type="button"
                              className={filterAge.includes('60-69') ? 'app__table-button app__table-button_active' : 'app__table-button'}
                              onClick={() => handleAgeFilter('60-69')}
                            >
                              60+
                            </button>
                            <button
                              type="button"
                              className={filterAge.includes('70-79') ? 'app__table-button app__table-button_active' : 'app__table-button'}
                              onClick={() => handleAgeFilter('70-79')}
                            >
                              70+
                            </button>
                            <button
                              type="button"
                              className={filterAge.includes('80-89') ? 'app__table-button app__table-button_active' : 'app__table-button'}
                              onClick={() => handleAgeFilter('80-89')}
                            >
                              80+
                            </button>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredClients.length > 0 ? filteredClients.map((client) => (
                        <tr className="app__table-row" key={client.client}>
                          <td className="app__table-id">
                            {client.client}
                          </td>
                          <td className="app__table-gender">
                            {client.gender}
                          </td>
                          <td className="app__table-age">
                            {client.age}
                          </td>
                          <td className="app__table-address">
                            {client.address.address}
                          </td>
                        </tr>
                      )) : (
                        <tr className="app__table-row">
                          <td className="app__table-notfound">
                            По данным критериям клиенты не найдены
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <ClientsMap clients={filteredClients} />
              </>
          )}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
