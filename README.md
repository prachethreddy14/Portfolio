# My Software Engineering Portfolio - Pracheth Bacholla

A modern, Netflix-inspired portfolio website showcasing a collection of full-stack, backend, and cloud projects built using Java, Spring Boot, React, Node.js, SQL, and AWS. Features production-ready applications, scalable microservices, data dashboards, and real-world problem-solving skills demonstrated during internships at Northern Trust and Prudential.

**Built with:** Next.js 14, TypeScript, Tailwind CSS, React, and deployed on Vercel.

## Features

- 🎬 Netflix-inspired dark theme with horizontal scrolling rows
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🚀 Ready to deploy on Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Links

1. **Resume Link**: Replace `YOUR_RESUME_LINK_HERE` in `app/page.tsx` with your resume URL (Google Drive, Dropbox, or hosted PDF).

2. **LinkedIn**: Replace `YOUR-LINKEDIN-SLUG` in `app/page.tsx` with your actual LinkedIn profile slug.

3. **GitHub Links**: Update the `link` property in the project objects in `app/page.tsx` with your GitHub repository URLs.

### Add More Projects

Edit the `sections` object in `app/page.tsx` to add more projects to any category.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main portfolio page
│   └── globals.css     # Global styles and Tailwind imports
├── public/             # Static assets (add your resume PDF here)
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Technologies Used

### Portfolio Website
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
- **Vercel** - Deployment and hosting platform

### Projects Showcased
- **Backend:** Java, Spring Boot, Node.js, REST APIs, GraphQL, WebSockets
- **Frontend:** React.js, Redux, Material UI, Tailwind CSS
- **Databases:** MySQL, PostgreSQL, MongoDB
- **Cloud & DevOps:** AWS (EC2, S3), Docker, Git, Jenkins, GitHub Actions
- **Languages:** Java, Python, JavaScript, C
- **ML/Data:** Python, Pandas, Scikit-learn, Decision Trees

## License

Personal portfolio project - feel free to use as inspiration for your own portfolio!

