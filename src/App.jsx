import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Empório da Afiação",
    title: "Afiação Profissional com Acabamento Premium",
    subtitle: "Alicates, tesouras, espátulas, facas, troca de molas e acessórios para manicure em São Paulo.",
  },
  {
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Precisão e confiança",
    title: "Instrumentos prontos para render mais no dia a dia",
    subtitle: "Atendimento ágil, visual profissional e contato direto pelo WhatsApp.",
  },
  {
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Para manicures e salões",
    title: "Serviço técnico com apresentação de marca forte",
    subtitle: "Seu cliente enxerga mais valor quando sua empresa parece premium em cada detalhe.",
  },
];

const services = [
  { title: "Afiação de Alicates", text: "Restauração do fio com corte preciso e acabamento profissional.", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80" },
  { title: "Afiação de Tesouras", text: "Ajuste fino para desempenho consistente no uso diário.", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80" },
  { title: "Afiação de Espátulas", text: "Manutenção cuidadosa para instrumentos de estética.", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80" },
  { title: "Afiação de Facas", text: "Maior eficiência e melhor corte para uso profissional.", image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=900&q=80" },
  { title: "Troca de Molas", text: "Reposição e ajuste para alicates mais confortáveis e seguros.", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80" },
  { title: "Acessórios para Manicure", text: "Itens selecionados para profissionais da beleza.", image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=900&q=80" },
];

const products = [
  { title: "Alicates Profissionais", text: "Modelos para uso técnico e alto rendimento.", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80" },
  { title: "Kits de Manicure", text: "Composição visual bonita e pronta para venda.", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80" },
  { title: "Espátulas e Itens de Apoio", text: "Complementos para rotina profissional.", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80" },
];

const reviews = [
  { text: "Serviço excelente. Meu alicate voltou com corte perfeito.", author: "Juliana S." },
  { text: "Atendimento rápido e acabamento muito acima da média.", author: "Carlos M." },
  { text: "Visual profissional e trabalho de confiança. Recomendo.", author: "Fernanda P." },
];

export default function App() {
  const [slide, setSlide] = useState(0);
  const [search, setSearch] = useState("");
  const whatsapp = "https://wa.me/5511979626107?text=Olá,%20quero%20fazer%20uma%20afiação";

  useEffect(() => {
    const timer = setInterval(() => setSlide((prev) => (prev + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredServices = useMemo(
    () => services.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Empório da Afiação | Afiação Profissional em São Paulo</title>
        <meta name="description" content="Afiação de alicates, tesouras, espátulas e facas. Troca de molas e acessórios para manicure em São Paulo." />
        <meta name="keywords" content="afiação de alicate, afiação profissional, manicure, tesoura, espátula, faca, São Paulo" />
      </Helmet>

      <div className="site">
        <header className="header">
          <div className="container nav">
            <a href="#inicio" className="brand">
              <div className="brand-badge">EA</div>
              <div>
                <strong>Empório da Afiação</strong>
                <span>Afiação e acessórios premium</span>
              </div>
            </a>

            <nav className="nav-links">
              <a href="#inicio">Início</a>
              <a href="#servicos">Serviços</a>
              <a href="#produtos">Produtos</a>
              <a href="#avaliacoes">Avaliações</a>
              <a href="#contato">Contato</a>
            </nav>

            <div className="nav-actions">
              <label className="search">
                <input
                  type="text"
                  placeholder="Buscar serviço"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
              <a className="btn btn-gold desktop-cta" href={whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="hero" id="inicio">
            <img className="hero-bg" src={heroSlides[slide].image} alt="Banner Empório da Afiação" />
            <div className="hero-overlay" />
            <div className="hero-glow" />
            <div className="container hero-content">
              <span className="eyebrow reveal">{heroSlides[slide].eyebrow}</span>
              <h1 className="reveal reveal-delay-1">{heroSlides[slide].title}</h1>
              <p className="reveal reveal-delay-2">{heroSlides[slide].subtitle}</p>
              <div className="hero-buttons reveal reveal-delay-3">
                <a className="btn btn-gold" href={whatsapp} target="_blank" rel="noreferrer">Solicitar atendimento</a>
                <a className="btn btn-ghost" href="#servicos">Ver serviços</a>
              </div>
              <div className="hero-dots">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    className={index === slide ? "dot active" : "dot"}
                    onClick={() => setSlide(index)}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="quick-bar">
            <div className="container quick-grid">
              <div><strong>Afiação</strong><span>Alicates, tesouras, espátulas e facas</span></div>
              <div><strong>Troca de molas</strong><span>Ajuste e reposição</span></div>
              <div><strong>Acessórios</strong><span>Itens para manicure</span></div>
              <div><strong>Contato rápido</strong><span>WhatsApp direto</span></div>
            </div>
          </section>

          <section className="section container" id="servicos">
            <div className="section-head">
              <span className="kicker">Serviços</span>
              <h2>Detalhes melhores, visual mais profissional</h2>
              <p>Reduzi o exagero do layout e deixei o site com mais acabamento, hierarquia e profundidade visual.</p>
            </div>

            <div className="services-grid">
              {filteredServices.map((item) => (
                <article className="service-card" key={item.title}>
                  <div className="image-wrap">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <a href={whatsapp} target="_blank" rel="noreferrer">Solicitar pelo WhatsApp</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section section-alt" id="produtos">
            <div className="container">
              <div className="section-head centered">
                <span className="kicker">Produtos</span>
                <h2>Acessórios para manicure</h2>
                <p>Blocos visuais mais refinados, com tamanhos equilibrados e botões menos agressivos.</p>
              </div>

              <div className="products-grid">
                {products.map((item) => (
                  <article className="product-card" key={item.title}>
                    <img src={item.image} alt={item.title} />
                    <div className="product-overlay" />
                    <div className="product-content">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <a className="btn btn-gold small" href={whatsapp} target="_blank" rel="noreferrer">
                        Ver produto
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section container" id="avaliacoes">
            <div className="reviews-wrap">
              <div className="reviews-summary">
                <span className="kicker">Avaliações</span>
                <h2>Confiança que aparece no visual</h2>
                <div className="score">
                  <strong>4.4</strong>
                  <span>★★★★★</span>
                  <small>Google</small>
                </div>
              </div>

              <div className="reviews-list">
                {reviews.map((item) => (
                  <article className="review-card" key={item.author}>
                    <span className="quote-mark">“</span>
                    <p>{item.text}</p>
                    <strong>{item.author}</strong>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section contact-section" id="contato">
            <div className="container contact-panel">
              <div>
                <span className="kicker">Contato</span>
                <h2>Fale com a Empório da Afiação</h2>
                <p>WhatsApp: (11) 9 7962-6107<br />São Paulo - SP</p>
              </div>
              <a className="btn btn-gold" href={whatsapp} target="_blank" rel="noreferrer">
                Chamar no WhatsApp
              </a>
            </div>
          </section>
        </main>

        <a className="floating-wa" href={whatsapp} target="_blank" rel="noreferrer">
          WhatsApp
        </a>

        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <h3>Empório da Afiação</h3>
              <p>Afiação profissional, troca de molas e acessórios para manicure.</p>
            </div>
            <div>
              <h4>Navegação</h4>
              <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#produtos">Produtos</a></li>
                <li><a href="#avaliacoes">Avaliações</a></li>
              </ul>
            </div>
            <div>
              <h4>Contato</h4>
              <ul>
                <li>(11) 9 7962-6107</li>
                <li>São Paulo - SP</li>
                <li>Seg a Sex: 9h às 18h</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
