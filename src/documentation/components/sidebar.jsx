import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import classNames from 'classnames'
import Collapse from '../../components/collapse'
// import Collapse from '@material-ui/core/Collapse'
import "./sidebar.scss";

class SideBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
          navExapnd: innerWidth > 768 ? true : false,
          menus: [
            {
              name: "Getting started",
              value: '/docs/getting-started',
              children: [
                {
                  name: "Introduction",
                  value: "/docs/getting-started/introduction"
                },
                {
                  name: "Contents",
                  value: "/docs/getting-started/contents"
                },
                {
                  name: "Browser & devices",
                  value: "/docs/getting-started/browsers-and-devices"
                },
                {
                  name: "JavaScript",
                  value: "/docs/getting-started/javascript"
                },
                {
                  name: "Build tools",
                  value: "/docs/getting-started/build-tools"
                },
                {
                  name: "Webpack",
                  value: "/docs/getting-started/webpack"
                },
                {
                  name: "Accessibility",
                  value: "/docs/getting-started/accessibility"
                }
              ]
            },
            {
              name: "Layout",
              value: "/docs/layout",
              children: [
                {
                  name: "Overview",
                  value: "/docs/layout/overview"
                },
                {
                  name: "Grid",
                  value: "/docs/layout/grid"
                },
                {
                  name: "Media object",
                  value: "/docs/layout/media-object"
                },
                {
                  name: "Utilities for layout",
                  value: "/docs/layout/utilities-for-layout"
                }
              ]
            },
            {
              name: "Content",
              value: "/docs/content",
              children: [
                {
                  name: "Reboot",
                  value: "/docs/content/reboot"
                },
                {
                  name: "Typography",
                  value: "/docs/content/typography"
                },
                {
                  name: "Code",
                  value: "/docs/content/code"
                },
                {
                  name: "Images",
                  value: "/docs/content/images"
                },
                {
                  name: "Tables",
                  value: "/docs/content/tables"
                },
                {
                  name: "Figures",
                  value: "/docs/content/figures"
                }
              ]
            },
            {
              name: "Component",
              value: "/docs/components",
              children: [{
                name: 'Alerts',
                value: '/docs/components/alerts'
              },{
                name: 'Badge',
                value: '/docs/components/badge'
              }]
            }
          ]
        }
    }
    componentDidMount () {
        addEventListener('resize', this.resize)
    }
    componentWillUnmount() {
        removeEventListener('resize', this.resize)
    }
    resize = () => {
        if (innerWidth < 768) {
            this.setState({ navExapnd: false })
        } else {
            this.setState({ navExapnd: true})
        }
    }
    toggleExpandNav = () => {
        this.setState({ navExapnd: !this.state.navExapnd})
    }
    toggleMenu = (index) => {
      let menus = this.state.menus;
      menus[index].expand = !menus[index].expand;
      this.setState({ menus })
  }
  render() {
    return (
        <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
          {/* search form */}
          <SidebarForm toggleExpandNav={this.toggleExpandNav} />
          <Collapse in={this.state.navExapnd} timeout={{ enter: 500, exit: 300 }}>
            <SidebarContent menus={this.state.menus} toggleMenu={this.toggleMenu} />
          </Collapse>
        </div>
      );
  }
}

function SidebarForm(props) {
  return (
    <form className="bd-search d-flex align-items-center">
      <input
        type="search"
        className="form-control"
        id="search-input"
        placeholder="Search..."
        aria-label="Search for..."
        autoComplete="off"
        data-siteurl="https://getbootstrap.com"
        data-docs-version="4.1"
      />
      <button
        className="btn btn-link bd-search-docs-toggle d-md-none p-0 ml-3"
        type="button"
        data-target="#bd-docs-nav"
        aria-controls="bd-docs-nav"
        aria-expanded="false"
        aria-label="Toggle docs navigation"
        onClick={props.toggleExpandNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30"
          height="30"
          focusable="false"
        >
          <title>Menu</title>
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M4 7h22M4 15h22M4 23h22"
          />
        </svg>
      </button>
    </form>
  );
}

SidebarForm.propTypes = {
    toggleExpandNav: PropTypes.func.isRequired
}

class SidebarContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  static propTypes = {
    menus: PropTypes.array.isRequired,
    toggleMenu: PropTypes.func.isRequired
  };
  isMenuActive(pathname, menu) {
    if (pathname === menu.value) {
      return true;
    } else if (
      menu.children &&
      menu.children.some(item => item.value == pathname)
    ) {
      return true;
    }
    return false;
  }
  ;
  render() {
    const { menus, toggleMenu } = this.props;
    return (
      <Route
        render={({ location }) => (
          <nav className="bd-links" id="bd-docs-nav">
            {menus.map((menu, i) => {
              const active = this.isMenuActive(location.pathname, menu);
              return (
                <div
                  key={i}
                  className={`bd-toc-item ${active ? "active" : ""}`}
                >
                  {menu.value && !menu.children ? (
                    <Link onClick={() => toggleMenu(i)} to={menu.value} className="bd-toc-link">
                      {menu.name}
                    </Link>
                  ) : (
                    <a onClick={() => toggleMenu(i)} className="bd-toc-link">{menu.name}</a>
                  )}

                  {menu.children && (
                      <Collapse appear in={menu.expand = (menu.expand == undefined ? active : !!menu.expand)} timeout={{ enter: 500, exit: 300 }}>
                        <ul className={classNames("nav bd-sidenav", {
                            //"hidden": menu.isFold
                        })}>
                            {menu.children.map((subMenu, j) => {
                            const subMenuActive = this.isMenuActive(
                                location.pathname,
                                subMenu
                            );
                            return (
                                <li
                                key={"" + i + j}
                                className={
                                    subMenuActive ? "active bd-sidenav-active" : ""
                                }
                                >
                                <Link to={subMenu.value}>{subMenu.name}</Link>
                                </li>
                            );
                            })}
                        </ul>
                      </Collapse>
                    )}
                </div>
              );
            })}
          </nav>
        )}
      />
    );
  }
}

export default SideBar;
