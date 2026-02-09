import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-content">
          <section className="footer-navigation">
            <nav aria-label="Footer">
              <ul className="footer-navigation" role="list">
                <li>
                  <Link href="/about">Verksamhetsinformation</Link>
                </li>
                <li>
                  <Link href="/contact">Kontakta oss</Link>
                </li>
                <li>
                  <Link href="/links">Länkar</Link>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </footer>
    </>
  );
}
