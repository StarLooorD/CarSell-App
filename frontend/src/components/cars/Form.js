import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCar } from '../../actions/cars';


export class Form extends Component {
      state = {
        brand: '',
        model: '',
        year: '',
        price: '',
        description: '',
      };

      static propTypes = {
        addCar: PropTypes.func.isRequired
      }

      onChange = e => this.setState({ [e.target.name]: e.target.value });

      onSubmit = e => {
        e.preventDefault();
        const {brand, model, year, price, description} = this.state;
        const Car = {brand, model, year, price, description};
        this.props.addCar(Car);
        this.setState({
            brand: '',
            model: '',
            year: '',
            price: '',
            description: '',
        });
      };

      render() {
        const { brand, model, year, price, description } = this.state;
        return (
          <div className="card card-body mt-4 mb-4">
            <h2>Sell Car</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Brand</label>
                <input
                  className="form-control"
                  type="text"
                  name="brand"
                  onChange={this.onChange}
                  value={brand}
                />
              </div>
              <div className="form-group">
                <label>Model</label>
                <input
                  className="form-control"
                  type="text"
                  name="model"
                  onChange={this.onChange}
                  value={model}
                />
              </div>
              <div className="form-group">
                <label>Year</label>
                <input
                  className="form-control"
                  type="year"
                  name="year"
                  onChange={this.onChange}
                  value={year}
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  className="form-control"
                  type="price"
                  name="price"
                  onChange={this.onChange}
                  value={price}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  type="text"
                  name="description"
                  onChange={this.onChange}
                  value={description}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        );
      };
    };

export default connect(null, { addCar })(Form);