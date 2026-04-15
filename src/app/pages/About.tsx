import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Users,
  Shield,
  Target,
  Globe,
  Network,
  Award,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Building2,
  Handshake,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import logo from "../../assets/logo.png";
import asinLogo from "../../assets/partenaire/ASIN.png";
import mndLogo from "../../assets/partenaire/MND.png";
import gizLogo from "../../assets/partenaire/Giz.png";
import copalecLogo from "../../assets/partenaire/Ca.jpg";
import dsiLogo from "../../assets/partenaire/DSI-CLUB-BENIN.jpg";
import ctdLogo from "../../assets/partenaire/ctd.webp";
import adpmeLogo from "../../assets/partenaire/adpme.png";

const missionItems = [
  {
    icon: Network,
    title: "Mise en réseau",
    description:
      "Connecter les Directeurs des Systèmes d'Information (DSI) et les Entreprises de Services Numériques (ESN) du Bénin pour créer une synergie nationale.",
  },
  {
    icon: TrendingUp,
    title: "Montée en compétences",
    description:
      "Offrir un accès à des ressources spécialisées, des formations certifiantes et des modules dédiés à la dématérialisation du secteur public.",
  },
  {
    icon: Handshake,
    title: "Collaboration DSI – ESN",
    description:
      "Créer un espace de collaboration structuré entre les DSI des institutions publiques et les ESN privées autour des projets numériques.",
  },
  {
    icon: BookOpen,
    title: "Partage d'expériences",
    description:
      "Capitaliser sur les bonnes pratiques, retours d'expérience et solutions innovantes pour accélérer la transformation numérique.",
  },
];

const values = [
  {
    icon: Globe,
    title: "Ouverture",
    description: "Une communauté ouverte à tous les acteurs du numérique béninois, public comme privé.",
  },
  {
    icon: Shield,
    title: "Crédibilité",
    description: "Soutenue par la coopération allemande et les institutions nationales, la COP bénéficie des partenaires forts.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Promouvoir des standards élevés dans le développement et la livraison des services numériques publics.",
  },
];

const governanceSteps = [
  {
    num: "01",
    title: "Club DSI Bénin",
    description: "Gestionnaire opérationnel de la plateforme CoP depuis mars 2026 — Maison des DSI, St Michel C/510, Cotonou.",
  },
  {
    num: "02",
    title: "Ministère du Numérique et de la Digitalisation (MND)",
    description: "Partenaire institutionnel principal qui définit la vision du gouvernement pour le secteur du numérique",
  },
  {
    num: "03",
    title: "ASIN",
    description: "Partenaire national et technique apportant expertise et support aux initiatives numériques.",
  },
  {
    num: "04",
    title: "ADPME",
    description: "Partenaire national engagé dans l'accompagnement des entreprises numériques béninoises.",
  },
  {
    num: "05",
    title: "Communauté de membres",
    description: "DSI des ministères, ESN privées, professionnels IT du Bénin — acteurs décisionnels de la CoP.",
  },
];

const objectives = [
  "Standardiser les pratiques de développement des e-services publics",
  "Encourager la réutilisation de solutions numériques validées",
  "Promouvoir une culture de l'innovation et de la collaboration",
  "Renforcer les capacités locales par des formations certifiantes",
  "Faciliter la collaboration public-privé autour de la dématérialisation",
  "Faire du Bénin une référence régionale en qualité de services numériques",
];

