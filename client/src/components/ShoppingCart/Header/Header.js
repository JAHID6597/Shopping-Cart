import React from 'react';
import './Header.css';
import { Navbar, Container, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import MyModal from '../../common/Modal/MyModal';
import Cart from '../Body/Cart/Cart';

const Header = (props) => {
  const {
    currentCartItems,
    shoppingCartModal,
    handleShoppingCartModal,
    cart,
    totalPrice,
    handleProductIncrement,
    handleProductDecrement,
    handleDeleteSingleItem,
  } = props;
  return (
    <div className="mainNavBar">
      <Navbar bg="dark" variant="dark">
        <Container fluid className="p-md-2">
          <Navbar.Brand className="brand-title">Shop</Navbar.Brand>

          <Navbar.Text onClick={() => handleShoppingCartModal(true)}>
            <FontAwesomeIcon icon={faShoppingBag} className="icon" />
            <Badge className="translate-middle fs-5 p-0">
              {currentCartItems}
            </Badge>
          </Navbar.Text>
          <MyModal
            showModal={shoppingCartModal}
            handleModal={handleShoppingCartModal}
            modalTitle="Shopping Cart"
          >
            <Cart
              cart={cart}
              totalPrice={totalPrice}
              horizontal={true}
              handleProductIncrement={handleProductIncrement}
              handleProductDecrement={handleProductDecrement}
              singleDeleteItemButton={true}
              handleDeleteSingleItem={handleDeleteSingleItem}
            />
          </MyModal>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
