"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const chennaiTestimonials = [
  {
    id: 1,
    name: "Guatam",
    role: "Startup Founder",
    text: "They provided me with the Russian girl near my hotel in Chennai. I couldn't thank the team for such personalized service at affordable rates. Highly recommended to everyone.",
  },
  {
    id: 2,
    name: "Mukesh",
    role: "Project Manager",
    text: "Honestly, my experience with Russian call girl in Chennai was top-notch. The moment I meet with the independent escort, I got to know that tonight I gonna hit the best erotica. Thank you so much!",
  },
  {
    id: 3,
    name: "Shiv",
    role: "Instagram Influencer",
    text: "I was wondering whether I would get the last minute Russian escort service in Chennai or not. But to my surprise, when my friend referred to this agency, I floated on the ninth cloud of pleasure last night.",
  },
  {
    id: 4,
    name: "Rahul",
    role: "Business Executive",
    text: "The Russian escorts in Chennai exceeded all my expectations. Professional, elegant, and absolutely stunning. The service was discreet and impeccable from start to finish.",
  },
  {
    id: 5,
    name: "Arjun",
    role: "Software Engineer",
    text: "Best decision I made during my Chennai business trip. The Russian escort was classy, sophisticated, and made my evening unforgettable. Definitely coming back!",
  },
  {
    id: 6,
    name: "Vikram",
    role: "Investment Banker",
    text: "Premium Russian escorts in Chennai delivered exactly as promised. Timely service, beautiful companion, and absolute discretion. Worth every penny spent.",
  },
  {
    id: 7,
    name: "Aditya",
    role: "Entrepreneur",
    text: "The Russian call girls in Chennai are simply amazing. Professional service, beautiful escorts, and seamless booking process. My go-to agency now!",
  },
  {
    id: 8,
    name: "Rohan",
    role: "Marketing Director",
    text: "Exceptional Russian escort service in Chennai. The team understood my preferences and matched me perfectly. An outstanding experience from booking to checkout.",
  },
  {
    id: 9,
    name: "Karan",
    role: "Real Estate Developer",
    text: "The Russian escorts in Chennai are world-class. Professional, elegant, and completely discreet. Made my stay in Chennai absolutely memorable.",
  },
  {
    id: 10,
    name: "Malik",
    role: "Event Manager",
    text: "I booked a Russian escort in Chennai for a corporate event. The service was impeccable, and the escort was stunning and professional. Highly recommended!",
  },
  {
    id: 11,
    name: "Nikhil",
    role: "Consultant",
    text: "Best Russian escort agency in Chennai! The booking process was smooth, and the escort exceeded all expectations. Truly premium service.",
  },
  {
    id: 12,
    name: "Sameer",
    role: "Doctor",
    text: "After a stressful week, I needed relaxation. The Russian call girl in Chennai provided exactly what I needed - class, elegance, and unforgettable moments.",
  },
  {
    id: 13,
    name: "Aman",
    role: "Architect",
    text: "The Russian escorts in Chennai are beautiful and professional. The agency's attention to detail and discretion is remarkable. Will definitely book again.",
  },
  {
    id: 14,
    name: "Vivek",
    role: "Tech CEO",
    text: "Premium Russian escort service in Chennai that understands business needs. Discreet, professional, and absolutely stunning companions. Exceptional quality.",
  },
  {
    id: 15,
    name: "Raj",
    role: "Film Director",
    text: "The Russian call girls in Chennai are perfect companions for any occasion. Beautiful, sophisticated, and completely professional. Outstanding service!",
  },
];

