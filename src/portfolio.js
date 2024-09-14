/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Elyes Mahjoubi",
  description:
    "I have a great passion for applied mathematics and programming. I graduated from HEC Lausanne, where I developed a strong technical foundation. I am now aiming to specialize in software engineering, with a strong emphasis on scalability.",
  og: {
    title: "Elyes Mahjoubi's Portfolio",
    type: "website",
    url: "https://em51641.github.io",
  },
};
//Home Page
const greeting = {
  title: "Elyes Mahjoubi",
  logo_name: "Elyes Mahjoubi",
  nickname: "EM51641",
  subTitle:
    "I have a great passion for applied mathematics and programming. I graduated from HEC Lausanne, where I developed a strong technical foundation. I am now aiming to specialize in software engineering, with a strong emphasis on scalability.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/EM51641",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/EM51641",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/elyes-mahjoubi-730535146",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
];

const skills = {
  data: [
    {
      title: "Mathematical Modeling, Finance & Programming",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developed stochastic volatility models for fair option pricing.",
        "⚡ Created risk management tools to assess portfolio exposures.",
        "⚡ Conducted complex quantitative modeling for dynamic forecasting and time series analysis.",
        "⚡ Mastered various API development frameworks to enhance data flow.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Matlab",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos:r-lang",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Javascript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "logos:typescript",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "logos:nodejs",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Django Framework",
          fontAwesomeClassname: "vscode-icons:file-type-django",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos:flask",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Phoenix",
          fontAwesomeClassname: "logos:phoenix",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Selenium",
          fontAwesomeClassname: "logos:selenium",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "HEC Lausanne, University of Lausanne",
      subtitle: "M.S. in Finance",
      logo_path: "HEC_Lausanne Logo.png",
      alt_name: "HEC Lausanne",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ Focused on mathematical finance.",
        "⚡ Specialized in asset and risk management.",
        "⚡ Completed an academic thesis on 'Rough Volatility Modeling' in option pricing, achieving a grade of 6.0/6.0.",
      ],
      website_link: "https://www.unil.ch",
    },
    {
      title: "HEC Lausanne, University of Lausanne",
      subtitle: "B.S. in Economics",
      logo_path: "HEC_Lausanne Logo.png",
      alt_name: "HEC Lausanne",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ Focused on macroeconomics, microeconomics, and finance.",
        "⚡ Strengthened skills in programming, mathematics, and statistics.",
        "⚡ Selected numerous research-driven courses.",
      ],
      website_link: "https://www.unil.ch",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Stochastic Processes",
      subtitle: "- Vladimir Panov",
      logo_path: "higher_school_of_econs_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/3DCB689VCWM8?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      alt_name: "Imperial College London",
      color_code: "#003E74",
    },
    {
      title: "Mathematics for Machine Learning: Linear Algebra",
      subtitle: "- David Dye",
      logo_path: "imperial_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/H2YL455VALEW",
      alt_name: "Imperial College London",
      color_code: "#003E74",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Research, Work and Volunteership",
  //description:
  //  "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",

  sections: [
    {
      title: "Research",
      experiences: [
        {
          title: " Research on the topic of Rough Volatility",
          company: "HEC Lausanne, University of Lausanne",
          company_url:
            "https://github.com/EM51641/Master-Thesis-/blob/main/Master's%20Thesis.pdf",
          logo_path: "HEC_Lausanne Logo.png",
          duration: "February - September 2021 ",
          location: "Lausanne, Switzerland",
          description: [
            "⚡ Evaluated the efficiency and accuracy of various option pricing models.",
            "⚡ Modeled volatility surfaces using Gaussian processes for different financial models.",
            "⚡ Applied machine learning techniques to forecast future market expectations based on the current term structure.",
            "⚡ Deepened my understanding of non-Markovian processes.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "Gartner",
          company_url: "https://www.gartner.com",
          logo_path: "gartner_logo.svg",
          duration: "From January 2024",
          location: "Barcelona, Spain",
          description: [
            "⚡ Enhanced the repository API by applying the Query Specification pattern, resulting in improved query flexibility and maintainability.",
            "⚡ Expanded the GraphQL schema by incorporating new types and resolvers to support additional critical functionalities, including the ability to display reviews filtered by various facets such as category, industry, and more.",
            "⚡ Tracked latency in Datadog to identify cache reshuffle alternatives due to slow warm-up times, and generated supporting statistics to back the findings.",
            "⚡ Developed new domains and services to retrieve data from various sources, including EAVs, traditional RDBMS tables, and persistent in-memory storage.",
            "⚡ Managed deployments on EKS clusters with Kubernetes, utilizing Helm for package management and the CSI driver for storage provisioning.",
            "⚡ Oversaw data ingestion processes and the creation/update of Kafka consumers.",
            "⚡ Extanded my knowledge on RDS, ECR, IAM, Route53, CloudFront, Secret Manager and other AWS services.",
          ],
          color: "#0879bf",
        },
        {
          title: "Software Developer",
          company: "Amazon",
          company_url: "https://www.amazon.com",
          logo_path: "amazon_logo.svg",
          duration: "May 2022 - October 2023",
          location: "Iasi, Romania",
          description: [
            "⚡ Built and maintained a REST API in Python (Flask) to extract data from the OLAP Redshift Database, enabling associates to add rules and automatically raise tickets when rules are broken, saving the company over $1M per month.",
            "⚡ Implemented and maintained a REST API to automate invoice filling for sellers, using PostgreSQL, NestJS, and TypeORM, with a PySimpleGUI interface for associates to commit states temporarily and send forms to the Amazon vendor micro-service, saving the company $500K.",
          ],
          color: "#0879bf",
        },
        {
          title: "Quantitative Analyst Intern",
          company: "Biat Asset Management",
          company_url: "https://www.biat.com.tn",
          logo_path: "biat_logo.png",
          duration: "August - September 2019",
          location: "Tunis, Tunisia",
          description: [
            "⚡ Developed a more realistic metric for analyzing conditional value at risk, inspired by the research of McNeil and Frey (2000).",
            "⚡ Automated the generation of key financial indexes, including Sharpe ratios and volatility metrics, using Python programs.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Debate Manager",
          company: "Mosaique Lausanne",
          company_url: "https://www.asso-unil.ch/mosaique/",
          logo_path: "mosaique_logo.jpeg",
          duration: "Janvier 2018 - Fevrier 2019",
          location: "Lausanne, Switzerland",
          description: [
            "⚡ Facilitated discussions between geopolitical experts and students.",
            "⚡ Helped organize a debate on October 16, 2018, between two political groups: UDC and PS.",
          ],
          color: "#4285F4",
        },
        {
          title: "Prague MUN Delegate",
          company: "Mosaique Lausanne",
          company_url: "https://www.asso-unil.ch/mosaique/",
          logo_path: "mosaique_logo.jpeg",
          duration: "February 2019",
          location: "Lausanne, Switzerland",
          description: [
            "⚡ Represented Luxembourg in the NATO committee.",
            "⚡ Engaged in managing a crisis simulation between the United States and Russia.",
          ],
          color: "#D83B01",
        },
        {
          title: "Harvard World MUN Delegate",
          company: "MUN EPFL",
          company_url: "https://munsite.onrender.com",
          logo_path: "mun_logo.jpeg",
          duration: "Mars 2018",
          location: "Panama, Panama City",
          description: [
            "⚡ Represented Colombia in the World Health Organization committee.",
            "⚡ Contributed to proposing a cooperative campaign among committee members for the standard treatment of mental illnesses.",
          ],
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects primarily focus on software development, emphasizing clean coding and architecture to counter real world issues. In the past, I created several software solutions that utilize various stochastic models to manage portfolio exposures and estimate option prices.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research",
  description: "I have participated in few research projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "CV_photo.jpg",
    description:
      "You can message me, and I can help you in my fields of interest.",
  },
  //blogSection: {
  //  title: "Email Address",
  //subtitle:
  //  "For individual fundamental empowerment, you can ",
  //  link: "elyesmahjoubi@gmail.com",
  //  avatar_image_path: "address_image.svg",
  //},
  addressSection: {
    title: "Email Address",
    subtitle: "For inquiries regarding me or my work, please email me at:",
    location_map_link: "mailto:elyesmahjoubi@gmail.com",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    //  title: "Phone Number",
    //  subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
