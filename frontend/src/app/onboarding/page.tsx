"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import OnboardingStep from "../../components/OnboardingStep";

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const steps = [
    {
      title: "Welcome to Our Platform!",
      description:
        "Let's get you set up quickly. You’ll be guided through a few steps to make the most out of our platform.",
      buttonText: "Start Onboarding",
    },
    {
      title: "Set Up Your Profile",
      description:
        "Add your profile picture and choose a username so others can identify you.",
      formFields: [
        { label: "Username", type: "text", placeholder: "Enter your username" },
        { label: "Profile Picture", type: "file" },
      ],
      buttonText: "Next Step",
    },
    {
      title: "Select Your Preferences",
      description:
        "What topics or areas are you interested in? We’ll tailor your experience.",
      formFields: [
        { label: "Interests", type: "checkbox", options: ["Web Development", "Data Science", "Design"] },
      ],
      buttonText: "Complete Onboarding",
    },
  ];

  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // Navigate to the dashboard once onboarding is complete
      router.push("/dashboard");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
      <OnboardingStep
        stepData={steps[step]}
        currentStep={step + 1}
        totalSteps={steps.length}
        onNext={handleNextStep}
      />
    </div>
  );
};

export default Onboarding;
