import { onLinkClick } from '../router';

export default function BackButton() {
  return (
    <a className="back-button" href="/" onClick={onLinkClick}>
      ← back
    </a>
  );
}
