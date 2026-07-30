import { onLinkClick } from '../router';

export default function NotFound() {
  return (
    <div className="page not-found">
      <h1 className="not-found__title">sorry, this page is unavailable</h1>
      <a className="not-found__link" href="/" onClick={onLinkClick}>
        back to work space
      </a>
    </div>
  );
}
