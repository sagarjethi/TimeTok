import React from 'react';
import { MetaMaskButton } from 'rimble-ui';

function RimbleButton(props) {
  const { click, text } = props;

  return (
    <div onClick={click}>
      <MetaMaskButton>{text}</MetaMaskButton>
    </div>
  );
}

export default RimbleButton;
