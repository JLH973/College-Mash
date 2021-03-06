const names = ["Stanford University","University of California, Los Angeles","Northwestern University","University of California, Berkeley","University of Michigan - Ann Arbor","University of North Carolina - Chapel Hill","University of Virginia - Main Campus","Harvard University","University of Pennsylvania","University of California, Santa Barbara","Princeton University","Georgetown University","Brown University","Yale University","Columbia University","University of Illinois - Urbana Champaign (CS)","Duke University","Boston College","University of Southern California","Cornell University","Massachusetts Institute of Technology","University of Florida","Johns Hopkins University","Washington University in St Louis","Vanderbilt University","University of Chicago","Boston University","Tulane University","University of Oxford","New York University","Emory University","Bowdoin College","Tufts University","California Institute of Technology","University of California, Irvine","Harvey Mudd","Brandeis University","Dartmouth College","Northeastern University","College of William and Mary","Florida State University","William Marsh Rice University","University of California, San Diego","University of Miami","University of Wisconsin - Madison","University of California, Davis","Wake Forest University","University of Texas at Austin","Amherst College","Carnegie Mellon University","Swiss Federal Institute of Technology","University of Notre Dame du Lac","Colgate University","Georgia Institute of Technology","Williams College","University of Rochester","Syracuse University","University of Washington","University of Connecticut","University of Georgia","The Ohio State University","University of Zurich","Villanova University","George Washington University","University of Massachusetts - Amherst","University of Pittsburgh","University of Minnesota - Twin Cities","Santa Clara University","Pennsylvania State University","Purdue University - West Lafayette","University of Illinois Urbana-Champaign","Pepperdine University","Case Western Reserve University","University of Maryland, College Park","Virginia Polytechnic Institute and State University","Rutgers University","United States Naval Academy","United States Military Academy","Texas Christian University","University of Arizona","Lehigh University","University of Vermont","Fordham University ","Gonzaga University","University of Oregon","Gettysburg College","Loyola Marymount University","Rensselaer Polytechnic Institute","Clemson University","University of Iowa","Indiana University Bloomington","American University","Michigan State University","Worcester Polytechnic Institute","James Madison University","Arizona State University","Southern Methodist University ","Auburn University","University of Alabama","University of Oklahoma","Yeshiva University","University of Kansas","Baylor University","Texas A&M University","Colorado School of Mines","Miami University of Ohio","St Olaf College","University of Nebraska","Louisiana State University","University of Mississippi","Oregon State University","University of Arkansas","Stevens Institute of Technology","University of Utah","Brigham Young University - Provo","Western Michigan University","University of Nevada - Las Vegas","Christopher Newport University","Oral Roberts University","Wright State University","Knox College","Bob Jones University","Northern Virginia Community College"];
let scores = ["-44","-41","-37","-35","-31","-27","-22","-18","-10","-10","-7","-5","-3","0","4","5","7","8","8","13","14","14","15","15","16","20","22","23","23","24","25","26","29","30","31","31","35","37","39","40","42","45","46","48","49","49","50","55","55","57","58","58","61","69","69","69","73","75","79","81","82","83","85","86","88","88","93","96","97","100","100","101","102","105","106","106","109","111","116","128","129","130","136","137","138","140","140","142","142","142","143","143","144","147","154","155","156","159","163","165","165","168","173","176","178","180","190","199","200","201","219","235","251","298","323","343","360","407","444","497","500","517","556"];
const images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/The_University_of_California_UCLA.svg/1200px-The_University_of_California_UCLA.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Northwestern_Wildcats_logo.svg/665px-Northwestern_Wildcats_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/California_Golden_Bears_logo.svg/2555px-California_Golden_Bears_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Michigan_Wolverines_logo.svg/1280px-Michigan_Wolverines_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/North_Carolina_Tar_Heels_logo.svg/1280px-North_Carolina_Tar_Heels_logo.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Virginia_Cavaliers_sabre.svg/1200px-Virginia_Cavaliers_sabre.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Harvard_Crimson_logo.svg/868px-Harvard_Crimson_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Penn_Quakers_logo.svg/1680px-Penn_Quakers_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/UC_Santa_Barbara_logo.svg/2560px-UC_Santa_Barbara_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Princeton_Tigers_logo.svg/895px-Princeton_Tigers_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Georgetown_Hoyas_logo.svg/1020px-Georgetown_Hoyas_logo.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Brown_University_coat_of_arms.svg/1200px-Brown_University_coat_of_arms.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Yale_Bulldogs_script.svg/1045px-Yale_Bulldogs_script.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Illinois_Fighting_Illini_logo.svg/1417px-Illinois_Fighting_Illini_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Duke_Athletics_logo.svg/2293px-Duke_Athletics_logo.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Boston_College_Eagles_logo.svg/800px-Boston_College_Eagles_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/USC_Trojans_logo.svg/1373px-USC_Trojans_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/1024px-Cornell_University_seal.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1280px-MIT_logo.svg.png","https://cdn.freebiesupply.com/images/large/2x/florida-gators-logo-png-transparent.png","https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Johns_Hopkins_Blue_Jays.svg/1200px-Johns_Hopkins_Blue_Jays.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/WashU_St._Louis_seal.svg/1200px-WashU_St._Louis_seal.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Vanderbilt_Commodores_logo.svg/1051px-Vanderbilt_Commodores_logo.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/7/79/University_of_Chicago_shield.svg/1200px-University_of_Chicago_shield.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boston_University_seal.svg/1200px-Boston_University_seal.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Tulane_Green_Wave_logo.svg/1200px-Tulane_Green_Wave_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1636px-Oxford-University-Circlet.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/1/16/New_York_University_Seal.svg/640px-New_York_University_Seal.svg.png","https://upload.wikimedia.org/wikipedia/en/a/ae/Emory_University_Seal.png","https://upload.wikimedia.org/wikipedia/en/e/e8/Formal_Seal_of_Bowdoin_College%2C_Brunswick%2C_ME%2C_USA.svg","https://upload.wikimedia.org/wikipedia/en/2/22/Tufts_Jumbos_logo.png","https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_California_Institute_of_Technology.svg/1200px-Seal_of_the_California_Institute_of_Technology.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/University_of_California%2C_Irvine_seal.svg/1200px-University_of_California%2C_Irvine_seal.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Harvey_Mudd_College_seal.svg/1200px-Harvey_Mudd_College_seal.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Brandeis_University_seal.svg/1200px-Brandeis_University_seal.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Dartmouth_College_Big_Green_logo.svg/807px-Dartmouth_College_Big_Green_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Northeastern_Huskies_logo.svg/701px-Northeastern_Huskies_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/William_%26_Mary_Tribe_logo.svg/1280px-William_%26_Mary_Tribe_logo.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Florida_State_Seminoles_logo.svg/640px-Florida_State_Seminoles_logo.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Rice_University_seal.svg/1200px-Rice_University_seal.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/4/44/University_of_California%2C_San_Diego_seal.svg/800px-University_of_California%2C_San_Diego_seal.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Miami_Hurricanes_logo.svg/2560px-Miami_Hurricanes_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Wisconsin_Badgers_logo.svg/1086px-Wisconsin_Badgers_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/UC_Davis_Aggies_logo.svg/2560px-UC_Davis_Aggies_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wake_Forest_University_Athletic_logo.svg/2560px-Wake_Forest_University_Athletic_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Texas_Longhorns_logo.svg/1200px-Texas_Longhorns_logo.svg.png","https://athletics.amherst.edu/images/logos/site/site.png","https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Carnegie_Mellon_University_seal.svg/1200px-Carnegie_Mellon_University_seal.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/ETH_Z%C3%BCrich_Logo.svg/2560px-ETH_Z%C3%BCrich_Logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Notre_Dame_Fighting_Irish_logo.svg/1138px-Notre_Dame_Fighting_Irish_logo.svg.png","https://www.colgate.edu/sites/default/files/2020-10/Col_Athletics_C_RGB_500_0.png","https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Georgia_Tech_Yellow_Jackets_logo.svg/1200px-Georgia_Tech_Yellow_Jackets_logo.svg.png","https://images.squarespace-cdn.com/content/5717ee8e1bbee08525c09f91/1466627014469-PGFPSFFIVKHWRN7S4P7Q/?content-type=image%2Fpng","https://www.rochesterfirst.com/wp-content/uploads/sites/66/2018/01/universityofrochesterlogo_1487157387000_17343118_ver1.0.png?w=1280","https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Syracuse_Orange_logo.svg/1200px-Syracuse_Orange_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/3/36/University_of_Washington_Block_W_logo_RGB_brand_colors.SVG","https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Connecticut_Huskies_logo.svg/1200px-Connecticut_Huskies_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Georgia_Athletics_logo.svg/1024px-Georgia_Athletics_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ohio_State_Buckeyes_logo.svg/1200px-Ohio_State_Buckeyes_logo.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/University_of_Zurich_seal.svg/1200px-University_of_Zurich_seal.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Villanova_Wildcats_logo.svg/2296px-Villanova_Wildcats_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/George_Washington_Colonials_logo.svg/1200px-George_Washington_Colonials_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/UMass_Amherst_Athletics_logo.svg/2505px-UMass_Amherst_Athletics_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Pitt_Panthers_wordmark.svg/1200px-Pitt_Panthers_wordmark.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Minnesota_Golden_Gophers_logo.svg/1200px-Minnesota_Golden_Gophers_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Santa_Clara_Broncos_logo.svg/1200px-Santa_Clara_Broncos_logo.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Penn_State_Nittany_Lions_logo.svg/1200px-Penn_State_Nittany_Lions_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Purdue_Boilermakers_logo.svg/1200px-Purdue_Boilermakers_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Illinois_Fighting_Illini_logo.svg/1200px-Illinois_Fighting_Illini_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Pepperdine_Waves_logo.svg/1200px-Pepperdine_Waves_logo.svg.png","https://upload.wikimedia.org/wikipedia/en/7/72/Case_Western_Reserve_University_Spartans_logo_mascot.png","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Maryland_Terrapins_logo.svg/1200px-Maryland_Terrapins_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Virginia_Tech_retro_logo.svg/1824px-Virginia_Tech_retro_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Rutgers_Scarlet_Knights_logo.svg/1200px-Rutgers_Scarlet_Knights_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Navy_Athletics_logo.svg/1200px-Navy_Athletics_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/U.S._Military_Academy_Coat_of_Arms.svg/1200px-U.S._Military_Academy_Coat_of_Arms.svg.png","https://upload.wikimedia.org/wikipedia/commons/e/ea/Texas_Christian_University_logo.gif","https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Arizona_Wildcats_logo.svg/1200px-Arizona_Wildcats_logo.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/6/65/LehighMountainHawks.svg/1200px-LehighMountainHawks.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/University_of_Vermont_seal.svg/800px-University_of_Vermont_seal.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Fordham_Rams_logo.svg/1200px-Fordham_Rams_logo.svg.png","https://logos-world.net/wp-content/uploads/2020/06/Gonzaga-Bulldogs-Basketball-Logo.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Oregon_Ducks_logo.svg/1238px-Oregon_Ducks_logo.svg.png","https://images.squarespace-cdn.com/content/5717ee8e1bbee08525c09f91/1466887144778-NMLHYW2GA31OHYWE0KVP/?content-type=image%2Fpng","https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/LMU_Lions_logo.svg/1200px-LMU_Lions_logo.svg.png","https://rpi.edu/dept/metasite/images/rpi-seal-cmyk-black.png","https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Clemson_Tigers_logo.svg/1200px-Clemson_Tigers_logo.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Iowa_Hawkeyes_logo.svg/1200px-Iowa_Hawkeyes_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Indiana_Hoosiers_logo.svg/1200px-Indiana_Hoosiers_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/American_Eagles_logo.svg/1200px-American_Eagles_logo.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Michigan_State_Athletics_logo.svg/1200px-Michigan_State_Athletics_logo.svg.png","https://upload.wikimedia.org/wikipedia/en/1/1b/WPI_logo.png","https://1000logos.net/wp-content/uploads/2019/10/James-Madison-Dukes-Logo-1986.png","https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Arizona_State_Sun_Devils_logo.svg/1200px-Arizona_State_Sun_Devils_logo.svg.png","https://www.smu.edu/-/media/Site/DevelopmentExternalAffairs/MarketingCommunications/Logos/athletics/SMUwPony,-d-,RwB,-d-,outline,-d-,WebOnly,-d-,rgb.png?la=en","https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Auburn_Tigers_logo.svg/1200px-Auburn_Tigers_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Alabama_Crimson_Tide_logo.svg/2048px-Alabama_Crimson_Tide_logo.svg.png","https://www.cs.ou.edu/~atiq/pics/ou-logo-large1.gif","https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Yeshiva_University.svg/1200px-Yeshiva_University.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/University_of_Kansas_athletics_%28logo%29.svg/800px-University_of_Kansas_athletics_%28logo%29.svg.png","https://logos-world.net/wp-content/uploads/2020/06/Baylor-Bears-Logo-2005-2018.png","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Texas_A%26M_University_logo.svg/1246px-Texas_A%26M_University_logo.svg.png","https://www.mines.edu/human-resources/wp-content/uploads/sites/88/2017/07/Mines_triangle_2CC_R.png","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Miami_Redhawks_logo.svg/1200px-Miami_Redhawks_logo.svg.png","https://athletics.stolaf.edu/images/logos/site/site.png","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Nebraska_Cornhuskers_logo.svg/1024px-Nebraska_Cornhuskers_logo.svg.png","https://www.brproud.com/wp-content/uploads/sites/80/2019/06/lsu_1561433027522_93858017_ver1.0.png","https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/University_of_Mississippi_seal.svg/640px-University_of_Mississippi_seal.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Oregon_State_Beavers_logo.svg/800px-Oregon_State_Beavers_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Arkansas_Razorbacks_logo.svg/1200px-Arkansas_Razorbacks_logo.svg.png","https://web.stevens.edu/news/newspoints/brand-logos/2020/Circular/Stevens-Circular-Logo-2020_RED.png","https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Utah_Utes_logo.svg/1200px-Utah_Utes_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/BYU_Cougars_logo.svg/1200px-BYU_Cougars_logo.svg.png","https://heliuw.files.wordpress.com/2019/02/wmu-logo.png?w=225","https://stempathways.epscorspo.nevada.edu/wp-content/uploads/2017/11/Line127-UNLVIndependentStudy-min.png","https://www.cnusports.com/images/logos/site/site.png","https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Oral_Roberts_Golden_Eagles_logo.svg/1200px-Oral_Roberts_Golden_Eagles_logo.svg.png","http://www.wright.edu/sites/www.wright.edu/files/page/attachments/03_WRIGHTSTATE_BIPLANE_N_FULL.png","https://prairiefire.knox.edu/images/logos/site/site.png","https://www.bju.edu/images/bju_logo_512.png","https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Northern_Virginia_Community_College_seal.svg/1200px-Northern_Virginia_Community_College_seal.svg.png"];

