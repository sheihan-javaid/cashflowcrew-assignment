"use client";

export default function IdeaCard({ idea, refresh }) {

  const upvote = async () => {
    await fetch(`/api/ideas/${idea._id}/upvote`, { method: "POST" });
    refresh();
  };

  const remove = async () => {
    await fetch(`/api/ideas/${idea._id}`, { method: "DELETE" });
    refresh();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .idea-card {
          background: #ffffff;
          border: 1.5px solid rgba(15,14,23,0.08);
          border-radius: 18px;
          padding: 22px 24px;
          box-shadow: 0 2px 10px rgba(15,14,23,0.05);
          transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .idea-card:hover {
          box-shadow: 0 8px 28px rgba(15,14,23,0.10);
          transform: translateY(-2px);
          border-color: rgba(124,58,237,0.18);
        }
        .idea-card-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 16px;
          letter-spacing: -0.01em;
          color: #0f0e17;
          margin: 0 0 4px 0;
        }
        .idea-card-author {
          font-size: 12px;
          font-weight: 500;
          color: #7c3aed;
          margin: 0 0 10px 0;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .idea-card-author::before {
          content: '';
          display: inline-block;
          width: 5px;
          height: 5px;
          background: #f5a623;
          border-radius: 50%;
        }
        .idea-card-desc {
          font-size: 13.5px;
          color: #3a3a4c;
          line-height: 1.6;
          font-weight: 300;
          margin: 0 0 18px 0;
        }
        .idea-card-footer {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .btn-upvote {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ecfdf5;
          color: #065f46;
          border: 1.5px solid rgba(6,214,160,0.25);
          border-radius: 10px;
          padding: 7px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s, transform 0.1s;
        }
        .btn-upvote:hover {
          background: #d1fae5;
          border-color: rgba(6,214,160,0.45);
          transform: scale(1.03);
        }
        .btn-upvote:active { transform: scale(0.97); }
        .btn-delete {
          background: #fff;
          color: #e53e3e;
          border: 1.5px solid rgba(229,62,62,0.2);
          border-radius: 10px;
          padding: 7px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s;
        }
        .btn-delete:hover {
          background: #fff5f5;
          border-color: rgba(229,62,62,0.4);
        }
      `}</style>

      <div className="idea-card">
        <h3 className="idea-card-title">{idea.title}</h3>
        <p className="idea-card-author">by {idea.author}</p>
        <p className="idea-card-desc">{idea.description}</p>
        <div className="idea-card-footer">
          <button onClick={upvote} className="btn-upvote">
            👍 {idea.votes}
          </button>
          <button onClick={remove} className="btn-delete">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}