### README.md

```markdown
# Eventos Granada Portfolio (La mami de Ary)

## Overview

**La mami de Ary** is a mobile-first website designed to help local entrepreneurs in Granada showcase and organize unforgettable events. This project is built with [Astro](https://astro.build/) and styled using [Tailwind CSS](https://tailwindcss.com/). The website features a landing page, an "About Us" section, an event portfolio, and a contact page to help businesses reach out and connect with their audience.

---

## Features

- **Mobile-First Design:** Optimized for mobile devices to ensure a seamless user experience.
- **Landing Page:** Highlighting the services and unique value of Eventos Granada.
- **About Us:** Informative section to introduce the team and their expertise.
- **Event Portfolio:** A showcase of event examples to inspire potential clients.
- **Contact Page:** A user-friendly form for inquiries and communication.
- **SEO-Friendly:** Built with modern web technologies to improve search engine visibility.

---

## Technologies Used

- **Astro**: A fast, modern static site generator.
- **Tailwind CSS**: Utility-first CSS framework for custom styling.
- **TypeScript**: Ensures type safety and enhances code maintainability.
- **Node.js**: Backend environment for managing dependencies.

---

## Folder Structure

```plaintext
EventosGranada/
├── public/
│   ├── images/               # Static assets (images, icons, etc.)
│   ├── favicon.ico           # Favicon for the website
│   └── assets/               # Additional public assets
├── src/
│   ├── components/           # Reusable components
│   ├── layouts/              # Layout templates for the pages
│   ├── pages/                # Website pages
│   └── styles/               # Custom CSS or Tailwind configurations
├── astro.config.mjs          # Astro configuration file
├── tailwind.config.cjs       # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation
```

---

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v8 or higher)

### Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/elenavesc/EventosGranada.git
   cd EventosGranada
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## Deployment

To build and deploy the website:

1. Build the static site:
   ```bash
   npm run build
   ```

2. Preview the built site locally:
   ```bash
   npm run preview
   ```

3. Deploy the contents of the `dist/` folder to your preferred hosting platform (e.g., Netlify, Vercel).

---

## Contributing

We welcome contributions from the community! Please feel free to submit issues or pull requests to help improve this project.

---

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

## Acknowledgments

Special thanks to local entrepreneurs in Granada for inspiring this project and to the developers behind Astro and Tailwind CSS for creating amazing tools for web development.

---

## Contact

For questions or collaboration inquiries, please contact us through the [contact page](http://localhost:3000/contact) of the website.

```