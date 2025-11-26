export const siteConfig = {
  name: "Research Laboratory",
  url: "",
  ogImage: "",
  description:
    "This is a framework for a research laboratory for universities.",
  navItems: [
    {
      label: "Research",
      items: [
        { href: "/research", label: "Research Areas" },
        { href: "/research/research-tools", label: "Research Tools" },
      ],
    },
    {
      label: "Team",
      items: [
        { href: "/team/director", label: "Director" },
        { href: "/team/people", label: "People" },
      ],
    },
    {
      href: "/publications",
      label: "Publications",
    },
  ],
  footerItems: [
    { href: "/research", label: "Research Areas" },
    { href: "/research/research-tools", label: "Research Tools" },
    { href: "/publications", label: "Publications" },
    { href: "/team/director", label: "Director" },
    { href: "/team/people", label: "People" },
    { href: "/wiki", label: "Wiki" },
    { href: "/contact", label: "Contact" },
  ],
  links: {
    website:
      "https://www.calicode.dev/?utm_source=bam_lab&utm_medium=web&utm_campaign=footer_cta",
  },
};
