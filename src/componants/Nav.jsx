import "./Nav.css";

export const Nav = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img className="logo" src="src\assets\user-circle.svg" />
      </div>
      <div>
        <ul>
          <a className="link">Branches</a>
          <a className="link">Sister Location</a>
          <a className="link">Socials</a>
          <button className="link primary-link">Account</button>
        </ul>
      </div>
    </div>
  );
};
