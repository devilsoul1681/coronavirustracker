# 🦠 COVID-19 Tracker - Premium Edition

A highly interactive and visually stunning COVID-19 tracker built with **React 18**. This application provides real-time global and country-specific data, historical trends, and premium data visualizations using a modern **Glassmorphism** design system.

![Status](https://img.shields.io/badge/Status-Fixed_%26_Revamped-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Chart.js](https://img.shields.io/badge/Chart.js-4.4.0-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Key Features

- 🌍 **Global Overview**: Real-time statistics for confirmed cases, recoveries, and deaths worldwide.
- 🏳️ **Country-Level Insights**: Search and select from over 200 countries to get specific data.
- 📈 **Historical Trends**: Interactive line and bar charts showing data progression over the last 120 days.
- 💎 **Premium UI/UX**:
  - **Glassmorphism Design**: Frosted glass effects, vibrant gradients, and modern typography.
  - **Dark Mode Optimization**: High-contrast dark theme for better visibility.
  - **Smooth Animations**: Real-time counter animations and subtle transitions.
  - **Fully Responsive**: Optimized for all screen sizes from mobile to ultra-wide displays.
- 📡 **Reliable Data**: Powered by the [disease.sh](https://disease.sh) Open Disease Data API.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 18](https://reactjs.org/) |
| **Styling** | Vanilla CSS3 (Glassmorphism / Custom Design System) |
| **Charts** | [Chart.js 4](https://www.chartjs.org/) & [react-chartjs-2](https://react-chartjs-2.js.org/) |
| **Data Fetching** | [Axios](https://axios-http.com/) |
| **Animations** | [React CountUp](https://github.com/inorganik/react-countup) |
| **Icons** | Emojis & Custom CSS |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devilsoul1681/coronavirustracker.git
   cd coronavirustracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running Locally

To start the development server:
```bash
npm start
```
The application will be available at `http://localhost:3000`.

> [!NOTE]
> This project has been updated to use `react-scripts` v5.0.1, which is compatible with modern Node.js versions without additional configuration.

---

## 📦 Production Build

To create an optimized production bundle:
```bash
npm run build
```

---

## 🔧 Revamp Details

This project was originally built using the deprecated `mathdro.id` API. It has been completely re-engineered to:
- Use the **disease.sh** API for reliable, real-time data.
- Transition from Material-UI to a **Custom Glassmorphism** aesthetic.
- Upgrade to **React 18** and **Chart.js 4** for improved performance.
- Fix legacy OpenSSL issues found in older React projects.

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---
*Developed with ❤️ by [devilsoul1681](https://github.com/devilsoul1681)*
