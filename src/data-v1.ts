import type { DataType } from "./types";

const data: DataType = {
  firstName: "Sokdara",
  lastName: "Cheng",
  title: "Software Engineer",
  profile: {
    emails: [
      {
        label: "chengsokdara\n@gmail.com",
        value: "mailto:chengsokdara@gmail.com",
      },
    ],
    githubs: [
      {
        label: "@chengsokdara",
        value: "https://github.com/chengsokdara",
      },
      {
        label: "@rawewhat",
        value: "https://github.com/rawewhat",
      },
    ],
    linkedin: {
      label: "chengsokdara",
      value: "https://linkedin.com/in/chengsokdara",
    },
    phones: [{ label: "+855-86-558-716", value: "tel:+85586558716" }],
    websites: [
      {
        label: "chengsokdara.\ngithub.io",
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
          technology: "NextJs",
          skills:
            "nextjs, react, tailwindcss, material-ui, typescript, firebase",
          duties: [
            {
              description: "Overall development",
              tasks: [
                "Developed a Next.js application for HireSplit referral platform",
                "Building client and candidate dashboards",
                "Structured database with Firebase Firestore",
                "Integraton with ATS such as Vincere and eBoss",
              ],
            },
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
          technology: "ExpressJs",
          skills:
            "nodejs, express.js, twilio, openai gpt, deepgram, elevenlabs, play.ht, azure ai speech, google cloud speech",
          duties: [
            {
              description: "Node.js and Express.js Development:",
              tasks: [
                "Developed an Express.js application API that allows users to make calls via Twilio to reach customer mobile phones.",
                "Leveraged Node.js for server-side development, creating robust and efficient APIs.",
              ],
            },
            {
              description: "Call Script Generation with GPT:",
              tasks: [
                "Integrated GPT (Generative Pre-trained Transformer) to dynamically generate call scripts.",
                "Utilized natural language processing (NLP) to create personalized and context-aware scripts for customer interactions.",
              ],
            },
            {
              description: "Human-Like Voice Generation:",
              tasks: [
                "Collaborated with Eleven Labs and Play.ht to generate close-to-human voice for call responses.",
                "Achieved a more engaging and natural experience for customers during phone interactions.",
              ],
            },
            {
              description: "Speech Recognition and Analysis:",
              tasks: [
                "Leveraged Deepgram and Google Speech SDK for speech recognition.",
                "Processed and analyzed customer speech during calls, enabling effective understanding and response.",
              ],
            },
          ],
        },
        {
          name: "TalkStack Dashboard",
          technology: "ViteJS",
          skills:
            "reactjs, vitejs, tailwindcss, reactflow, azure storage blob, elevenlabs",
          duties: [
            {
              description: "Studio drag and drop page with React Flow",
              tasks: [
                "Allow user to drag and drop card to build their own call scripts.",
                "Each call script sentences are voice generated ahead of time and store in Azure Storage Blob",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Senior Mobile Developer",
      company: {
        name: "Thegoodpsy",
        website: "https://thegoodpsy.com/",
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
          website: "https://thegoodpsy.com",
          technology: "React Native",
          skills:
            "react-native, redux-toolkit, twilio conversation, twilio video webrtc, stripe payment, firebase messaging",
          duties: [
            "Working closely with the CTO to replicate all functionalities from the web app into the mobile app.",
            "Architect the project structure for long-term scalability.",
            "Contribute to UI/UX for the chat message hierarchy.",
            "Using RTK Query to consume a RESTful API",
            "Configure and connect to twilio-conversation for chat functionality between the psychologist and patient.",
            "Configure and connect to twilio-video-webrtc for video and audio call functionality.",
            "Manage and publish to the App Store and Google Play.",
          ],
        },
        {
          name: "Thegoodpsy web app",
          website: "https://thegoodpsy.com",
          technology: "Create React App",
          skills:
            "create-react-app, redux, twilio conversation, twilio video, stripe",
          duties: [
            "Add new functionalities.",
            "Maintain and fix any existing bugs.",
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
          to: "February 2002",
          duration: "1 Year, 10 Months",
        },
      },
      projects: [
        {
          name: "KOTRA-Riel mobile app",
          website: "https://apps.apple.com/us/app/kotra-riel/id1548441646",
          technology: "React Native",
          skills:
            "firebase (firestore, storage, messaging, storage, auth), redux-toolkit, styled-component, formik, i18next, currency.js, fbsdk",
          duties: [
            "Lead a team of four, including one senior, two junior developers.",
            "Mentor and teach React Native to two junior developers.",
            "Architect a project structure that is scalable.",
            "Manage and assign tasks to fellow developers using Github Project.",
            "Implement advanced features such as managing products, product categories, sales, expenses, customers, and suppliers, as well as creating reports with graphic charts.",
            "Manage and maintain Firebase as the backend.",
            "Manage and publish to the App Store and Google Play.",
          ],
        },
        {
          name: "cybersecurity-kh.com",
          website: "https://cybersecurity-kh.com",
          technology: "NextJs",
          skills:
            "next.js, lottie-web, redux-toolkit, react-hook-form, tailwindcss, material-ui, firebase (firestore, auth, storage)",
          duties: [
            "Convert lottie json file into svg animated course video",
            "Build admin dashboard to create course, category and quizz",
            "Maintain and manage Firebase as the back-end",
          ],
        },
        {
          name: "MDF commerce",
          website: "https://www.mdfcommerce.com/",
          technology: "NextJs",
          skills: "reactjs, next.js",
          duties: ["Contribute to early design and development"],
        },
      ],
    },
    {
      title: "JavaScript Deveoper (J/M/S)",
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
          website:
            "https://play.google.com/store/apps/details?id=com.joonaakdriver",
          technology: "React Native",
          skills:
            "react-native, redux, background-geolocation, map view, graphql",
          duties: [
            "Implement background and foreground location tracking",
            "Implement map view, marker and direction for driver",
            "Real-time data update using GraphQL subscription",
            "Manage and teach interns to create custom UI components",
          ],
        },
        {
          name: "Joonaak Merchant mobile app",
          website:
            "https://play.google.com/store/apps/details?id=com.joonaak_merchant_app",
          technology: "React Native",
          skills: "react-native, redux, graphql",
          duties: [
            "Independently develop the app using React Native and Redux",
            "Use Apollo Client to consume GraphQL database",
            "Design UI and UX for the app",
          ],
        },
        {
          name: "Billing Telegram bot",
          website: "https://joonaak-bill-bot.web.app/",
          technology: "ReactJs / NodeJs",
          skills: "reactjs, nodejs, express.js, telegraf.js, ant design",
          duties: [
            "Build Telegram bot on nodejs express server using telegraf.js",
            "Host telegram bot on Firebase cloud functions",
            "Build webhook to communicate between the bot and Telegram API",
            "Architect my own toolchain for a web dashboard using parcel-bundler and ant design",
          ],
        },
        {
          name: "Joonaak Hub v2",
          website: "https://joonaak-hub.web.app/delivery",
          technology: "NextJs",
          skills: "next.js, stora, ant design, firebase firestore",
          duties: [
            "Using Next.js framework for server-side rendering.",
            "Global state management using my own library StoRa.",
            "Ant Design for easy enterprise UI building.",
          ],
        },
        {
          name: "Joonaak Hub",
          website: "http://joonaakhub.com/",
          technology: "Create React App",
          skills: "reactjs, graphql, redux",
          duties: [
            "Learn React, React Native, and GraphQL in just three months.",
            "Develop several screens like Delivery Orders, Pick and Pack and Merchant.",
            "Maintain, fix bugs and add new features.",
          ],
        },
        {
          name: "Joonaak Agent mobile app",
          technology: "React Native",
          skills: "reactjs, graphql, redux",
          duties: [
            "Overall development of the app from UI, UX and coding.",
            "Work closely with the CEO to turn his ideas into a working prototype.",
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: "Wedding Manager",
      website:
        "https://play.google.com/store/apps/details?id=com.chengsokdara.wedding.manager",
      descriptions: [
        "App that helps manage guest lists and wedding money gifts with reports.",
      ],
    },
    {
      name: "KhmerQR - QR Scanner and Generator",
      website:
        "https://play.google.com/store/apps/details?id=com.rawewhat.khmerqr",
      descriptions: ["Expo ejected app with redux made in two weeks."],
    },
    {
      name: "KHmeter",
      website:
        "https://play.google.com/store/apps/details?id=com.daradev.taximeter",
      descriptions: [
        "An app that helps you calculate fare based on distance traveled.",
      ],
    },
    {
      name: "Khmer Live TV",
      website: "https://www.facebook.com/com.daradev.tv",
      descriptions: [
        "Firebase firestore database, push notification, analytics, crash reporting.",
        "Material ui inspired with awesome animations throughout the app.",
      ],
    },
    {
      name: "Khmer Unicode Installer",
      website:
        "http://play.google.com/store/apps/details?id=com.blogspot.androidsanctum.kui",
      descriptions: ["Root access Android app, file system manipulation."],
    },
    {
      name: "Android Sanctum",
      website: "http://androidsanctum.blogspot.com",
      descriptions: [
        "Khandroid Khmer Keyboard",
        "Khandroid Custom Locale",
        "Khandroid Dictionary ENG - KH / KH - KH",
      ],
    },
    {
      name: "Cooked two Android custom ROMs.",
      descriptions: [
        {
          name: "HomICS (xda-developers)",
          website: "http://forum.xda-developers.com/showthread.php?t=1712901",
        },
        {
          name: "MokeeOS (xda-developers)",
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
        "React hook for OpenAI Whisper with speech recorder, real-time transcription, and silence removal built-in",
    },
    {
      name: "StoRa",
      website: "https://github.com/rawewhat/stora",
      description: "Redux replacement hooks style.",
    },
    {
      name: "ReactRa",
      website: "https://github.com/rawewhat/reactra",
      description: "React starter kit using Parcel + Server Side Rendering.",
    },
    {
      name: "QueRa",
      website: "https://github.com/rawewhat/quera",
      description: "Firestore client written in React hooks.",
    },
    {
      name: "RoutRa",
      website: "https://github.com/rawewhat/routra",
      description: "A simple router for React.",
    },
    {
      name: "TelegRa",
      website: "https://github.com/rawewhat/telegra",
      description: "Telegram Bot API NodeJs wrapper",
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
      name: "JavaScript",
      libraries: ["ReactJs", "React Native"],
    },
    {
      name: "JavaScript Frameworks",
      libraries: ["NextJs", "Gatsby", "ParcelJs"],
    },
    {
      name: "React Libraries",
      libraries: [
        "redux",
        "redux-toolkit",
        "redux-persist",
        "react-router",
        "styled-component",
        "tailwindcss",
        "react-hook-form",
        "formik",
        "i18next",
        "graphql",
        "apollo-client",
        "apollo-server",
      ],
    },
    {
      name: "React Native Libraries",
      libraries: [
        "react-navigation",
        "twilio-conversation",
        "twilio-video-webrtc",
        "react-native-map",
        "react-native-background-geolocation",
      ],
    },
    {
      name: "UI Libraries",
      libraries: ["material-ui", "ant-design", "react-native-paper"],
    },
    {
      name: "Firebase Products",
      libraries: [
        "firestore",
        "messaging",
        "authentication",
        "storage",
        "analytics",
        "hosting",
        "cloud functions",
        "crashlytics",
        "remote config",
        "admob",
      ],
    },
    {
      name: "NodeJs",
      libraries: ["express-js", "knex-js"],
    },
    "GitHub",
    "TypeScript",
    "Figma",
  ],
};

export default data;