function database(reset_originals=false) {

    if(reset_originals) {
        // SET ALL VALUES TO DEFAULT
        var mainRef = firebase.database().ref("colleges/");

        for(let i = 0; i < names.length; i++) {
            mainRef.update ({
                [names[i]]: scores[i]
            });
        }
    }

    /* Read whole table 
    var ref = firebase.database().ref();
    console.log(ref);
    ref.on("value", function(snapshot) {
        console.log(snapshot.val());
    }, function (error) {
        console.log("Error: " + error.code);
    });
    */
    
}

function prep_arrays() {
    var ref = firebase.database().ref();
    ref.on("value", function(snapshot) {
        let object = snapshot.val()["colleges"];
        console.log(object);
        for (let prop in object) {
            let index = names.indexOf(prop);
            scores[index] = object[prop];
        }
    }, function (error) {
        console.log("Error: " + error.code);
    });   
}

function update_database_value(name, score) {
    var mainRef = firebase.database().ref("colleges/");
    mainRef.update ({
        [name]: score
    });
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

let runTable = 1;
let rand1 = Math.floor(Math.random() * names.length);
let rand2 = Math.floor(Math.random() * names.length);
while(rand1 == rand2){
    if (rand1 == rand2) {
        while (rand2 == rand1) {
            rand2 = Math.floor(Math.random() * names.length);
        }
    }
}

// Show 1 groups of colleges before start
let txt = document.getElementById("start");
txt.innerHTML = "";
let name1txt = document.getElementById("picker").getElementsByClassName("name1Label")[0];
let name2txt = document.getElementById("picker").getElementsByClassName("name2Label")[0];
rand1 = Math.floor(Math.random() * names.length);
rand2 = Math.floor(Math.random() * names.length);
setScore(rand1, rand2);
setImages(rand1, rand2);

name1txt.innerHTML = names[rand1];
name2txt.innerHTML = names[rand2];


function changeText1() {
    // update arrays to current scores
    prep_arrays();

    let scoreA = scores[rand1];
    let scoreB = scores[rand2];
    let k = 10;

    let Qa = Math.pow(10,(scoreA / 400.0));
    let Qb = Math.pow(10,(scoreB / 400.0));

    let Bexpect = Qa / (Qa + Qb);
    let Aexpect = Qb / (Qa + Qb);

    let AwinCalcA = scoreA - k * (1 - Aexpect);
    let AwinCalcB = scoreB - k * (0 - Bexpect);
    
    update_database_value(names[rand1], String(Math.trunc(AwinCalcA)));
    update_database_value(names[rand2], String(Math.trunc(AwinCalcB)));


    let txt = document.getElementById("start");
    txt.innerHTML = "";
    let name1txt = document.getElementById("picker").getElementsByClassName("name1Label")[0];
    let name2txt = document.getElementById("picker").getElementsByClassName("name2Label")[0];
    rand1 = Math.floor(Math.random() * names.length);
    rand2 = Math.floor(Math.random() * names.length);

    name1txt.innerHTML = names[rand1];
    name2txt.innerHTML = names[rand2];

    setScore(rand1, rand2);
    setImages(rand1, rand2);
}

function changeText2() {
    // update arrays to current scores
    prep_arrays();

    let scoreA = scores[rand1];
    let scoreB = scores[rand2];
    let k = 10;

    let Qa = Math.pow(10,(scoreA / 400.0));
    let Qb = Math.pow(10,(scoreB / 400.0));

    let Bexpect = Qa / (Qa + Qb);
    let Aexpect = Qb / (Qa + Qb);

    let BwinCalcA = scoreA - k * (0 - Aexpect);
    let BwinCalcB = scoreB - k * (1 - Bexpect);

    update_database_value(names[rand1], String(Math.trunc(BwinCalcA)));
    update_database_value(names[rand2], String(Math.trunc(BwinCalcB)));

    let txt = document.getElementById("start");
    txt.innerHTML = "";
    let name1txt = document.getElementById("picker").getElementsByClassName("name1Label")[0];
    let name2txt = document.getElementById("picker").getElementsByClassName("name2Label")[0];
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
    score1txt.innerHTML = "<b>Rating: "+scores[rand1]+"</b>";
    score2txt.innerHTML = "<b>Rating: "+scores[rand2]+"</b>";
}

function setImages(rand1, rand2) {
    let pic1txt = document.getElementById("pickerPics").getElementsByTagName("img")[0];
    let pic2txt = document.getElementById("pickerPics").getElementsByTagName("img")[1];
    pic1txt.src = images[rand1];
    pic2txt.src = images[rand2];
}
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
   
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function addTable() {
    if (runTable == 0){
        return;
    }

    document.getElementById("xxx").innerHTML = "";

    let object;
    var ref = firebase.database().ref();
    ref.on("value", function(snapshot) {
        object = snapshot.val()["colleges"];
        console.log(object);
    }, function (error) {
        console.log("Error: " + error.code);
    });

    let entries = Object.entries(object);
    let sorted = entries.sort((a, b) => a[1] - b[1]);

    let lbTitle = document.getElementById("lbTitle");
    lbTitle.innerHTML = "Leaderboard";
    let school = document.getElementById("S");
    S.innerHTML = "<u><b>School</b></u>";
    let rank = document.getElementById("R");
    R.innerHTML = "<u><b>Rank</b></u>";
    let score = document.getElementById("Sc");
    Sc.innerHTML = "<u><b>Score</b></u>";

    for (var a=0; a < 50; a++) {
        var table1 = document.getElementById('xxx');
        var rowrow =  document.createElement('tr');
    
        for ( i=0; i < 1; i++) {
            var cell1  =  document.createElement('td');
            var text1 = document.createTextNode(sorted[a][0]);
            
            var cell2  =  document.createElement('td');
            var text2 = document.createTextNode(a+1);

            var cell3  =  document.createElement('td');
            var text3 = document.createTextNode(sorted[a][1]);

            cell1.appendChild(text1);
            rowrow.appendChild(cell1);

            cell2.appendChild(text2);
            rowrow.appendChild(cell2);

            cell3.appendChild(text3);
            rowrow.appendChild(cell3);
        }
        table1.appendChild(rowrow);
    }
}
