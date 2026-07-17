import { navLinks } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 shadow-sm">
      <nav>
        <div className="max-w-7xl mx-auto flex justify-between h-16 items-center px-6">
          <div className="text-xl font-bold">
            <a href="#hero" className="text-xl font-bold tracking-tight">
              Amulya Prasanth Nadagani
            </a>
          </div>

          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="text-gray-700 hover:text-black transition-colors">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