const jaipurTestimonials = [
  {
    id: 1,
    name: "Rajat",
    role: "Heritage Tour Operator",
    text: "They provided me with the Russian girl near my hotel in Jaipur. I couldn't thank the team for such personalized service at affordable rates. Highly recommended to everyone exploring the Pink City.",
  },
  {
    id: 2,
    name: "Yash",
    role: "Business Traveler",
    text: "Honestly, my experience with Russian call girl in Jaipur was top-notch. The moment I meet with the independent escort, I got to know that tonight I gonna hit the best erotica. Thank you so much!",
  },
  {
    id: 3,
    name: "Dev",
    role: "Wedding Planner",
    text: "I was wondering whether I would get the last minute Russian escort service in Jaipur or not. But to my surprise, when my friend referred to this agency, I floated on the ninth cloud of pleasure last night.",
  },
  {
    id: 4,
    name: "Priyansh",
    role: "Real Estate Broker",
    text: "The Russian escorts in Jaipur exceeded all my expectations. Professional, elegant, and absolutely stunning. The service was discreet and impeccable from start to finish in this royal city.",
  },
  {
    id: 5,
    name: "Kunal",
    role: "Photographer",
    text: "Best decision I made during my Jaipur visit. The Russian escort was classy, sophisticated, and understood the heritage charm of the city. Made my evening unforgettable. Definitely coming back!",
  },
  {
    id: 6,
    name: "Harsh",
    role: "Hotel Manager",
    text: "Premium Russian escorts in Jaipur delivered exactly as promised. Timely service, beautiful companion who appreciated the royal atmosphere, and absolute discretion. Worth every penny spent.",
  },
  {
    id: 7,
    name: "Aniket",
    role: "Tour Guide",
    text: "The Russian call girls in Jaipur are simply amazing. Professional service, beautiful escorts who respect the cultural heritage, and seamless booking process. My go-to agency now!",
  },
  {
    id: 8,
    name: "Rishabh",
    role: "Jewelry Designer",
    text: "Exceptional Russian escort service in Jaipur. The team understood my preferences and matched me perfectly. An outstanding experience from booking to checkout in the Pink City.",
  },
  {
    id: 9,
    name: "Sarthak",
    role: "Cultural Event Organizer",
    text: "The Russian escorts in Jaipur are world-class. Professional, elegant, and completely discreet. They understand the royal heritage and blend perfectly. Made my stay in Jaipur absolutely memorable.",
  },
  {
    id: 10,
    name: "Ayush",
    role: "Restaurant Owner",
    text: "I booked a Russian escort in Jaipur for a heritage tour followed by dinner. The service was impeccable, and the escort was stunning and professional. Highly recommended for Jaipur visitors!",
  },
  {
    id: 11,
    name: "Nakul",
    role: "Travel Blogger",
    text: "Best Russian escort agency in Jaipur! The booking process was smooth, and the escort exceeded all expectations. Truly premium service that understands the Pink City's charm.",
  },
  {
    id: 12,
    name: "Dhruv",
    role: "Textile Business Owner",
    text: "After exploring Jaipur's heritage sites, I needed relaxation. The Russian call girl in Jaipur provided exactly what I needed - class, elegance, and unforgettable moments in this royal city.",
  },
  {
    id: 13,
    name: "Pranav",
    role: "Art Collector",
    text: "The Russian escorts in Jaipur are beautiful and professional. They appreciate the city's royal architecture and cultural heritage. The agency's attention to detail is remarkable. Will definitely book again.",
  },
  {
    id: 14,
    name: "Rudra",
    role: "Business Consultant",
    text: "Premium Russian escort service in Jaipur that understands both business needs and cultural respect. Discreet, professional, and absolutely stunning companions. Exceptional quality in the Pink City.",
  },
  {
    id: 15,
    name: "Aditya",
    role: "Heritage Hotel Owner",
    text: "The Russian call girls in Jaipur are perfect companions for any occasion - from palace visits to business dinners. Beautiful, sophisticated, and completely professional. Outstanding service!",
  },
];

const goaTestimonials = [
  {
    id: 1,
    name: "Ravi",
    role: "Beach Resort Guest",
    text: "They provided me with the Russian girl near my resort in Goa. I couldn't thank the team for such personalized service at affordable rates. Perfect companion for my beach vacation. Highly recommended!",
  },
  {
    id: 2,
    name: "Suresh",
    role: "Party Enthusiast",
    text: "Honestly, my experience with Russian call girl in Goa was top-notch. The moment I meet with the independent escort at Baga beach, I got to know that tonight I gonna hit the best erotica. Thank you so much!",
  },
  {
    id: 3,
    name: "Amit",
    role: "Digital Nomad",
    text: "I was wondering whether I would get the last minute Russian escort service in Goa or not. But to my surprise, when my friend referred to this agency, I floated on the ninth cloud of pleasure last night near Vagator.",
  },
  {
    id: 4,
    name: "Nikhil",
    role: "Business Traveler",
    text: "The Russian escorts in Goa exceeded all my expectations. Professional, elegant, and absolutely stunning. The service was discreet and impeccable from start to finish. Perfect for beach resort stays.",
  },
  {
    id: 5,
    name: "Karan",
    role: "Tourist",
    text: "Best decision I made during my Goa trip. The Russian escort was classy, sophisticated, and understood the beach lifestyle perfectly. Made my evening unforgettable. Definitely coming back!",
  },
  {
    id: 6,
    name: "Rohit",
    role: "Event Organizer",
    text: "Premium Russian escorts in Goa delivered exactly as promised. Timely service, beautiful companion who enjoyed beach activities, and absolute discretion. Worth every penny spent.",
  },
  {
    id: 7,
    name: "Vikram",
    role: "Beach Club Owner",
    text: "The Russian call girls in Goa are simply amazing. Professional service, beautiful escorts who fit the beach vibe, and seamless booking process. My go-to agency now for all my guests!",
  },
  {
    id: 8,
    name: "Arjun",
    role: "Yacht Owner",
    text: "Exceptional Russian escort service in Goa. The team understood my preferences and matched me perfectly. An outstanding experience from booking to checkout. Perfect for beach parties!",
  },
  {
    id: 9,
    name: "Aditya",
    role: "Resort Manager",
    text: "The Russian escorts in Goa are world-class. Professional, elegant, and completely discreet. They understand the beach culture and blend perfectly. Made my stay in Goa absolutely memorable.",
  },
  {
    id: 10,
    name: "Rajesh",
    role: "Travel Blogger",
    text: "I booked a Russian escort in Goa for a beach day followed by nightlife. The service was impeccable, and the escort was stunning and professional. Highly recommended for Goa visitors!",
  },
  {
    id: 11,
    name: "Manish",
    role: "DJ",
    text: "Best Russian escort agency in Goa! The booking process was smooth, and the escort exceeded all expectations. Truly premium service that understands the party scene and beach lifestyle.",
  },
  {
    id: 12,
    name: "Deepak",
    role: "Beach Wedding Planner",
    text: "After a long day of beach activities, I needed relaxation. The Russian call girl in Goa provided exactly what I needed - class, elegance, and unforgettable moments near Candolim beach.",
  },
  {
    id: 13,
    name: "Pankaj",
    role: "Water Sports Instructor",
    text: "The Russian escorts in Goa are beautiful and professional. They appreciate the beach lifestyle and water activities. The agency's attention to detail is remarkable. Will definitely book again.",
  },
  {
    id: 14,
    name: "Anil",
    role: "Casino Manager",
    text: "Premium Russian escort service in Goa that understands both relaxation needs and nightlife preferences. Discreet, professional, and absolutely stunning companions. Exceptional quality in paradise.",
  },
  {
    id: 15,
    name: "Sunil",
    role: "Beach Villa Owner",
    text: "The Russian call girls in Goa are perfect companions for any occasion - from beach days to sunset parties. Beautiful, sophisticated, and completely professional. Outstanding service!",
  },
];

