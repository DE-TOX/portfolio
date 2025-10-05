import './App.css'
import LiquidEther from './components/LiquidEther'
import Dock from './components/Dock'
import DecryptedText from './components/DecryptedText'
import InfiniteScroll from './components/InfiniteScroll'
import CardSwap, { Card } from './components/CardSwap'
import SpotlightCard from './components/SpotlightCard'
import FuzzyText from './components/FuzzyText'
import Lanyard from './components/Lanyard'
import {
  Rocket,
  Code2,
  MessageSquare,
  Briefcase,
  Gauge,
  RefreshCw,
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
  FileCog
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
      icon: <MessageSquare size={20} strokeWidth={1.5} className="text-white" />,
      label: 'Contact',
      onClick: () => {
        const element = document.getElementById('contact')
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
                            <RefreshCw size={28} className="text-[#FF9FFC]" />
                          </div>
                          <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                            Migration
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">
                          Vue 2 → Vue 3
                        </h3>
                        <p className="text-white/70 text-base leading-relaxed mb-4">
                          Led enterprise-scale migration from Vue 2 to Vue 3,
                          transitioning from CLI to Vite and Vuex to Pinia. 
                          Refactored 200+ components.
                          </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-white/90">
                          <Gauge size={20} className="text-[#FF9FFC]" />
                          <span className="text-sm font-semibold">
                            40% Performance Boost
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                            Vue 3
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                            Vite
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                            Pinia
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
                Project Proof
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Delivering measurable impact through innovative solutions
              </p>
            </div>

            {/* 2x2 Grid of Spotlight Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Card 1: 40% Performance Improvement */}
              <SpotlightCard
                className="h-full"
                spotlightColor="rgba(82, 39, 255, 0.3)"
              >
                <div className="flex flex-col h-full justify-between min-h-[280px]">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-[#5227FF]/20 border border-[#5227FF]/40">
                        <Gauge size={32} className="text-[#5227FF]" />
                      </div>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                      40%
                    </h3>
                    <p className="text-xl text-white/90 font-medium mb-3">
                      Performance Improvement
                    </p>
                    <p className="text-white/60 leading-relaxed">
                      Optimized application performance through code splitting,
                      lazy loading, and efficient state management. Reduced
                      initial load time and improved user experience.
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#5227FF]/20 border border-[#5227FF]/40 text-xs text-white/80">
                        Vite
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#5227FF]/20 border border-[#5227FF]/40 text-xs text-white/80">
                        Code Splitting
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#5227FF]/20 border border-[#5227FF]/40 text-xs text-white/80">
                        Optimization
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
                      200+
                    </h3>
                    <p className="text-xl text-white/90 font-medium mb-3">
                      Components Refactored
                    </p>
                    <p className="text-white/60 leading-relaxed">
                      Led comprehensive codebase modernization, migrating legacy
                      components to composition API and TypeScript. Improved
                      maintainability and developer experience.
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                        Vue 3
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-xs text-white/80">
                        Composition API
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
                      &lt;1s
                    </h3>
                    <p className="text-xl text-white/90 font-medium mb-3">
                      Real-Time Sync
                    </p>
                    <p className="text-white/60 leading-relaxed">
                      Architected sub-second data synchronization system using
                      Redis Pub-Sub and WebSockets for seamless multi-user
                      collaboration.
                    </p>
                  </div>
                  <div className="mt-6">
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

              {/* Card 4: Build Time Improvement */}
              <SpotlightCard
                className="h-full"
                spotlightColor="rgba(82, 39, 255, 0.3)"
              >
                <div className="flex flex-col h-full justify-between min-h-[280px]">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-[#5227FF]/20 border border-[#5227FF]/40">
                        <RefreshCw size={32} className="text-[#5227FF]" />
                      </div>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                      60%
                    </h3>
                    <p className="text-xl text-white/90 font-medium mb-3">
                      Faster Build Times
                    </p>
                    <p className="text-white/60 leading-relaxed">
                      Streamlined CI/CD pipeline and build process migration
                      from Vue CLI to Vite, drastically reducing development and
                      deployment cycles.
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#5227FF]/20 border border-[#5227FF]/40 text-xs text-white/80">
                        Vite
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#5227FF]/20 border border-[#5227FF]/40 text-xs text-white/80">
                        CI/CD
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#5227FF]/20 border border-[#5227FF]/40 text-xs text-white/80">
                        Docker
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

            {/* Lanyard Component */}
            <div className="flex justify-center mb-16">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>

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
            </div>

            {/* Additional Info */}
            <div className="mt-20 pt-8 border-t border-white/10">
              <p className="text-white/40 text-sm">
                © 2025 Divyansh Joshi. Built with React, Three.js, and passion.
              </p>
            </div>

            {/* Note about Lanyard - Remove this after adding assets */}
            <div className="mt-8 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30 max-w-2xl mx-auto">
              <p className="text-yellow-200/80 text-sm">
                <strong>Note:</strong> To enable the interactive Lanyard
                business card, add{" "}
                <code className="bg-black/30 px-2 py-1 rounded">card.glb</code>{" "}
                and{" "}
                <code className="bg-black/30 px-2 py-1 rounded">
                  lanyard.png
                </code>{" "}
                to{" "}
                <code className="bg-black/30 px-2 py-1 rounded">
                  src/components/
                </code>{" "}
                and update vite.config.ts with{" "}
                <code className="bg-black/30 px-2 py-1 rounded">
                  assetsInclude: ['**/*.glb']
                </code>
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
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                A comprehensive toolkit for building modern, scalable
                applications
              </p>
            </div>

            {/* Single Column Layout for InfiniteScroll */}
            <div style={{height: '500px', position: 'relative'}}>
            <InfiniteScroll
                  items={skillItems}
                  width="30rem"
                  maxHeight="400px"
                  itemMinHeight={80}
                  isTilted={true}
                  tiltDirection="right"
                  autoplay={true}
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
