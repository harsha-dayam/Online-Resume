// var headerName = HTMLheaderName.replace("%data%", "Harsha Vardhan Reddy Dayam");
// var headerRole = HTMLheaderRole.replace("%data%", "Web Developer");
// $("#header").append(headerName);
// $("#header").append(headerRole);

var bio = {
	"name" : "Harsha Vardhan Reddy Dayam",
	"role" : "Web Developer",
	"skills" : ["Java", "Python", "SQL", "JavaScript", "C", "C++", "HTML5/CSS3", "Bootstrap", "Node.js", "jQuery", "MongoDB", "Git", "GruntJS", "Express.js", "RESTful Web Services", "Google App Engine", "MATLAB"],
	"picture" : "images/fry.jpg",
	"welcomeMessage" : "Hey there! It's your friendly neighbourhood Web-Dev Ninja.",
	"contacts" : {
		"mobile" : "321-314-4154",
		"email" : "harshavardhan2506@gmail.com",
		"linkedin" : "http://www.linkedin.com/harsha-dayam",
		"github" : "http://www.github.com/harsha2506",
		"location" : "Dallas, Texas"
	},
	displayBio:  function() {

        $("#header").prepend(HTMLheaderRole.replace('%data%', bio.role)); 

		$("#header").prepend(HTMLheaderName.replace('%data%', bio.name));
        
        $('#header').append(HTMLbioPic.replace('%data%', bio.picture));
        
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

        $('#header').append(HTMLskillsStart);
        $.each(bio.skills, function(x) {
            $('#skills').append(HTMLskills.replace('%data%', bio.skills[x]));
        });

        $.each(bio.contacts, function(x, y) {
            $('#topContacts').append(HTMLcontactGeneric.replace("%contact%", x).replace('%data%', y));
            $('#footerContacts').append(HTMLcontactGeneric.replace("%contact%", x).replace('%data%', y));
        }); 

    }
    
}

var work = {
	"jobs" : [
	{
		"employer" : "Etisbew Technology Group, Inc.",
		"title" : "Intern",
		"location" : "Hyderabad, India",
		"dates" : "Jan, 2015 - Jun, 2015",
		"description" : "Worked on Oracle's PeopleSoft's module 'Enterprise Performance Management (EPM)', an Enterprise Productivity Managment Tool for financial planning and analysis using predictive algorithms.\n Achieved cost savings associated with offshore activities using Etisbew's 3-D model.\n Cultivated relationships with senior executives of the firm."
	},
	{
		"employer" : "HCL Technology",
		"title" : "Intern",
		"location" : "Chennai, India",
		"dates" : "Nov, 2011 - Jan, 2012",
		"description" : "Gained professional experience in real-time manifestation.\n Worked on technologies such as JAVA, J2EE, and Blue Eye Technology.\n Exposed to HCL's Web Technology techniques and test automation framework."

	}
	],
	displayWork: function()
	{
		$("#workExperience").append(HTMLworkStart);

		$.each(work.jobs, function(i) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			$(".work-entry:last").append(formattedEmployer + formattedWorkTitle);
			
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
			
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
			
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
		});
	}
}

var project = {
	"projects" : [
	{
		"title" : "Multi User Blog",
		"date" : "Apr, 2017",
		"description" : "A basic Blog that requires user registration and allows login and logout.\n Users can create posts and be able to edit/delete only their posts.\n Users can comment on posts. They can only edit/delete their own comments.\n Implemented using Python and Google App Engine",
		"image" : ["images/197x148.gif", "images/197x148.gif"]
	},
	{
		"title" : "Movie Trailer Website",
		"date" : "Apr, 2017",
		"description" : "Server-side code to store a list of favorite movies.\n Python, Javascript, Bootstrap 3, HTML, CSS.",
		"image" : ["images/197x148.gif"],
	},
	{
		"title" : "Movie Trailer Website",
		"date" : "Mar, 2017",
		"image" : ["images/197x148.gif"],
		"description" : "Sample portfolio page coded in HTML, CSS using Bootstrap 3.\n Used Grunt workflow for minification and linting.\n Compressed and optimized images at various breakpoints for a responsive web page.\n Used ImageOptim, ImageMagick and 'npm' package 'grunt-respimg' for responsive images."
	}
	],
	"displayProjects": function() {

        $.each(project.projects, function(i) {

            $('#projects').append(HTMLprojectStart); // this appends PROJECTS to #projects header

            var x = project.projects[i];
            
            $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', x.title));
            
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%', x.date));
            
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', x.description));

            $.each(x.image, function(j) {
                $('.project-entry:last').append(HTMLprojectImage.replace('%data%', x.image[j]));
            });

        });

    }
}

var education = {
	"schools" : [
	{
		"name" : "University of Central Florida",
		"location" : "Orlando, USA",
		"degree" : "Master of Science",
		"major" : "Computer Science",
		"dates" : "Aug, 2015 - May, 2017"
	},
	{
		"name" : "VIT University",
		"location" : "Vellore, India",
		"degree" : "Master of Science",
		"major" : "Computer Science",
		"dates" : "Jul, 2010 - Jun, 2014"
	}
	],
	"onlineCourses" : [
	{
		"title" : "FrontEnd Development NanoDegree",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
		"school" : "Udacity",
		"dates" : "Jun, 2017"
	},
	{
		"title" : "Web Developer Bootcamp by Colt Steele",
		"url": "https://www.udemy.com/the-web-developer-bootcamp/",
		"school" : "Udemy",
		"dates" : "Mar, 2017"
	}
	],
	"displayEducation": function() {

        // SCHOOL EDUCATION

        $.each(education.schools, function(x) {

            $('#education').append(HTMLschoolStart); // this appends SCHOOL EDUCATION to #education header

            var y = education.schools;

            var uniName = HTMLschoolName.replace('%data%', y[x].name);
            var uniDegree = HTMLschoolDegree.replace('%data%', y[x].degree);
            $('.education-entry:last').append(uniName + uniDegree);
            
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', y[x].dates));
            
            $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', y[x].location));
            
            $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', y[x].major));
        });

        // ONLINE COURSES

        $('#education').append(HTMLonlineClasses); // this appends ONLINE EDUCATION to #education header

        $.each(education.onlineCourses, function(x) {
            $('#education').append(HTMLschoolStart);

            var y = education.onlineCourses;

            var title = HTMLonlineTitle.replace('%data%', y[x].title);
            var school = HTMLonlineSchool.replace('%data%', y[x].school);
            $('.education-entry:last').append(title + school);
            
            $('.education-entry:last').append(HTMLonlineDates.replace('%data%', y[x].dates));

            $('.education-entry:last').append(HTMLonlineURL.replace("#", y[x].url).replace('%data%', y[x].url));
        });
    }
}


bio.displayBio();
work.displayWork();
project.displayProjects();
education.displayEducation();

//internationalize name
function inName(name)
{
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	console.log(name);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    console.log(name);
	return name[0] + " " + name[1];
}
$('#main').append(internationalizeButton);

//display map
function displayMap() {
    $('#mapDiv').append(googleMap);
}
displayMap();