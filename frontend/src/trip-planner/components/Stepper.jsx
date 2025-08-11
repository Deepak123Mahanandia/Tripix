import React from 'react';

const Stepper = ({ currentStep }) => {
  const steps = ['Select Flight & Hotel', 'Checkout', 'Confirmation'];

  return (
    <div className="stepper-wrapper">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={`step-item ${currentStep > index + 1 ? 'completed' : ''} ${currentStep === index + 1 ? 'active' : ''}`}>
            <div className="step-counter">{currentStep > index + 1 ? '✓' : index + 1}</div>
            <div className="step-name">{step}</div>
          </div>
          {index < steps.length - 1 && <div className="step-connector"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;