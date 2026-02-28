# 🐾 Peddy  
**Your Premium Pet Companion Platform**

**🚀 Live Demo:** [https://peddy-1-htn9.vercel.app/](https://peddy-1-htn9.vercel.app/)

Peddy is a beautifully designed, full-stack Next.js web application dedicated to giving pet owners the absolute best shopping and adoption experience. Whether you're looking for premium food, grooming services, or the perfect pet accessory, Peddy has it all in one immersive interface.

---

## ✨ Features

- **Blazing Fast Performance**: Built on Next.js 14+ (App Router) for an incredibly snappy, SEO-optimized experience.
- **Vibrant & Modern UI**: Tailored with Tailwind CSS v4, utilizing custom fonts (Outfit & Quicksand) to deliver a friendly, premium aesthetic.
- **Interactive Global Cart**: Powered by the React Context API and Framer Motion, enabling a buttery-smooth slide-out checkout experience that dynamically updates globally.
- **Advanced Authentication Flow**: 
  - Full-stack JWT implementation with `jose` and `bcryptjs`.
  - Next.js Edge Middleware for unbreakable route protection.
  - HttpOnly Cookie management resisting client-side tampering.
- **Responsive by Design**: Hand-crafted CSS grid and flexbox logic specifically ensuring the layout morphs flawlessly from 320px mobile screens to 4K desktop environments without a single horizontal scrollbar.

## 🛠️ Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS (v4)
* **State Management:** React Context API
* **Animations:** Framer Motion
* **Icons:** Lucide-React
* **Authentication:** Next.js Route Handlers + JWT Edge Middleware + BcryptJS

## 🚀 Getting Started

To run this application locally, you just need Node.js installed.

1. **Clone the repository**
   ```bash
   git clone https://github.com/mridulRahman01/PEDDY_1.git
   ```

2. **Navigate to the application subdirectory**
   ```bash
   cd next-app
   ```

3. **Install the dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **View the live app**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Since this repository is already built around Next.js, Vercel will instantly recognize the configuration. Simply connect this GitHub repository on the Vercel dashboard, make sure the root directory is set to `next-app`, and click **Deploy**. Vercel will automatically configure the serverless Edge authentication routes and construct the global CDN.
