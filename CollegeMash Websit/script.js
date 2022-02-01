const names = [
    "University of Michigan - Ann Arbor",
    "Stanford University",
    "University of California - Los Angeles",
    "Northwestern University",
    "University of California - Berkeley",
    "University of California - Santa Barbara",
    "University of North Carolina - Chapel Hill",
    "University of Virginia",
    "Harvard University",
    "University of Pennsylvania",
    "Princeton University",
    "Georgetown University",
    "Brown University",
    "Yale University",
    "Columbia University",
    "University of Illinois - Urbana Champaign (CS Department)",
    "Duke University",
    "Boston College",
    "University of Southern California",
    "Cornell University",
    "Massachusetts Institute of Technology",
    "University of Florida",
    "Johns Hopkins University",
    "Washington University in St. Louis",
    "Vanderbilt University",
    "University of Chicago",
    "Boston University",
    "Tulane University",
    "University of Oxford",
    "New York University",
    "Emory University",
    "Bowdoin College",
    "Tufts University",
    "California Institute of Technology",
    "University of California - Irvine",
    "Brandeis University",
    "Dartmouth College",
    "Northeastern University",
    "College of William and Mary",
    "Florida State University",
    "William Marsh Rice University",
    "University of California - San Diego",
    "University of Miami",
    "University of Wisconsin - Madison",
    "University of California - Davis",
    "Wake Forest University",
    "University of Texas at Austin",
    "Carnegie Mellon University",
    "Swiss Federal Institute of Technology",
    "Georgia Institute of Technology",
    "Williams College",
    "University of Rochester",
    "Syracuse University",
    "University of Washington",
    "University of Connecticut",
    "University of Georgia",
    "The Ohio State University",
    "University of Zurich",
    "Villanova University",
    "George Washington University",
    "University of Massachusetts - Amherst",
    "University of Pittsburgh",
    "University of Minnesota - Twin Cities",
    "Santa Clara University",
    "Pennsylvania State University",
    "Purdue University - West Lafayette",
    "University of Illinois Urbana-Champaign",
    "Pepperdine University",
    "Case Western Reserve University",
    "University of Maryland - College Park",
    "Virginia Polytechnic Institute and State University",
    "Rutgers University",
    "United States Naval Academy",
    "United States Military Academy",
    "Texas Christian University",
    "Lehigh University",
    "Fordham University",
    "Gonzaga University",
    "Gettysburg College",
    "Loyola Marymount University",
    "Rensselaer Polytechnic Institute",
    "Clemson University",
    "Indiana University Bloomington",
    "American University",
    "Michigan State University",
    "Worcester Polytechnic Institute",
    "James Madison University",
    "Southern Methodist University",
    "University of Oklahoma",
    "Yeshiva University",
    "University of Kansas",
    "Baylor University",
    "Texas A&M University",
    "Louisiana State University",
    "Stevens Institute of Technology",
    "Western Michigan University",
    "University of Nevada - Las Vegas",
    "Oral Roberts University",
    "Wright State University",
    "Bob Jones University",
    "Northern Virginia Community College",
    "Brigham Young University - Provo"
];
let scores = ["-46", "-44", "-41", "-37", "-35", "-30", "-27", "-22", "-18", "-10", "-7", "-5", "-3", "0", "4", "5", "7", "8", "8", "13", "14", "14", "15", "15", "16", "20", "22", "23", "23", "24", "25", "26", "29", "30", "31", "35", "37", "39", "40", "42", "45", "46", "48", "49", "49", "50", "55", "57", "58", "69", "69", "69", "73", "75", "79", "81", "82", "83", "85", "86", "88", "88", "93", "96", "97", "100", "100", "101", "102", "105", "106", "106", "109", "111", "116", "129", "136", "137", "140", "140", "142", "142", "143", "143", "144", "147", "154", "156", "165", "165", "168", "173", "176", "200", "251", "343", "360", "444", "497", "517", "556", "1000"];
const images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Michigan_Wolverines_logo.svg/1280px-Michigan_Wolverines_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/The_University_of_California_UCLA.svg/1200px-The_University_of_California_UCLA.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Northwestern_Wildcats_logo.svg/665px-Northwestern_Wildcats_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/California_Golden_Bears_logo.svg/2555px-California_Golden_Bears_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/UC_Santa_Barbara_logo.svg/2560px-UC_Santa_Barbara_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/North_Carolina_Tar_Heels_logo.svg/1280px-North_Carolina_Tar_Heels_logo.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Virginia_Cavaliers_sabre.svg/1200px-Virginia_Cavaliers_sabre.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Harvard_Crimson_logo.svg/868px-Harvard_Crimson_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Penn_Quakers_logo.svg/1680px-Penn_Quakers_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Princeton_Tigers_logo.svg/895px-Princeton_Tigers_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Georgetown_Hoyas_logo.svg/1020px-Georgetown_Hoyas_logo.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Brown_University_coat_of_arms.svg/1200px-Brown_University_coat_of_arms.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Yale_Bulldogs_script.svg/1045px-Yale_Bulldogs_script.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Illinois_Fighting_Illini_logo.svg/1417px-Illinois_Fighting_Illini_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Duke_Athletics_logo.svg/2293px-Duke_Athletics_logo.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Boston_College_Eagles_logo.svg/800px-Boston_College_Eagles_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/USC_Trojans_logo.svg/1373px-USC_Trojans_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/1024px-Cornell_University_seal.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1280px-MIT_logo.svg.png", "https://cdn.freebiesupply.com/images/large/2x/florida-gators-logo-png-transparent.png", "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Johns_Hopkins_Blue_Jays.svg/1200px-Johns_Hopkins_Blue_Jays.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/WashU_St._Louis_seal.svg/1200px-WashU_St._Louis_seal.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Vanderbilt_Commodores_logo.svg/1051px-Vanderbilt_Commodores_logo.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/University_of_Chicago_shield.svg/1200px-University_of_Chicago_shield.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boston_University_seal.svg/1200px-Boston_University_seal.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Tulane_Green_Wave_logo.svg/1200px-Tulane_Green_Wave_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1636px-Oxford-University-Circlet.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/New_York_University_Seal.svg/640px-New_York_University_Seal.svg.png", "https://upload.wikimedia.org/wikipedia/en/a/ae/Emory_University_Seal.png", "https://upload.wikimedia.org/wikipedia/en/e/e8/Formal_Seal_of_Bowdoin_College%2C_Brunswick%2C_ME%2C_USA.svg", "https://upload.wikimedia.org/wikipedia/en/2/22/Tufts_Jumbos_logo.png", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_California_Institute_of_Technology.svg/1200px-Seal_of_the_California_Institute_of_Technology.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/University_of_California%2C_Irvine_seal.svg/1200px-University_of_California%2C_Irvine_seal.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Brandeis_University_seal.svg/1200px-Brandeis_University_seal.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Dartmouth_College_Big_Green_logo.svg/807px-Dartmouth_College_Big_Green_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Northeastern_Huskies_logo.svg/701px-Northeastern_Huskies_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/William_%26_Mary_Tribe_logo.svg/1280px-William_%26_Mary_Tribe_logo.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Florida_State_Seminoles_logo.svg/640px-Florida_State_Seminoles_logo.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Rice_University_seal.svg/1200px-Rice_University_seal.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/University_of_California%2C_San_Diego_seal.svg/800px-University_of_California%2C_San_Diego_seal.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Miami_Hurricanes_logo.svg/2560px-Miami_Hurricanes_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Wisconsin_Badgers_logo.svg/1086px-Wisconsin_Badgers_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/UC_Davis_Aggies_logo.svg/2560px-UC_Davis_Aggies_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wake_Forest_University_Athletic_logo.svg/2560px-Wake_Forest_University_Athletic_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Texas_Longhorns_logo.svg/1200px-Texas_Longhorns_logo.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Carnegie_Mellon_University_seal.svg/1200px-Carnegie_Mellon_University_seal.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/ETH_Z%C3%BCrich_Logo.svg/2560px-ETH_Z%C3%BCrich_Logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Georgia_Tech_Yellow_Jackets_logo.svg/1200px-Georgia_Tech_Yellow_Jackets_logo.svg.png", "https://images.squarespace-cdn.com/content/5717ee8e1bbee08525c09f91/1466627014469-PGFPSFFIVKHWRN7S4P7Q/?content-type=image%2Fpng", "https://www.rochesterfirst.com/wp-content/uploads/sites/66/2018/01/universityofrochesterlogo_1487157387000_17343118_ver1.0.png?w=1280", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Syracuse_Orange_logo.svg/1200px-Syracuse_Orange_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/3/36/University_of_Washington_Block_W_logo_RGB_brand_colors.SVG", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Connecticut_Huskies_logo.svg/1200px-Connecticut_Huskies_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Georgia_Athletics_logo.svg/1024px-Georgia_Athletics_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ohio_State_Buckeyes_logo.svg/1200px-Ohio_State_Buckeyes_logo.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/University_of_Zurich_seal.svg/1200px-University_of_Zurich_seal.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Villanova_Wildcats_logo.svg/2296px-Villanova_Wildcats_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/George_Washington_Colonials_logo.svg/1200px-George_Washington_Colonials_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/UMass_Amherst_Athletics_logo.svg/2505px-UMass_Amherst_Athletics_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Pitt_Panthers_wordmark.svg/1200px-Pitt_Panthers_wordmark.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Minnesota_Golden_Gophers_logo.svg/1200px-Minnesota_Golden_Gophers_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Santa_Clara_Broncos_logo.svg/1200px-Santa_Clara_Broncos_logo.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Penn_State_Nittany_Lions_logo.svg/1200px-Penn_State_Nittany_Lions_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Purdue_Boilermakers_logo.svg/1200px-Purdue_Boilermakers_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Illinois_Fighting_Illini_logo.svg/1200px-Illinois_Fighting_Illini_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Pepperdine_Waves_logo.svg/1200px-Pepperdine_Waves_logo.svg.png", "https://upload.wikimedia.org/wikipedia/en/7/72/Case_Western_Reserve_University_Spartans_logo_mascot.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Maryland_Terrapins_logo.svg/1200px-Maryland_Terrapins_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Virginia_Tech_Hokies_logo.svg/1280px-Virginia_Tech_Hokies_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Rutgers_Scarlet_Knights_logo.svg/1200px-Rutgers_Scarlet_Knights_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Navy_Athletics_logo.svg/1200px-Navy_Athletics_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/U.S._Military_Academy_Coat_of_Arms.svg/1200px-U.S._Military_Academy_Coat_of_Arms.svg.png", "https://upload.wikimedia.org/wikipedia/commons/e/ea/Texas_Christian_University_logo.gif", "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/LehighMountainHawks.svg/1200px-LehighMountainHawks.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Fordham_Rams_logo.svg/1200px-Fordham_Rams_logo.svg.png", "https://logos-world.net/wp-content/uploads/2020/06/Gonzaga-Bulldogs-Basketball-Logo.png", "https://images.squarespace-cdn.com/content/5717ee8e1bbee08525c09f91/1466887144778-NMLHYW2GA31OHYWE0KVP/?content-type=image%2Fpng", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/LMU_Lions_logo.svg/1200px-LMU_Lions_logo.svg.png", "https://rpi.edu/dept/metasite/images/rpi-seal-cmyk-black.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Clemson_Tigers_logo.svg/1200px-Clemson_Tigers_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Indiana_Hoosiers_logo.svg/1200px-Indiana_Hoosiers_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/American_Eagles_logo.svg/1200px-American_Eagles_logo.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Michigan_State_Athletics_logo.svg/1200px-Michigan_State_Athletics_logo.svg.png", "https://upload.wikimedia.org/wikipedia/en/1/1b/WPI_logo.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/James_Madison_University_Athletics_logo.svg/1200px-James_Madison_University_Athletics_logo.svg.png", "https://www.smu.edu/-/media/Site/DevelopmentExternalAffairs/MarketingCommunications/Logos/athletics/SMUwPony,-d-,RwB,-d-,outline,-d-,WebOnly,-d-,rgb.png?la=en", "https://www.cs.ou.edu/~atiq/pics/ou-logo-large1.gif", "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Yeshiva_University.svg/1200px-Yeshiva_University.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/University_of_Kansas_athletics_%28logo%29.svg/800px-University_of_Kansas_athletics_%28logo%29.svg.png", "https://logos-world.net/wp-content/uploads/2020/06/Baylor-Bears-Logo-2005-2018.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Texas_A%26M_University_logo.svg/1246px-Texas_A%26M_University_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Louisiana_State_University_%28logo%29.svg/524px-Louisiana_State_University_%28logo%29.svg.png", "https://web.stevens.edu/news/newspoints/brand-logos/2020/Circular/Stevens-Circular-Logo-2020_RED.png", "https://heliuw.files.wordpress.com/2019/02/wmu-logo.png?w=225", "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c9/University_of_Nevada_Las_Vegaslogo_square.png/revision/latest?cb=20200106164645", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Oral_Roberts_Golden_Eagles_logo.svg/1200px-Oral_Roberts_Golden_Eagles_logo.svg.png", "http://www.wright.edu/sites/www.wright.edu/files/page/attachments/03_WRIGHTSTATE_BIPLANE_N_FULL.png", "https://www.bju.edu/images/bju_logo_512.png", "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Northern_Virginia_Community_College_seal.svg/1200px-Northern_Virginia_Community_College_seal.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/BYU_Cougars_logo.svg/1200px-BYU_Cougars_logo.svg.png"];


