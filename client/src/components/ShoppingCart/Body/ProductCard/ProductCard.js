import React from 'react';
import './ProductCard.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ProductCard = (props) => {
  const { product, handleProductIncrement, handleProductDetailsModal } = props;
  const { title, price, description, image, rating } = product;
  const { rate, count } = rating;
  return (
    <>
      <Card>
        <Card.Img variant="top" src={image} className="productCardImage" />
        <Card.Body>
          <Card.Title>
            <h4>{title.substr(0, 20)}</h4>
          </Card.Title>
          <Card.Text>{description.substr(0, 70)}</Card.Text>
          <Card.Text>
            <h6>
              <strong className="text-danger">${price}</strong>
            </h6>
          </Card.Text>
          <Card.Text>
            <h6>
              <FontAwesomeIcon icon={faStar} className="starIcon" /> {rate} out
              of 5 <span className="text-muted">({count} reviews)</span>
            </h6>
          </Card.Text>
          <div className="d-flex justify-content-around">
            <Button
              variant="success"
              className="productCardFooterButton"
              onClick={() => handleProductIncrement(product)}
            >
              Add To Cart
            </Button>
            <Button
              variant="primary"
              className="productCardFooterButton"
              onClick={() => handleProductDetailsModal(true, product)}
            >
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
