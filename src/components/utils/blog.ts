export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
}

export const BLOG_CATEGORIES = [
  { id: 'entrepreneurship', name: 'Entrepreneurship' },
  { id: 'funding', name: 'Funding Tips' },
  { id: 'case-studies', name: 'Case Studies' },
  { id: 'investment', name: 'Investment' },
  { id: 'startup', name: 'Startup Growth' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "10 Tips for Pitching to Investors",
    summary: "Master the art of startup pitching with these proven strategies from successful entrepreneurs.",
    content: `
      <p>Creating a compelling pitch for investors is crucial for startup success. Here's a comprehensive guide to help you nail your next investor presentation.</p>

      <h2>1. Know Your Audience</h2>
      <p>Research your potential investors thoroughly. Understand their portfolio, investment thesis, and what they look for in startups. This knowledge will help you tailor your pitch to their specific interests and requirements.</p>

      <h2>2. Tell a Compelling Story</h2>
      <p>Don't just present facts and figures. Weave them into a narrative that captures attention and makes your startup memorable. Start with the problem you're solving and why you're passionate about solving it.</p>

      <h2>3. Show Traction</h2>
      <p>Investors want to see evidence that your business model works. Highlight key metrics, customer testimonials, and growth trends. Use concrete numbers whenever possible.</p>

      <blockquote>
        "The best pitches combine passion with data-driven insights to tell a compelling story about the future."
      </blockquote>

      <h2>4. Know Your Numbers</h2>
      <p>Be prepared to discuss your financials in detail. This includes:</p>
      <ul>
        <li>Current revenue and growth rate</li>
        <li>Customer acquisition costs</li>
        <li>Lifetime value of customers</li>
        <li>Burn rate and runway</li>
        <li>Funding requirements and use of funds</li>
      </ul>

      <h2>5. Address the Competition</h2>
      <p>Show that you understand your market and competitive landscape. Explain your unique advantages and how you plan to maintain them.</p>
    `,
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=2070",
    date: "March 10, 2024",
    category: "Entrepreneurship",
    author: "Sarah Johnson",
    readTime: "5 min read"
  },
  {
    id: '2',
    title: "Understanding Venture Capital Funding Rounds",
    summary: "A comprehensive guide to Series A, B, C funding rounds and what they mean for your startup.",
    content: `
      <p>Understanding the different stages of venture capital funding is crucial for entrepreneurs looking to raise capital. This guide breaks down each funding round and what investors expect.</p>

      <h2>Pre-Seed and Seed Funding</h2>
      <p>The earliest stage of funding helps startups move from idea to initial product development. Typically raised from angel investors, friends and family, or early-stage venture funds.</p>

      <h2>Series A Funding</h2>
      <p>Series A focuses on optimizing your product and business model. Investors look for:</p>
      <ul>
        <li>Strong product-market fit</li>
        <li>Initial revenue traction</li>
        <li>Clear path to scaling</li>
        <li>Strong team in key positions</li>
      </ul>

      <blockquote>
        "Series A is about proving your business model works and can scale efficiently."
      </blockquote>

      <h2>Series B and Beyond</h2>
      <p>Later rounds focus on scaling what's already working. Key considerations include:</p>
      <ul>
        <li>Market expansion opportunities</li>
        <li>Revenue growth and profitability</li>
        <li>Operational efficiency</li>
        <li>Competition and market position</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070",
    date: "March 8, 2024",
    category: "Funding",
    author: "Michael Chen",
    readTime: "7 min read"
  },
  {
    id: '3',
    title: "From Idea to IPO: The Journey of TechStart",
    summary: "How a small startup transformed into a publicly traded company through strategic partnerships.",
    content: `
      <p>The journey from startup to IPO is filled with challenges, pivots, and crucial decisions. Here's how TechStart navigated this path successfully.</p>

      <h2>The Early Days</h2>
      <p>TechStart began in a small garage with three founders and a vision to revolutionize cloud computing. The first year was focused on:</p>
      <ul>
        <li>Product development and iteration</li>
        <li>Customer discovery</li>
        <li>Building the core team</li>
      </ul>

      <h2>Growth Phase</h2>
      <p>After securing Series A funding, the company focused on scaling operations:</p>
      <ul>
        <li>Expanding the engineering team</li>
        <li>Building sales and marketing</li>
        <li>Establishing strategic partnerships</li>
      </ul>

      <blockquote>
        "Success in tech isn't just about the product - it's about timing, team, and relentless execution."
      </blockquote>

      <h2>The Road to IPO</h2>
      <p>The final stages involved:</p>
      <ul>
        <li>Financial preparation and audits</li>
        <li>Building investor relations</li>
        <li>Regulatory compliance</li>
        <li>Market timing and execution</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=2070",
    date: "March 5, 2024",
    category: "Case Studies",
    author: "David Wilson",
    readTime: "10 min read"
  }
];