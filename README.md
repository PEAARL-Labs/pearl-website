# PEARL Labs Website

Official website for PEARL Labs - Physics Evaluation for AI Reliability & Logic.

## 🚀 About PEARL Labs

PEARL Labs provides third-party verification and validation (V&V) for autonomous aerospace systems. We're solving the critical gap between AI capability and certification through automated, physics-informed testing and formal verification.

### The Problem We Solve
- Current V&V costs millions per mission and takes 2-3 years
- Mars 2020's TRN system had 8x prediction uncertainty despite years of testing
- Manual validation can't scale to hundreds of autonomous systems

### Our Solution
PEARL's platform provides:
- **Adversarial Testing**: AI-driven edge case discovery
- **Physics-Constrained Validation**: Realistic scenario generation
- **Formal Verification**: Mathematical safety proofs beyond statistical confidence

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Performance**: Turbopack

## 🏃‍♂️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
pearl-website/
├── app/                 # Next.js app router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/          # React components
├── public/             # Static assets (images, etc.)
├── lib/                # Utility functions
└── next.config.ts      # Next.js configuration
```

## 🚢 Deployment

This site is automatically deployed via Vercel on push to the `main` branch.

**Live Site**: [pearl-labs.com](https://pearl-labs.com) *(coming soon)*

## 🔗 Related Repositories

- [pearl-core](https://github.com/PEAARL-Labs/pearl-core) - Main V&V platform (private)
- [pearl-research](https://github.com/PEAARL-Labs/pearl-research) - Research and experiments (private)

## 👥 Team

- **Douglas Nyberg** - Co-CEO & Physics/AI Lead
- **Haleigh Nyberg** - Co-CEO & Commercial Lead  
- **AJ Brown** - CTO & Security Lead
- **Yousef Alkebsi** - Junior Engineer

## 📧 Contact

- GitHub: [@PEAARL-Labs](https://github.com/PEAARL-Labs)

## 📄 License

MIT © 2025 PEARL Labs

---

*Building the trust layer for autonomous aerospace systems.*