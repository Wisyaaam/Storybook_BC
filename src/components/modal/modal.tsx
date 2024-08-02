import React, { useState } from 'react';
import ReactDOM  from 'react-dom';

export interface ModalProps {
  title: string;
  description: string;
  closeable: boolean;
  position: 'left' | 'center';
  positiveLabel: string;
  negativeLabel: string;
  onClose: () => void;
  onSubmit: (inputValue: string) => void;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  closeable,
  position,
  positiveLabel,
  negativeLabel,
  onClose,
  onSubmit,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    onSubmit(inputValue);
    if (closeable) onClose();
  };

  return ReactDOM.createPortal(
    <div className={`fixed inset-0 flex items-center ${position === 'left' ? 'justify-start' : 'justify-center'} bg-black bg-opacity-60`}>
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{description}</p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Something at here"
        />
        <div className="flex justify-end space-x-3">
          {closeable && (
            <button
              onClick={onClose}
              className="px-5 py-2 bg-gray-500 text-white rounded-lg shadow-sm hover:bg-gray-600 transition duration-150"
            >
              {negativeLabel}
            </button>
          )}
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 transition duration-150"
          >
            {positiveLabel}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
