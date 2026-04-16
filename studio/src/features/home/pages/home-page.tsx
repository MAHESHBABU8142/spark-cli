import Header from "../../../sections/header";

export default function HomePage() {
  return (
    <section className="flex h-screen flex-col items-center bg-gray-100">
      <Header
        title="Spark"
        logo="../../../../public/demo-logo.png"
        className="bg-white"
      >
        <Header.Menu
          itemClassName="lg:hover:text-blue-800 active:text-blue-800"
          navGroupClassName="lg:bg-white"
          navItems={[
            { title: "Home", href: "/" },
            { title: "Dashboard", href: "/dashboard" },
            {
              title: "Component Library",
              items: [
                { title: "Button", href: "/component-library/button" },
                { title: "Card", href: "/component-library/card" },
                { title: "Modal", href: "/component-library/modal" },
              ],
            },
            { title: "About", href: "/about" },
            { title: "Contact", href: "/contact" },
            {
              title: "Blog",
              items: [
                { title: "Blog 1", href: "/blog/1" },
                { title: "Blog 2", href: "/blog/2" },
                { title: "Blog 3", href: "/blog/3" },
              ],
            },
          ]}
        />
      </Header>
    </section>
  );
}
