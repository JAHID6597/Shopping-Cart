import React from 'react';
import './Body.css';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import ProductCard from './ProductCard/ProductCard';
import Cart from './Cart/Cart';
import MyModal from './../../common/Modal/MyModal';
import ProductDetails from './Product Details/ProductDetails';

const Body = (props) => {
  const {
    products,
    cart,
    totalPrice,
    handleProductIncrement,
    handleProductDecrement,
    productDetailsModal,
    handleProductDetailsModal,
    selectedProduct,
  } = props;
  return (
    <div className="shopBody">
      <Container fluid>
        <Row>
          <Col md={9} className="order-md-1 order-2">
            <Row>
              {products.length === 0 && (
                <div className="d-flex justify-content-center mt-5">
                  <Spinner
                    animation="border"
                    variant="success"
                    className="spinnerClass"
                  />
                </div>
              )}
              {products.map((product) => (
                <Col
                  lg={4}
                  md={6}
                  sm={6}
                  className="p-2 d-flex align-items-stretch"
                  key={product.id}
                >
                  <ProductCard
                    product={product}
                    handleProductIncrement={handleProductIncrement}
                    productDetailsModal={productDetailsModal}
                    handleProductDetailsModal={handleProductDetailsModal}
                  />
                </Col>
              ))}
              <MyModal
                showModal={productDetailsModal}
                handleModal={handleProductDetailsModal}
                modalTitle="Product Details"
              >
                <ProductDetails
                  product={selectedProduct}
                  handleProductIncrement={handleProductIncrement}
                />
              </MyModal>
            </Row>
          </Col>
          <Col md={3} className="order-md-2 order-1">
            <Cart
              cart={cart}
              totalPrice={totalPrice}
              horizontal={false}
              handleProductIncrement={handleProductIncrement}
              handleProductDecrement={handleProductDecrement}
              singleDeleteItemButton={false}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Body;
