import React from 'react';

function App() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: '#fefefe', height: '100vh', width: '100%' }}
    >
      <form>
        <div className="d-flex flex-column mb-20">
          <label htmlFor="name" className="mb-5">
            Nom
          </label>
          <input id="name" type="text" />
        </div>
        <button className="btn btn-primary">Sauvegarder</button>
      </form>
    </div>
  );
}

export default App;
