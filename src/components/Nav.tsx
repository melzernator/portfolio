type NavProps = {
  variant?: 'light' | 'dark';
  activePath?: string;
};

const links = [
  { label: 'M', href: '#/', path: '/', className: 'nav-logo' },
  { label: 'creations', href: '#/creations', path: '/creations', className: '' },
  { label: 'skills', href: '#/skills', path: '/skills', className: '' },
  { label: 'about', href: '#/about', path: '/about', className: '' },
];

function isActive(linkPath: string, activePath: string) {
  if (linkPath === '/') {
    return activePath === '/' || activePath === '';
  }
  return activePath === linkPath;
}

export default function Nav({ variant = 'light', activePath = '/' }: NavProps) {
  return (
    <nav className={`pill-nav pill-nav--${variant}`}>
      {links.map((link) => {
        const active = isActive(link.path, activePath);
        return (
          <a
            key={link.label}
            href={link.href}
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
