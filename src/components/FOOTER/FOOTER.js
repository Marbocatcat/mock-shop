import React from 'react';
import './FOOTER.css';


const footerData = {
  first: ["Products", "Services", "Press", "Newsletter"],
  second: ["News", "LookBook", "Sustainablilty","About","Team"],
  third: ["Shipping", "Terms & Conditions", "Privacy", "Imprint"]
};

function FOOTER (props) {
  return (
    <footer className="footer">
      <ul className="footerList">
        <Demands>
          <h1>pinqponq</h1>
        </Demands>
        <Demands>
          {footerData.first.map((list, key) =>
            <li key={key}>{ list }</li>
          )}
        </Demands>

        <Demands>
          {footerData.second.map((list, key) =>
            <li key={key}>{ list }</li>
          )}
        </Demands>

        <Demands>
          {footerData.third.map((list,key) =>
            <li key={key}>{ list }</li>
          )}
        </Demands>
      </ul>
    </footer>
  )
};

const Demands = (props) => {
  return (
      <li>
        <div>
          <ul className="listList">
            <a href="">
              { props.children }
            </a>
          </ul>
        </div>
      </li>
  )
};

export default FOOTER;
