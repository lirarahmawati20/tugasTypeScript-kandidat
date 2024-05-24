
import KPU from "/KPU.png";
export function Headers(){
    return (
      <>
        <header className="header">
          <div className="logo">
            <img src={KPU} alt="Logo" className="logo-image" />
            <p className="logo2">Komisi Pemilihan Umum</p>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Kandidat
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );

}