const mumbaiTestimonials = [
  {
    id: 1,
    name: "Rohan",
    role: "Film Producer",
    text: "They provided me with the Russian girl near my hotel in Mumbai. I couldn't thank the team for such personalized service at affordable rates. Perfect companion for my Bollywood events. Highly recommended!",
  },
  {
    id: 2,
    name: "Kunal",
    role: "Investment Banker",
    text: "Honestly, my experience with Russian call girl in Mumbai was top-notch. The moment I meet with the independent escort in Bandra, I got to know that tonight I gonna hit the best erotica. Thank you so much!",
  },
  {
    id: 3,
    name: "Akshay",
    role: "Business Executive",
    text: "I was wondering whether I would get the last minute Russian escort service in Mumbai or not. But to my surprise, when my friend referred to this agency, I floated on the ninth cloud of pleasure last night near Colaba.",
  },
  {
    id: 4,
    name: "Vikram",
    role: "Corporate Lawyer",
    text: "The Russian escorts in Mumbai exceeded all my expectations. Professional, elegant, and absolutely stunning. The service was discreet and impeccable from start to finish. Perfect for business dinners!",
  },
  {
    id: 5,
    name: "Raj",
    role: "Real Estate Developer",
    text: "Best decision I made during my Mumbai business trip. The Russian escort was classy, sophisticated, and understood the celebrity culture perfectly. Made my evening unforgettable. Definitely coming back!",
  },
  {
    id: 6,
    name: "Sameer",
    role: "Event Manager",
    text: "Premium Russian escorts in Mumbai delivered exactly as promised. Timely service, beautiful companion who enjoyed celebrity parties, and absolute discretion. Worth every penny spent.",
  },
  {
    id: 7,
    name: "Arjun",
    role: "Tech CEO",
    text: "The Russian call girls in Mumbai are simply amazing. Professional service, beautiful escorts who fit the business-entertainment vibe, and seamless booking process. My go-to agency now!",
  },
  {
    id: 8,
    name: "Rahul",
    role: "Restaurant Owner",
    text: "Exceptional Russian escort service in Mumbai. The team understood my preferences and matched me perfectly. An outstanding experience from booking to checkout. Perfect for celebrity events!",
  },
  {
    id: 9,
    name: "Karan",
    role: "Hotel Manager",
    text: "The Russian escorts in Mumbai are world-class. Professional, elegant, and completely discreet. They understand the business culture and blend perfectly. Made my stay in Mumbai absolutely memorable.",
  },
  {
    id: 10,
    name: "Nikhil",
    role: "Media Professional",
    text: "I booked a Russian escort in Mumbai for a business dinner followed by nightlife. The service was impeccable, and the escort was stunning and professional. Highly recommended for Mumbai visitors!",
  },
  {
    id: 11,
    name: "Aditya",
    role: "Fashion Designer",
    text: "Best Russian escort agency in Mumbai! The booking process was smooth, and the escort exceeded all expectations. Truly premium service that understands the celebrity scene and business culture.",
  },
  {
    id: 12,
    name: "Vivek",
    role: "Financial Advisor",
    text: "After a long day of business meetings, I needed relaxation. The Russian call girl in Mumbai provided exactly what I needed - class, elegance, and unforgettable moments near Worli.",
  },
  {
    id: 13,
    name: "Aman",
    role: "Marketing Director",
    text: "The Russian escorts in Mumbai are beautiful and professional. They appreciate the business lifestyle and celebrity culture. The agency's attention to detail is remarkable. Will definitely book again.",
  },
  {
    id: 14,
    name: "Rishabh",
    role: "Entertainment Industry",
    text: "Premium Russian escort service in Mumbai that understands both business needs and entertainment preferences. Discreet, professional, and absolutely stunning companions. Exceptional quality in the city of dreams.",
  },
  {
    id: 15,
    name: "Siddharth",
    role: "Business Consultant",
    text: "The Russian call girls in Mumbai are perfect companions for any occasion - from business dinners to celebrity parties. Beautiful, sophisticated, and completely professional. Outstanding service!",
  },
];

