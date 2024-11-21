export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building QuikNote version 3",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "QuikNote",
    des: "QuikNote is a pioneering digital platform revolutionizing academic resource sharing across Ghana and beyond",
    img: "/quiknote.svg",
    iconLists: ["/php.svg", "/laravel.svg", "/mysql.svg", "/apache.svg", "/git.svg"],
    link: "/quiknoteonline.com",
  },
  {
    id: 2,
    title: "Key Vault Explorer",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/kve.svg",
    iconLists: ["/dockerName.svg", "/git.svg", "/ts.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Fly-deno backend Framework",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/flydeno.svg",
    iconLists: ["/deno.svg", "/mongodb.svg", "/ts.svg", "/aws.svg", "/nginx.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Campus Gem Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/campusgem.svg",
    iconLists: ["/nodejs.svg", "/dockerName.svg", "/handlebars.svg","mongodb.svg"],
    link: "/campusgem.org",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Isaac was a game-changer for our startup. His deep understanding of both software development and infrastructure helped us scale our application efficiently. What sets him apart is his ability to explain complex technical concepts in simple terms and always find innovative solutions to challenging problems.",
    name: "Ayebilla Avoka",
    title: "Co-Founder of Afro Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Richmond Anim Damoah",
    title: "CEO of RADComm Group",
  },
  {
    quote:
      "Working with Isaac on our QuikNote website was a game-changer. He built a blazing-fast, responsive site that doubled our conversion rates. His implementation of modern payment systems and intuitive user flows significantly improved our customer experience. The analytics dashboard he created gives us invaluable insights into user behavior.",
    name: "William Obese Gyau",
    title: "Co-Founder of QuikNote",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "kubernetes",
    img: "/kubernetes.svg",
    nameImg: "kubernetes",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/python-colour.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/helm-icon.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/github-1.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
   {
    id: 6,
    name: "nginx",
    img: "/nginx.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Site Reliability Engineer - Hubtel",
    desc: "Spearheaded SRE initiatives at Hubtel Ghana Limited, leveraging New Relic, Graylog, and Azure DevOps to implement robust monitoring systems and optimize service reliability while reducing mean time to recovery.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Deployment Engineer - AiFi Inc.",
    desc: "Deployed and maintained ML-based retail automation microservices across global clusters using Kubernetes, ArgoCD, and Kustomize, while providing technical mentorship and ensuring high availability.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer",
    desc: "Full-stack developer building and deploying cloud-native applications with modern technologies, integrating CI/CD pipelines and infrastructure as code for seamless delivery",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Backend Engineer",
    desc: "Backend engineer building RESTful with Node.js and Python, designing efficient database schemas and implementing security best practices for enterprise applications.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
