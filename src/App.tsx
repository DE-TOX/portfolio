import './App.css'
import { lazy, Suspense, useEffect, useState } from 'react'
import Dock from './components/Dock'
import PillNav from './components/PillNav'
import DecryptedText from './components/DecryptedText'
import docker from './assets/docker-svgrepo-com.svg'
import postgres from './assets/postgresql-svgrepo-com.svg'
import redis from './assets/redis-svgrepo-com.svg'
import react from './assets/reactjs-svgrepo-com.svg'
import tailwind from './assets/tailwind-svgrepo-com.svg'
import typescript from './assets/typescript-icon-svgrepo-com.svg'
import nodejs from './assets/node-js-svgrepo-com.svg'
import nextjs from './assets/next-js-svgrepo-com.svg'
import js from './assets/js-svgrepo-com.svg'
import git from './assets/git-svgrepo-com.svg'
import {
  Rocket,
  Code2,
  MessageSquare,
  Briefcase,
  Zap,
  Package,
  Home,
  Linkedin,
  Github,
  Mail,
  FileCode2,
  Cpu,
  BarChart3,
  Feather,
  TrendingUp,
  ExternalLink
} from 'lucide-react'

// Lazy load heavy components
const LiquidEther = lazy(() => import('./components/LiquidEther'))
const CircularGallery = lazy(() => import('./components/CircularGallery'))
const CardSwap = lazy(() => import('./components/CardSwap').then(module => ({ default: module.default })))
const Card = lazy(() => import('./components/CardSwap').then(module => ({ default: module.Card })))
const SpotlightCard = lazy(() => import('./components/SpotlightCard'))
const FuzzyText = lazy(() => import('./components/FuzzyText'))

