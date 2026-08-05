import { App } from "../App.js";

export class LinksApp extends App {
    appID = "links";
    appName = "Links";
    iconPath = "image/app_icon/Links.png"
    element = document.getElementById(this.appID);

    initialize(wm) {
        super.initialize(wm);
        this.loadContent();
    }

    loadContent() {
        this.sidebar = document.querySelector("#links .sidebar");
        this.content = document.querySelector("#links .text-content");

        if (links.length <= 0) {
            return;
        }

        let first = true;
        for (const category of links) {
            const option = document.createElement("div");
            option.setAttribute("class", "sidebar-option");
            option.innerText = formatCategoryTitle(category)
            option.addEventListener("click", () => this.activateOption(option, category.category))
            this.sidebar.appendChild(option);

            if (first) {
                this.activateOption(option, category.category);
                first = false;
            }
        }
    }

    activateOption(selectedOptionElement, selectedCategoryName) {
        // Reset
        for (const option of this.sidebar.children) {
            option.setAttribute("class", "sidebar-option");
        }
        this.content.innerHTML = "";

        selectedOptionElement.setAttribute("class", "sidebar-option-selected");

        let selectedCategory = undefined;

        for (const category of links) {
            if (category.category === selectedCategoryName) {
                selectedCategory = category;
            }
        }

        if (selectedCategory === undefined) {
            console.error("Couldn't find the category.")
        }

        const header = document.createElement("h1");
        header.innerText = formatCategoryTitle(selectedCategory);

        const description = document.createElement("p");
        description.innerText = selectedCategory.description;

        const list = document.createElement("ul")
        for (const link of selectedCategory.links) {
            const li = document.createElement("li");
            const a = document.createElement("a");

            if (link.starred) {
                li.setAttribute("class", "starred-link");
            }

            a.href = link.url;
            a.target = "_blank";
            a.innerText = link.title;
            li.appendChild(a);
            list.appendChild(li);
        }

        this.content.appendChild(header);
        this.content.appendChild(description);
        this.content.appendChild(list);
    }
}

function formatCategoryTitle(category) {
    if (category.icon) {
        return `${category.icon} ${category.category}`;
    } else {
        return `${category.category}`;
    }
}

