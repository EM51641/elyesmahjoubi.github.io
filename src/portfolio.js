/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Elyes Mahjoubi",
  description:
    "I have a great passion for applied mathematics. I currently graduated from HEC Lausanne, where I inherited a strong technical and I am, now, aiming to specialize in mathematical modeling and quantitative research.",
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
  //nickname: "EM51641",
  subTitle:
    "Passionate about Maths and Finance, I aim to specialize in mathematical modeling and quantitative research.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  //portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/EM51641",
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
      title: "Mathematical Modeling & Finance",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing stochastic volatility models to evaluate option prices fairly",
        "⚡ Experience in creating risk management tools to find portfolios' exposures",
        "⚡ Complex quantitative modeling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
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
          fontAwesomeClassname: "cib:r",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
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
      subtitle: "B.S. in Economics",
      logo_path: "HEC_Lausanne Logo.png",
      alt_name: "HEC Lausanne",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ Emphasised on macroeconomics, microeconomics and finance.",
        "⚡ Consolidated my skills in programming, mathematics and statistics.",
        "⚡ Choose a numerous of research-driven lessons.",
      ],
      website_link: "https://www.unil.ch",
    },

    {
      title: "HEC Lausanne, University of Lausanne",
      subtitle: "M.S. in Finance",
      logo_path: "HEC_Lausanne Logo.png",
      alt_name: "HEC Lausanne",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ Emphasised on mathematical finance.",
        "⚡ Major in asset and risk Management.",
        "⚡ Academic thesis on the topic of 'Rough Volatility Modeling' in option pricing obtained with a grade of 6.0/6.0.",
      ],
      website_link: "https://www.unil.ch",
    },
  ],
};

const certifications = {
  certifications: [
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
            "⚡ Compared the efficiency and accuracy of a slate of option pricing models.",
            "⚡ Modelized volatility surfaces of various models using Gaussian processes.",
            "⚡ Used machine learning to forecast future market expectations based on the current term structure.",
            "⚡ Massively consolidated my knowledge of non-Markovian processes.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Work",
      experiences: [
        {
          title: "Quantitative Analyst Intern",
          company: "Biat Asset Management",
          company_url: "https://www.biat.com.tn",
          logo_path: "biat_logo.png",
          duration: "August - September 2019 ",
          location: "Tunis, Tunisia",
          description: [
            "⚡ Recommended both SICAVs and FCPs mutual funds to customers.",
            "⚡ Updated very known Financial metrics for some mutual funds.",
            "⚡ Studied Tunisia’s investment laws for mutual funds.",
            "⚡ Proposed a more efficient metric to analyze the conditional value-at-risk using a famous research paper.",
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
            "⚡ Supervised participatory conversations between geopolitical experts and students.",
            "⚡ Supervised a Debate on the 16th October 2018 between two political groups: UDC and PS.",
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
            "⚡ Represented Luxembourg at the NATO committee.",
            "⚡ Participated in managing a crisis simulation between the United States of America and Russia.",
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
            "⚡ Represented Colombia at the World Health Organization committee.",
            "⚡ Helped propose a cooperation campaign across the committee members for the typical treatment of mental illnesses.",
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
    "My work focuses on the use of a vast variety of stochastic models to manage portfolios' exposures and estimate options' prices.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research",
  description: "I have worked on several research projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "CV_photo.jpg",
    description:
      "You can message me, I can help you in my fields of interests.",
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
    subtitle: "If you have a request about my work, you can email me at:",
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