function App() {
  // Performance detection for low-end devices
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    // Detect low-end device based on hardware concurrency and memory
    const detectLowEndDevice = () => {
      const hardwareConcurrency = navigator.hardwareConcurrency || 2;
      const deviceMemory = (navigator as any).deviceMemory || 4;
      const isLowEnd = hardwareConcurrency <= 2 || deviceMemory <= 2;
      setIsLowEndDevice(isLowEnd);
    };

    detectLowEndDevice();
  }, []);

  // Add smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.href.includes('#')) {
        const hash = target.href.split('#')[1];
        const element = document.getElementById(hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const dockItems = [
    {
      icon: <Home size={20} strokeWidth={1.5} className="text-white" />,
      label: 'Home',
      onClick: () => {
        const element = document.getElementById('hero')
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    },
    {
      icon: <Briefcase size={20} strokeWidth={1.5} className="text-white" />,
      label: 'Projects',
      onClick: () => {
        const element = document.getElementById('projects')
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    },
    {
      icon: <Code2 size={20} strokeWidth={1.5} className="text-white" />,
      label: 'Skills',
      onClick: () => {
        const element = document.getElementById('skills')
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    },
    {
      icon: <MessageSquare size={20} strokeWidth={1.5} className="text-white" />,
      label: 'Contact',
      onClick: () => {
        const element = document.getElementById('contact')
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  ]

  // Top 10 Most In-Demand Skills with SVG icons
  const skillsItems = [
    {
      image: js,
      text: " ",
    },
    {
      image: react,
      text: ' ',
    },
    {
      image: nodejs,
      text: ' ',
    },
    {
      image: nextjs,
      text: ' ',
    },
    {
      image: typescript,
      text: ' ',
    },
    {
      image: postgres,
      text: '',
    },
    {
      image: redis,
      text: ' ',
    },
    {
      image: docker,
      text: ' ',
    },
    {
      image: tailwind,
      text: ' ',
    },
    {
      image: git,
      text: ' ',
    },
  ]

  return (
    <>
      {/* Fixed background that spans entire viewport */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        {!isLowEndDevice ? (
          <Suspense fallback={<div className="w-full h-full bg-[#0a0a0f]" />}>
            <LiquidEther
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              mouseForce={isLowEndDevice ? 10 : 20}
              cursorSize={isLowEndDevice ? 50 : 100}
              isViscous={false}
              viscous={isLowEndDevice ? 15 : 30}
              iterationsViscous={isLowEndDevice ? 16 : 32}
              iterationsPoisson={isLowEndDevice ? 16 : 32}
              resolution={isLowEndDevice ? 0.3 : 0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={isLowEndDevice ? 0.3 : 0.5}
              autoIntensity={isLowEndDevice ? 1.5 : 2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </Suspense>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0a0a0f] via-[#1a0a2f] to-[#0a0a0f]" />
        )}
      </div>

      {/* PillNav for mobile only */}
      <div className="md:hidden">
        <PillNav
          logo="/vite.svg"
          logoAlt="Portfolio Logo"
          items={[
            { label: 'Home', href: '#hero' },
            { label: 'Projects', href: '#projects' },
            { label: 'Skills', href: '#skills' },
            { label: 'Contact', href: '#contact' }
          ]}
          activeHref="#hero"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="rgba(0, 0, 0, 0.8)"
          pillColor="#5227FF"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#ffffff"
        />
      </div>

      {/* Fixed Dock Navigation - Desktop only */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <Dock
            items={dockItems}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
            distance={150}
          />
        </div>
      </div>

      {/* Main content with relative positioning */}
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section
          id="hero"
          className="hero-section min-h-screen flex items-center justify-center px-6 py-16 md:py-20"
        >
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center min-h-[80vh] lg:min-h-0">
              {/* Left Side - Text Content */}
              <div className="hero-text text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center">
                {/* Main Name */}
                <h1 className="mb-6">
                  <DecryptedText
                    text="Divyansh Joshi"
                    animateOn="view"
                    speed={40}
                    maxIterations={15}
                    revealDirection="center"
                    sequential={true}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white"
                    encryptedClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white/40"
                  />
                </h1>

                {/* Subtitle/Role */}
                <h2 className="mb-8">
                  <DecryptedText
                    text="Software Developer"
                    animateOn="view"
                    speed={50}
                    maxIterations={12}
                    revealDirection="start"
                    sequential={true}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-[#5227FF]"
                    encryptedClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-[#5227FF]/30"
                  />
                </h2>
              </div>

              {/* Right Side - CardSwap */}
              <div className="relative h-[500px] lg:h-[600px] order-2">
                <Suspense
                  fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-white/40">Loading...</div>
                    </div>
                  }
                >
                  <CardSwap
                    width={250}
                    height={350}
                    cardDistance={isLowEndDevice ? 30 : 50}
                    verticalDistance={isLowEndDevice ? 40 : 60}
                    delay={isLowEndDevice ? 6000 : 4000}
                    pauseOnHover={true}
                    easing={isLowEndDevice ? "linear" : "elastic"}
                    skewAmount={isLowEndDevice ? 2 : 4}
                  >
                    {/* Card 1: SyncUp Project */}
                    <Card className="backdrop-blur-xl bg-gradient-to-br from-[#5227FF]/30 to-[#FF9FFC]/30 bg-black/40 border-[#5227FF]/30">
                      <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="p-2 rounded-lg bg-[#5227FF]/20 border border-[#5227FF]/40">
                              <Rocket size={20} className="text-[#5227FF]" />
                            </div>
                            <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                              Featured Project
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                            SyncUp
                          </h3>
                          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-3">
                            Real-time collaboration platform with Redis Pub-Sub and WebSockets.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-1 rounded-full bg-[#5227FF]/20 border border-[#5227FF]/40 text-xs text-white/80">
                              Redis
                            </span>
                            <span className="px-2 py-1 rounded-full bg-[#5227FF]/20 border border-[#5227FF]/40 text-xs text-white/80">
                              WebSockets
                            </span>
                            <span className="px-2 py-1 rounded-full bg-[#5227FF]/20 border border-[#5227FF]/40 text-xs text-white/80">
                              Next.js
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Card 2: Vue 3 Migration */}
                    <Card className="backdrop-blur-xl bg-gradient-to-br from-[#FF9FFC]/30 to-[#B19EEF]/30 bg-black/40 border-[#FF9FFC]/30">
                      <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="p-2 rounded-lg bg-[#FF9FFC]/20 border border-[#FF9FFC]/40">
                              <Feather size={20} className="text-[#FF9FFC]" />
                            </div>
                            <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                              Frontend Engineering
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                            Vue Migration
                          </h3>
                          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-3">
                            Vue 2 to Vue 3 migration for MAANG client — 200+ components modernized.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                              Vue 3
                            </span>
                            <span className="px-2 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                              Pinia
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card className="backdrop-blur-xl bg-gradient-to-br from-[#FF9FFC]/30 to-[#FFD1FF]/30 bg-black/40 border-[#FF9FFC]/30">
                      <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="p-2 rounded-lg bg-[#FF9FFC]/20 border border-[#FF9FFC]/40">
                              <BarChart3 size={20} className="text-[#FF9FFC]" />
                            </div>
                            <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                              Analytics
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                            CRM Dashboard
                          </h3>
                          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-3">
                            Real-time analytics platform with 20% efficiency improvement.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-white/90 mb-2">
                            <TrendingUp size={16} className="text-[#FF9FFC]" />
                            <span className="text-xs font-semibold">
                              +20% Efficiency
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                              React
                            </span>
                            <span className="px-2 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                              Recharts
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </CardSwap>
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center py-20 px-6"
        >
          <div className="w-full max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Personal Project
              </h2>
            </div>

            {/* 3 Cards in a row */}
            <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              <Suspense
                fallback={
                  <div className="h-[280px] flex items-center justify-center text-white/40">
                    Loading...
                  </div>
                }
              >
                {/* Card 1: 40% Performance Improvement */}
                <SpotlightCard
                  className="h-full"
                  spotlightColor="rgba(0, 245, 212, 0.3)"
                >
                  <div className="flex flex-col h-full justify-between min-h-[280px]">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-[#00F5D4]/20 border border-[#00F5D4]/40">
                          <Cpu size={32} className="text-[#00F5D4]" />
                        </div>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        SyncUp
                      </h3>
                      <p className="text-xl text-white/90 font-medium mb-3">
                        Real-Time team wellness & AI Analytics
                      </p>
                      <p className="text-white/60 leading-relaxed">
                        Built a full-stack team wellness platform with real-time
                        collaboration using Redis Pub-Sub and WebSockets.
                        Integrated Hugging Face for AI-driven sentiment insights
                        from user text and voice check-ins — ensuring sub-second
                        synchronization across all clients.
                      </p>

                      {/* 🌐 Link Button */}
                    </div>

                    <div className="mt-6">
                      <a
                        href="https://teampulse-ten.vercel.app/" // ← replace with your actual link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-xl bg-[#00F5D4]/20 border border-[#00F5D4]/40 text-[#00F5D4] text-sm font-medium hover:bg-[#00F5D4]/30 transition-all duration-300"
                      >
                        View Live
                        <ExternalLink size={16} />
                      </a>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#00F5D4]/20 border border-[#00F5D4]/40 text-xs text-white/80">
                          Next.js
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#00F5D4]/20 border border-[#00F5D4]/40 text-xs text-white/80">
                          Redis Pub-Sub
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#00F5D4]/20 border border-[#00F5D4]/40 text-xs text-white/80">
                          Supabase
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#00F5D4]/20 border border-[#00F5D4]/40 text-xs text-white/80">
                          Hugging Face API
                        </span>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>

                {/* Card 2: 200+ Components Refactored */}
                <SpotlightCard
                  className="h-full"
                  spotlightColor="rgba(255, 159, 252, 0.3)"
                >
                  <div className="flex flex-col h-full justify-between min-h-[280px]">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-[#FF9FFC]/20 border border-[#FF9FFC]/40">
                          <Package size={32} className="text-[#FF9FFC]" />
                        </div>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        PromptGrade
                      </h3>
                      <p className="text-xl text-white/90 font-medium mb-3">
                        Actionable Feedback & Instant Prompt Enhancement
                      </p>
                      <p className="text-white/60 leading-relaxed">
                        A specialized application built to grade LLM prompts
                        based on best practices (context, role, format). It
                        automatically analyzes inputs, provides a clarity score,
                        suggests corrections, and generates a ready-to-use,
                        optimized prompt for superior model results.
                      </p>
                    </div>
                    <div className="mt-6">
                      <a
                        href="[your-live-link-here]"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-xl bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-[#FF9FFC] text-sm font-medium hover:bg-[#FF9FFC]/30 transition-all duration-300"
                      >
                        View Analyzer
                        <ExternalLink size={16} />
                      </a>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                          LLM API
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                          React
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                          NodeJs
                        </span>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>

                {/* Card 3: Real-Time Data Sync */}
                <SpotlightCard
                  className="h-full"
                  spotlightColor="rgba(177, 158, 239, 0.3)"
                >
                  <div className="flex flex-col h-full justify-between min-h-[280px]">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-[#B19EEF]/20 border border-[#B19EEF]/40">
                          <Zap size={32} className="text-[#B19EEF]" />
                        </div>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        Redis Project Endpoints
                      </h3>
                      <p className="text-xl text-white/90 font-medium mb-3">
                        API Documentation
                      </p>
                      <p className="text-white/60 leading-relaxed">
                        Architected sub-second data synchronization system using
                        Redis Pub-Sub and WebSockets for seamless multi-user
                        collaboration.
                      </p>
                    </div>
                    <div className="mt-6">
                      <a
                        href="https://real-time-team-pulse-backend.onrender.com/api-docs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-xl bg-[#B19EEF]/20 border border-[#B19EEF]/40 text-[#B19EEF] text-sm font-medium hover:bg-[#B19EEF]/30 transition-all duration-300"
                      >
                        View API Docs
                        <ExternalLink size={16} />
                      </a>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#B19EEF]/20 border border-[#B19EEF]/40 text-xs text-white/80">
                          Redis
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#B19EEF]/20 border border-[#B19EEF]/40 text-xs text-white/80">
                          WebSockets
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#B19EEF]/20 border border-[#B19EEF]/40 text-xs text-white/80">
                          Socket.IO
                        </span>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Suspense>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center py-20 px-6"
        >
          <div className="w-full max-w-5xl mx-auto text-center">
            {/* FuzzyText CTA */}
            <div className="mb-12 flex justify-center">
              <Suspense
                fallback={
                  <div className="text-5xl font-bold text-white">
                    Let's Build Together
                  </div>
                }
              >
                <FuzzyText
                  baseIntensity={0.2}
                  hoverIntensity={0.5}
                  enableHover={true}
                  fontSize="clamp(2rem, 8vw, 5rem)"
                  fontWeight={900}
                  color="#fff"
                >
                  Let's Build Together
                </FuzzyText>
              </Suspense>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your next high-performance application to life?
              <br className="hidden md:block" />
              Let's collaborate on something extraordinary.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-16">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/divyansh-joshi-053691222/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm transition-all duration-300 hover:border-[#5227FF] hover:bg-[#5227FF]/10 hover:-translate-y-1">
                  <Linkedin
                    size={32}
                    className="text-white group-hover:text-[#5227FF] transition-colors"
                  />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/DE-TOX"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm transition-all duration-300 hover:border-[#FF9FFC] hover:bg-[#FF9FFC]/10 hover:-translate-y-1">
                  <Github
                    size={32}
                    className="text-white group-hover:text-[#FF9FFC] transition-colors"
                  />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  GitHub
                </span>
              </a>

              {/* Email */}
              <a href="mailto:taru.joshi14@gmail.com" className="group relative">
                <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm transition-all duration-300 hover:border-[#B19EEF] hover:bg-[#B19EEF]/10 hover:-translate-y-1">
                  <Mail
                    size={32}
                    className="text-white group-hover:text-[#B19EEF] transition-colors"
                  />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  Email
                </span>
              </a>

              {/* Resume */}
              <a
                href="https://drive.google.com/drive/folders/1ZiECkk-QrX3pHuYe2b-TaKyXrnxVusJ1?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm transition-all duration-300 hover:border-[#00F5D4] hover:bg-[#00F5D4]/10 hover:-translate-y-1">
                  <FileCode2
                    size={32}
                    className="text-white group-hover:text-[#00F5D4] transition-colors"
                  />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  Resume
                </span>
              </a>
            </div>

            
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden"
        >
          <div className="w-full max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Core Technologies
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Mastering the most in-demand technologies for modern web development
              </p>
            </div>

            {/* CircularGallery with Skills */}
            <div style={{ height: '600px', position: 'relative' }}>
              <Suspense
                fallback={
                  <div className="flex items-center justify-center h-full text-white/40">
                    Loading technologies...
                  </div>
                }
              >
                <CircularGallery
                  items={skillsItems}
                  bend={1}
                  textColor="#ffffff"
                  borderRadius={0.05}
                  scrollSpeed={1}
                  scrollEase={0.02}
                />
              </Suspense>
            </div>
            {/* Additional Info */}
            <div className="mt-20 pt-8 border-t border-white/10">
              <p className="text-white/40 text-sm">
                © 2025 Divyansh Joshi. Built with React, Three.js, and passion.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App