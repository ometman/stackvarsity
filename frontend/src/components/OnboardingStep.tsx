import { useState } from "react";

const OnboardingStep = ({ stepData, currentStep, totalSteps, onNext }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const selected = formData[name] || [];
      setFormData({
        ...formData,
        [name]: checked
          ? [...selected, value]
          : selected.filter((item) => item !== value),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    onNext();
  };

  return (
    <div>
      <h1>{stepData.title}</h1>
      <p>{stepData.description}</p>
      {stepData.formFields && (
        <form onSubmit={handleSubmit} style={{ textAlign: "left", marginTop: "20px" }}>
          {stepData.formFields.map((field, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <label>{field.label}</label>
              {field.type === "checkbox" ? (
                field.options.map((option) => (
                  <div key={option}>
                    <input
                      type="checkbox"
                      name={field.label.toLowerCase()}
                      value={option}
                      onChange={handleChange}
                    />
                    {option}
                  </div>
                ))
              ) : (
                <input
                  type={field.type}
                  name={field.label.toLowerCase()}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              )}
            </div>
          ))}
          <button type="submit" style={{ padding: "10px 20px", background: "#0070f3", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            {stepData.buttonText}
          </button>
        </form>
      )}
      <p>
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
};

export default OnboardingStep;
