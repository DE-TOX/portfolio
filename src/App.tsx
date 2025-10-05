import './App.css'
import LiquidEther from './components/LiquidEther'
import Dock from './components/Dock'
import DecryptedText from './components/DecryptedText'
import InfiniteScroll from './components/InfiniteScroll'
import CardSwap, { Card } from './components/CardSwap'
import SpotlightCard from './components/SpotlightCard'
import FuzzyText from './components/FuzzyText'
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
  Database,
  FileCode2,
  Braces,
  Terminal,
  Cpu,
  Box,
  Network,
  GitBranch,
  Layers,
  Grid2x2,
  BarChart3,
  LineChart,
  Edit3,
  FunctionSquare,
  CalendarClock,
  Cloud,
  Server,
  PlugZap,
  GitCommitHorizontal,
  Workflow,
  FileCog,
  Feather,
  TrendingUp,
  ExternalLink
} from 'lucide-react'

function App() {
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

  const skillItems = [
    // Languages
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#5227FF] to-[#7B3FFF] text-white font-bold rounded-lg border border-[#5227FF]/30">
          <Code2 /> JavaScript (ES6+)
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#FF9FFC] to-[#FFB3FC] text-white font-bold rounded-lg border border-[#FF9FFC]/30">
          <Database /> SQL
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#B19EEF] to-[#C5B3F3] text-white font-bold rounded-lg border border-[#B19EEF]/30">
          <FileCode2 /> HTML5
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#5227FF] to-[#7B3FFF] text-white font-bold rounded-lg border border-[#5227FF]/30">
          <Braces /> CSS3
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#FF9FFC] to-[#FFB3FC] text-white font-bold rounded-lg border border-[#FF9FFC]/30">
          <Braces /> Sass
        </div>
      )
    },

    // Frameworks & Libraries
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#B19EEF] to-[#C5B3F3] text-white font-bold rounded-lg border border-[#B19EEF]/30">
          <Cpu /> React
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#5227FF] to-[#7B3FFF] text-white font-bold rounded-lg border border-[#5227FF]/30">
          <Box /> Next.js
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#FF9FFC] to-[#FFB3FC] text-white font-bold rounded-lg border border-[#FF9FFC]/30">
          <Layers /> Vue.js (2 & 3)
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#B19EEF] to-[#C5B3F3] text-white font-bold rounded-lg border border-[#B19EEF]/30">
          <Network /> Vue Router
        </div>
      )
    },
    {
      content: ( 
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#5227FF] to-[#7B3FFF] text-white font-bold rounded-lg border border-[#5227FF]/30"> 
          <GitBranch /> Vuex 
        </div> 
      ) 
    }, 
    { 
      content: ( 
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#FF9FFC] to-[#FFB3FC] text-white font-bold rounded-lg border border-[#FF9FFC]/30"> 
          <GitBranch /> Pinia  
        </div> 
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#B19EEF] to-[#C5B3F3] text-white font-bold rounded-lg border border-[#B19EEF]/30">
          <Terminal /> Node.js
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#5227FF] to-[#7B3FFF] text-white font-bold rounded-lg border border-[#5227FF]/30">
          <Server /> Express
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#FF9FFC] to-[#FFB3FC] text-white font-bold rounded-lg border border-[#FF9FFC]/30">
          <PlugZap /> Socket.IO
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#B19EEF] to-[#C5B3F3] text-white font-bold rounded-lg border border-[#B19EEF]/30">
          <Braces /> Tailwind CSS
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#5227FF] to-[#7B3FFF] text-white font-bold rounded-lg border border-[#5227FF]/30">
          <Grid2x2 /> AG-Grid
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#FF9FFC] to-[#FFB3FC] text-white font-bold rounded-lg border border-[#FF9FFC]/30">
          <BarChart3 /> Recharts
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#B19EEF] to-[#C5B3F3] text-white font-bold rounded-lg border border-[#B19EEF]/30">
          <LineChart /> Chart.js
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#5227FF] to-[#7B3FFF] text-white font-bold rounded-lg border border-[#5227FF]/30">
          <Edit3 /> TipTap
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#FF9FFC] to-[#FFB3FC] text-white font-bold rounded-lg border border-[#FF9FFC]/30">
          <FunctionSquare /> Lodash
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#B19EEF] to-[#C5B3F3] text-white font-bold rounded-lg border border-[#B19EEF]/30">
          <CalendarClock /> Moment.js
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#5227FF] to-[#7B3FFF] text-white font-bold rounded-lg border border-[#5227FF]/30">
          <Cloud /> Supabase.js
        </div>
      )
    },

    // Databases & Services
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#FF9FFC] to-[#FFB3FC] text-white font-bold rounded-lg border border-[#FF9FFC]/30">
          <Database /> PostgreSQL (Supabase)
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#B19EEF] to-[#C5B3F3] text-white font-bold rounded-lg border border-[#B19EEF]/30">
          <Database /> Redis
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#5227FF] to-[#7B3FFF] text-white font-bold rounded-lg border border-[#5227FF]/30">
          <Cpu /> Hugging Face API
        </div>
      )
    },

    // Others
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#FF9FFC] to-[#FFB3FC] text-white font-bold rounded-lg border border-[#FF9FFC]/30">
          <Package /> Docker
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#B19EEF] to-[#C5B3F3] text-white font-bold rounded-lg border border-[#B19EEF]/30">
          <GitCommitHorizontal /> Git
          </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#5227FF] to-[#7B3FFF] text-white font-bold rounded-lg border border-[#5227FF]/30">
          <Braces /> REST APIs
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#FF9FFC] to-[#FFB3FC] text-white font-bold rounded-lg border border-[#FF9FFC]/30">
          <Network /> WebSockets
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#B19EEF] to-[#C5B3F3] text-white font-bold rounded-lg border border-[#B19EEF]/30">
          <Box /> Retool
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#5227FF] to-[#7B3FFF] text-white font-bold rounded-lg border border-[#5227FF]/30">
          <Server /> Nginx
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#FF9FFC] to-[#FFB3FC] text-white font-bold rounded-lg border border-[#FF9FFC]/30">
          <Package /> Axios
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#B19EEF] to-[#C5B3F3] text-white font-bold rounded-lg border border-[#B19EEF]/30">
          <Workflow /> CI/CD
        </div>
      )
    },
    {
      content: (
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#5227FF] to-[#7B3FFF] text-white font-bold rounded-lg border border-[#5227FF]/30">
          <FileCog /> Swagger
        </div>
      )
    }
  ]

  return (
    <>
      {/* Fixed background that spans entire viewport */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Fixed Dock Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
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
          className="min-h-screen flex items-center justify-center px-6 py-20"
        >
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left Side - Text Content */}
              <div className="text-center lg:text-left order-1">
                {/* Main Name */}
                <h1 className="mb-6">
                  <DecryptedText
                    text="Divyansh Joshi"
                    animateOn="view"
                    speed={40}
                    maxIterations={15}
                    revealDirection="center"
                    sequential={true}
                    className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
                    encryptedClassName="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white/40"
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
                    className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-[#5227FF]"
                    encryptedClassName="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-[#5227FF]/30"
                  />
                </h2>
              </div>

              {/* Right Side - CardSwap */}
              <div className="relative h-[500px] lg:h-[600px] order-2">
                <CardSwap
                  width={420}
                  height={520}
                  cardDistance={50}
                  verticalDistance={60}
                  delay={4000}
                  pauseOnHover={true}
                  easing="elastic"
                  skewAmount={4}
                >
                  {/* Card 1: SyncUp Project */}
                  <Card className="backdrop-blur-xl bg-gradient-to-br from-[#5227FF]/20 to-[#FF9FFC]/20 border-[#5227FF]/30">
                    <div className="p-8 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 rounded-xl bg-[#5227FF]/20 border border-[#5227FF]/40">
                            <Rocket size={28} className="text-[#5227FF]" />
                          </div>
                          <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                            Featured Project
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">
                          SyncUp
                        </h3>
                        <p className="text-white/70 text-base leading-relaxed mb-4">
                          Full-stack real-time collaboration platform with
                          sub-second data synchronization using Redis Pub-Sub
                          and WebSockets.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 rounded-full bg-[#5227FF]/20 border border-[#5227FF]/40 text-xs text-white/80">
                            Redis
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#5227FF]/20 border border-[#5227FF]/40 text-xs text-white/80">
                            WebSockets
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#5227FF]/20 border border-[#5227FF]/40 text-xs text-white/80">
                            Supabase
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#5227FF]/20 border border-[#5227FF]/40 text-xs text-white/80">
                            Next.js
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Card 2: Vue 3 Migration */}
                  <Card className="backdrop-blur-xl bg-gradient-to-br from-[#FF9FFC]/20 to-[#B19EEF]/20 border-[#FF9FFC]/30">
                    <div className="p-8 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 rounded-xl bg-[#FF9FFC]/20 border border-[#FF9FFC]/40">
                            <Feather size={28} className="text-[#FF9FFC]" />
                          </div>
                          <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                            Frontend Engineering
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">
                          Vue App Migration
                        </h3>
                        <p className="text-white/70 text-base leading-relaxed mb-4">
                          Led a large-scale migration from Vue 2 to Vue 3 for a
                          MAANG tech client — modernized over 200 components,
                          adopted the Composition API, and transitioned from
                          Vuex to Pinia for cleaner, modular state management.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                            Vue 3
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                            Vite
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                            Vuex
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card className="backdrop-blur-xl bg-gradient-to-br from-[#FF9FFC]/20 to-[#FFD1FF]/20 border-[#FF9FFC]/30">
                    <div className="p-8 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 rounded-xl bg-[#FF9FFC]/20 border border-[#FF9FFC]/40">
                            <BarChart3 size={28} className="text-[#FF9FFC]" />
                          </div>
                          <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                            Product Enhancement
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">
                          Social Listening Dashboard
                        </h3>
                        <p className="text-white/70 text-base leading-relaxed mb-4">
                          Built analytics features for a real-time
                          CRM-integrated platform — improved customer response
                          efficiency by 20% and boosted engagement by designing
                          4 new chart types for insight visualization.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-white/90">
                          <TrendingUp size={20} className="text-[#FF9FFC]" />
                          <span className="text-sm font-semibold">
                            +20% Efficiency Gain
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                            React
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                            Recharts
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                            Tailwind CSS
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                            REST APIs
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CardSwap>
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
                      A specialized application built to grade LLM prompts based
                      on best practices (context, role, format). It
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
                href="https://linkedin.com/in/divyansh-joshi"
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
                href="https://github.com/divyansh-joshi"
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
              <a href="mailto:divyansh@example.com" className="group relative">
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
                href="/resume.pdf"
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

            {/* Additional Info */}
            <div className="mt-20 pt-8 border-t border-white/10">
              <p className="text-white/40 text-sm">
                © 2025 Divyansh Joshi. Built with React, Three.js, and passion.
              </p>
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
                Tech Stack
              </h2>
            </div>

            {/* InfiniteScroll centered */}
            <div style={{ height: "500px", position: "relative" }}>
              <InfiniteScroll
                items={skillItems}
                width="30rem"
                maxHeight="400px"
                itemMinHeight={70}
                isTilted={true}
                autoplay={true}
                tiltDirection="right"
                autoplaySpeed={1}
                autoplayDirection="down"
                pauseOnHover={true}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App