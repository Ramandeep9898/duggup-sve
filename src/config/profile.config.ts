import Profile from "$lib/assets/profilee.png"
import logo from "$lib/assets/duggupCirclelogo.png"
import Blog1 from "$lib/assets/blog1.png"
import Blog2 from "$lib/assets/blog2.png"
import Betteruplogo from "$lib/assets/betteruplogo.png"

export const user = {
    userProfileImage: Profile,
    username: "Krishna Kiran ",
    about: "Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth. Co-Founder and CEO at Duggup - Social network for people in tech.",
    userCompanyName: "Duggup",
    userCompanyLogo: logo,
    position: "Co-Founder and CEO",
    websiteLink: "https://ramandeep.netlify.app/",
    timeline: [
        {
            headingComponentAvailable: false,
            content: {
                date: "Dec 2023",
                blogs: [
                    {
                        blogHeading: "No amount of technology can convert a bad story into a good story.",
                        blogImage: Blog1,
                    },
                    {
                        blogHeading: "Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas.",
                        blogImage: Blog2,
                    },

                ]
            }

        },

        {
            headingComponentAvailable: true,
            component: "TimelineHeadingCard",
            heading: "Co-Founder and CEO",
            subHeading: "Full-time · Remote",
            companyLogo: logo,
            region: "San Francisco Bay Area",
            date: "Nov 2023 ",
            companyName: "Duggup",


            content: {
                date: "Dec 2023",
                blogs: [
                    {
                        blogHeading: "No amount of technology can convert a bad story into a good story.",
                        blogImage: Blog1,
                    },
                    {
                        blogHeading: "Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas.",
                        blogImage: Blog2,
                    },

                ]
            }

        }
        , {
            headingComponentAvailable: true,
            component: "TimelineHeadingCard",
            heading: "VP Engineering",
            subHeading: "Full-time",
            companyLogo: Betteruplogo,
            region: "San Francisco Bay Area",
            date: "Sep 2022",
            companyName: "BetterUp",




        }
    ]
}