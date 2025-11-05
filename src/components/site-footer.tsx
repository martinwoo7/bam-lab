import Link from "next/link";
import { siteConfig } from "@/lib/config";
const SiteFooter = () => {
  return (
    <footer className="group-has-[.section-soft]/body:bg-surface/40 flex flex-col px-4 xl:px-6 max-w-7xl mx-auto my-4">
      <div className="container-wrapper border-y border-border py-4 sm:flex sm:flex-row justify-between space-y-8">
        <div>
          <p className="text-sm font-semibold mb-2">Laboratory Name</p>
          <p className="font-serif text-xs text-muted-foreground">
            Mauris mi felis, porttitor eu auctor volutpat.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="space-y-2">
            <p className="text-primary text-sm font-medium">Quick Links</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 gap-x-2 font-serif text-muted-foreground">
              {siteConfig.navItems.map((item, i) => (
                <Link href={item.href} key={i} className="text-sm">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-primary text-sm font-medium">Contact</p>
            <div className="flex flex-col gap-1 font-serif text-muted-foreground text-sm">
              <p>Lorem Ipsum University</p>
              <p>123 Sesame Street</p>
              <p>City, Province</p>
              <p>Country</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-wrapper mt-2">
        <div className="flex flex-col h-(--footer-height) items-center ">
          <p className="text-muted-foreground text-center text-xs sm:text-sm leading-loose">
            © 2025 Lorem Ipsum Lab. All rights reserved.
          </p>
          <div className="text-muted-foreground w-full px-1 text-center text-xs leading-loose sm:text-sm">
            Built by{" "}
            <Link
              href={siteConfig.links.website}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Calicode
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
