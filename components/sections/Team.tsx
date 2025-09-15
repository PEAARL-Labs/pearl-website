import Card from '../ui/Card'

export default function Team() {
  const team = [
    {
      name: "Douglas Nyberg",
      role: "Co-CEO & Principal Investigator",
      title: "Physics/AI Lead",
      credentials: "BS Physics/CS • Quantum ML at Purdue",
      description: "Led 7 researchers in quantum machine learning applications for autonomous systems. Expert in physics-informed AI validation and formal verification methods. Pioneered adversarial testing approaches for aerospace applications.",
      expertise: ["Quantum Computing", "Machine Learning", "Physics Simulation", "Formal Methods"],
      achievements: [
        "Published 12+ papers in quantum ML",
        "Led $2M research initiatives",
        "NASA collaboration on TRN systems"
      ],
      linkedin: "https://linkedin.com/in/douglas-nyberg",
      clearance: null
    },
    {
      name: "Haleigh Nyberg", 
      role: "Co-CEO & Commercial Lead",
      title: "Business & Strategy",
      credentials: "NSF GRFP Fellow • Purdue PhD Candidate",
      description: "Deep aerospace industry connections through NASA/Barrios partnerships. Specialized in autonomous system validation and government contract development. Expert in translating technical capabilities into business value.",
      expertise: ["Aerospace Systems", "Government Relations", "Business Development", "Program Management"],
      achievements: [
        "NSF Graduate Research Fellow",
        "Direct NASA/JPL connections",
        "Aerospace industry expertise"
      ],
      linkedin: "https://linkedin.com/in/haleigh-nyberg",
      clearance: null
    },
    {
      name: "AJ Brown",
      role: "CTO & Security Lead",
      title: "Security Architecture", 
      credentials: "TS/SCI Cleared • Microsoft/NSA Veteran",
      description: "Security architecture expert with classified system experience at Microsoft and NSA. Leads formal verification implementation and security-critical system validation for government contracts.",
      expertise: ["Security Architecture", "Formal Verification", "Classified Systems", "Cybersecurity"],
      achievements: [
        "TS/SCI Security Clearance",
        "Microsoft Azure security lead",
        "NSA cryptographic systems"
      ],
      linkedin: "https://linkedin.com/in/aj-brown",
      clearance: "TS/SCI"
    },
    {
      name: "Yousef Alkebsi",
      role: "Software Engineer",
      title: "Platform Development",
      credentials: "Computer Science • Full-Stack Development",
      description: "Platform integration specialist focused on API development and simulation environment connectivity. Expert in modern software architecture and DevOps practices for scalable validation platforms.",
      expertise: ["Full-Stack Development", "API Integration", "Platform Engineering", "DevOps"],
      achievements: [
        "Cloud architecture expertise",
        "Simulation platform integration",
        "Modern web technologies"
      ],
      linkedin: "https://linkedin.com/in/yousef-alkebsi",
      clearance: null
    }
  ]

  const teamStats = [
    {
      value: "50+",
      label: "Years Combined Experience",
      icon: "🎓"
    },
    {
      value: "4",
      label: "Technical Domains Covered",
      icon: "🔬"
    },
    {
      value: "$5M+",
      label: "Research Funding Managed",
      icon: "💰"
    },
    {
      value: "100%",
      label: "Aerospace Mission Critical",
      icon: "🚀"
    }
  ]

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Expert</span> Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A unique combination of physics, AI, aerospace, and security expertise 
              with proven track records in government and commercial sectors.
            </p>
            
            {/* Team Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {teamStats.map((stat, index) => (
                <div key={index} className="glass-dark rounded-xl p-4 text-center hover-lift">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Team grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {team.map((member, index) => (
              <div key={index} className="card-premium hover-lift group">
                <div className="flex flex-col h-full">
                  {/* Header with Avatar and Basic Info */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                        <span className="text-2xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      {member.clearance && (
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center border-2 border-gray-900">
                          <span className="text-xs font-bold text-white">🛡️</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-blue-400 font-semibold mb-1">{member.role}</p>
                      <p className="text-gray-400 text-sm">{member.title}</p>
                      
                      {/* LinkedIn Link */}
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                  
                  {/* Credentials Badge */}
                  <div className="mb-4">
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-3 text-center">
                      <p className="text-sm font-semibold text-blue-300">{member.credentials}</p>
                      {member.clearance && (
                        <p className="text-xs text-red-400 font-semibold mt-1">
                          🔒 {member.clearance} Security Clearance
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-6 flex-grow">
                    <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                  </div>
                  
                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-sm text-gray-300">
                          <span className="text-green-400 mr-2 mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Expertise tags */}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs border border-blue-500/30 hover:bg-blue-600/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Team strengths and competitive advantages */}
          <div className="glass-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">
              Unique Competitive Advantages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-red-400">Security Clearance Access</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  TS/SCI clearance enables exclusive access to classified defense contracts 
                  that competitors cannot bid on, providing unique market advantage.
                </p>
                <div className="mt-3 text-xs text-red-300 font-semibold">
                  🔒 Classified Market Access
                </div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-blue-400">Unmatched Domain Expertise</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Unique combination of quantum ML, planetary science, aerospace engineering, 
                  and security architecture that no competitor possesses.
                </p>
                <div className="mt-3 text-xs text-blue-300 font-semibold">
                  🎓 Cross-Disciplinary Excellence
                </div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-green-400">Direct Industry Access</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Established relationships with NASA, JPL, DoD, and major aerospace contractors 
                  through team networks and university partnerships.
                </p>
                <div className="mt-3 text-xs text-green-300 font-semibold">
                  🤝 Government & Industry Connections
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center space-x-2 glass rounded-lg px-4 py-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Active TS/SCI Clearance</span>
                </div>
                <div className="flex items-center space-x-2 glass rounded-lg px-4 py-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">NSF GRFP Fellows</span>
                </div>
                <div className="flex items-center space-x-2 glass rounded-lg px-4 py-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Purdue Research Partnership</span>
                </div>
                <div className="flex items-center space-x-2 glass rounded-lg px-4 py-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">NASA/DoD Connections</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}