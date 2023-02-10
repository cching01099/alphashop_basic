import { ReactComponent as SvgSearchIcon } from "../../icons/search.svg";
import { ReactComponent as SvgToggleIcon } from "../../icons/toggle.svg";
import { ReactComponent as SvgCartIcon } from "../../icons/cart.svg";
import { ReactComponent as SvgMoonIcon } from "../../icons/moon.svg";
import { ReactComponent as SvgSunIcon } from "../../icons/sun.svg";
import { ReactComponent as SvgLogoIcon } from "../../icons/logo.svg";

function Header() {
  return (
    <div>
      <header className="site-header">
        <div className="header-container mx-auto">
          {/* <!-- navbar-toggle --> */}
          <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
          <label for="navbar-toggle" className="burger-container">
            <svg className="icon-toggle cursor-point">
              <SvgToggleIcon />
            </svg>
          </label>
          {/* 
        <!-- navbar-menu --> */}
          <nav className="navbar-menu">
            <ul className="nav-list site-menu-list mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  男款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  女款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  最新消息
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  客製商品
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  聯絡我們
                </a>
              </li>
            </ul>
            <ul className="nav-list site-action-list">
              {/* <!-- search --> */}
              <li className="nav-item">
                <svg className="nav-icon cursor-point">
                  <SvgSearchIcon />
                </svg>
              </li>
              {/* <!-- cart --> */}
              <li className="nav-item">
                <svg className="nav-icon cursor-point">
                  <SvgCartIcon />
                </svg>
              </li>
              <li id="theme-toggle" className="nav-item">
                {/* <!-- moon --> */}
                <svg className="nav-icon cursor-point">
                  <SvgMoonIcon />
                </svg>
                {/* <!-- sun --> */}
                {/* <svg className="nav-icon cursor-point">
                  <SvgSunIcon />
                </svg> */}
              </li>
            </ul>
          </nav>
          {/* <!-- logo --> */}
          <a className="header-logo-container" href="#">
            <SvgLogoIcon />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
