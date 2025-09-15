import Card from '../ui/Card'

export default function Team() {
  const team = [
    {
      name: "Douglas Nyberg",
      role: "Co-CEO & PI",
      title: "Physics/AI Lead",
      credentials: "BS Physics/CS, Quantum ML at Purdue",
      description: "Led 7 researchers in quantum machine learning applications. Expert in physics-informed AI and formal verification methods for autonomous systems.",
      expertise: ["Quantum Computing", "Machine Learning", "Physics Simulation", "Formal Methods"]
    },
    {
      name: "Haleigh Nyberg", 
      role: "Co-CEO",
      title: "Commercial Lead",
      credentials: "NSF GRFP Fellow, Purdue PhD Candidate",
      description: "NASA/Barrios connections with deep aerospace industry knowledge. Specialized in autonomous system validation and government contract development.",
      expertise: ["Aerospace Systems", "Government Relations", "Business Development", "Program Management"]
    },
    {
      name: "AJ Brown",
      role: "CTO",
      title: "Security Lead", 
      credentials: "TS/SCI Clearance, Microsoft/NSA Experience",
      description: "Security architecture expert with classified system experience. Leads formal verification implementation and security-critical system validation.",
      expertise: ["Security Architecture", "Formal Verification", "Classified Systems", "Cybersecurity"]
    },
    {
      name: "Yousef Alkebsi",
      role: "Software Engineer",
      title: "Platform Development",
      credentials: "Computer Science, Full-Stack Development",
      description: "Platform integration specialist focused on API development and simulation environment connectivity. Expert in modern software architecture.",
      expertise: ["Full-Stack Development", "API Integration", "Platform Engineering", "DevOps"]
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A unique combination of physics, AI, aerospace, and security expertise 
              with proven track records in government and commercial sectors.
            </p>
          </div>
          
          {/* Team grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {team.map((member, index) => (
              <Card key={index} className="team-card">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                    <p className="text-blue-400 text-center font-semibold">{member.role}</p>
                    <p className="text-gray-400 text-center text-sm">{member.title}</p>
                  </div>
                  
                  {/* Credentials */}
                  <div className="mb-4">
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <p className="text-sm font-semibold text-green-400">{member.credentials}</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-6 flex-grow">
                    <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                  </div>
                  
                  {/* Expertise tags */}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Team strengths */}
          <div className="glass-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">
              Competitive Advantages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-red-400">Security Clearance</h4>
                <p className="text-gray-300 text-sm">
                  TS/SCI clearance enables access to classified contracts that competitors cannot bid on
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Domain Expertise</h4>
                <p className="text-gray-300 text-sm">
                  Unique combination of ML, planetary science, and security that no competitor possesses
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-green-400">Industry Connections</h4>
                <p className="text-gray-300 text-sm">
                  Direct relationships with NASA, JPL, and major aerospace contractors through team networks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}