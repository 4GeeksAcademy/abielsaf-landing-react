import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
                <img className="card-img-top" src={props.imageSrc} alt="Card image cap" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text text-center">{props.description}</p>
                    <div className="mt-auto text-center">
                        <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonLabel: PropTypes.string
};

Card.defaultProps = {
    // imageSrc: "https://imgs.search.brave.com/u6KlmpkirvNxPeUboqwoGqbXxmwBfSbZ1UQ5QWmgb6k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b193ZWJwLHFfZ2xv/c3N5LHJldF9pbWcs/d184MDAsaF81Mzgv/aHR0cHM6Ly9ibG9n/LnNuYXBwYS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDIvTmV3T2xkU3Rv/Y2stZXhhbXBsZS1p/bWFnZS5qcGc",
    imageSrc: "https://picsum.photos/id/36/300/300",
    title: "Card title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonUrl: "",
    buttonLabel: "Find Out More!"
}

const cardArray = [
    <Card />,
    <Card />,
    <Card />,
    <Card />
];

const CardCollection = () => {
    return (
        <div className="row">
            {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} />
            ))}
        </div>
    );
};

export default CardCollection;