const hyderabadTestimonials = [
  {
    id: 1,
    name: "Praveen",
    role: "IT Professional",
    text: "They provided me with the Russian girl near my hotel in Hyderabad. I couldn't thank the team for such personalized service at affordable rates. Perfect companion for my tech convention. Highly recommended!",
  },
  {
    id: 2,
    name: "Srinivas",
    role: "Software Engineer",
    text: "Honestly, my experience with Russian call girl in Hyderabad was top-notch. The moment I meet with the independent escort in Gachibowli, I got to know that tonight I gonna hit the best erotica. Thank you so much!",
  },
  {
    id: 3,
    name: "Karthik",
    role: "Tech Entrepreneur",
    text: "I was wondering whether I would get the last minute Russian escort service in Hyderabad or not. But to my surprise, when my friend referred to this agency, I floated on the ninth cloud of pleasure last night near Banjara Hills.",
  },
  {
    id: 4,
    name: "Ravi",
    role: "Business Analyst",
    text: "The Russian escorts in Hyderabad exceeded all my expectations. Professional, elegant, and absolutely stunning. The service was discreet and impeccable from start to finish. Perfect for convention dinners!",
  },
  {
    id: 5,
    name: "Venkat",
    role: "Project Manager",
    text: "Best decision I made during my Hyderabad business trip. The Russian escort was classy, sophisticated, and understood the tech culture perfectly. Made my evening unforgettable. Definitely coming back!",
  },
  {
    id: 6,
    name: "Anil",
    role: "IT Consultant",
    text: "Premium Russian escorts in Hyderabad delivered exactly as promised. Timely service, beautiful companion who enjoyed tech events, and absolute discretion. Worth every penny spent.",
  },
  {
    id: 7,
    name: "Suresh",
    role: "Startup Founder",
    text: "The Russian call girls in Hyderabad are simply amazing. Professional service, beautiful escorts who fit the tech-heritage vibe, and seamless booking process. My go-to agency now!",
  },
  {
    id: 8,
    name: "Mahesh",
    role: "Convention Organizer",
    text: "Exceptional Russian escort service in Hyderabad. The team understood my preferences and matched me perfectly. An outstanding experience from booking to checkout. Perfect for HICC events!",
  },
  {
    id: 9,
    name: "Rajesh",
    role: "Hotel Manager",
    text: "The Russian escorts in Hyderabad are world-class. Professional, elegant, and completely discreet. They understand the convention culture and blend perfectly. Made my stay in Hyderabad absolutely memorable.",
  },
  {
    id: 10,
    name: "Naveen",
    role: "Tech Blogger",
    text: "I booked a Russian escort in Hyderabad for a convention dinner followed by fine dining. The service was impeccable, and the escort was stunning and professional. Highly recommended for Hyderabad visitors!",
  },
  {
    id: 11,
    name: "Pradeep",
    role: "IT Director",
    text: "Best Russian escort agency in Hyderabad! The booking process was smooth, and the escort exceeded all expectations. Truly premium service that understands the tech scene and heritage culture.",
  },
  {
    id: 12,
    name: "Sudheer",
    role: "Business Developer",
    text: "After a long day of tech meetings, I needed relaxation. The Russian call girl in Hyderabad provided exactly what I needed - class, elegance, and unforgettable moments near Jubilee Hills.",
  },
  {
    id: 13,
    name: "Chaitanya",
    role: "System Architect",
    text: "The Russian escorts in Hyderabad are beautiful and professional. They appreciate the tech lifestyle and heritage culture. The agency's attention to detail is remarkable. Will definitely book again.",
  },
  {
    id: 14,
    name: "Raghav",
    role: "Convention Manager",
    text: "Premium Russian escort service in Hyderabad that understands both tech needs and luxury preferences. Discreet, professional, and absolutely stunning companions. Exceptional quality in the tech city.",
  },
  {
    id: 15,
    name: "Sai",
    role: "IT Executive",
    text: "The Russian call girls in Hyderabad are perfect companions for any occasion - from convention dinners to heritage tours. Beautiful, sophisticated, and completely professional. Outstanding service!",
  },
];

