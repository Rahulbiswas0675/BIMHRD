import heroVideo from '../Assates/Video/home.mp4';
import smsImg from '../Assates/Images/messageImage.png';
import { SiSololearn } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
import google from '../Assates/CampusAmbassador/google.png';
import ibm from '../Assates/CampusAmbassador/ibm.png';
import deloitte from '../Assates/CampusAmbassador/deltotl.png';
import genpact from '../Assates/CampusAmbassador/genpact.png';
import xebia from '../Assates/CampusAmbassador/xebia.png';
import wipro from '../Assates/CampusAmbassador/wipro.png';
import hcl from '../Assates/CampusAmbassador/hcl.png';
import userIcon from '../Assates/Elements/Ellipse.svg';
import ambitionsImg from '../Assates/Images/contactImage.png';
import studentImg from '../Assates/Images/join.png';
import logoimg from '../Assates/Logo/logo3.png';
import logo from '../Assates/Logo/logo4.png';


export const heroPage = {
    title : "Welcome to BIMHRD",
    tag : 'Here, you’ll find a welcoming community and boundless opportunities.',
    btnTitle : "Explore Admissions",
    video : heroVideo,
};

export const aboutPage = {
    paragraph1 : "SBS was founded in 1999 by Professor. Dr. (Col). A. Balasubramanian to bring a change in the society. SBS is one of the trump society where you can unleash your potential. Sri Balaji Society stands on 4 pillars that are BIMM, BIMHRD, BITM and BIIB. We being the youngest of all believe that to succeed in business, you need to get closer to the realities of business! That’s what we do. BIMHRD connect students and alumni with global companies as well as link businesses with incisive and innovative thinking.",
    paragraph2 : "At BIMHRD we believe in providing our students a cutting edge over the others by Developing effective and responsible leaders by creating insightful knowledge and inspiring minds in dialogue with the world around us. We are committed to the equal and fair treatment of all employees and students.",
    paragraph3 : "The institute always strives to be a management school with a difference.",
    btnTitle : "Read More",
    btnLink : "https://www.figma.com/proto/JO6dGB1py6Q8vaLsp8sX7P/BIMHRD?node-id=1-160&scaling=min-zoom&page-id=0%3A1",
};

export const CampusAmbassadorData = [
    {
        name : "google",
        image : google,
    },
    {
        name : "ibm",
        image : ibm,
    },
    {
        name : "deloitte",
        image : deloitte,
    },
    {
        name : "genpact",
        image : genpact,
    },
    {
        name : "xebia",
        image : xebia,
    },
    {
        name : "wipro",
        image : wipro,
    },
    {
        name : "hcl",
        image : hcl,
    }
];

export const MessageData = {
    heading : "Bala Sir’s Message",
    title : "Message from our Inspiration",
    para1 : "Sri Balaji University, Pune means quality and commitment to the students’ community. We believe that each and every student has the potential to be groomed to have a successful corporate career. Converting the right candidates to the right jobs through right training and development has always been the goal of our Society. We are deeply pleased to state that we have achieved the same to a larger extent as can be seen from the Track-Record of campus placements of our management institutes.",
    para2 : "We are proud to state that, within an existence of 15 years Sri Balaji Society is known not only for the best infrastructure but also for the best faculties. Sri Balaji Society is already ranked as one amongst top Three for ‘visiting faculties’ in India by ‘Business India’ dated 17th Oct. 2010, which means active involvement of corporate stalwarts in imparting instructions and practical exposure to students about the industry. ",
    btnName : "Read More",
    btnLink : "https://www.figma.com/proto/JO6dGB1py6Q8vaLsp8sX7P/BIMHRD?node-id=1-160&scaling=min-zoom&page-id=0%3A1",
    image : smsImg,
};

