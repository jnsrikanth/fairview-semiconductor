import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/content/specs";

export const metadata: Metadata = {
  title: "Company",
  description: "FairView Semiconductor designs the Gallium HBM4 chipset and the Stallion GPU series.",
};

export default function CompanyPage() {
  return (
    <>
      <header className="wrap page-hero">
        <p className="kicker">Company</p>
        <h1>A semiconductor house that will not invent a number.</h1>
        <p className="lede">
          {COMPANY.name} ships a package of dies plus a software contract. Gallium is the memory chipset.
          Stallion is the GPU. We are not a DRAM IDM on day one, and we do not pretend otherwise.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap two-col">
          <div className="stack-lg">
            <div>
              <h2>What we make</h2>
              <p>
                Controller IP, attach wrappers, RAS policy, and an in-house GPU that is co-designed with that
                memory lock. Partner DRAM stacks fill the cubes. Host traffic arrives on PCIe 6 and CXL 3.1.
                Die-to-die control is UCIe. The data path is JEDEC HBM4 or SPHBM4.
              </p>
            </div>
            <div>
              <h2>How we decide</h2>
              <p>
                Public standard text is law we must not contradict. Vendor press is competitive context, labeled.
                A FairView lock is only a named SKU plus compiled arithmetic. If a timing is not packed, the
                table prints “not in pack.”
              </p>
            </div>
            <div>
              <h2>Who we sell to</h2>
              <p>
                AI data-center OEMs, custom ASIC teams that want Gallium without Stallion, and partners who need
                a controller that presents one credit plane across 270-4 and 330-4.
              </p>
            </div>
          </div>
          <aside className="stack">
            <figure className="media-frame" style={{ aspectRatio: "4 / 3" }}>
              <img src="/images/lab-package.webp" alt="Lab-bench editorial photograph of a compute die and memory cubes" />
            </figure>
            <p className="caption">Editorial package mood. Not a production pinout.</p>
            <article className="feature">
              <h3>Design-in</h3>
              <p>Tell us the attach, the cube count, and whether Stallion rides along.</p>
              <Link className="btn btn-primary" href="/design-in" style={{ marginTop: "0.6rem" }}>
                Contact engineering
              </Link>
            </article>
          </aside>
        </div>
      </section>
    </>
  );
}
