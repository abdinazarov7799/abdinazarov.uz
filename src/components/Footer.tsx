export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-6 text-sm text-[var(--muted)] flex items-center justify-between">
        <span>© {new Date().getFullYear()} Diyorbek Abdinazarov</span>
        <a href="#" className="hover:text-foreground">Yuqoriga</a>
      </div>
    </footer>
  );
}


