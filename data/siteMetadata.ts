const siteMetadata = {
  siteUrl: "https://isaacmuniz.pro",
  headerTitle: "isaacmuniz.pro",
  authorName: "Isaac Muniz",
  repoLink: "https://github.com/codigoisaac/my-app",
  yearsOfExperience: 5,
  socials: {
    githubLink: "https://github.com/codigoisaac",
    linkedinLink: "https://linkedin.com/in/isaac-muniz",
    substackLink: "https://substack.com/@imuniz",
    twitterHandle: "imunizpro",
    twitterLink: "https://twitter.com/imunizpro",
    phoneNumber: "+55 (19) 98195-7816",
    emailAddress: "contato@isaacmuniz.pro",
    get whatsappLink() {
      return `https://wa.me/${this.phoneNumber.replace(/\D/g, "")}`;
    },
    get emailLink() {
      return `mailto:${this.emailAddress}`;
    },
  },
};

export default siteMetadata;
