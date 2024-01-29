import React from 'react';

interface UrlInputProps {
  url: string;
  isValid: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UrlInput: React.FC<UrlInputProps> = ({ url, isValid, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={onChange}
        className={`border p-2 rounded w-full ${!isValid && 'border-red-500'}`}
        placeholder="Enter TikTok URL"
      />
      {!isValid && <p className="text-red-500">Invalid TikTok URL</p>}
    </div>
  );
};

export default UrlInput;
