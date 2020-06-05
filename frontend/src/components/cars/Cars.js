import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCars, deleteCar } from "../../actions/cars";

export class Cars extends Component {
    static propTypes = {
        cars: PropTypes.array.isRequired,
        getCars: PropTypes.func.isRequired,
        deleteCar: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getCars();
    }

    render() {
        return (
            <Fragment>
                <h2>My Announcements:</h2>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.cars.map((car) => (
                            <tr key={car.id}>
                                <td>{car.id}</td>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                                <td>{car.price}</td>
                                <td>{car.description}</td>
                                <td><button onClick={this.props.deleteCar.bind(this, car.id)} className="btn btn-danger btn-sm">{" "}Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    cars: state.cars.cars,
});

export default connect(mapStateToProps, { getCars, deleteCar })(Cars);