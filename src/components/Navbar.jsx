import './assets/style/stylenavbar.css';

export default  function navbar () {
      return (

      <header>
        <nav>
          <div className="kiri">
            <h1>SMUCKER'S</h1>
          </div>
          <div className="kanan">
            <ul>
              <li className="profile">
                <span><img src="img/Customer.svg" alt="" /></span>
                <p>MAHFUDIN</p>
              </li>
              <li><a href>Home              </a></li>
              <li>
                <button>
                  <a href> logout</a> 
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }

    
