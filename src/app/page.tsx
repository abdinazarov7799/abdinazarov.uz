"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ymGoal } from "@/lib/ym";
import { TechIcon } from "@/components/TechIcon";

export default function Home() {
  return (
    <div className="min-h-svh relative bg-grid bg-accent">
      <Header />

      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-widest text-[var(--muted)]">Hey, I’m</p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">Diyorbek Abdinazarov</h1>
            <p className="text-lg md:text-xl text-[var(--muted)]">
              21 y.o. Full-Stack JavaScript Developer — React | React Native | NestJS | DevOps Curious. Based in Tashkent, at <b>Xalq Bank</b>, building Barterly.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="https://mediasolutions.uz/" target="_blank" className="text-xs px-2 py-1 rounded-md border border-white/15 bg-background/60" onClick={() => ymGoal("out_media_solutions")}>Software Engineer @ Media Solutions</a>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="#projects" className="px-4 py-2 rounded-lg bg-foreground text-background" onClick={() => ymGoal("cta_projects")}>Ko‘rish</a>
              <a href="#contact" className="px-4 py-2 rounded-lg border border-white/15" onClick={() => ymGoal("cta_contact")}>Bog‘lanish</a>
            </div>
          </div>
          <div className="card p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><span className="mt-1">🚀</span> Real, scalable, production-grade systems</li>
              <li className="flex items-start gap-3"><span className="mt-1">💬</span> Realtime with Socket.IO (Barterly Chat)</li>
              <li className="flex items-start gap-3"><span className="mt-1">🛠</span> CI/CD with Jenkins + GitLab, Docker, Portainer</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About / What I Do */}
      <section id="work" className="container py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Nimalar qilaman</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-2">
            <h3 className="font-medium">Frontend (React & React Native)</h3>
            <ul className="list-disc pl-5 text-[var(--muted)]">
              <li>Play Market va App Store’da e’lon qilingan ilovalar</li>
              <li>Component-driven, maintainable UI</li>
              <li>Design system & pixel-perfect</li>
            </ul>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="font-medium">Backend (NestJS / Express)</h3>
            <ul className="list-disc pl-5 text-[var(--muted)]">
              <li>REST API, modular architecture</li>
              <li>Socket.IO yordamida real-time servislar</li>
              <li>Role-based access, guard, validation</li>
            </ul>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="font-medium">DevOps</h3>
            <ul className="list-disc pl-5 text-[var(--muted)]">
              <li>Jenkins + GitLab Webhooks bilan CI/CD</li>
              <li>Har mikroservis uchun custom Dockerfile</li>
              <li>Portainer, NGINX, SSL, routing setup</li>
            </ul>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="font-medium">Qo‘shimcha</h3>
            <ul className="list-disc pl-5 text-[var(--muted)]">
              <li>Figma, Expo, Play Console, App Store Connect</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="container py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Tech Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {(
            [
              "React",
              "React Native",
              "TypeScript",
              "Tailwind",
              "Zustand",
              "NestJS",
              "Express",
              "Socket.IO",
              "MongoDB",
              "PostgreSQL",
              "Sequelize",
              "Docker",
              "Jenkins",
              "NGINX",
              "GitLab CI",
              "Portainer",
              "Linux",
              "PM2",
              "Figma",
              "Expo",
            ] as const
          ).map((item) => (
            <div key={item} className="card p-4 flex items-center gap-3">
              <div className="h-8 w-8 shrink-0 grid place-items-center rounded-md border border-white/10 bg-background/60">
                <TechIcon name={item} className="text-xl" />
              </div>
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="container py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="card p-6 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Software Engineer — Media Solutions</h3>
              <span className="text-xs text-[var(--muted)]">2022 — Present</span>
            </div>
            <p className="text-sm text-[var(--muted)]">Web, mobil va telegram botlar: CRM/ERP integratsiyalar, CI/CD jarayonlari, API dizayn va high-quality UI/UX yetkazish.</p>
            <a href="https://mediasolutions.uz/" target="_blank" className="inline-flex items-center gap-2 text-sm underline underline-offset-4" onClick={() => ymGoal("out_media_solutions")}>Media Solutions →</a>
          </article>
          <article className="card p-6 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Full‑Stack JS — Xalq Bank</h3>
              <span className="text-xs text-[var(--muted)]">2023 — Present</span>
            </div>
            <p className="text-sm text-[var(--muted)]">Bank mahsulotlari uchun ichki platformalar: React/NestJS, real-time xizmatlar, xavfsizlik va monitoring.</p>
          </article>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container py-12 md:py-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Loyihalar</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Barterly (Private) */}
          <article className="card p-6 space-y-3">
            <div className="text-sm text-[var(--muted)]">Private</div>
            <h3 className="text-lg font-medium">Barterly</h3>
            <p className="text-sm text-[var(--muted)]">Admin panel, web, mobile, chat, notification, telegram bot, BI dashboards. Mikroservislar, alohida CI/CD, Dockerized.</p>
            <a href="https://gitlab.com/abdinazarov" target="_blank" className="inline-flex items-center gap-2 text-sm underline underline-offset-4">GitLab profil</a>
          </article>

          {/* AI Audio Service (Private) */}
          <article className="card p-6 space-y-3">
            <div className="text-sm text-[var(--muted)]">Private</div>
            <h3 className="text-lg font-medium">AI Audio Service</h3>
            <p className="text-sm text-[var(--muted)]">O‘zbek va Rus tillari uchun Audio Processing: ASR (Speech-to-Text), TTS (Text-to-Speech), Speaker Recognition. FastAPI, PyTorch, SpeechBrain asosida. WAV/MP3/FLAC/M4A va boshqalar, JSON natija, Swagger /docs.</p>
            <div className="flex flex-wrap gap-2">
              {[
                "FastAPI",
                "PyTorch",
                "SpeechBrain",
                "ASR",
                "TTS",
                "Speaker Rec",
                "Docker",
              ].map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-md border border-white/10 text-[var(--muted)]">{t}</span>
              ))}
            </div>
            <a
              href="https://github.com/abdinazarov7799/AIVoiceService"
            target="_blank"
              className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
              onClick={() => ymGoal("out_repo", { name: "AIVoiceService" })}
            >
              GitHub (Private) →
            </a>
          </article>

          {/* GitHub public projects */}
          {([
            {
              name: "barterly-frontend",
              url: "https://github.com/abdinazarov7799/barterly-frontend",
              about: "Barterly veb ilovasi (frontend).",
              tags: ["React", "SPA"],
            },
            {
              name: "barterly-admin",
              url: "https://github.com/abdinazarov7799/barterly-admin",
              about: "Barterly boshqaruv paneli.",
              tags: ["React", "Admin"],
            },
            {
              name: "messenger-backend",
              url: "https://github.com/abdinazarov7799/messenger-backend",
              about: "Messenger backend xizmati.",
              tags: ["TypeScript", "API"],
            },
            {
              name: "messenger-front",
              url: "https://github.com/abdinazarov7799/messenger-front",
              about: "Messenger frontend veb.",
              tags: ["React"],
            },
            {
              name: "fastrackids-crm",
              url: "https://github.com/abdinazarov7799/fastrackids-crm",
              about: "CRM funksionallari (front).",
              tags: ["TypeScript", "React"],
            },
            {
              name: "FarmaLifeApp",
              url: "https://github.com/abdinazarov7799/FarmaLifeApp",
              about: "Mobil/veb dorixona yechimlari.",
              tags: ["TypeScript"],
            },
            {
              name: "farmalife-admin",
              url: "https://github.com/abdinazarov7799/farmalife-admin",
              about: "FarmaLife admin paneli.",
              tags: ["React", "Admin"],
            },
            {
              name: "gasgo-web-app",
              url: "https://github.com/abdinazarov7799/gasgo-web-app",
              about: "GasGo veb ilovasi.",
              tags: ["React"],
            },
            {
              name: "gasgo-admin-panel",
              url: "https://github.com/abdinazarov7799/gasgo-admin-panel",
              about: "GasGo admin paneli.",
              tags: ["React", "Admin"],
            },
            {
              name: "DorixonaApp",
              url: "https://github.com/abdinazarov7799/DorixonaApp",
              about: "Dorixona ilovasi (TS).",
              tags: ["TypeScript"],
            },
            {
              name: "document-view-ai",
              url: "https://github.com/abdinazarov7799/document-view-ai",
              about: "Hujjat ko‘rish/AI bilan ishlash.",
              tags: ["JS"],
            },
            {
              name: "sms-bot",
              url: "https://github.com/abdinazarov7799/sms-bot",
              about: "SMS bot integratsiyasi.",
              tags: ["TypeScript"],
            },
          ] as const).map((p) => (
            <article key={p.name} className="card p-6 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{p.name}</h3>
                <div className="flex gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-md border border-white/10 text-[var(--muted)]">{t}</span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-[var(--muted)]">{p.about}</p>
              <a
                href={p.url}
            target="_blank"
                className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
                onClick={() => ymGoal("out_repo", { name: p.name })}
              >
                GitHub →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Bog‘lanish</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-3">
            <a className="block underline underline-offset-4" href="https://abdinazarov-diyorbek.uz" target="_blank" onClick={() => ymGoal("out_website")}>My Website</a>
            <a className="block underline underline-offset-4" href="https://t.me/Diyorbek_Abdinazarov" target="_blank" onClick={() => ymGoal("out_telegram")}>Telegram: @Diyorbek_Abdinazarov</a>
            <a className="block underline underline-offset-4" href="https://instagram.com/diyorbek_abdinazarov" target="_blank" onClick={() => ymGoal("out_instagram")}>Instagram: @diyorbek_abdinazarov</a>
            <a className="block underline underline-offset-4" href="https://gitlab.com/abdinazarov" target="_blank" onClick={() => ymGoal("out_gitlab")}>GitLab: gitlab.com/abdinazarov</a>
          </div>
          <div className="card p-6">
            <p className="text-sm text-[var(--muted)]">“Fun fact”: ko‘pchilik todo yozadi, men esa prod darajadagi tizimlarni yozib, deploy qilaman va o‘zimning pipeline’larim bilan yashataman.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