const puneTestimonials = [
  {
    id: 1,
    name: "Abhishek",
    role: "Tech Professional",
    text: "They provided me with the Russian girl near my hotel in Pune. I couldn't thank the team for such personalized service at affordable rates. Perfect companion for my weekend escape. Highly recommended!",
  },
  {
    id: 2,
    name: "Rohit",
    role: "Weekend Traveler",
    text: "Honestly, my experience with Russian call girl in Pune was top-notch. The moment I meet with the independent escort in Koregaon Park, I got to know that tonight I gonna hit the best erotica. Thank you so much!",
  },
  {
    id: 3,
    name: "Siddhant",
    role: "Digital Nomad",
    text: "I was wondering whether I would get the last minute Russian escort service in Pune or not. But to my surprise, when my friend referred to this agency, I floated on the ninth cloud of pleasure last night near Kharadi.",
  },
  {
    id: 4,
    name: "Ashish",
    role: "Business Traveler",
    text: "The Russian escorts in Pune exceeded all my expectations. Professional, elegant, and absolutely stunning. The service was discreet and impeccable from start to finish. Perfect for weekend getaways!",
  },
  {
    id: 5,
    name: "Kiran",
    role: "Tourist",
    text: "Best decision I made during my Pune visit. The Russian escort was classy, sophisticated, and understood the bohemian culture perfectly. Made my evening unforgettable. Definitely coming back!",
  },
  {
    id: 6,
    name: "Varun",
    role: "Event Organizer",
    text: "Premium Russian escorts in Pune delivered exactly as promised. Timely service, beautiful companion who enjoyed rooftop lounges, and absolute discretion. Worth every penny spent.",
  },
  {
    id: 7,
    name: "Pranav",
    role: "Microbrewery Owner",
    text: "The Russian call girls in Pune are simply amazing. Professional service, beautiful escorts who fit the bohemian-tech vibe, and seamless booking process. My go-to agency now!",
  },
  {
    id: 8,
    name: "Aditya",
    role: "Lavasa Resort Guest",
    text: "Exceptional Russian escort service in Pune. The team understood my preferences and matched me perfectly. An outstanding experience from booking to checkout. Perfect for weekend escapes!",
  },
  {
    id: 9,
    name: "Rahul",
    role: "Hotel Manager",
    text: "The Russian escorts in Pune are world-class. Professional, elegant, and completely discreet. They understand the bohemian culture and blend perfectly. Made my stay in Pune absolutely memorable.",
  },
  {
    id: 10,
    name: "Nikhil",
    role: "Travel Blogger",
    text: "I booked a Russian escort in Pune for a weekend getaway followed by microbrewery visits. The service was impeccable, and the escort was stunning and professional. Highly recommended for Pune visitors!",
  },
  {
    id: 11,
    name: "Karan",
    role: "Tech Director",
    text: "Best Russian escort agency in Pune! The booking process was smooth, and the escort exceeded all expectations. Truly premium service that understands the bohemian scene and tech culture.",
  },
  {
    id: 12,
    name: "Aman",
    role: "Weekend Planner",
    text: "After a long day of tech events, I needed relaxation. The Russian call girl in Pune provided exactly what I needed - class, elegance, and unforgettable moments near Baner.",
  },
  {
    id: 13,
    name: "Vikram",
    role: "Art Gallery Owner",
    text: "The Russian escorts in Pune are beautiful and professional. They appreciate the bohemian lifestyle and tech culture. The agency's attention to detail is remarkable. Will definitely book again.",
  },
  {
    id: 14,
    name: "Rohan",
    role: "Resort Manager",
    text: "Premium Russian escort service in Pune that understands both weekend needs and tech preferences. Discreet, professional, and absolutely stunning companions. Exceptional quality in the weekend destination.",
  },
  {
    id: 15,
    name: "Arjun",
    role: "Tech Executive",
    text: "The Russian call girls in Pune are perfect companions for any occasion - from weekend escapes to tech events. Beautiful, sophisticated, and completely professional. Outstanding service!",
  },
];

