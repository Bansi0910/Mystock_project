import React from 'react';

function Team() {
    return (  
        <div className="container">
        <div className="row p-3 mt-5 border-top">
          <h1 className="text-center ">People</h1>
        </div>
  
        <div
          className="row p-3 text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col-6 p-3 text-center">
            <img
              src="Bansi_patel.jpeg"
              style={{ borderRadius: "50%", width: "50%", height: "50%"}}
            />
            <h4 className="mt-5">Bansi Patel</h4>
            <h6>Founder, CEO</h6>
          </div>
          <div className="col-6 p-3">
            <p>
            Bansi Patel is a visionary entrepreneur and the founder of a cutting-edge stock market application. With a deep passion for finance and technology, Bansi has leveraged her expertise to create a platform that democratizes access to the stock market, making it easier for individuals to invest and manage their portfolios. Her innovative approach to stock market trading combines real-time data analytics, user-friendly design, and advanced trading tools, providing users with a seamless and intuitive experience. Empowering a new generation of investors to make informed financial decisions.
        
            </p>
              Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /{" "}
              <a href="" style={{textDecoration:"none"}}>Twitter</a>
            
          </div>
        </div>
      </div>
    );
}

export default Team;