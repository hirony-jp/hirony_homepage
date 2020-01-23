import React from 'react';

function App() {
  return (
    <div>
      {Kagawa}
      
      <h1>Welcome Hirony.jp</h1>

      <p>デザイナー募集</p>

      <ul>
        <li><a href="https://twitter.com/_hirony">Twitter</a></li>
        <li><a href="https://www.youtube.com/channel/UCMMp1g3u_vuGJh5qv2UdhKw">Youtube</a></li>
        <li><a href="https://marshmallow-qa.com/_hirony">マシュマロ</a></li>
      </ul>
    </div>
  );
}

function Kagawa() {
  var result = window.confirm('あなたは香川県在住ですか？');
  if( result ) {
    location.href="https://www.google.com/search?biw=1858&bih=977&sxsrf=ACYBGNSy8I4HLDUjq_-wT9G0MK63C8To-g%3A1579776433776&ei=sXkpXtf5LoXpmAXHuYXwBQ&q=%E9%A6%99%E5%B7%9D%E7%9C%8C%E3%82%B2%E3%83%BC%E3%83%A0%E7%A6%81%E6%AD%A2%E6%9D%A1%E4%BE%8B&oq=%E9%A6%99%E5%B7%9D%E7%9C%8C%E3%82%B2%E3%83%BC%E3%83%A0%E7%A6%81%E6%AD%A2%E6%9D%A1%E4%BE%8B&gs_l=psy-ab.3..0i324.15845.24268..24519...2.0..0.123.3987.2j35......0....1..gws-wiz.....10..35i39j35i362i39j0i131j0i131i4j0i4j0i67j0i131i67j0i131i10i67j0i10i67j0i131i4i37j0i4i37j0j0i4i3i37j0i3.snTg5tlr3ts&ved=0ahUKEwiXlqPpxZnnAhWFNKYKHcdcAV4Q4dUDCAs&uact=5";
  } 
}

export default App;
