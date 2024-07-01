// AddItemFormStyles.jsx
import React from "react";

const AddItemFormStyles = () => (
  <style>{`
    input:focus + label,
    input:not(:placeholder-shown) + label {
      top: -8px;
      font-size: 12px;
    }

    label {
      left: 8px;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.3s ease;
    }
  `}</style>
);

export default AddItemFormStyles;