const links = [
    {
        category: "Miscellaneous",
        icon: "⬜",
        description: "Some miscellaneous links. Click a category on the left sidebar to find other links. A star (⭐) means a link is recommended.",
        links: [
            {
                title: "Purdue Website",
                url: "https://www.purdue.edu"
            },
            {
                title: "West Lafayette Campus Map",
                url: "https://purdueuniversity.maps.arcgis.com/apps/instant/basic/index.html?appid=d7e5d06fb5344f5fb53819c42d3e91ed/"
            },
            {
                title: "Campus Safety Status",
                url: "https://www.purdue.edu/emergency/"
            },
            {
                title: "Boilerlink",
                url: "https://boilerlink.purdue.edu/"
            },
            {
                title: "Libraries",
                url: "https://lib.purdue.edu/"
            }
        ]
    },
    {
        category: "Portals",
        icon: "👤",
        description: "Access these websites with a Purdue student account.",
        links: [
            {
                title: "myPurdue",
                url: "https://mypurdue.purdue.edu/"
            },
            {
                title: "Outlook",
                url: "https://outlook.cloud.microsoft/mail/"
            },
            {
                title: "Student Profile",
                url: "https://apps.mypurdue.purdue.edu/StudentSelfService/ssb/studentProfile"
            },
            {
                title: "BoilerConnect",
                url: "https://purdue.navigate.eab.com/app/#/my/priority-feed/"
            },
            {
                title: "Bursar",
                url: "https://www.purdue.edu/treasurer/finance/bursar-office/"
            },
            {
                title: "Student Health Web Portal",
                url: "https://myhealth.push.purdue.edu/Home"
            },
            {
                title: "Brightspace",
                url: "https://purdue.brightspace.com/d2l/home/6824"
            },
            {
                title: "Housing Portal",
                url: "http://housing.purdue.edu/portal/"
            },
            {
                title: "UniTime (Course Management)",
                url: "https://timetable.mypurdue.purdue.edu/Timetabling"
            },
        ]
    },
    {
        category: "Calendars",
        icon: "📅",
        description: "Note down important dates with these calendars.",
        links: [
            {
                title: "Academic Calendars",
                url: "https://www.purdue.edu/registrar/calendars/"
            },
            {
                title: "Events Calendar",
                url: "https://events.purdue.edu/"
            }
        ]
    },
    {
        category: "Classes",
        icon: "📚",
        description: "Use these websites to find courses at Purdue.",
        links: [
            {
                title: "Purdue Catalog",
                url: "https://catalog.purdue.edu/"
            },
            {
                title: "BoilerClasses",
                url: "https://boilerclasses.com/",
                starred: true,
            },
            {
                title: "Boiler Grades",
                url: "https://www.boilergrades.com/"
            },
            {
                title: "Purdue.io",
                url: "https://purdue.io/"
            },
        ]
    },
    {
        category: "Study Resources",
        icon: "✏️",
        description: "Use these websites to prepare for exams.",
        links: [
            {
                title: "Boilerexams",
                url: "https://boilerexams.com/",
                starred: true
            },
            {
                title: "Chenflix",
                url: "https://drjchen1.github.io/chenflix/",
                starred: false
            },
        ]
    },
    {
        category: "Career and Academic",
        icon: "🎓",
        description: null,
        links: [
            {
                title: "Office of Undergraduate Research",
                url: "https://www.purdue.edu/undergrad-research/",
                starred: false
            },
            {
                title: "Study Abroad",
                url: "https://www.purdue.edu/gpp/sa/",
                starred: false
            },
            {
                title: "Academic Success Center",
                url: "https://www.purdue.edu/asc/",
                starred: false
            },
            {
                title: "National & International Scholarships Office",
                url: "https://www.purdue.edu/niso/index.html",
                starred: false
            },
            {
                title: "Leadership and Professional Development Department",
                url: "https://www.purdue.edu/vpsl/leadership/index.php",
                starred: false
            },
            {
                title: "Center for Career Opportunities",
                url: "https://www.cco.purdue.edu/",
                starred: false
            },
            {
                title: "OWL (Writing Lab)",
                url: "https://owl.purdue.edu/index.html",
                starred: false
            },
        ]
    },
    {
        category: "Athletics and Arts",
        icon: "🏈",
        description: null,
        links: [
            {
                title: "Boilermakers",
                url: "https://purduesports.com/",
                starred: false
            },
            {
                title: "Galleries",
                url: "https://cla.purdue.edu/academic/rueffschool/galleries/",
                starred: false
            },
            {
                title: "Bands & Orchestras",
                url: "https://www.purdue.edu/bands/",
                starred: false
            },
            {
                title: "Musical Organizations",
                url: "https://www.purdue.edu/pmo/index.php",
                starred: false
            },
            {
                title: "Department of Theatre and Dance",
                url: "https://www.cla.purdue.edu/academic/rueffschool/theatre-and-dance/index.html",
                starred: false
            },
            {
                title: "Purdue Convocations",
                url: "https://convocations.purdue.edu/",
                starred: false
            },
        ]
    },
    {
        category: "Health and Wellness",
        icon: "🩹",
        description: "Get well.",
        links: [
            {
                title: "Purdue Pharmacy",
                url: "https://www.purdue.edu/rx/",
                starred: false
            },
            {
                title: "Recreation & Wellness",
                url: "https://www.purdue.edu/recwell/index.php",
                starred: false
            },
            {
                title: "Steps to Leaps (Self Improvement)",
                url: "https://www.purdue.edu/stepstoleaps/index.php",
                starred: false
            },
            {
                title: "ACE Food Pantry",
                url: "https://acefoodpantry.wixsite.com/website",
                starred: false
            },
            {
                title: "Counseling & Psychological Services",
                url: "https://www.purdue.edu/caps/",
                starred: false
            },
            {
                title: "Center for Advocacy, Response & Education",
                url: "https://care.purdue.edu/",
                starred: false
            },
        ]
    },
    {
        category: "Housing",
        icon: "🏚️",
        description: "Find a place to lay down every night.",
        links: [
            {
                title: "Purdue University Residences",
                url: "https://www.housing.purdue.edu/",
                starred: false
            },
            {
                title: "Off-Campus Housing",
                url: "https://www.purdue.edu/odos/offcampus/",
                starred: false
            },
        ]
    },
    {
        category: "Dining and Culinary",
        icon: "🍽️",
        description: "Explore gastronomy at Purdue.",
        links: [
            {
                title: "Dining & Culinary",
                url: "https://dining.purdue.edu/",
                starred: false
            },
            {
                title: "Dining Map",
                url: "https://dining.purdue.edu/AboutUs/map.html",
                starred: false
            },
            {
                title: "Meal Plans",
                url: "https://dining.purdue.edu/ResidentialDining/mealplans/index.html",
                starred: false
            },
            {
                title: "Menus",
                url: "https://dining.purdue.edu/menus/",
                starred: false
            },
        ]
    },
    {
        category: "Stores",
        icon: "🏪",
        description: "Buy books and stuff.",
        links: [
            {
                title: "University Bookstore",
                url: "https://www.purdueu.com/",
                starred: false
            },
            {
                title: "Follett Purdue Bookstores",
                url: "https://www.bkstr.com/purduestore/home",
                starred: false
            },
        ]
    },
    // {
    //     category: "",
    //     description: "",
    //     links: [
    //         {
    //             title: "",
    //             url: "",
    //             starred: false
    //         },
    //     ]
    // },
]