type NavProps = {
  variant?: 'light' | 'dark';
};

const links = [
  { label: 'M', href: '#/', className: 'nav-logo' },
  { label: 'creations', href: '#/creations', className: '' },
  { label: 'skills', href: '#/skills', className: '' },
  { label: 'about', href: '#/about', className: '' },
];

export default function Nav({ variant = 'light' }: NavProps) {
  return (
    <nav className={`pill-nav pill-nav--${variant}`}>
      {links.map((link) => (
        <a key={link.label} href={link.href} className={link.className}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
