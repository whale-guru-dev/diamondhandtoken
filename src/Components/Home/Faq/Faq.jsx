import React from "react";
import "./Faq.scss";
import Accordion from "react-bootstrap/Accordion";
import { TbZoomQuestion } from "react-icons/tb";


const Faq = () => {
  return (
    <div className="faq-area" id="FAQs">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="faq-content text-center">
              <div className="h2">FAQs</div>
              <p>Frequently Asked Questions about DH</p>
            </div>
            <Accordion defaultActiveKey="" className="faq-accordion">
              {faqData.map((item) => (
                <Accordion.Item eventKey={item.id} key={item.id}>
                  <Accordion.Header>
                    <p className="fw-bold">
                        <TbZoomQuestion/>
                        {item.title}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

const faqData = [
  {
    id: 0,
    title: "What Makes The DT Token Unique ? ",
    desc: "Upon launch the DT token will immediately be available for trading on five different blockchains. The token is fairly launched with no ICO, presale, or any form of selling tokens to early investors. The dev team will not be responsible for a single token being sold on the open market, as we are well funded for the long term mission of the project's success. At its early phases the DT token is simply a ROI Dapp, but down the line it will transition to a complete utility token backed by DeFi applications that produce revenue through the service it provides to the Venom Blockchain.",
  },
  {
    id: 1,
    title: "What is the staking APR?",
    desc: "The staking APR is 265% and when a user does stake the initial stake amount is considered to be “vested” and the individual will earn 1% per day on the stake amount until they reach a total payout of 365% and out of the 365%, 265% could be considered the extra tokens users receive.",
  },
  {
    id: 2,
    title: "Where Can I Get More Information On This Project? ",
    desc: "The best place to receive more information on this project is by going through our DOC page. Click <a href='https://techadoptiongroup.gitbook.io/diamondhandtoken/about/diamondhand-token' target='_blank'>here</a> to read our docs",
  }
];
