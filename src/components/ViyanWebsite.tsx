"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { dictionary, locales, type Locale } from "@/data/i18n";
import { vehicles, type VehicleCategory } from "@/data/vehicles";

const whatsappUrl = "https://wa.me/905395603347";
const phone = "0539 560 3347";
const email = "info@viyan.com";

export function ViyanWebsite() {
  const [locale, setLocale] = useState<Locale>("tr");
  const [category, setCategory] = useState<"all" | VehicleCategory>("all");
  const [brand, setBrand] = useState("all");
  const [year, setYear] = useState("all");
  const [market, setMarket] = useState("all");

  const language = locales.find((item) => item.code === locale) ?? locales[0];
  const t = dictionary[locale];

  const brands = Array.from(new Set(vehicles.map((vehicle) => vehicle.brand))).sort();
  const years = Array.from(new Set(vehicles.map((vehicle) => String(vehicle.year)))).sort().reverse();
  const markets = Array.from(new Set(vehicles.map((vehicle) => vehicle.market))).sort();

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      return (
        (category === "all" || vehicle.category === category) &&
        (brand === "all" || vehicle.brand === brand) &&
        (year === "all" || String(vehicle.year) === year) &&
        (market === "all" || vehicle.market === market)
      );
    });
  }, [brand, category, market, year]);

  return (
    <main dir={language.dir} className={`site-shell ${language.dir === "rtl" ? "rtl" : ""}`}>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="VİYAN">
          <span className="brand-mark">
            <Image src="/logo.png" alt="VİYAN logo" width={172} height={48} priority />
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {(t.nav as string[]).map((item, index) => (
            <a key={item} href={["#about", "#showroom", "#services", "#transit", "#blog", "#contact"][index]}>
              {item}
            </a>
          ))}
        </nav>
        <div className="language-switcher" aria-label="Language selector">
          {locales.map((item) => (
            <button
              key={item.code}
              className={item.code === locale ? "active" : ""}
              onClick={() => setLocale(item.code)}
              type="button"
              aria-label={item.label}
            >
              {item.short}
            </button>
          ))}
        </div>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-content reveal">
          <div className="eyebrow">VİYAN GLOBAL TRADE & LOGISTICS</div>
          <h1>{t.heroTitle as string}</h1>
          <p>{t.heroText as string}</p>
          <div className="hero-actions">
            <a className="button primary" href="#showroom">
              {t.inspect as string}
            </a>
            <a className="button ghost" href="#contact">
              {t.contact as string}
            </a>
          </div>
          <div className="hero-stats">
            {(t.stats as string[]).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="hero-visual" aria-label="VİYAN showroom">
          <Image src="/vehicles/vehicle-1.jpg" alt="Premium truck showroom" width={920} height={720} priority />
          <div className="hero-logo-watermark">VİYAN</div>
        </div>
      </section>

      <section id="about" className="section split-section">
        <div>
          <span className="section-kicker">20 YEARS</span>
          <h2>{t.aboutTitle as string}</h2>
        </div>
        <div className="text-stack">
          <p>{t.aboutText as string}</p>
          <div className="mini-grid">
            {(t.aboutCards as string[]).map((item) => (
              <div className="mini-card" key={item}>
                <span />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="showroom" className="section showroom-section">
        <div className="section-heading">
          <span className="section-kicker">SHOWROOM</span>
          <h2>{t.showroomTitle as string}</h2>
          <p>{t.showroomText as string}</p>
        </div>
        <div className="filters" aria-label="Vehicle filters">
          <div className="segmented">
            <button type="button" className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>
              {t.all as string}
            </button>
            <button type="button" className={category === "truck" ? "active" : ""} onClick={() => setCategory("truck")}>
              {t.trucks as string}
            </button>
            <button type="button" className={category === "luxury" ? "active" : ""} onClick={() => setCategory("luxury")}>
              {t.luxury as string}
            </button>
          </div>
          <FilterSelect label={t.brand as string} value={brand} onChange={setBrand} options={brands} allLabel={t.all as string} />
          <FilterSelect label={t.year as string} value={year} onChange={setYear} options={years} allLabel={t.all as string} />
          <FilterSelect label={t.market as string} value={market} onChange={setMarket} options={markets} allLabel={t.all as string} />
        </div>
        <div className="vehicle-grid">
          {filteredVehicles.map((vehicle) => (
            <article className="vehicle-card" key={vehicle.id}>
              <div className="vehicle-image">
                <Image src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} width={680} height={460} loading="lazy" />
                <span>{vehicle.category === "truck" ? (t.trucks as string) : (t.luxury as string)}</span>
              </div>
              <div className="vehicle-body">
                <div>
                  <h3>
                    {vehicle.brand} {vehicle.model}
                  </h3>
                  <p>{vehicle.description}</p>
                </div>
                <dl>
                  <div>
                    <dt>{t.year as string}</dt>
                    <dd>{vehicle.year}</dd>
                  </div>
                  <div>
                    <dt>KM</dt>
                    <dd>{vehicle.mileage}</dd>
                  </div>
                  <div>
                    <dt>Yakıt</dt>
                    <dd>{vehicle.fuel}</dd>
                  </div>
                  <div>
                    <dt>Vites</dt>
                    <dd>{vehicle.transmission}</dd>
                  </div>
                  <div>
                    <dt>{t.market as string}</dt>
                    <dd>{vehicle.market}</dd>
                  </div>
                  <div>
                    <dt>{t.price as string}</dt>
                    <dd>{vehicle.price}</dd>
                  </div>
                </dl>
                <div className="card-actions">
                  <a href="#contact" className="button compact dark">
                    {t.details as string}
                  </a>
                  <a href={`${whatsappUrl}?text=${encodeURIComponent(`${vehicle.brand} ${vehicle.model} hakkında bilgi almak istiyorum.`)}`} className="button compact cyan">
                    {t.askWhatsApp as string}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading">
          <span className="section-kicker">SERVICES</span>
          <h2>{t.servicesTitle as string}</h2>
        </div>
        <div className="service-grid">
          {(t.services as string[]).map((service, index) => (
            <article className="service-item" key={service}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="transit" className="section transit-section">
        <div className="transit-copy">
          <span className="section-kicker">IRAN · IRAQ</span>
          <h2>{t.transitTitle as string}</h2>
          <p>{t.transitText as string}</p>
        </div>
        <div className="route-map" aria-label="Regional route visual">
          <span className="city mersin">Mersin</span>
          <span className="city iran">Iran</span>
          <span className="city iraq">Iraq</span>
          <span className="route-line line-one" />
          <span className="route-line line-two" />
          <span className="pulse dot-one" />
          <span className="pulse dot-two" />
        </div>
      </section>

      <section className="section why-section">
        <div className="section-heading">
          <span className="section-kicker">ADVANTAGE</span>
          <h2>{t.whyTitle as string}</h2>
        </div>
        <div className="why-list">
          {(t.why as string[]).map((item) => (
            <div key={item}>
              <span />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="blog" className="section blog-section">
        <div className="section-heading">
          <span className="section-kicker">INSIGHTS</span>
          <h2>{t.blogTitle as string}</h2>
        </div>
        <div className="blog-grid">
          {(t.blog as string[][]).map(([title, text]) => (
            <article className="blog-card" key={title}>
              <span>VİYAN</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-info">
          <span className="section-kicker">CONTACT</span>
          <h2>{t.contactTitle as string}</h2>
          <a href={`tel:+90${phone.replace(/\D/g, "").slice(1)}`}>{phone}</a>
          <a href={whatsappUrl}>WhatsApp: {phone}</a>
          <a href={`mailto:${email}`}>{email}</a>
          <p>{t.address as string}</p>
          <iframe
            title="VİYAN location map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Y%C3%BCzba%C5%9F%C4%B1o%C4%9Flu%20Apt%2C%20Merkez%2C%2052003.%20Sk.%20No%3A1%20Kat%3A4%20No%3A8%2C%2033000%20Mezitli%2FMersin&output=embed"
          />
        </div>
        <form className="contact-form">
          {(t.form as string[]).slice(0, 5).map((placeholder, index) =>
            index === 4 ? (
              <textarea key={placeholder} placeholder={placeholder} rows={5} />
            ) : (
              <input key={placeholder} placeholder={placeholder} type={index === 2 ? "email" : "text"} />
            )
          )}
          <button className="button primary" type="submit">
            {(t.form as string[])[5]}
          </button>
        </form>
      </section>

      <footer className="site-footer">
        <Image src="/logo.png" alt="VİYAN" width={132} height={38} loading="lazy" />
        <span>© 2026 VİYAN. Premium trade and logistics solutions.</span>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} aria-label="WhatsApp">
        WhatsApp
      </a>
    </main>
  );
}

function FilterSelect({
  label,
  value,
  options,
  allLabel,
  onChange
}: {
  label: string;
  value: string;
  options: string[];
  allLabel: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="filter-select">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="all">{allLabel}</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
