// PaymentPage.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PaymentPage.css';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardHolder: '',
    cardNumber: '',
    expDate: '',
    cvc: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    phone: '',
    cardHolder: '',
    cardNumber: '',
    expDate: '',
    cvc: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setValidationErrors({ ...validationErrors, [e.target.id]: '' });
  };

  const handleMakePayment = (e) => {
    e.preventDefault();

    const errors = {};

    // Basic form validation
    if (formData.name.trim() === '') {
      errors.name = 'Name is required.';
    }

    if (formData.email.trim() === '') {
      errors.email = 'Email is required.';
    }

    if (formData.phone.trim() === '') {
      errors.phone = 'Phone number is required.';
    }

    if (formData.cardHolder.trim() === '') {
      errors.cardHolder = 'Cardholder name is required.';
    }

    if (formData.cardNumber.trim() === '') {
      errors.cardNumber = 'Card number is required.';
    }

    if (formData.expDate.trim() === '') {
      errors.expDate = 'Expiration date is required.';
    }

    if (formData.cvc.trim() === '') {
      errors.cvc = 'CVC is required.';
    }

    // Check if there are any validation errors
    if (Object.keys(errors).length === 0) {
      // TODO: Add logic to handle the payment (e.g., send data to a payment gateway)
      alert('Payment successful!');
      setValidationErrors({});
    } else {
      setValidationErrors(errors);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Payment Information</h2>

      <div className="row">
        {/* Card 1: Personal Information */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Personal Information</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className={`form-control ${validationErrors.name && 'is-invalid'}`}
                    id="name"
                    placeholder="Enter your name"
                    onChange={handleInputChange}
                  />
                  {validationErrors.name && (
                    <div className="invalid-feedback">{validationErrors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className={`form-control ${validationErrors.email && 'is-invalid'}`}
                    id="email"
                    placeholder="Enter your email"
                    onChange={handleInputChange}
                  />
                  {validationErrors.email && (
                    <div className="invalid-feedback">{validationErrors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    className={`form-control ${validationErrors.phone && 'is-invalid'}`}
                    id="phone"
                    placeholder="Enter your phone number"
                    onChange={handleInputChange}
                  />
                  {validationErrors.phone && (
                    <div className="invalid-feedback">{validationErrors.phone}</div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Card 2: Payment Method */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Payment Method</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="cardHolder">Cardholder Name</label>
                  <input
                    type="text"
                    className={`form-control ${validationErrors.cardHolder && 'is-invalid'}`}
                    id="cardHolder"
                    placeholder="Enter cardholder name"
                    onChange={handleInputChange}
                  />
                  {validationErrors.cardHolder && (
                    <div className="invalid-feedback">{validationErrors.cardHolder}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    className={`form-control ${validationErrors.cardNumber && 'is-invalid'}`}
                    id="cardNumber"
                    placeholder="Enter card number"
                    onChange={handleInputChange}
                  />
                  {validationErrors.cardNumber && (
                    <div className="invalid-feedback">{validationErrors.cardNumber}</div>
                  )}
                </div>
                <div className="form-row">
                  <div className="col-md-6">
                    <label htmlFor="expDate">Expiration Date</label>
                    <input
                      type="text"
                      className={`form-control ${validationErrors.expDate && 'is-invalid'}`}
                      id="expDate"
                      placeholder="MM/YYYY"
                      onChange={handleInputChange}
                    />
                    {validationErrors.expDate && (
                      <div className="invalid-feedback">{validationErrors.expDate}</div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="cvc">CVC</label>
                    <input
                      type="text"
                      className={`form-control ${validationErrors.cvc && 'is-invalid'}`}
                      id="cvc"
                      placeholder="Enter CVC"
                      onChange={handleInputChange}
                    />
                    {validationErrors.cvc && (
                      <div className="invalid-feedback">{validationErrors.cvc}</div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Card 3: Item Details and Cost */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Item Details</h5>
              <div className="item-details">
                {/* Display selected data from the previous component */}
                {/* Add your logic to fetch and display selected data */}
              </div>
              <hr />
              <h6>Total Cost: $50.00</h6>
              <button className="btn btn-primary" onClick={handleMakePayment}>
                Make Payment
              </button>
              {Object.keys(validationErrors).map((key) => (
                <p key={key} className="text-danger mt-2">
                  {validationErrors[key]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
