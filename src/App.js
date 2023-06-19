function App() {
  return (
    <div className="App">
      <header className = "navbar">
        <h1>AutoBot</h1>
        <ul className="nav-elem">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Profile</a></li>
        </ul>
        </header>
      <body>
        <section>
        <img className="logo" src= "logo.png"></img>
        </section>
        <section className="header1">
          <div className="info_container">
          <h2>Build fast, light weight bots with AutoBot</h2>
          </div>
        </section>
        <section className="header2">
          <div className="info_container2">
          <h2>Experience the ultimate frontend toolkit that empowers you to build stunning websites. Bring your vision to life with our comprehensive toolkit and take your web development to new heights!</h2>
          </div>
        </section>
        <div className="textdiv">
          <input type="text" className="textbox"></input>
          <button className="btn btn-primary button-30">Build</button>
        </div>
      </body>
    </div>
    
  );
}

export default App;
