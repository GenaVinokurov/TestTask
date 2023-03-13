import React from 'react';

interface HighlightProps {
  text: string;
  search: string;
}

const Highlight = ({ text, search }: HighlightProps) => {
  if (!search) {
    return <>{text}</>;
  }
  const regex = new RegExp(search, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && (
            <span style={{ backgroundColor: '#73ff59' }}>{text.match(regex)?.[i]}</span>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default Highlight;
