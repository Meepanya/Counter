import React from "react";

interface IInputComponent {
  className: string;
  setValue: (e) => void;
  title: string;
  type: string;
  value: string | number;
  step?: string;
  name: string;
  text: string;
}

const InputComponent: React.FunctionComponent<IInputComponent> = ({
  setValue,
  className,
  type,
  title,
  value,
  name,
  step,
  text,
}: IInputComponent) => (
  <div>
    <div className="Row">
      <div className="Blue-1-18pxMedium">{title}</div>
      <div className="Secondary20pxMedium">{value}</div>
    </div>

    <div style={{ margin: "16px 0px" }}>
      <div className="Blue-1-18pxMedium">{text}</div>
      <input
        className={className}
        type={type}
        step={step}
        name={name}
        value={value}
        onChange={(e) => {
          setValue(e);
        }}
      />
    </div>
  </div>
);

export default InputComponent;
