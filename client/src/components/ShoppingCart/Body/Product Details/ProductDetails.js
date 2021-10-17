import React from 'react';
import './ProductDetails.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

const ProductDetails = (props) => {
  const { product, handleProductIncrement } = props;
  const { title, price, description, image, rating } = product;
  const { rate, count } = rating || 0;
  return (
    <Container>
      <Row>
        <Col md={6} className="productColumn">
          <div className="productDetailsImageDiv">
            <img src={image} alt={image} />
          </div>
        </Col>
        <Col md={6} className="productColumn">
          <div className="productDetailsDiv p-md-5 my-md-0 my-3">
            <h2 className="my-3">
              <strong>{title}</strong>
            </h2>
            <p className="productDescription">{description}</p>
            <h4>
              <strong>${price}</strong>
            </h4>
            <div className="mt-3">
              <StarRatings
                rating={rate}
                starDimension="30px"
                starRatedColor="#FDCC0D"
              />
              <h6 className="mt-2">
                {rate} out of 5{' '}
                <span className="text-muted">({count} reviews)</span>
              </h6>
            </div>
            <Button
              variant="success"
              className="productCardFooterButton my-3"
              onClick={() => handleProductIncrement(product)}
            >
              Add To Cart
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
