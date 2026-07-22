import { onLinkClick } from '../router';

type NavProps = {
  variant?: 'light' | 'dark';
  activePath?: string;
};

const links = [
  { label: 'workspace', href: '/' },
  { label: 'skills', href: '/skills' },
  { label: 'about', href: '/about' },
];

function isActive(href: string, activePath: string) {
  if (href === '/') {
    return activePath === '/' || activePath === '' || activePath === '/workspace';
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
            className={active ? 'is-active' : undefined}
            aria-current={active ? 'page' : undefined}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
