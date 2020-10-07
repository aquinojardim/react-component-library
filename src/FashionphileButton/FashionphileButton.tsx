import React from "react";

import { FashionphileButtonProps } from "./FashionphileButton.types";

import "./FashionphileButton.scss";

const FashionphileButton: React.FC<FashionphileButtonProps> = ({ status='on', size='btn-lg', theme='primary', content='Lorem ipsum', onPress }) => {
  const handleOnClick = () => {
    if(onPress){
      onPress()
    }
  }
  return (
    <div
      onClick={handleOnClick}
      role="button" 
      aria-pressed="false"
      data-testid="fashionphile-button"
      className={`fashionphile-button fashionphile-button-${size} fashionphile-button-${theme}-${status}`}
    >
      {content}
    </div>
  )
};

export default FashionphileButton;
