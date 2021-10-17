import React from 'react';
import './Cart.css';
import { ListGroup, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
  const {
    cart,
    totalPrice,
    horizontal,
    handleProductIncrement,
    handleProductDecrement,
    singleDeleteItemButton,
    handleDeleteSingleItem,
  } = props;
  return (
    <div className="cart my-2">
      {cart.length === 0 ? (
        <h2 className="text-center py-3">Your Cart is Empty</h2>
      ) : (
        <div>
          <h2 className="text-center py-3">Total Price: ${totalPrice}</h2>
          <ListGroup>
            {cart.map((item) => (
              <ListGroup.Item>
                <Row>
                  <Col className="cartProductItemColumn">
                    <img
                      src={item.image}
                      alt="product-img"
                      className="cartItemImage"
                    />
                  </Col>
                  <Col className="cartProductItemColumn">
                    <strong>{item.title.substr(0, 5)}</strong>
                  </Col>
                  <Col className="cartProductItemColumn">
                    <strong>${item.itemTotalPrice}</strong>
                  </Col>
                  <Col className="cartProductItemColumn">
                    <ListGroup
                      horizontal={horizontal ? horizontal : ''}
                      className={
                        horizontal ? '' : 'cartProductCounterItemHorizontal'
                      }
                    >
                      <ListGroup.Item
                        className="cartProductCounterItem"
                        onClick={() => handleProductIncrement(item)}
                      >
                        <FontAwesomeIcon icon={faChevronUp} className="icon" />
                      </ListGroup.Item>
                      <ListGroup.Item className="cartProductCounterItem">
                        <span>{item.quantity}</span>
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="cartProductCounterItem"
                        onClick={() => handleProductDecrement(item)}
                      >
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="icon"
                        />
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                  {singleDeleteItemButton && (
                    <Col className="cartProductItemColumn">
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteSingleItem(item)}
                      >
                        X
                      </Button>
                    </Col>
                  )}
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </div>
  );
};

export default Cart;
