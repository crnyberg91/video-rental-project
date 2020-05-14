import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard';
import './CardRow-style.css';

function CardRow() {
    return (
        <Row className="card-row"><Col><MovieCard /></Col></Row>
    );
};

export default CardRow;