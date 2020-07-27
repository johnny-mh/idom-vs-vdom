import React from 'react';

const Body = (props: {data: {[key: string]: any}[]; titleList: string[]}) => {
  const {data, titleList} = props;

  return (
    <>
      {data.map(datum => (
        <div key={datum.id} className="tr">
          {titleList.map(title => (
            <div key={title} className="td">
              {datum[title]}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Body;
