import React, { ReactElement, useState } from "react";
import { WizardStepProps } from "./WizardStep";
import { Button } from "./ui/Button";

type Props = {
  title: string;
  children: ReactElement<WizardStepProps>[];
};

const Wizard: React.FC<Props> = ({ title, children }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const stepCount = children.length;

  return (
    <div className="max-w-[1024px] mx-auto border border-red-500 py-8 m-8">
      <h1>
        {title} - Step {stepIndex}
      </h1>
      {children[stepIndex]}
      <div className="space-x-4">
        <Button onClick={() => setStepIndex(Math.max(stepIndex - 1, 0))}>
          Back
        </Button>
        <Button
          onClick={() => setStepIndex(Math.min(stepIndex + 1, stepCount))}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default Wizard;
