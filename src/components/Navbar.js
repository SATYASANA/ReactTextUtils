import React from 'react'
import PropTypes from 'prop-types';
export default function Navbar(props) {
  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{props.about}</a>
        </li>
       
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode1} mx-3`} >
  <input onClick={props.toggleMode1} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label font-weight" htmlFor="flexSwitchCheckDefault"style={{color:props.mode1==="#FF6666"?"#E21717":"#FF6666"}}>{props.text}</label>
</div>
      <div className={`form-check form-switch text-${props.mode}`}>
  <input onClick={props.toggleMode} className="form-check-input font-weight" type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label font-weight" htmlFor="flexSwitchCheckDefault" style={{color:props.mode==="dark"?"white":"black"}}>{props.name}</label>
</div>

    </div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes={
  title:PropTypes.string.isRequired,
  about:PropTypes.string.isRequired
}
Navbar.defaultProps={
  title:"About textUtils",
  about:"About"
}