const partners = {
  financeurs: [
    { logo: copalecLogo, alt: "Coopération Allemande (BMZ)", label: "BMZ" },
    { logo: gizLogo, alt: "GIZ", label: "GIZ" },
  ],
  institutionnels: [
    { logo: mndLogo, alt: "Ministère du Numérique et de la Digitalisation", label: "MND" },
    { logo: ctdLogo, alt: "CTD", label: "CTD" },
    { logo: asinLogo, alt: "ASIN", label: "ASIN" },
  ],
  reseau: [
    { logo: adpmeLogo, alt: "ADPME", label: "ADPME" },
    { logo: dsiLogo, alt: "Club DSI Bénin", label: "Club DSI" },
  ],
};

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero Section ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#054e38] text-white">
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-[#2fa77a]/20 pointer-events-none" />

        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Qui sommes-nous ?
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 text-center">
              Communauté de Pratiques pour la
              <span className="block text-[#2fa77a] text-center ">dématérialisation</span>
              <span className="block text-center">du secteur public au Bénin</span>
             
            </h1>
            <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-4xl text-center mx-auto">
              Rejoignez une communauté qui réunit les acteurs du numérique afin de favoriser les échanges, le partage
              d'expériences et de renforcer la collaboration public-privé autour de l'amélioration des services
              digitaux au Bénin.
            </p>
            <div className="flex flex-wrap gap-4 text-center justify-center">
              <a href="https://forms.office.com/r/82CcMqJf1r" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#2fa77a] hover:bg-[#2fa77a]/90 text-white font-semibold px-6 py-3 h-auto text-center flex items-center gap-2">
                  Rejoindre la communauté pour accéder aux ressources
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Banner ───────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { label: "Mois d'activité", value: "18+", note: "depuis fin 2024" },
              { label: "DSI partenaires", value: "10+", note: "ministères & institutions" },
              { label: "ESN membres", value: "50+", note: "entreprises du numérique" },
              { label: "Partenaires officiels", value: "7", note: "organisations nationales & int'l" },
            ].map((stat) => (
              <div key={stat.label} className="py-8 px-6 text-center">
                <div className="text-3xl font-bold text-[#054e38]">{stat.value}</div>
                <div className="text-sm font-medium text-gray-900 mt-1">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Le Club DSI ────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[#054e38] font-semibold text-sm uppercase tracking-wider mb-4">
              
                Notre organisation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Le Club DSI Bénin</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Le <strong>Club DSI Bénin</strong> est l'association regroupant les Directeurs des Systèmes d'Information
                et les professionnels de l'IT du Bénin. <strong>Depuis mars 2026</strong>, il assure la gestion
                opérationnelle de la plateforme CoP, garantissant sa soutenabilité locale et son ancrage institutionnel.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Initié dans le cadre du projet <strong>BenInnovation</strong> financé par le Ministère Fédéral Allemand de la Coopération Economique et du Développement (BMZ) et mis en œuvre par
                la <strong>GIZ</strong>, le Club DSI est le gardien de la mission de la CoP : dématérialiser les
                services publics, renforcer les capacités locales et créer une véritable filière numérique béninoise.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-gray-700">
                  <MapPin className="w-4 h-4 text-[#054e38] mt-0.5 flex-shrink-0" />
                  <span>Maison des DSI — St Michel C/510, Cotonou, Bénin</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Mail className="w-4 h-4 text-[#054e38] flex-shrink-0" />
                  <a href="mailto:contact@clubdsibenin.bj" className="hover:text-[#054e38] transition-colors">
                    contact@clubdsibenin.bj
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Phone className="w-4 h-4 text-[#054e38] flex-shrink-0" />
                  <span>+229 0191475555 | 0199200404</span>
                </div>
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="rounded-2xl bg-[#054e38] p-8 text-white shadow-2xl">
                <img src={logo} alt="CoP Logo" className="h-16 w-16 object-contain mb-6 rounded-xl bg-white/10 p-2" />
                <blockquote className="text-lg font-medium leading-relaxed mb-6">
                  "Faire du Bénin une référence régionale en matière de qualité des services numériques et
                  d'interopérabilité inter-administrative."
                </blockquote>
                <p className="text-white/60 text-sm">— Vision stratégique de la CoP Numérique Bénin</p>
                <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-[#2fa77a]">2024</p>
                    <p className="text-xs text-white/60">Année de lancement</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#2fa77a]">2026</p>
                    <p className="text-xs text-white/60">Transfert au Club DSI</p>
                  </div>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-[#2fa77a]/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Notre Mission ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#054e38] font-semibold text-sm uppercase tracking-wider mb-4">
              Ce que nous faisons
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Mission</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              La CoP est recentrée sur la dématérialisation du secteur public, la collaboration DSI–ESN et le
              renforcement des capacités locales béninoises.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-[#054e38]/10 flex items-center justify-center mb-4 group-hover:bg-[#054e38] transition-colors">
                      <Icon className="w-6 h-6 text-[#054e38] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gouvernance ────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-[#054e38] font-semibold text-sm uppercase tracking-wider mb-4">
              
                Structure & Gouvernance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Un modèle de gouvernance ancré au Bénin
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                La COP est le fruit d’un projet de coopération internationale financée par la coopération allemande et mise en œuvre en étroite collaboration avec le <strong>Ministère du Numérique et de la Digitalisation (MND)</strong>. Sa gestion opérationnelle a
                été confiée en mars 2026 au <strong>Club DSI Bénin</strong>, garantissant une appropriation locale
                durable.
              </p>
              <div className="space-y-4">
                {governanceSteps.map((step) => (
                  <div
                    key={step.num}
                    className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[#054e38]/20 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#054e38] text-white flex items-center justify-center text-xs font-bold">
                      {step.num}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{step.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Objectives */}
            <div className="flex flex-col h-full">
              <div className="inline-flex items-center gap-2 text-[#054e38] font-semibold text-sm uppercase tracking-wider mb-4">
               
                Objectifs Institutionnels
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ce que nous visons pour le Bénin
              </h2>
              <ul className="space-y-3">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2fa77a]/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#2fa77a]" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-36 p-5 rounded-xl bg-[#054e38]/5 border border-[#054e38]/10 flex items-start gap-4">
                <div className="flex-shrink-0 rounded-2xl bg-[#2fa77a]/10 p-3 text-[#054e38]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#054e38] mb-1">Alignement stratégique</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    La CoP est recentrée sur la <strong>dématérialisation du secteur public</strong> et la collaboration
                    <strong> DSI–ESN</strong>. Elle n'a pas vocation à devenir une plateforme numérique généraliste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nos Valeurs ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Les principes qui guident nos actions et notre communauté au quotidien.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#2fa77a]/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-[#054e38]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#054e38] text-white relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#2fa77a]/20 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez la communauté dès aujourd'hui
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Partage d'opportunités professionnelles, montée en compétences et mise en réseau des acteurs IT béninois —
            tout commence ici.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://forms.office.com/r/82CcMqJf1r" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#2fa77a] hover:bg-[#2fa77a]/90 text-white font-semibold px-8 py-3 h-auto text-base">
                Rejoindre la communauté
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="mailto:contact@clubdsibenin.bj">
              <Button
                variant="outline"
                className="border-white/40 text-[#054e38] hover:bg-[#054e38] hover:text-white font-semibold px-8 py-3 h-auto text-base"
              >
                <Mail className="w-4 h-4 mr-2" />
                Nous contacter
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