const kolkataTestimonials = [
  {
    id: 1,
    name: "Arijit",
    role: "Cultural Enthusiast",
    text: "They provided me with the Russian girl near my hotel in Kolkata. I couldn't thank the team for such personalized service at affordable rates. Perfect companion for my jazz evening. Highly recommended!",
  },
  {
    id: 2,
    name: "Sourav",
    role: "Business Traveler",
    text: "Honestly, my experience with Russian call girl in Kolkata was top-notch. The moment I meet with the independent escort in Park Street, I got to know that tonight I gonna hit the best erotica. Thank you so much!",
  },
  {
    id: 3,
    name: "Debashish",
    role: "Heritage Tour Guide",
    text: "I was wondering whether I would get the last minute Russian escort service in Kolkata or not. But to my surprise, when my friend referred to this agency, I floated on the ninth cloud of pleasure last night near Salt Lake.",
  },
  {
    id: 4,
    name: "Ritwik",
    role: "Business Executive",
    text: "The Russian escorts in Kolkata exceeded all my expectations. Professional, elegant, and absolutely stunning. The service was discreet and impeccable from start to finish. Perfect for cultural events!",
  },
  {
    id: 5,
    name: "Anirban",
    role: "Tourist",
    text: "Best decision I made during my Kolkata visit. The Russian escort was classy, sophisticated, and understood the heritage charm perfectly. Made my evening unforgettable. Definitely coming back!",
  },
  {
    id: 6,
    name: "Sayan",
    role: "Event Manager",
    text: "Premium Russian escorts in Kolkata delivered exactly as promised. Timely service, beautiful companion who enjoyed jazz evenings, and absolute discretion. Worth every penny spent.",
  },
  {
    id: 7,
    name: "Abhijit",
    role: "Restaurant Owner",
    text: "The Russian call girls in Kolkata are simply amazing. Professional service, beautiful escorts who fit the cultural-business vibe, and seamless booking process. My go-to agency now!",
  },
  {
    id: 8,
    name: "Soham",
    role: "Heritage Hotel Guest",
    text: "Exceptional Russian escort service in Kolkata. The team understood my preferences and matched me perfectly. An outstanding experience from booking to checkout. Perfect for heritage tours!",
  },
  {
    id: 9,
    name: "Arindam",
    role: "Hotel Manager",
    text: "The Russian escorts in Kolkata are world-class. Professional, elegant, and completely discreet. They understand the cultural heritage and blend perfectly. Made my stay in Kolkata absolutely memorable.",
  },
  {
    id: 10,
    name: "Subhankar",
    role: "Travel Blogger",
    text: "I booked a Russian escort in Kolkata for a jazz evening followed by heritage dinner. The service was impeccable, and the escort was stunning and professional. Highly recommended for Kolkata visitors!",
  },
  {
    id: 11,
    name: "Sagnik",
    role: "Business Director",
    text: "Best Russian escort agency in Kolkata! The booking process was smooth, and the escort exceeded all expectations. Truly premium service that understands the cultural scene and business culture.",
  },
  {
    id: 12,
    name: "Rohan",
    role: "Jazz Club Owner",
    text: "After a long day of business meetings, I needed relaxation. The Russian call girl in Kolkata provided exactly what I needed - class, elegance, and unforgettable moments near Ballygunge.",
  },
  {
    id: 13,
    name: "Soumya",
    role: "Art Collector",
    text: "The Russian escorts in Kolkata are beautiful and professional. They appreciate the cultural lifestyle and heritage charm. The agency's attention to detail is remarkable. Will definitely book again.",
  },
  {
    id: 14,
    name: "Anupam",
    role: "Cultural Event Manager",
    text: "Premium Russian escort service in Kolkata that understands both cultural needs and business preferences. Discreet, professional, and absolutely stunning companions. Exceptional quality in the cultural capital.",
  },
  {
    id: 15,
    name: "Debjyoti",
    role: "Business Consultant",
    text: "The Russian call girls in Kolkata are perfect companions for any occasion - from jazz evenings to business dinners. Beautiful, sophisticated, and completely professional. Outstanding service!",
  },
];

const bangaloreTestimonials = [
  {
    id: 1,
    name: "Gaurav",
    role: "Startup Founder",
    text: "They provided me with the Russian girl near my hotel in Bangalore. I couldn't thank the team for such personalized service at affordable rates. Perfect companion for my startup events. Highly recommended!",
  },
  {
    id: 2,
    name: "Manish",
    role: "Tech Professional",
    text: "Honestly, my experience with Russian call girl in Bangalore was top-notch. The moment I meet with the independent escort in Koramangala, I got to know that tonight I gonna hit the best erotica. Thank you so much!",
  },
  {
    id: 3,
    name: "Akshay",
    role: "Business Traveler",
    text: "I was wondering whether I would get the last minute Russian escort service in Bangalore or not. But to my surprise, when my friend referred to this agency, I floated on the ninth cloud of pleasure last night near Indiranagar.",
  },
  {
    id: 4,
    name: "Rohit",
    role: "Investment Banker",
    text: "The Russian escorts in Bangalore exceeded all my expectations. Professional, elegant, and absolutely stunning. The service was discreet and impeccable from start to finish. Perfect for tech events!",
  },
  {
    id: 5,
    name: "Karan",
    role: "Software Engineer",
    text: "Best decision I made during my Bangalore business trip. The Russian escort was classy, sophisticated, and understood the startup culture perfectly. Made my evening unforgettable. Definitely coming back!",
  },
  {
    id: 6,
    name: "Vikram",
    role: "Event Organizer",
    text: "Premium Russian escorts in Bangalore delivered exactly as promised. Timely service, beautiful companion who enjoyed microbreweries, and absolute discretion. Worth every penny spent.",
  },
  {
    id: 7,
    name: "Arjun",
    role: "Tech CEO",
    text: "The Russian call girls in Bangalore are simply amazing. Professional service, beautiful escorts who fit the tech-nightlife vibe, and seamless booking process. My go-to agency now!",
  },
  {
    id: 8,
    name: "Rahul",
    role: "Startup Mentor",
    text: "Exceptional Russian escort service in Bangalore. The team understood my preferences and matched me perfectly. An outstanding experience from booking to checkout. Perfect for startup events!",
  },
  {
    id: 9,
    name: "Aditya",
    role: "Hotel Manager",
    text: "The Russian escorts in Bangalore are world-class. Professional, elegant, and completely discreet. They understand the tech culture and blend perfectly. Made my stay in Bangalore absolutely memorable.",
  },
  {
    id: 10,
    name: "Nikhil",
    role: "Travel Blogger",
    text: "I booked a Russian escort in Bangalore for a startup event followed by nightlife. The service was impeccable, and the escort was stunning and professional. Highly recommended for Bangalore visitors!",
  },
  {
    id: 11,
    name: "Sameer",
    role: "Tech Director",
    text: "Best Russian escort agency in Bangalore! The booking process was smooth, and the escort exceeded all expectations. Truly premium service that understands the startup scene and tech culture.",
  },
  {
    id: 12,
    name: "Vivek",
    role: "Microbrewery Owner",
    text: "After a long day of tech meetings, I needed relaxation. The Russian call girl in Bangalore provided exactly what I needed - class, elegance, and unforgettable moments near MG Road.",
  },
  {
    id: 13,
    name: "Aman",
    role: "Business Consultant",
    text: "The Russian escorts in Bangalore are beautiful and professional. They appreciate the tech lifestyle and startup culture. The agency's attention to detail is remarkable. Will definitely book again.",
  },
  {
    id: 14,
    name: "Rishabh",
    role: "Startup Investor",
    text: "Premium Russian escort service in Bangalore that understands both tech needs and nightlife preferences. Discreet, professional, and absolutely stunning companions. Exceptional quality in the Garden City.",
  },
  {
    id: 15,
    name: "Siddharth",
    role: "Tech Executive",
    text: "The Russian call girls in Bangalore are perfect companions for any occasion - from startup events to rooftop bars. Beautiful, sophisticated, and completely professional. Outstanding service!",
  },
];

