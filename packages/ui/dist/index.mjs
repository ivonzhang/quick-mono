import './index.css';
// src/components/Input/Input.tsx
import { jsx } from "react/jsx-runtime";
var Input = () => {
  return /* @__PURE__ */ jsx("div", { className: "my-ui-input", children: /* @__PURE__ */ jsx(
    "input",
    {
      className: "my-ui-input-inner",
      placeholder: "it is an input component of @my-org/ui"
    }
  ) });
};

// src/components/Button/Button.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Button = ({ onClick, children, disabled = false }) => {
  return /* @__PURE__ */ jsx2("button", { className: "button", onClick, disabled, children });
};
export {
  Button,
  Input
};