export const programsData = [
    {
        title : "MBA",
        tag : "(General)",
        para : "BIMHRD offers a two-year full-time management program MBA (Marketing). As incoming students are mostly freshers or having some years of work experience, the course enable students to grasp the latest in management theory, broadens their perspectives, launches them into new avenues of problem solving and making them competent for the business world.",
    },
    {
        title : "MBA",
        tag : "( PM & HRD)",
        para : "Studying PM & HRD with BIMHRD will help develop your interpersonal skills which are crucial to succeed in any relevant role. Our courses are career-focused which enables you to acquire skills directly applied in your current or future industry role.",
    },
    {
        title : "MBA",
        tag : "(Marketing Management)",
        para : "BIMHRD offers a two-year full-time program in MBA (Marketing Management). The program helps the students to equip themselves with the practical knowledge of current industry scenarios along with course curriculum , skills and value.",
    }
];

export const admissionsData = {
    process : [
        {
            icon : <SiSololearn className='icon' />,
            title : "Admission Process",
        },
        {
            icon : <GiReceiveMoney className='icon' />,
            title : "Fee Structure",
        },
        {
            icon : <BsBank className='icon' />,
            title : "Scholarships",
        },
        {
            icon : <PiStudentBold className='icon' />,
            title : "Lateral Entry & Migration",
        },
        {
            icon : <MdOutlineSupportAgent className='icon' />,
            title : "Finance Assistance",
        }
    ],
    title : "Exceptional Placements",
    tag : "BIMHRD",
    para : "Established in 2004, BIMHRD is the fastest emerging B-School for Human Resources , marketing and other domains of management. Faculty at BIMHRD have vast teaching experience with lots of research papers carried out by them that are accepted nationally and internationally. Faculty members include corporate leaders, industrialists and working professionals from renowned companies.",
    btnName : "Read More",
    btnLink : "https://www.figma.com/proto/JO6dGB1py6Q8vaLsp8sX7P/BIMHRD?node-id=1-160&scaling=min-zoom&page-id=0%3A1",
    features: [
        {
            title : "36 LPA",
            subTitle : "Highest Package",
        },
        {
            title : "500+",
            subTitle : "Recruiters",
        },
        {
            title : "50k+",
            subTitle : "Strong Alumni Base",
        },
        {
            title : "100%",
            subTitle : "Training and Placement Assistance",
        },
    ]
};

export const ambitionsData = {
    title1 : "Personalized Guidance",
    title2 : "Tailored to Your Ambitions",
    para1 : "Let's Navigate Your Academic Journey Together,",
    para2 : "Get in touch with us",
    image : ambitionsImg,
};

export const reviewData = {
    title : "Hear it from the students themselves",
    review : [
        {
            userName : "Morem ipsum",
            userDesignation : "Student",
            userImage : userIcon,
            para : "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        },
        {
            userName : "Morem ipsum",
            userDesignation : "Student",
            userImage : userIcon,
            para : "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        },
        {
            userName : "Morem ipsum",
            userDesignation : "Student",
            userImage : userIcon,
            para : "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        },
        {
            userName : "Morem ipsum",
            userDesignation : "Student",
            userImage : userIcon,
            para : "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        },
    ]
};

export const researchData = {
    logo : logo,
    title : "Stay Connected, Stay Inspired",
    tag : "Explore the Latest News and Events at BIMHRD",
    event : [
        {
            date : "August 14, 2023",
            eventTitle : "Industry 5.0 National Conference",
        },
        {
            date : "August 14, 2023",
            eventTitle : "Industry 5.0 National Conference",
        }
    ],
    buttomTitle : "Explore life at BIMHRD",
    btnName : "Let's Go"
}

export const recruitersData = {
    title1 : "Experience Excellence in Education and Empower",
    title2 : "Your Future at the BIMHRD Campus.",
    tag : "Join Us Today!",
    btnName : "APPLY NOW",
    image : studentImg,
};

export const contactData = {
    logo : logoimg,
    whatsapp : "7757847545",
    email : "Admissions@Sribalajisocietypune.Org",
    address : "Survey No. 55/2-7, Tathawade, Opp. Wakad Police Station, Off Pune-Mumbai, Highway, Imm Road, Tathawade, Pimpri-Chinchwad, Maharashtra 411033"
};

export const fakeLink = "https://www.figma.com/proto/JO6dGB1py6Q8vaLsp8sX7P/BIMHRD?node-id=1-160&scaling=min-zoom&page-id=0%3A1";

export const footerData = "Copyright at 1998-2021 Sri Balaji Society, Pune";