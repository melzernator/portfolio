import { onLinkClick } from '../router';

export default function BackButton() {
  return (
    <a className="back-button" href="/creations" onClick={onLinkClick}>
      ← back
    </a>
  );
}
