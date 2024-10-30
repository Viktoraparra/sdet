import React from "react";

export type WizardStepProps = {
  children?: React.ReactNode;
};

const WizardStep: React.FC<WizardStepProps> = ({ children }) => {
  return <div className="bg-gray-100 m-8 p-2 min-h-24">{children}</div>;
};

export default WizardStep;
