/*
This is empty on purpose! Your code to build the resume will go here.
 */
 $("#main").append("Zhouqiang Wang");
 var formattedName = HTMLheaderName.replace("%data%", "Zhouqiang Wang");
 var formattedRole = HTMLheaderRole.replace("%data%","Senior Engineer");

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 
 var bio = {
 	name: "Zhouqiang Wang",
 	role: "Senior Engineer",
 	contact: {
 		mobile: "+86-18002237285",
 		email: "zhouqiang.wang@hotmail.com",
 		twitter: "https://twitter.com/ZhouqWang",
 		github: "https://github.com/zhouqiangWang",
 		blog: "http://zhouqiangwang.github.io/",
 		loc: "Shanghai, China"
 	},
 	pictureURL: "http://en.gravatar.com/userimage/91984247/83ffb650bca3bd4e58b002ffc7d1f00b.jpg",
 	welcomeMessage: "hello world",
 	skills: ["Java", "Android", "JavaScript"]
 };

 var mobile = HTMLmobile.replace("%data%", bio.contact.mobile);
 $("#topContacts").append(mobile);
 var email = HTMLemail.replace("%data%", bio.contact.email);
 $("#topContacts").append(email);
 var twitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
 $("#topContacts").append(twitter);
 var github = HTMLgithub.replace("%data%", bio.contact.github);
 $("#topContacts").append(github);
 var blog = HTMLblog.replace("%data%", bio.contact.blog);
 $("#topContacts").append(blog);
 var loc = HTMLlocation.replace("%data%", bio.contact.loc);
 $("#topContacts").append(loc);

 var pic = HTMLbioPic.replace("%data%", bio.pictureURL);
 $("#header").append(pic);
 var msg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
 $("#header").append(msg);
 $("#header").append(HTMLskillsStart);
 var skills = HTMLskills.replace("%data%", bio.skills);
 $("#header").append(skills);

 var work = {
 	jobs: [
 	{
 		employer: "alibaba",
 		title: "Senior Software Engineer",
 		dates: "2016 till now"
 	},
 	{
 		employer: "samsung",
 		title: "Software Engineer",
 		dates: "2013 - 2016"
 	}
 	]
 };

 var projects = {
 	projects: [
 	{
 		"title" : "sample project 1",
 		"dates" : "2017"
 	}
 	]
 }

 var education = {};
 education["name"] = "UESTC";
 education["years"] = "2009-2013";
 education["city"] = "Chengdu";

 $("#main").append(work["position"]);
 $("#main").append(education.name);