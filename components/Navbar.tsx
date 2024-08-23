import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary navbar-expand">
        <div className="container">
          <a className="navbar-brand" href="/">About</a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/"><span>Home</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add-item"><span>AddItem</span></a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar