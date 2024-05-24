import React, { useState, useEffect, useRef } from 'react';

const MyForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if input fields are filled
    if (!input1 || !input2) {
      setError('Please fill all the details.');
      return;
    }

    // Reset error message
    setError('');

    // Determine which page to navigate to based on the selected radio button
    switch (selectedOption) {
      case 'page1':
        navigateTo('/page1');
        break;
      case 'page2':
        navigateTo('/page2');
        break;
      case 'page3':
        navigateTo('/page3');
        break;
      default:
        // Handle default case or show an error message
        break;
    }
  };

  const navigateTo = (path) => {
    // Use the formRef to access the form element
    formRef.current.submit();
    // Programmatically navigate to the specified path
    window.location.href = path;
  };

  return (
    <div className="page">
      <form onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label>
            <input
              type="radio"
              value="page1"
              checked={selectedOption === 'page1'}
              onChange={() => setSelectedOption('page1')}
            />
            Page 1
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="page2"
              checked={selectedOption === 'page2'}
              onChange={() => setSelectedOption('page2')}
            />
            Page 2
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="page3"
              checked={selectedOption === 'page3'}
              onChange={() => setSelectedOption('page3')}
            />
            Page 3
          </label>
        </div>
        <div>
          <label>
            Input 1:
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Input 2:
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
          </label>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {/* Use a visible submit button to trigger form submission */}
        <button type="submit">Submit</button>
      </form>
    </div>

  );
};

export default MyForm;