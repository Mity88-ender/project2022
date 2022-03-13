function Header() {
  console.log("header");
  return (
    <nav className='container teal lighten-2'>
      <div className='nav-wrapper teal lighten-2'>
        <a href='!!#' className='brand-logo right'>
          Logo
        </a>
        <ul id='nav-mobile' className='left hide-on-med-and-down'>
          <li>
            <a href='sass.html'>Sass</a>
          </li>
          <li>
            <a href='badges.html'>Components</a>
          </li>
          <li>
            <a href='collapsible.html'>Script</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
