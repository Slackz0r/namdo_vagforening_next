// Components
import PageShell from "@/components/layout/page-shell";
import Form from "next/form";

// Page
export default function ContactPage() {
  return (
    <>
      <PageShell title="Kontakta oss" showHero={true}>
        <section className="content contact-section">
          <Form action="#">
            {/* First name */}
            <div className="input-container">
              <label htmlFor="user-first-name">
                Namn: <span className="required-cross">*</span>
              </label>
              <input
                type="text"
                id="user-first-name"
                autoComplete="given-name"
                placeholder="John"
                required
              />
            </div>

            {/* Last name */}
            <div className="input-container">
              <label htmlFor="user-last-name">
                Efternamn: <span className="required-cross">*</span>
              </label>
              <input
                type="text"
                id="user-last-name"
                autoComplete="family-name"
                placeholder="Doe"
                required
              />
            </div>

            {/* Property id */}
            <div className="input-container">
              <label htmlFor="property-id">
                Fastighetsnummer: <span className="required-cross">*</span>
              </label>
              <input type="text" id="property-id" placeholder="2354:2322-42" required />
            </div>

            {/* Email */}
            <div className="input-container">
              <label htmlFor="user-email">
                Email: <span className="required-cross">*</span>
              </label>
              <input
                type="email"
                id="user-email"
                autoComplete="email"
                placeholder="exempel@email.se"
                required
              />
            </div>

            {/* Message */}
            <div className="input-container">
              <label htmlFor="contact-message">
                Meddelande <span className="required-cross">*</span>
              </label>
              <textarea
                name="contact-message"
                id="contact-message"
                cols={40}
                rows={10}
                placeholder="Skriv ditt meddelande här..."
              ></textarea>
            </div>

            <button type="submit" id="submit-form-btn" className="btn">
              Skicka
            </button>
          </Form>
        </section>
      </PageShell>
    </>
  );
}
