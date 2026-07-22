import { onLinkClick } from '../router';

type NavProps = {
  variant?: 'light' | 'dark';
  activePath?: string;
};

const links = [
  { label: 'M', href: '/', className: 'nav-logo' },
  { label: 'creations', href: '/creations', className: '' },
  { label: 'skills', href: '/skills', className: '' },
  { label: 'about', href: '/about', className: '' },
];

function isActive(href: string, activePath: string) {
  if (href === '/') {
    return activePath === '/' || activePath === '';
  }
  return activePath === href;
}

export default function Nav({ variant = 'light', activePath = '/' }: NavProps) {
  return (
    <nav className={`pill-nav pill-nav--${variant}`}>
      {links.map((link) => {
        const active = isActive(link.href, activePath);
        return (
          <a
            key={link.label}
            href={link.href}
            onClick={onLinkClick}
            className={[link.className, active ? 'is-active' : ''].filter(Boolean).join(' ')}
            aria-current={active ? 'page' : undefined}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
