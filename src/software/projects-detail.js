const Projects = [
  {
    "web": true,
    "title": "My Website",
    "description": "Personal website.r",
    "lang": "React",
    "date": "Feb 2020",
  
    "type": "Personal Project",
    "goal": "Share personal profile and projects.",
    "stack": [
      {
        "title": "Front end",
        "subtitle": "React - Sass",
      },
      {
        "title": "Backend",
        "subtitle": "N/A"
      },
      {
        "title": "Design",
        "design_link": "https://www.figma.com/file/15DhUztEywqAXL1Hb5Wzsu/portfolio?node-id=0%3A1",
        "subtitle": "Figma"
      },
      {
        "title": "Database",
        "subtitle": "N/A"
      },
      {
        "title": "Deployment",
        "subtitle": "Heroku"
      }
    ],
    "github": "https://github.com/CwirL/portfolio",
    "website": null,

  },
  { //
    "web": true,
    "title": "Orange Logistica SAS",
    "description": "Built web application and node.js telegram bot for delivery service.",
    "lang": "Angular - Node.js",
    "date": "Feb 2020",

    "type": "Start-Up Project",
    "goal": "Web application, company landing page and delivery service",
    "stack": [
      {
        "title": "Frontend",
        "subtitle": "React – SASS - Google Maps API",
        "items": [
          "Single page application",
          "User interface for delivery request with authentication",
          "Real time domiciliary location"
        ]
      },
      {
        "title": "Backend",
        "subtitle": "Nodejs – Express - Telegram Bot API",
        "items": [
          "Rest web server with user authentication, and delivery request service",
          "Telegram bot for handling delivery request and domiciliary group"
        ]
      },
      {
        "title": "Design",
        "subtitle": "Figma – Adobe Illustrator",
        "design_link": "https://www.figma.com/file/Br34Q743kXKGWEKu9WhtNG/orange?node-id=0%3A1",
        "items": [
          "Icons for services and some iterations for the logo on illustrator",
          "User interface on Figma"
        ]
      },
      {
        "title": "Database",
        "subtitle": "AWS RDS - MySQL"
      },
      {
        "title": "Deployment",
        "subtitle": "AWS EC2 - Nginx server"
      }
    ],
    "github": null,
    "website": null,
  },
  {
    "web": false,
    "title": "Pathfinding visualizer",
    "description": "Built web application for visualizing pathfinding in 3D.",
    "lang": "React",
    "date": "Dec 2019",
  
    "type": "Personal Project",
    "goal": "Learn data structures and algorithms",
    "stack": {
      "subtitle": "React",
      "items": [
        "Implement Dijkstra’s algorithm for pathfinding visualization"
      ]
    },
    "github": "https://github.com/CwirL/pathfinding-visualizer",
    "website": "https://cwirl.github.io/pathfinding-visualizer/",
  },
  { //
    "web": true,
    "title": "Caja Naranja",
    "description": "Built web app for flexible warehousing.",
    "lang": "Angular - Node.js",
    "date": "Dec 2019",
  
    "type": "Start-Up Project",
    "goal": "Web application (ecommerce), company landing page and delivery service.",
    "stack": [
      {
        "title": "Frontend",
        "subtitle": "Angular – Sass – Google Maps API",
        "items": [
          "Single page application",
          "User sign in and sign out",
          "Real time warehouse location",
          "Reduced sass 7-1 pattern"
        ]
      },
      {
        "title": "Backend",
        "subtitle": "Nodejs – Express – Nodemailer - mercadopago API – Passportjs",
        "items": [
          "Paginated warehouse data over REST API",
          "Authentication and authorization service with JWT and passport",
          "Credit card payment service with Mercadopago API",
          "Notification service over email with nodemailer"
        ]
      },
      {
        "title": "Design",
        "subtitle": "Figma – Adobe Photoshop",
        "design_link": "https://www.figma.com/file/1SAUghYzdS9fmC4LVDnCjh/caja-Naranja?node-id=0%3A1",
        "items": [
          "User interface and recognize all components for modular structure",
          "Build and edit background image with photoshop"
        ]
      },
      {
        "title": "Database",
        "subtitle": "AWS RDS - MySQL"
      },
      {
        "title": "Deployment",
        "subtitle": "AWS EC2 - Nginx reverse proxy - CPANEL - Apache server"
      }
    ],
    "github": null,
    "website": "https://cajanaranja.com.co/",
  },
  { //
    "web":true,
    "title": "Track App",
    "description": "Built web application to visualize real time and historical geolocation data of vehicles.",
    "lang": "MERN",
    "date": "Jun 2019",
  
    "type": "Personal Project",
    "goal": "Design and implement a solution for vehicular telemetry.",
    "stack": [
      {
        "title": "Frontend",
        "subtitle": "React – semantic UI - Google Maps API",
        "items": [
          "Single page application",
          "User sign in and sign out",
          "Real time warehouse location",
          "Statistic charts"
        ]
      },
      {
        "title": "Backend",
        "subtitle": "Nodejs – Express – mongoose",
        "items": [
          "REST API for user authentication and vehicle location",
          "MVC pattern"
        ]
      },
      {
        "title": "Design",
        "design_link": null,
        "subtitle": "Adobe XD"
      },
      {
        "title": "Database",
        "subtitle": "Mongo DB"
      },
      {
        "title": "Deployment",
        "subtitle": "AWS EC2 - Apache server"
      }
    ],
    "github": "https://github.com/CwirL/TrackApp/",
    "website": null,
  },
  { //
    "web": true, 
    "title": "Global Track",
    "description": "Built web application to visualize real time and historical geolocation data of vehicles.",
    "lang": "Jquery - LAMP",
    "date": "Mar 2019",
  
    "type": "Academic Project",
    "goal": "Design and implement a solution for vehicular telemetry.",
    "stack": [
      {
        "title": "Frontend",
        "subtitle": "Jquery - Bootstrap - Leaflet",
        "items": [
          "Single page application",
          "Real time and historical vehicle location visualization on map."
        ]
      },
      {
        "title": "Backend",
        "subtitle": "PHP - Python",
        "items": [
          "Python Sniffer receive GPS data on forwarded port",
          "REST API for vehicles and user resources"
        ]
      },
      {
        "title": "Design",
        "design_link": null,
        "subtitle": "N/A"
      },
      {
        "title": "Database",
        "subtitle": "AWS RDS – MySQL"
      },
      {
        "title": "Deployment",
        "subtitle": "AWS EC2 – LAMP"
      }
    ],
    "github": "https://github.com/CwirL/Global-Track",
    "website": "http://52.70.133.255//DesignProject/index.php",
  },
  { //
    "web": false,
    "title": "Modbus LoRa communication",
    "description": "Data acquisition from a shark-100 electrical analyzer over Modbus protocol with Arduino and data transmission over LoRa protocol with Seeeduino LoRaWan devices.",
    "lang": "Arduino",
    "date": "Jul 2018",
  
    "type": "Academic Project",
    "goal": "Extract measurement data from shark 100 with Arduino and over MODBUS protocol and transmit data over LoRa protocol with RF module.",
    "stack": {
      "subtitle": "Arduino",
      "items":  [
        "Extract data from registers of shark analyzer",
        "Implement algorithm to pack data and setup transmitter and receptor"
      ]
    },
    "github": "https://github.com/CwirL/modbus-lora-communication",
    "website": null,
  },
  { //
    "web": false,
    "title": "Cardiac signals analysis",
    "description": "Built algorithm to process and analyze audio cardiac signals.",
    "lang": "MATLAB",
    "date": "May 2018",
  
    "type": "Academic Project",
    "goal": "Recognize cardiac cycle intervals (systole - diastole). Energy and power analysis of signals on time and frequency domain",
    "stack": {
      "subtitle": "Matlab",
      "items":  [
        "Cardiac cycle duration",
        "Relation between cardiac cycle intervals (systole – diastole – s1 – s2)",
        "Max and min amplitudes at different cycle intervals",
        "Energy and power at different cycle intervals"
      ]
    },
    "github": "https://github.com/CwirL/signal-processing",
    "website": null,
  },
  { //
    "title": "Parabolic motion simulation",
    "description": "Built navigable 3D display of canon animation.",
    "lang": "Python",
    "date": "Nov 2015",
  
    "type": "Academic Project",
    "goal": "Implement projectile motion equations within an animation/algorithm with python.",
    "stack": {
      "subtitle": "Python - Vpython",
      "items": [
        "Navigable 3D display of canon",
        "Relation between cardiac cycle intervals (systole – diastole – s1 – s2)",
        "Max and min amplitudes at different cycle intervals",
        "Energy and power at different cycle intervals"
      ]
    },
    "github": "https://github.com/CwirL/parabolic-motion-simulation",
    "website": null,
  }
];

export default Projects;