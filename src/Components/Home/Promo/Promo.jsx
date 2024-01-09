import React, { useEffect, useRef, useState } from "react";
import "./Promo.scss";
import Chains from "../../../Assets/Icons/Chains";
// import User2 from "../../../Assets/Icons/User2";
import Pulses from "../../../Assets/Icons/Pulse";
import Ethereum from "../../../Assets/Icons/Ethereum";
import Binancedex from "../../../Assets/Icons/Binancedex";
import Polygon from "../../../Assets/Icons/Polygon";
import Avalanche from "../../../Assets/Icons/Avalanche";
import useSuperToken from "../../../Hooks/useSuperToken";
import { SuperToken_ADDRESS } from "../../../Const/super-token-consts";
import Arbitrum from "../../../Assets/Icons/Arbitrum";

const Promo = () => {
  const handler = useRef(null);
  const [tokenEthPrice, setTokenEthPrice] = useState(0);
  const [tokenBscPrice, setTokenBscPrice] = useState(0);
  const [tokenPolygonPrice, setTokenPolygonPrice] = useState(0);
  const [tokenPlsPrice, setTokenPlsPrice] = useState(0);
  const [tokenAvalanchePrice, setTokenAvalanchePrice] = useState(0);
  const [tokenArbitrumPrice, setTokenArbitrumPrice] = useState(0);
  const {
    onGetTokenPrice
  } = useSuperToken(1);

  useEffect(() => {
    async function getPrices() {
        const promises = [];

        promises.push(
          onGetTokenPrice('eth', SuperToken_ADDRESS),
          onGetTokenPrice('bsc', SuperToken_ADDRESS),
          onGetTokenPrice('polygon_pos', SuperToken_ADDRESS),
          onGetTokenPrice('pulsechain', SuperToken_ADDRESS),
          onGetTokenPrice('avax', SuperToken_ADDRESS),
          onGetTokenPrice('arbitrum', SuperToken_ADDRESS)
        );

        const [tokenEthPrice, tokenBscPrice, tokenPolygonPrice, tokenPlsPrice, tokenAvalanchePrice, tokenArbitrumPrice] = await Promise.all(promises);
        setTokenEthPrice(tokenEthPrice);
        setTokenBscPrice(tokenBscPrice);
        setTokenPolygonPrice(tokenPolygonPrice);
        setTokenPlsPrice(tokenPlsPrice);
        setTokenAvalanchePrice(tokenAvalanchePrice);
        setTokenArbitrumPrice(tokenArbitrumPrice);

        return true;
    }

    handler.current = setInterval(() => {
      getPrices();
    }, 30000);

    return () => {
        if (handler.current) {
            clearInterval(handler.current);
        }
    };
  }, []);

  return (
    <div className="promo-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="promo-content">
                <div className="promo-item">
                  <div className="promo-bg">
                    <div className="icon"><Ethereum /></div>
                    <div>
                      <p>Token Price</p>
                      <div className="h3">${Number(tokenEthPrice).toFixed(2)}</div>
                      <p className="desc">Price on Ethereum</p>
                    </div>
                  </div>
                </div>
                <div className="promo-item">
                  <div className="promo-bg">
                    <div className="icon"><Binancedex /></div>
                    <div>
                      <p>Token Price</p>
                      <div className="h3">${Number(tokenBscPrice).toFixed(2)}</div>
                      <p className="desc">Price on Binance Chain</p>
                    </div>
                  </div>
                </div>

                <div className="promo-item">
                  <div className="promo-bg">
                    <div className="icon"><Polygon /></div>
                    <div>
                      <p>Token Price</p>
                      <div className="h3">${Number(tokenPolygonPrice).toFixed(2)}</div>
                      <p className="desc">Price on Polygon</p>
                    </div>
                  </div>
                </div>

                <div className="promo-item">
                  <div className="promo-bg">
                    <div className="icon"><Pulses /></div>
                    <div>
                      <p>Token Price</p>
                      <div className="h3">${Number(tokenPlsPrice).toFixed(2)}</div>
                      <p className="desc">Price on PulseChain</p>
                    </div>
                  </div>
                </div>

                <div className="promo-item">
                  <div className="promo-bg">
                    <div className="icon"><Avalanche /></div>
                    <div>
                      <p>Token Price</p>
                      <div className="h3">${Number(tokenAvalanchePrice).toFixed(2)}</div>
                      <p className="desc">Price on Avalanche</p>
                    </div>
                  </div>
                </div>

                <div className="promo-item">
                  <div className="promo-bg">
                    <div className="icon"><Arbitrum /></div>
                    <div>
                      <p>Token Price</p>
                      <div className="h3">${Number(tokenArbitrumPrice).toFixed(2)}</div>
                      <p className="desc">Price on Arbitrum</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;