//console.log(names.length)
//console.log(scores.length)
let rand1 = Math.floor(Math.random() * names.length);
let rand2 = Math.floor(Math.random() * names.length);
//let table = document.getElementById("sortingTable");

function changeText1() {
    name1txt = document.getElementById("picker").getElementsByClassName("name1Label")[0];
    name2txt = document.getElementById("picker").getElementsByClassName("name2Label")[0];

    rand1 = Math.floor(Math.random() * names.length);
    rand2 = Math.floor(Math.random() * names.length);
    name1txt.innerHTML = names[rand1];
    name2txt.innerHTML = names[rand2];

    setScore(rand1, rand2);
    setImages(rand1, rand2);
}

function changeText2() {
    name1txt = document.getElementById("picker").getElementsByClassName("name1Label")[0];
    name2txt = document.getElementById("picker").getElementsByClassName("name2Label")[0];
    rand1 = Math.floor(Math.random() * names.length);
    rand2 = Math.floor(Math.random() * names.length);
    name1txt.innerHTML = names[rand1];
    name2txt.innerHTML = names[rand2];

    setScore(rand1, rand2);
    setImages(rand1, rand2);

}

function setScore(rand1, rand2) {
    let score1txt = document.getElementById("pickerScore").getElementsByClassName("score1Label")[0];
    let score2txt = document.getElementById("pickerScore").getElementsByClassName("score2Label")[0];
    score1txt.innerHTML = scores[rand1];
    score2txt.innerHTML = scores[rand2];
}

function setImages(rand1, rand2) {
    let pic1txt = document.getElementById("pickerPics").getElementsByTagName("img")[0];
    let pic2txt = document.getElementById("pickerPics").getElementsByTagName("img")[1];
    pic1txt.src = images[rand1];
    pic2txt.src = images[rand2];
}

function changeScores() {

}
