"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ExternalLink,
  BarChart3,
  Cpu,
  Brain,
  LineChart,
  X,
  Github,
  Linkedin,
  Mail,
  Globe,
} from "lucide-react";

// ===== Type Definitions =====
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  contentUrl: string;
  title: string;
};

type BadgeProps = {
  children: React.ReactNode;
};

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

// ===== Profile =====
const profile = {
  name: "Banuso Hamzah Ademola",
  title: "Senior Data Scientist | AI & ML Engineer",
  tagline: "Turning complex data into actionable intelligence that drives innovation and growth.",
  location: "Lagos, Nigeria",
  email: "you@example.com",
  github: "https://github.com/Hadex101",
  linkedin: "https://www.linkedin.com/in/hamzah-banuso-53916131a/",
  website: "",
  resumeUrl: "/CV.pdf",
  yearsExperience: 5,
  specialties: [
    { icon: Brain, label: "Machine Learning" },
    { icon: LineChart, label: "Time Series" },
    { icon: Cpu, label: "MLOps & Deployment" },
    { icon: BarChart3, label: "Analytics & BI" },
  ],
};

// ===== Certificates =====
const certificates = [
  { provider: "AltSchool Africa", title: "Data Science Certificate", year: "2024", file: "/altSchool.pdf" },
  { provider: "Edureka", title: "Machine Learning Certification", year: "2023", file: "/E1.pdf" },
  { provider: "Edureka", title: "Data Engineering with AWS", year: "2023", file: "/E2.pdf" },
  { provider: "Edureka", title: "Deep Learning with TensorFlow", year: "2022", file: "/E3.pdf" },
  { provider: "Edureka", title: "MLOps Essentials", year: "2022", file: "/E4.pdf" },
  { provider: "Edureka", title: "Python for Data Science", year: "2021", file: "/E5.pdf" },
];

// ===== Modal Component =====
function Modal({ isOpen, onClose, contentUrl, title }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative bg-[#0b1020] rounded-2xl p-6 max-w-4xl w-full h-[80vh] flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white/70 hover:text-white"
            >
              <X size={20} />
            </button>
            <h3 className="mb-4 text-lg font-semibold">{title}</h3>
            <iframe
              src={contentUrl}
              title={title}
              className="flex-1 w-full rounded-lg border border-white/10"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ===== Data for Sections (Projects, Experience, Blog) =====
const projects = [
  {
    title: "AI-Powered Revenue Forecasting",
    summary: "Built a hierarchical time series forecasting model (Prophet + LSTM) to predict multi-region sales with anomaly detection.",
    impact: "Reduced forecast error by 18% in simulated retail data.",
    tech: ["Python", "Prophet", "PyTorch", "Airflow", "Docker", "Streamlit"],
  },
  {
    title: "Customer Segmentation & Uplift Modeling",
    summary: "Developed RFM clustering combined with uplift modeling to optimize marketing campaigns.",
    impact: "Increased simulated campaign ROI by 27% and reduced churn by 9%.",
    tech: ["scikit-learn", "XGBoost", "SHAP", "FastAPI", "DVC"],
  },
];

const experience = [
  {
    company: "Independent / Freelance",
    role: "Data Scientist & Consultant",
    period: "2019 — Present",
    bullets: [
      "Designed and deployed predictive analytics and ML solutions.",
      "Delivered forecasting models that improved demand planning.",
      "Built dashboards and AI prototypes to demonstrate business impact.",
      "Completed certifications in Data Science, ML, DL, and MLOps.",
    ],
  },
];

const posts = [
  {
    title: "Beyond Accuracy: Evaluating ML with Business KPIs",
    date: "July 2025",
    excerpt: "Why ROC-AUC isn’t enough and how to align models with revenue, cost, and risk.",
  },
];

// ===== Utilities =====
const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
const glass = "backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl";

const sectionTitle = (text: string) => (
  <div className="mb-8 flex items-center gap-3">
    <div className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-fuchsia-500" />
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{text}</h2>
  </div>
);

const Badge = ({ children }: BadgeProps) => (
  <span className="text-xs md:text-sm px-3 py-1 rounded-full border border-white/15 bg-white/5">
    {children}
  </span>
);

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`${glass} rounded-2xl p-6 ${className}`}>{children}</div>
);

// ===== Main Portfolio Component =====
export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ url: string; title: string }>({
    url: "",
    title: "",
  });

  const openModal = (url: string, title: string) => {
    setModalContent({ url, title });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen text-white bg-[#0b1020] relative">
      {/* Hero Section */}
      <section className={`${container} pt-16 md:pt-28 pb-12`}>
        <h1 className="text-4xl font-bold">{profile.name}</h1>
        <h2 className="text-xl text-white/80 mt-2">{profile.title}</h2>
        <p className="mt-4 text-white/70">{profile.tagline}</p>
      </section>

      {/* Featured Projects */}
      <section id="projects" className={`${container} py-12 md:py-20`}>
        {sectionTitle("Featured Projects")}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card key={p.title}>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/80">{p.summary}</p>
              <p className="mt-2 text-sm text-white/70">
                <span className="opacity-70">Impact:</span> {p.impact}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className={`${container} py-12 md:py-20`}>
        {sectionTitle("Experience")}
        <div className="space-y-4">
          {experience.map((e) => (
            <Card key={e.company}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{e.role}</h3>
                  <span className="opacity-70">· {e.company}</span>
                  <ul className="mt-2 list-disc pl-5 text-sm text-white/80">
                    {e.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm opacity-70">{e.period}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className={`${container} py-12 md:py-20`}>
        {sectionTitle("Certifications & Education")}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certificates.map((c, idx) => (
            <Card key={idx}>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Award />
                  <div>
                    <div className="font-medium">{c.title}</div>
                    <div className="text-sm opacity-80">
                      {c.provider} · {c.year}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => openModal(c.file, c.title)}
                  className="mt-2 inline-flex items-center gap-1 text-sm text-cyan-400 hover:underline"
                >
                  View Certificate <ExternalLink size={14} />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className={`${container} py-12 md:py-20`}>
        {sectionTitle("Writing & Talks")}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Card key={post.title}>
              <h3 className="font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-white/80">{post.excerpt}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer with Socials */}
      <footer className="border-t border-white/10 py-8 mt-8 flex flex-col md:flex-row items-center justify-between opacity-80">
        <div>© {new Date().getFullYear()} {profile.name}</div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a href={profile.github} className="inline-flex items-center gap-1 hover:underline">
            <Github size={14} /> GitHub
          </a>
          <a href={profile.linkedin} className="inline-flex items-center gap-1 hover:underline">
            <Linkedin size={14} /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1 hover:underline">
            <Mail size={14} /> Email
          </a>
          {profile.website && (
            <a href={profile.website} className="inline-flex items-center gap-1 hover:underline">
              <Globe size={14} /> Website
            </a>
          )}
        </div>
      </footer>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        contentUrl={modalContent.url}
        title={modalContent.title}
      />
    </div>
  );
}
