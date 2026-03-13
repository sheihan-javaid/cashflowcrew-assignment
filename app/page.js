"use client";

import { useEffect, useState } from "react";
import IdeaCard from "@/components/IdeaCard";
import IdeaForm from "@/components/IdeaForm";

export default function Home() {
  const [ideas, setIdeas] = useState([]);
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  const fetchIdeas = async () => {
    try {
      const res = await fetch("/api/ideas");
      const data = await res.json();
      if (Array.isArray(data)) setIdeas(data);
      else setIdeas([]);
    } catch (error) {
      console.error("Error fetching ideas:", error);
      setIdeas([]);
    }
  };

  useEffect(() => {
    fetchIdeas();
    setMounted(true);
  }, []);

  const filteredIdeas = ideas.filter(
    (idea) =>
      idea.title.toLowerCase().includes(search.toLowerCase()) ||
      idea.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        :root {
          --ink: #0f0e17;
          --ink-soft: #3a3a4c;
          --ink-muted: #6b6b80;
          --surface: #fafaf8;
          --surface-2: #f3f2ef;
          --amber: #f5a623;
          --amber-deep: #e8920f;
          --coral: #ff6b6b;
          --mint: #06d6a0;
          --violet: #7c3aed;
          --violet-light: #ede9fe;
          --border: rgba(15,14,23,0.08);
          --shadow-sm: 0 1px 3px rgba(15,14,23,0.06), 0 1px 2px rgba(15,14,23,0.04);
          --shadow-md: 0 4px 16px rgba(15,14,23,0.08), 0 2px 6px rgba(15,14,23,0.05);
          --shadow-lg: 0 12px 40px rgba(15,14,23,0.12), 0 4px 16px rgba(15,14,23,0.06);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'DM Sans', sans-serif;
          background-color: var(--surface);
          color: var(--ink);
        }

        .page-root {
          min-height: 100vh;
          background: var(--surface);
          position: relative;
          overflow-x: hidden;
        }

        /* Decorative background blobs */
        .page-root::before {
          content: '';
          position: fixed;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        .page-root::after {
          content: '';
          position: fixed;
          bottom: -150px;
          left: -150px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* HEADER */
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(250,250,248,0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }

        .header-inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 32px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--amber), var(--amber-deep));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 4px 12px rgba(245,166,35,0.35);
          flex-shrink: 0;
        }

        .logo-text {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 22px;
          color: var(--ink);
          letter-spacing: -0.02em;
        }

        .ideas-badge {
          font-size: 13px;
          font-weight: 500;
          color: var(--violet);
          background: var(--violet-light);
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid rgba(124,58,237,0.15);
        }

        /* MAIN CONTENT */
        .content {
          max-width: 960px;
          margin: 0 auto;
          padding: 48px 32px 80px;
          position: relative;
          z-index: 1;
        }

        /* HERO SECTION */
        .hero {
          text-align: center;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(16px);
          animation: fadeUp 0.6s ease forwards;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--amber-deep);
          background: rgba(245,166,35,0.1);
          border: 1px solid rgba(245,166,35,0.2);
          padding: 5px 12px;
          border-radius: 100px;
          margin-bottom: 16px;
        }

        .hero h1 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(32px, 5vw, 52px);
          letter-spacing: -0.03em;
          color: var(--ink);
          line-height: 1.1;
          margin-bottom: 14px;
        }

        .hero h1 .accent {
          background: linear-gradient(120deg, var(--violet), var(--coral));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero p {
          font-size: 16px;
          color: var(--ink-muted);
          font-weight: 300;
          max-width: 460px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* SEARCH */
        .search-wrap {
          margin-bottom: 40px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.1s forwards;
        }

        .search-inner {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--ink-muted);
          font-size: 16px;
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          border: 1.5px solid var(--border);
          border-radius: 16px;
          padding: 16px 20px 16px 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          background: #fff;
          color: var(--ink);
          box-shadow: var(--shadow-sm);
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
        }

        .search-input::placeholder { color: #b0b0c0; }

        .search-input:focus {
          border-color: var(--violet);
          box-shadow: 0 0 0 4px rgba(124,58,237,0.08), var(--shadow-sm);
        }

        /* TWO-COLUMN LAYOUT */
        .two-col {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 32px;
          align-items: start;
        }

        @media (max-width: 720px) {
          .two-col { grid-template-columns: 1fr; }
        }

        /* FORM CARD */
        .form-card {
          background: #fff;
          border: 1.5px solid var(--border);
          border-radius: 24px;
          padding: 32px;
          box-shadow: var(--shadow-md);
          position: sticky;
          top: 104px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.2s forwards;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }

        .section-label-dot {
          width: 8px;
          height: 8px;
          background: var(--amber);
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(245,166,35,0.2);
        }

        .section-label h2 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.01em;
          color: var(--ink);
        }

        /* IDEAS PANEL */
        .ideas-panel {
          opacity: 0;
          animation: fadeUp 0.6s ease 0.3s forwards;
        }

        .trending-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .trending-label {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .trending-label h2 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.01em;
          color: var(--ink);
        }

        .count-pill {
          font-size: 12px;
          font-weight: 600;
          color: var(--ink-muted);
          background: var(--surface-2);
          padding: 3px 10px;
          border-radius: 100px;
        }

        .ideas-grid {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .empty-state {
          background: #fff;
          border: 1.5px dashed var(--border);
          border-radius: 20px;
          padding: 48px 24px;
          text-align: center;
          color: var(--ink-muted);
        }

        .empty-icon {
          font-size: 36px;
          margin-bottom: 12px;
          display: block;
        }

        .empty-state p {
          font-size: 15px;
          font-weight: 400;
        }

        /* Override IdeaCard & IdeaForm via global class additions */
        /* These are applied via a wrapper div injected around each component */

        /* ANIMATIONS */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <main className="page-root">
        {/* HEADER */}
        <header className="header">
          <div className="header-inner">
            <div className="logo">
              <div className="logo-icon">💡</div>
              <span className="logo-text">IdeaSpark</span>
            </div>
            <span className="ideas-badge">✦ {ideas.length} ideas shared</span>
          </div>
        </header>

        <div className="content">
          {/* HERO */}
          <div className="hero">
            <div className="hero-tag">✦ Community Ideas Board</div>
            <h1>Where Great Ideas<br /><span className="accent">Come Alive</span></h1>
            <p>Share your boldest ideas, discover what others are building, and spark the next big thing.</p>
          </div>

          {/* SEARCH */}
          <div className="search-wrap">
            <div className="search-inner">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                className="search-input"
                placeholder="Search ideas or authors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* TWO-COLUMN */}
          <div className="two-col">
            {/* FORM */}
            <div className="form-card">
              <div className="section-label">
                <div className="section-label-dot" />
                <h2>Share Your Idea 🚀</h2>
              </div>
              <IdeaForm refresh={fetchIdeas} />
            </div>

            {/* IDEAS LIST */}
            <div className="ideas-panel">
              <div className="trending-header">
                <div className="trending-label">
                  <span>🔥</span>
                  <h2>Trending Ideas</h2>
                </div>
                <span className="count-pill">{filteredIdeas.length} results</span>
              </div>

              {filteredIdeas.length === 0 ? (
                <div className="empty-state">
                  <span className="empty-icon">🌱</span>
                  <p>No ideas yet — be the first to share one!</p>
                </div>
              ) : (
                <div className="ideas-grid">
                  {filteredIdeas.map((idea) => (
                    <IdeaCard key={idea._id} idea={idea} refresh={fetchIdeas} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}