const delhiNcrTestimonials = [
  {
    id: 1,
    name: "Rajat",
    role: "Business Executive",
    text: "They provided me with the Russian girl near my hotel in Delhi NCR. I couldn't thank the team for such personalized service at affordable rates. Perfect companion for my business meetings. Highly recommended!",
  },
  {
    id: 2,
    name: "Kunal",
    role: "Corporate Professional",
    text: "Honestly, my experience with Russian call girl in Delhi NCR was top-notch. The moment I meet with the independent escort in Connaught Place, I got to know that tonight I gonna hit the best erotica. Thank you so much!",
  },
  {
    id: 3,
    name: "Vikram",
    role: "Business Traveler",
    text: "I was wondering whether I would get the last minute Russian escort service in Delhi NCR or not. But to my surprise, when my friend referred to this agency, I floated on the ninth cloud of pleasure last night near Aerocity.",
  },
  {
    id: 4,
    name: "Arjun",
    role: "Investment Banker",
    text: "The Russian escorts in Delhi NCR exceeded all my expectations. Professional, elegant, and absolutely stunning. The service was discreet and impeccable from start to finish. Perfect for corporate events!",
  },
  {
    id: 5,
    name: "Rahul",
    role: "Business Consultant",
    text: "Best decision I made during my Delhi NCR business trip. The Russian escort was classy, sophisticated, and understood the corporate culture perfectly. Made my evening unforgettable. Definitely coming back!",
  },
  {
    id: 6,
    name: "Aditya",
    role: "Event Manager",
    text: "Premium Russian escorts in Delhi NCR delivered exactly as promised. Timely service, beautiful companion who enjoyed fine dining, and absolute discretion. Worth every penny spent.",
  },
  {
    id: 7,
    name: "Nikhil",
    role: "Corporate Lawyer",
    text: "The Russian call girls in Delhi NCR are simply amazing. Professional service, beautiful escorts who fit the business-luxury vibe, and seamless booking process. My go-to agency now!",
  },
  {
    id: 8,
    name: "Sameer",
    role: "Business Developer",
    text: "Exceptional Russian escort service in Delhi NCR. The team understood my preferences and matched me perfectly. An outstanding experience from booking to checkout. Perfect for business dinners!",
  },
  {
    id: 9,
    name: "Vivek",
    role: "Hotel Manager",
    text: "The Russian escorts in Delhi NCR are world-class. Professional, elegant, and completely discreet. They understand the corporate culture and blend perfectly. Made my stay in Delhi NCR absolutely memorable.",
  },
  {
    id: 10,
    name: "Aman",
    role: "Travel Blogger",
    text: "I booked a Russian escort in Delhi NCR for a business dinner followed by luxury experiences. The service was impeccable, and the escort was stunning and professional. Highly recommended for Delhi NCR visitors!",
  },
  {
    id: 11,
    name: "Rishabh",
    role: "Business Director",
    text: "Best Russian escort agency in Delhi NCR! The booking process was smooth, and the escort exceeded all expectations. Truly premium service that understands the corporate scene and luxury culture.",
  },
  {
    id: 12,
    name: "Siddharth",
    role: "Corporate Executive",
    text: "After a long day of business meetings, I needed relaxation. The Russian call girl in Delhi NCR provided exactly what I needed - class, elegance, and unforgettable moments near Vasant Kunj.",
  },
  {
    id: 13,
    name: "Karan",
    role: "Business Advisor",
    text: "The Russian escorts in Delhi NCR are beautiful and professional. They appreciate the corporate lifestyle and luxury culture. The agency's attention to detail is remarkable. Will definitely book again.",
  },
  {
    id: 14,
    name: "Aniket",
    role: "Business Strategist",
    text: "Premium Russian escort service in Delhi NCR that understands both business needs and luxury preferences. Discreet, professional, and absolutely stunning companions. Exceptional quality in the capital region.",
  },
  {
    id: 15,
    name: "Harsh",
    role: "Corporate Manager",
    text: "The Russian call girls in Delhi NCR are perfect companions for any occasion - from business dinners to luxury experiences. Beautiful, sophisticated, and completely professional. Outstanding service!",
  },
];

