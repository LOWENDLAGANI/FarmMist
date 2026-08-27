import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <a className="brand" href="#top">
        <span className="brand-mark"><Leaf size={18} strokeWidth={2.5} /></span>
        <span>farm<span>assist</span></span>
      </a>
      <span>Intelligence for a better result.</span>
      <span>© 2026 Minetallest</span>
    </footer>
  );
}
