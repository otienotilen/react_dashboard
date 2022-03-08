import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <div className="main__greeting">
            <h1>Welcome John Doe</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        {/* <!-- CARDS STARTS HERE --> */}
        <div className="card">
          <div className="card1">
            
              <i className="fa fa-briefcase" aria-hidden="true"></i>
              <br/>
              <br/>
              <h3>Add Your Products information</h3>
              <br />
              <button>Add Products</button> 
            
          </div>
          <div className="card1">
              <i className="fa fa-group" aria-hidden="true"></i>
                <br/>
                <br/>
                <h3>Add your Existing Customers</h3>
                <br/>
                <button>Add Customers</button>
                <br/>
                <br/>
               
               
          </div>
        </div>

      


      </div>
    </main>
  );
};

export default Main;
