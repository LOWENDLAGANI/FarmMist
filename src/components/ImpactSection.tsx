import { ArrowUpRight, ShieldCheck, Sun } from 'lucide-react';

export default function ImpactSection() {
  return (
    <section className="impact-section" id="impact">
      <div className="impact-copy">
        <div className="eyebrow">
          <span className="pulse-dot" /> Built to make the farmer's life easier
        </div>
        <h2>Provided By<br /><em>Minetallest</em></h2>
        <p>
          FarmAssist helps farmer grow their crops more efficiently, so that farmer can make better decisions
        </p>
        <a href="#monitoring" className="primary-button">
          Take a look at the dashboard <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="impact-stat">
        <Sun size={27} />
        <strong>10,000<span></span>+</strong>
        <p><br />estimated farmers to be helped to make their farm more efficient</p>
        <div className="stat-line" />
      </div>
      <div className="impact-badge">
        <ShieldCheck size={18} /> <span>created by<br /><strong>Minetallest</strong></span>
      </div>
    </section>
  );
}
