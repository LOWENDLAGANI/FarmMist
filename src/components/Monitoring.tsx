import { ArrowUpRight } from 'lucide-react';

export default function Monitoring() {
  return (
    <section className="monitoring-section" id="monitoring">
      <div className="section-heading">
        <div>
          <div className="eyebrow muted">
            <span className="pulse-dot" /> FarmAssist command center
          </div>
          <h2>Know your fields<br /><em>at a glance.</em></h2>
        </div>
        <p>Every reading. Every row. One calm, clear view of what your crops need next.</p>
      </div>

      <div className="dashboard-shell live-embed">
        <a
          className="embed-link"
          href="https://minetallest-farm-assist.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open live dashboard <ArrowUpRight size={16} />
        </a>
        <iframe
          src="https://minetallest-farm-assist.vercel.app"
          title="FarmAssist Live Dashboard"
          className="live-iframe"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </section>
  );
}
