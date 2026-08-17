import type { Metadata } from "next";
import { DesignInForm } from "@/components/DesignInForm";
import { COMPANY } from "@/content/specs";

export const metadata: Metadata = {
  title: "Design-in",
  description: "Start a FairView Gallium or Stallion design-in.",
};

export default function DesignInPage() {
  return (
    <header className="wrap page-hero stack-lg">
      <div>
        <p className="kicker">Design-in</p>
        <h1>Talk to the people who own the lock table.</h1>
        <p className="lede">
          OEM attach, controller IP, or a Stallion package. We will not quote a pin-rate that is not packed.
          Email{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or use the form.
        </p>
      </div>
      <DesignInForm />
    </header>
  );
}
