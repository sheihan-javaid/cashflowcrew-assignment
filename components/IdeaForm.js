"use client";

import { useState } from "react";

export default function IdeaForm({ refresh }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/ideas", {
      method: "POST",
      body: JSON.stringify({ title, description, author }),
    });

    setTitle("");
    setDescription("");
    setAuthor("");
    setLoading(false);
    refresh();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .if-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-family: 'DM Sans', sans-serif;
        }

        .if-input,
        .if-textarea {
          width: 100%;
          border: 1.5px solid rgba(15,14,23,0.09);
          border-radius: 12px;
          padding: 12px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #0f0e17;
          background: #fafaf8;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          box-sizing: border-box;
        }

        .if-input::placeholder,
        .if-textarea::placeholder {
          color: #b0b0c0;
        }

        .if-input:focus,
        .if-textarea:focus {
          border-color: #7c3aed;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(124,58,237,0.08);
        }

        .if-textarea {
          min-height: 90px;
          resize: vertical;
          line-height: 1.6;
        }

        .if-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .if-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #0f0e17;
          letter-spacing: 0.01em;
        }

        .if-submit {
          width: 100%;
          background: linear-gradient(135deg, #7c3aed, #6d28d9);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 13px 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(124,58,237,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 4px;
        }

        .if-submit:hover:not(:disabled) {
          opacity: 0.92;
          box-shadow: 0 6px 20px rgba(124,58,237,0.38);
          transform: translateY(-1px);
        }

        .if-submit:active:not(:disabled) {
          transform: translateY(0px) scale(0.98);
        }

        .if-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .if-spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: if-spin 0.6s linear infinite;
        }

        @keyframes if-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <form onSubmit={submit} className="if-form">

        <div className="if-field">
          <label className="if-label">Idea Title</label>
          <input
            className="if-input"
            placeholder="e.g. AI Startup Finder"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="if-field">
          <label className="if-label">Description</label>
          <textarea
            className="if-textarea"
            placeholder="What's the idea about?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="if-field">
          <label className="if-label">Author</label>
          <input
            className="if-input"
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <button className="if-submit" type="submit" disabled={loading}>
          {loading ? (
            <>
              <span className="if-spinner" />
              Submitting...
            </>
          ) : (
            <>🚀 Submit Idea</>
          )}
        </button>

      </form>
    </>
  );
}