import type { DataType } from "./types";

const data: DataType = {
  firstName: "Sokdara",
  lastName: "Cheng",
  title: "Software Engineer",
  profile: {
    emails: [
      {
        label: "chengsokdara@gmail.com",
        value: "mailto:chengsokdara@gmail.com",
      },
    ],
    githubs: [
      {
        label: "@chengsokdara",
        value: "https://github.com/chengsokdara",
      },
    ],
    linkedin: {
      label: "chengsokdara",
      value: "https://linkedin.com/in/chengsokdara",
    },
    phones: [{ label: "+855-86-558-716", value: "tel:+85586558716" }],
    websites: [
      {
        label: "chengsokdara.github.io",
        value: "https://chengsokdara.github.io",
      },
    ],
  },
  experiences: [
    {
      title: "Freelance Software Engineer",
      company: {
        name: "HireSplit",
        website: "https://www.hiresplit.com",
        location: "Remote",
        date: {
          from: "February 2024",
          to: "Present",
          duration: "Present",
        },
      },
      projects: [
        {
          name: "hiresplit.com",
          website: "https://www.hiresplit.com",
          technology: "NextJs",
          skills:
            "nextjs, react, tailwindcss, material-ui, typescript, firebase",
          duties: [
            "Led development of a Next.js referral platform integrated with ATS systems (Vincere, eBoss).",
            "Built client and candidate dashboards for seamless user interaction.",
            "Designed Firebase Firestore database for efficient data management.",
          ],
        },
      ],
    },
    {
      title: "Software Engineer",
      company: {
        name: "TalkStack A.I.",
        website: "https://talkstack.ai",
        location: "Singapore (Remote)",
        date: {
          from: "August 2023",
          to: "February 2024",
          duration: "7 Months",
        },
      },
      projects: [
        {
          name: "TalkStack API",
          website: "https://talkstack.ai",
          technology: "ExpressJs",
          skills:
            "nodejs, express.js, twilio, openai gpt, deepgram, elevenlabs, play.ht",
          duties: [
            "Developed an Express.js API with Twilio for AI-driven call systems.",
            "Integrated OpenAI GPT for dynamic call scripts and Eleven Labs for human-like voice responses.",
            "Enabled real-time speech analysis with Deepgram and Google Speech SDK.",
          ],
        },
        {
          name: "TalkStack Dashboard",
          website: "https://talkstack.ai",
          technology: "ViteJS",
          skills: "reactjs, vitejs, tailwindcss, reactflow, azure storage blob",
          duties: [
            "Built a drag-and-drop studio page with React Flow for call script creation.",
            "Stored pre-generated voice files in Azure Storage Blob for efficiency.",
          ],
        },
      ],
    },
    {
      title: "Senior Mobile Developer",
      company: {
        name: "Thegoodpsy",
        website: "https://www.crunchbase.com/organization/thegoodpsy",
        location: "Brussels, Belgium (Remote)",
        date: {
          from: "March 2022",
          to: "October 2022",
          duration: "7 Months",
        },
      },
      projects: [
        {
          name: "Thegoodpsy mobile app",
          website: "https://www.crunchbase.com/organization/thegoodpsy",
          technology: "React Native",
          skills:
            "react-native, redux-toolkit, twilio conversation, twilio video webrtc, stripe payment",
          duties: [
            "Collaborated with CTO to port web app features to mobile using React Native.",
            "Integrated Twilio for chat and video calls between psychologists and patients.",
            "Published app to App Store and Google Play with a scalable structure.",
          ],
        },
        {
          name: "Thegoodpsy web app",
          website: "https://www.crunchbase.com/organization/thegoodpsy",
          technology: "Create React App",
          skills: "create-react-app, redux, twilio conversation, twilio video",
          duties: [
            "Added features and resolved bugs to enhance web app performance.",
          ],
        },
      ],
    },
    {
      title: "Senior Web Developer",
      company: {
        name: "The Foundry App",
        website: "https://thefoundry.app",
        location: "Phnom Penh, Cambodia",
        date: {
          from: "April 2020",
          to: "February 2022", // Corrected typo from "2002" to "2022"
          duration: "1 Year, 10 Months",
        },
      },
      projects: [
        {
          name: "KOTRA-Riel mobile app",
          website: "https://apps.apple.com/us/app/kotra-riel/id1548441646",
          technology: "React Native",
          skills: "firebase, redux-toolkit, styled-component, formik, i18next",
          duties: [
            "Led a team of four, mentoring juniors in React Native development.",
            "Built features for product management and reporting with graphic charts.",
            "Managed Firebase backend and app deployment to App Store and Google Play.",
          ],
        },
        {
          name: "cybersecurity-kh.com",
          website: "https://cybersecurity-kh.com",
          technology: "NextJs",
          skills: "next.js, lottie-web, redux-toolkit, tailwindcss, firebase",
          duties: [
            "Developed an admin dashboard for course and quiz management.",
            "Integrated animated SVGs and managed Firebase backend.",
          ],
        },
        {
          name: "MDF commerce",
          website: "https://www.mdfcommerce.com/",
          technology: "NextJs",
          skills: "reactjs, next.js",
          duties: ["Contributed to initial design and development phases."],
        },
      ],
    },
    {
      title: "JavaScript Developer",
      company: {
        name: "Joonaak Delivery",
        website: "https://www.facebook.com/joonaak2u/",
        location: "Phnom Penh, Cambodia",
        date: {
          from: "October 2018",
          to: "December 2019",
          duration: "1 Year, 2 Months",
        },
      },
      projects: [
        {
          name: "Joonaak Driver mobile app",
          website: "https://apkpure.com/joonaak-driver/com.joonaakdriver",
          technology: "React Native",
          skills: "react-native, redux, background-geolocation, graphql",
          duties: [
            "Developed real-time location tracking and map integration for drivers.",
            "Mentored interns on custom UI component creation.",
          ],
        },
        {
          name: "Joonaak Merchant mobile app",
          website:
            "https://apkcombo.com/joonaak-merchant/com.joonaak_merchant_app/",
          technology: "React Native",
          skills: "react-native, redux, graphql",
          duties: [
            "Solo-developed a merchant app with GraphQL and intuitive UI/UX.",
          ],
        },
        {
          name: "Billing Telegram bot",
          website: "https://joonaak-bill-bot.web.app/",
          technology: "ReactJs / NodeJs",
          skills: "reactjs, nodejs, express.js, telegraf.js, ant design",
          duties: [
            "Built a Telegram bot with Node.js, hosted on Firebase Cloud Functions.",
            "Created a web dashboard using React and Ant Design.",
          ],
        },
        {
          name: "Joonaak Hub v2",
          website: "https://joonaak-hub.web.app/delivery",
          technology: "NextJs",
          skills: "next.js, stora, ant design, firebase firestore",
          duties: [
            "Developed a server-side rendered app with Next.js and Ant Design UI.",
          ],
        },
        {
          name: "Joonaak Hub",
          website: "http://joonaakhub.com/",
          technology: "Create React App",
          skills: "reactjs, graphql, redux",
          duties: [
            "Quickly learned React and GraphQL to build multiple features.",
          ],
        },
        {
          name: "Joonaak Agent mobile app",
          technology: "React Native",
          skills: "reactjs, graphql, redux",
          duties: ["Prototyped an agent app in collaboration with the CEO."],
        },
      ],
    },
  ],
  projects: [
    {
      name: "Wedding Manager",
      website:
        "https://apkpure.com/wedding-manager/com.chengsokdara.wedding.manager",
      descriptions: [
        "Built an app to manage guest lists and gifts with detailed reporting.",
      ],
    },
    {
      name: "KhmerQR - QR Scanner and Generator",
      website:
        "https://apkpure.com/khmerqr-khmer-qr-scanner-and/com.rawewhat.khmerqr",
      descriptions: [
        "Created a fast QR scanner/generator with Expo and Redux in two weeks.",
      ],
    },
    {
      name: "KHmeter",
      website:
        "https://apkpure.com/khmeter-khmer-taximeter/com.daradev.taximeter",
      descriptions: [
        "Developed a fare calculator with Google Maps integration.",
      ],
    },
    {
      name: "Khmer Live TV",
      website: "https://apkpure.com/khmer-live-tv/com.daradev.tv",
      descriptions: [
        "Built a live TV streaming app with Firebase for real-time updates.",
      ],
    },
    {
      name: "Khmer Unicode Installer",
      website:
        "https://apkpure.com/khmer-unicode-installer/com.blogspot.androidsanctum.kui",
      descriptions: [
        "Developed a root-access app to install Khmer Unicode on Android.",
      ],
    },
    {
      name: "Android Sanctum",
      website: "http://androidsanctum.blogspot.com",
      descriptions: ["Created utilities like a Khmer keyboard and dictionary."],
    },
    {
      name: "Custom Android ROMs",
      descriptions: [
        {
          name: "HomICS",
          website: "http://forum.xda-developers.com/showthread.php?t=1712901",
        },
        {
          name: "MokeeOS",
          website: "http://forum.xda-developers.com/showthread.php?t=1691573",
        },
      ],
    },
  ],
  opensources: [
    {
      name: "use-whisper",
      website: "https://github.com/chengsokdara/use-whisper",
      description:
        "React hook for OpenAI Whisper with real-time transcription (1k+ GitHub stars).",
    },
    {
      name: "StoRa",
      website: "https://github.com/rawewhat/stora",
      description: "Lightweight Redux alternative using React hooks.",
    },
    {
      name: "ReactRa",
      website: "https://github.com/rawewhat/reactra",
      description: "React starter kit with Parcel and SSR support.",
    },
    {
      name: "QueRa",
      website: "https://github.com/rawewhat/quera",
      description: "Firestore client built with React hooks.",
    },
    {
      name: "RoutRa",
      website: "https://github.com/rawewhat/routra",
      description: "Simple and efficient React router.",
    },
    {
      name: "TelegRa",
      website: "https://github.com/rawewhat/telegra",
      description: "Node.js wrapper for Telegram Bot API.",
    },
  ],
  educations: [
    {
      year: "2001 - 2005",
      diplomas: "High School Diploma",
      schools: ["Bak Touk High School"],
    },
    {
      year: "2006 - 2010",
      diplomas: "Some Colleges",
      schools: [
        {
          name: "Norton University",
          website: "https://www.norton-u.com/",
        },
        {
          name: "Royal University of Phnom Penh",
          website: "http://www.rupp.edu.kh/",
        },
        {
          name: "Institute of Foreign Language",
          website: "http://www.rupp.edu.kh/ifl/",
        },
      ],
    },
    {
      year: "2011 - 2012",
      diplomas: [
        "Certificate of General English Program (GEP)",
        "IELTS with 6.5 overall score",
      ],
      schools: [
        {
          name: "Australian Centre for Education (ACE)",
          website: "https://acecambodia.org/",
        },
      ],
    },
  ],
  skills: [
    {
      name: "Frontend",
      libraries: ["ReactJs", "NextJs", "TailwindCSS", "Material-UI"],
    },
    {
      name: "Mobile",
      libraries: ["React Native", "Redux Toolkit", "React Navigation"],
    },
    {
      name: "Backend",
      libraries: ["NodeJs", "ExpressJs", "GraphQL", "Firebase"],
    },
    {
      name: "Tools",
      libraries: ["GitHub", "TypeScript", "Figma"],
    },
  ],
};

export default data;
