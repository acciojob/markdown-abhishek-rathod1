import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/App.css'

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState(`# Hello World!\n\n**Bold text**, *italic*, and \`code\``);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated loading (optional)
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      {loading ? (
        <p className="loading">Loading editor...</p>
      ) : (
        <div className="editor-container">
          <textarea
            className="textarea"
            value={markdown}
            onChange={handleChange}
            placeholder="Enter markdown here..."
          />
          <div className="preview">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      )}
    </>
  );
};

export default MarkdownEditor;
