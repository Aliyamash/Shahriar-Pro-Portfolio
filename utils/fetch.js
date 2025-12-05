// utils/fetch.js – نسخه نهایی مخصوص علی خفن با عکس‌های واقعی خودش! 

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const getFetch = async (url) => {
  console.log("Mock request to:", url);
  await delay(400);

  // 1. صفحه اصلی – محصولات
  if (url.includes('/products')) {
    return {
      success: true,
      products: [
        {
          id: 1,
          title: "Professional Corporate Website",
          image: "/img/portfolio-one.png",     // عکس خودت
          points: 4.9,
          main_price: "280",
          discount_price: "199",
          pre_view: "Fully responsive corporate website with admin panel, blog and strong SEO",
          slug: "corporate-website-pro"
        },
        {
          id: 2,
          title: "Online Store + Payment Gateway",
          image: "/img/portfolio-two.png",     // عکس خودت
          points: 5.0,
          main_price: "480",
          discount_price: "379",
          pre_view: "Complete e-commerce platform with Zarinpal, inventory and order management",
          slug: "online-shop-pro"
        },
        {
          id: 3,
          title: "High-Conversion Landing Page",
          image: "/img/portfolio-three.png",   // عکس خودت
          points: 4.8,
          main_price: "199",
          discount_price: "139",
          pre_view: "Lead-generating landing page with fast loading and persuasive design",
          slug: "landing-page-pro"
        },
        {
          id: 4,
          title: "Custom UI/UX Design",
          image: "/img/portfolio-four.png",    // عکس خودت
          points: 4.7,
          main_price: "350",
          discount_price: "259",
          pre_view: "Modern interface design in Figma with interactive prototype",
          slug: "ui-ux-design"
        },
        {
          id: 5,
          title: "Professional SEO Package",
          image: "/img/portfolio-five.png",    // عکس خودت
          points: 4.6,
          main_price: "420",
          discount_price: "319",
          pre_view: "Technical SEO + Content + Backlinks – Guaranteed first page ranking",
          slug: "seo-pro"
        },
        {
          id: 6,
          title: "Custom CRM & Dashboard",
          image: "/img/portfolio-six.png",     // عکس خودت
          points: 5.0,
          main_price: "680",
          discount_price: "549",
          pre_view: "Complete business management system with customers, invoices and analytics",
          slug: "crm-dashboard"
        }
      ]
    };
  }


if (url.includes('/articles')) {
  return {
    success: true,
    articles: [
      {
        id: 1,
        title: "Why Next.js 14 is the Future",
        excerpt: "App Router, Server Components and everything you need to know in 2025",
        image: "/img/portfolio-one.png",
        writer: "Sarah Chen",
        time_to_read: 7,
        date: "2025-02-20"
      },
      {
        id: 2,
        title: "How I Built My Portfolio in 3 Days",
        excerpt: "From zero to a professional website using Next.js 14 and Tailwind",
        image: "/img/portfolio-two.png",
        writer: "Marcus Weber",
        time_to_read: 5,
        date: "2025-02-15"
      },
      {
        id: 3,
        title: "Best Practices for Modern Web Design",
        excerpt: "Performance, accessibility and user experience tips from real projects",
        image: "/img/portfolio-three.png",
        writer: "Emma Larsson",
        time_to_read: 9,
        date: "2025-02-10"
      }
    ]
  };
}

  if (url.includes('/product/')) {
  const parts = url.split('/');
  const slug = parts[parts.length - 1];

  const productDatabase = [
    {
      id: 1,
      title: "Professional Corporate Website",
      description: "Fully responsive corporate website with admin panel, blog system, contact forms, and professional SEO optimization tailored to your brand.",
      points: 4.9,
      main_price: "280",
      discount_price: "199",
      slug: "corporate-website-pro",
      image: "/img/portfolio-one.png",
      features: ["Admin Panel", "Blog System", "Contact Forms", "SEO Optimized", "Mobile First"]
    },
    {
      id: 2,
      title: "Online Store + Payment Gateway",
      description: "Complete e-commerce platform with Zarinpal/Saman payment gateway, inventory management, shopping cart, order tracking, and user accounts.",
      points: 5.0,
      main_price: "480",
      discount_price: "379",
      slug: "online-shop-pro",
      image: "/img/portfolio-two.png",
      features: ["Payment Gateway", "Inventory System", "Shopping Cart", "Order Tracking", "User Dashboard"]
    },
    {
      id: 3,
      title: "High-Conversion Landing Page",
      description: "Conversion-focused landing page with ultra-fast loading, persuasive copywriting, lead capture forms, and A/B testing ready structure.",
      points: 4.8,
      main_price: "199",
      discount_price: "139",
      slug: "landing-page-pro",
      image: "/img/portfolio-three.png",
      features: ["Lightning Fast", "Lead Capture", "Mobile Optimized", "Analytics Ready", "A/B Testing"]
    },
    {
      id: 4,
      title: "Custom UI/UX Design",
      description: "Modern interface design using Figma with interactive prototypes, user flow optimization, and complete brand guidelines.",
      points: 4.7,
      main_price: "350",
      discount_price: "259",
      slug: "ui-ux-design",
      image: "/img/portfolio-four.png",
      features: ["Figma Design", "Interactive Prototype", "User Testing", "Brand Guidelines", "Design System"]
    },
    {
      id: 5,
      title: "Professional SEO Package",
      description: "Complete SEO solution including technical optimization, content strategy, high-authority backlinks, and monthly performance reports.",
      points: 4.6,
      main_price: "420",
      discount_price: "319",
      slug: "seo-pro",
      image: "/img/portfolio-five.png",
      features: ["Technical SEO", "Content Strategy", "Backlink Building", "Monthly Reports", "Google Rank #1 Guarantee"]
    },
    {
      id: 6,
      title: "Custom CRM & Dashboard",
      description: "Full-featured business management system with customer database, invoicing, support tickets, analytics, and team collaboration tools.",
      points: 5.0,
      main_price: "680",
      discount_price: "549",
      slug: "crm-dashboard",
      image: "/img/portfolio-six.png",
      features: ["Customer Management", "Invoicing", "Support Tickets", "Real-time Analytics", "Team Access"]
    }
  ];

  const foundProduct = productDatabase.find(p => p.slug === slug);
  if (foundProduct) return { success: true, ...foundProduct };
  return { success: false, message: "Product not found" };
}

  return { success: true, data: [] };
};

const postFetch = async (url, body) => {
  console.log("Mock POST:", url, body);
  await delay(500);
  return { success: true, message: "Request successful" };
};

const postFormFetch = async (url, body) => {
  console.log("Mock Form POST:", url, body);
  await delay(500);
  return { success: true, message: "File uploaded" };
};

export { getFetch, postFetch, postFormFetch };