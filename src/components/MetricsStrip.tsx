import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function MetricsStrip() {
  return (
    <section className="metrics-strip" id="technology">
      <div className="strip-intro">
        <Sparkles size={18} />
        <span>One robot.<br />A clearer future.</span>
      </div>
      <div className="metric">
        <strong>35<span>%</span></strong>
        <small>less water used</small>
      </div>
      <div className="metric">
        <strong>2.4<span>×</span></strong>
        <small>faster crop scouting</small>
      </div>
      <div className="metric">
        <strong>24<span>/7</span></strong>
        <small>field intelligence</small>
      </div>
      <div className="strip-arrow">
        <ArrowUpRight size={23} />
      </div>
    </section>
  );
}
