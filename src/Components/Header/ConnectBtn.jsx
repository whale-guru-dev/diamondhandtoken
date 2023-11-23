import React from "react";
import { useWeb3React } from "@web3-react/core";
import useConnectHandler from "../../Hooks/useConnectHandler";
import { networks } from "../../Const/super-token-consts";

const parseAddress = (address) => {
  if (address) {
    const frontTail = address.substring(0, 5);
    const endTail = address.substring(address.length - 3, address.length);
    return `${frontTail}...${endTail}`;
  }
  return "Connect Wallet";
};

export default function ConnectBtn() {
  const { account, chainId } = useWeb3React(); 

  const chainSupported = networks.find((each) => each.id == chainId)

  const { onConnectClick } = useConnectHandler();

  return (
      <button
        to="#0"
        className="nav_btn"
        onClick={onConnectClick}
      >
        {!chainId || chainSupported ? parseAddress(account) : "Wrong Network"}
    </button>
  );
}
