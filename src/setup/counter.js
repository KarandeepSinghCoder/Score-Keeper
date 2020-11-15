import React, { useState } from "react";

const UseStateCounter = () => {
  const [valueOfTeam1, setValuevalueOfTeam1] = useState(0);
  const [valueOfTeam2, setValuevalueOfTeam2] = useState(0);
  const styles = {
    color: "red",
    background: "#212121",
    fontSize: "32px",
    width: "100%",
    hight: "100%"
  };
  const reset = () => {
    setValuevalueOfTeam1(0);
    setValuevalueOfTeam2(0);
  };

  return (
    <>
      <section>
        <nav class="navbar nav-final">
          <span class="navbar-brand mb-0 h1">Score Keeper</span>
        </nav>
        <div class="container">
          <div class="text-center">
            <button className="btn btn-r" onClick={reset}>
              reset
            </button>
          </div>
          <br />
          <br />
          <br />
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="card">
                <div class="text-center">
                  <h2>TEAM ON LEFT</h2>
                  <h1>{valueOfTeam1}</h1>
                  <button
                    className="btn"
                    onClick={() => setValuevalueOfTeam1(valueOfTeam1 - 1)}
                  >
                    decrease
                  </button>

                  <button
                    className="btn"
                    onClick={() => setValuevalueOfTeam1(valueOfTeam1 + 1)}
                  >
                    increase
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card">
                <div class="text-center">
                  <h2>TEAM ON RIGHT</h2>
                  <h1>{valueOfTeam2}</h1>
                  <button
                    className="btn"
                    onClick={() => setValuevalueOfTeam2(valueOfTeam2 - 1)}
                  >
                    decrease
                  </button>

                  <button
                    className="btn"
                    onClick={() => setValuevalueOfTeam2(valueOfTeam2 + 1)}
                  >
                    increase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseStateCounter;
