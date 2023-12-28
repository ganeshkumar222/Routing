import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid d-flex justify-content-center" >
    
    <ul className="navbar-nav">
      <li className="nav-item hovering ">
        <Link to='All' className="nav-link" >ALL</Link>
      </li>
      <li className="nav-item hovering">
      <Link to='FullStack' className="nav-link">FULL STACK DEVELOPMENT</Link>
      </li>
      <li className="nav-item hovering">
      <Link to='DataScience'className="nav-link" >DATA SCIENCE</Link>
      </li>
      <li className="nav-item hovering">
      <Link to='CyberSecurity'className="nav-link">CYBER SECURITY</Link>
      </li>
      <li className="nav-item hovering">
      <Link to='Career'className="nav-link">CAREER</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}