type TestimonialsProps = {
  cityName?: string;
};

export default function Testimonials({ cityName = "Chennai" }: TestimonialsProps) {
  const testimonials = cityName === "Jaipur" 
    ? jaipurTestimonials 
    : cityName === "Goa" 
      ? goaTestimonials 
      : cityName === "Mumbai"
        ? mumbaiTestimonials
        : cityName === "Hyderabad"
          ? hyderabadTestimonials
          : cityName === "Pune"
            ? puneTestimonials
            : cityName === "Kolkata"
              ? kolkataTestimonials
              : cityName === "Bangalore"
                ? bangaloreTestimonials
                : cityName === "Delhi NCR"
                  ? delhiNcrTestimonials
                  : chennaiTestimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(() => {
    if (typeof window === 'undefined') return 3;
    return window.innerWidth < 768 ? 1 : 3;
  });

  useEffect(() => {
    // Calculate items per view based on screen size
    const calculateItemsPerView = () => {
      if (typeof window === 'undefined') return 3;
      return window.innerWidth < 768 ? 1 : 3;
    };

    const handleResize = () => {
      const newItemsPerView = calculateItemsPerView();
      setItemsPerView(newItemsPerView);
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, testimonials.length - newItemsPerView);
        return prev > maxIndex ? 0 : prev;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [testimonials.length]);

  useEffect(() => {
    // Auto-slide testimonials every 6 seconds
    const maxIndex = Math.max(0, testimonials.length - itemsPerView);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) return 0;
        return prev + 1;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [itemsPerView, testimonials.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-12 lg:py-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-[600px] w-[600px] rounded-full bg-rose-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Client Reviews</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-white bg-clip-text text-transparent">
              CUSTOMERS THINKS OUR ESCORTS ROCKS!
            </span>
            <span className="ml-3">🤩</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mx-auto max-w-7xl overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full min-w-[100%] px-3 sm:min-w-[50%] md:min-w-[33.333%] md:px-4"
              >
                <div className="relative overflow-hidden rounded-3xl border-2 border-white/20 bg-gradient-to-br from-black/60 via-black/80 to-black/60 p-6 sm:p-8">
                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col">
                    {/* Quote icon */}
                    <div className="mb-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/30 bg-gradient-to-br from-amber-500/20 via-amber-400/10 to-transparent">
                        <Quote className="h-6 w-6 text-amber-400" />
                      </div>
                    </div>

                    {/* Testimonial text */}
                    <p className="mb-6 flex-1 text-base leading-relaxed text-white/90 sm:text-lg">
                      {testimonial.text}
                    </p>

                    {/* Author info */}
                    <div className="border-t border-white/10 pt-4">
                      <div className="mb-2 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <h4 className="mb-1 text-lg font-bold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => {
              setCurrentIndex((prev) => {
                const maxIndex = Math.max(0, testimonials.length - itemsPerView);
                if (prev <= 0) {
                  return maxIndex;
                }
                return prev - 1;
              });
            }}
            className="absolute left-2 sm:left-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/30 bg-black/80 backdrop-blur-md text-white transition-all duration-300 hover:border-amber-400/70 hover:bg-amber-500/20 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]"
          >
            <ChevronLeft className="h-7 w-7 text-amber-400" />
          </button>

          <button
            onClick={() => {
              setCurrentIndex((prev) => {
                const maxIndex = Math.max(0, testimonials.length - itemsPerView);
                if (prev >= maxIndex) return 0;
                return prev + 1;
              });
            }}
            className="absolute right-2 sm:right-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/30 bg-black/80 backdrop-blur-md text-white transition-all duration-300 hover:border-amber-400/70 hover:bg-amber-500/20 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]"
          >
            <ChevronRight className="h-7 w-7 text-amber-400" />
          </button>
        </div>

        {/* Indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? "w-8 bg-gradient-to-r from-amber-400 to-rose-400 shadow-[0_0_20px_rgba(251,191,36,0.6)]"
                  : "w-2 bg-white/30 hover:bg-white/50 hover:w-6"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

