//WE NOW HAVE ACCESS TO THE GLOBAL VARIABLE CALLED ReactDOM with we will use to .render somethings to our screen.


//Created my own coustom react component called MainContent!
// const MainContent = () => {
//   //return a simple h1
//   return (
//     <h1>I'm Learning React!</h1>
//   )
// }

// ReactDOM.render(
//   <MainContent />,
//   document.querySelector("#root")
// );

//Normal RENDER
// ReactDOM.render(<div>
//   <h1>Come</h1>
//   <p>Go</p>
// </div>, document.querySelector("#root"));

//RENDER BY VARIABLE
//  const page = (
//  <div>
//    <h1>This is JSX</h1>
//    <p>Have Fun</p> 
//  </div>
//  )

//  console.log(page)

//  ReactDOM.render(page,document.querySelector('#root'));

//THE CODE BELOW SHOW THAT JSX RETURNS PLAIN JAVASCRIPT OBJECTS

// let page = (
//   <div>
//     <h1>My frist React website</h1>
//     <h3>Reasons why React is nice</h3>
//     <nav>
//       <ol>
//         <li>It's composable</li>
//         <li>It's declarative</li>
//         <li>It's hireable skill</li>
//         <li>It's actively maintained by skilled people</li>
//       </ol>
//     </nav>
//   </div>
//);
//  ReactDOM.render(page, document.querySelector('#root'));

// const navbar = (
// <nav>
//     <h1>React</h1>
//     <ul>
//       <li>About</li>
//       <li>Contact</li>
//       <li>Gallary</li>
//       <li>Shop</li>
//     </ul>
//     </nav>
// )
// ReactDOM.render(navbar,document.querySelector('#root')
// );

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <img className="image" src="./React_logo2.png" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <small> @ 2021 Nwanosike development. All rights reserved.</small>
    </footer>
  )
};

const MainContent = () => {
  return (
    <div>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}



const PageName =() => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

ReactDOM.render(<PageName/>, document.querySelector('#root'));