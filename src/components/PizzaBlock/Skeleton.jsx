import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaBlockSkeleton(props) {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={285}
      height={450}
      viewBox="0 0 285 450"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <circle cx="134" cy="115" r="109" />
      <rect x="-1" y="242" rx="0" ry="0" width="285" height="27" />
      <rect x="1" y="292" rx="10" ry="10" width="285" height="88" />
      <rect x="2" y="410" rx="0" ry="0" width="90" height="27" />
      <rect x="132" y="400" rx="15" ry="15" width="152" height="45" />
    </ContentLoader>
  );
}

export default PizzaBlockSkeleton;
