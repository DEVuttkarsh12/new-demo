export const Navbar = () => {
  const navItems = ["History", "Courses", "Reviews", "Contact"];

  return (
    <nav className="fixed top-0 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="text-[10px] font-medium transition-colors sm:text-xs md:text-sm"
            style={{ color: "rgba(225, 224, 204, 0.8)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)")}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};
