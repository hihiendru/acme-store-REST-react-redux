import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    const { lineItems, orders, path } = this.props;
    const totalItems = Object.keys(lineItems).reduce((init, curr) => {
      return init + lineItems[curr];
    }, 0);
    const totalOrders = orders.filter(o => o.status == 'ORDER').length;

    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand">Acme Store</a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarConent"
          aria-controls="navbarConent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarConent">
          <ul className="navbar-nav">
            <li className={path == '' ? 'nav-item active' : 'nav-item'}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className={path == 'cart' ? 'nav-item active' : 'nav-item'}>
              <Link to="/cart" className="nav-link">
                Cart ({totalItems})
              </Link>
            </li>
            <li className={path == 'orders' ? 'nav-item active' : 'nav-item'}>
              <Link to="/orders" className="nav-link">
                Orders ({totalOrders})
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    lineItems: state.lineItems,
    orders: state.orders,
  };
};

export default connect(
  mapStateToProps,
  null
)(Navbar);
