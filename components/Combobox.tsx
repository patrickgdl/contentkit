import React from 'react';

const item: React.CSSProperties = {
  padding: 12,
  cursor: 'pointer',
  justifyContent: 'center',
  display: 'flex',
};

export const ComboboxContainer: React.FC = ({ children }) => {
  return (
    <div className="inline-flex flex-row items-center border border-gray-900">
      {children}
    </div>
  );
};

export const ComboboxItem: React.FC<{
  onClick: () => void;
  selected: boolean;
}> = ({ children, onClick, selected }) => {
  return (
    <div
      style={{
        ...item,
        backgroundColor: selected ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
