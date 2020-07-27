import React from 'react';

const Header = (props: {titleList: string[]}) => {
  return (
    <div className="tr">
      {props.titleList.map(title => (
        <div key={title} className="td">
          {title}
        </div>
      ))}
    </div>
  );
};

export default Header;
