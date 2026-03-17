const siteMetadata = {
  headerTitle: "isaacmuniz.pro",
  authorName: "Isaac Muniz",
  repoLink: "https://github.com/codigoisaac/my-app",
  yearsOfExperience: 5,
  socials: {
    githubLink: "https://github.com/codigoisaac",
    linkedinLink: "https://linkedin.com/in/isaac-muniz",
    substackLink: "https://substack.com/@imuniz",
    twitterHandle: "imunizpro",
    phoneNumber: "+55 (19) 98195-7816",
    emailAddress: "eai@isaacmuniz.pro",
    get whatsappLink() {
      return `https://wa.me/${this.phoneNumber.replace(/\D/g, "")}`;
    },
    get emailLink() {
      return `mailto:${this.emailAddress}`;
    },
  },

  // For SEO
  siteUrl: "https://isaacmuniz.pro",
  title: "Isaac Muniz — Desenvolvedor Web & Mobile",
  description:
    "Desenvolvedor com 5 anos de experiência construindo sites, apps e sistemas que resolvem problemas reais e são um prazer de usar.",
  keywords: [
    "desenvolvimento de sites",
    "desenvolvimento de sites em limeira",
    "desenvolvimento de aplicativos",
    "desenvolvimento de aplicativos em limeira",
    "desenvolvimento de sistemas",
    "desenvolvimento de sistemas em limeira",
    "criação de sites",
    "criação de sites em limeira",
    "criação de aplicativos",
    "criação de aplicativos em limeira",
    "criação de sistemas",
    "criação de sistemas em limeira",
    "desenvolvedor fullstack",
    "desenvolvedor web",
    "desenvolvedor frontend",
    "desenvolvedor backend",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "desenvolvimento mobile",
    "Isaac Muniz",
    "desenvolvedor Limeira",
    "desenvolvedor São Paulo",
    "freelancer web",
    "freelancer site",
    "freelancer app",
    "freelancer sistema",
  ],
};

export default siteMetadata;
