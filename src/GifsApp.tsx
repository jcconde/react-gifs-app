export const GifsApp = () => {
  return (
    <>
      <div className="content-center">
        <h1>Buscador de Gifs</h1>
        <p>Descubre y comparte el gif perfecto</p>
      </div>

      {/* Search */}
      <div className="search-container">
        <input type="text" placeholder="Buscar Gifs"/>
        <button>Buscar</button>
      </div>
      {/* Busquedas previas */}
      <div className="previous-searches">
        <h2>Búsquedas previas</h2>
        <ul className="previous-searches-list">
          <li>Goku</li>
          <li>Saitana</li>
          <li>Elden ring</li>
        </ul>
      </div>

      {/* Gifs */}
      <div className="gifs-container">

      </div>
    </>
  );
}