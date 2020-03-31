import React from 'react';
import NameCard from './NameCard.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div>
      <h1>Welcome Hirony.jp</h1>

      <p>デザイナー募集</p>

      <NameCard />

      <ul>
        <li><a href="https://twitter.com/_hirony">Twitter</a></li>
        <li><a href="https://www.youtube.com/channel/UCMMp1g3u_vuGJh5qv2UdhKw">Youtube</a></li>
        <li><a href="https://marshmallow-qa.com/_hirony">マシュマロ</a></li>
      </ul>
    </div>
  );
}

export default App;
