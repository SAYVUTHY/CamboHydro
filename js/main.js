
const web = "CamboHydro/"
var loc = window.location.pathname;

const navbar1 = document.getElementById("navbar1")

var loc1 = loc.split('/')
var mainweb = loc1[1]

const List = {
    Main: ["Home", "Data", "Course", "My Develop", "About Me"],
    Data: ["Imagery", "Landcover","Digital Elevation","Climate"],
    Course: ["ArcGIS","QGIS","ArcGISPro"]
}

const html = {
    Main: ['index.html', "Data", "Course", "My Develop", "About Me.html"],
    Data: ["Imagery.html", "Landcover.html","DigitalElevation.html","Climate"],
    Course: ["ArcGIS","QGIS","ArcGISPro"]
}

if (loc1.length === 2){
    for (let i = 0; i < List.Main.length; i++) {
    
        if (List[List.Main[i]] !== undefined){
            var ul1 = '<li><a href="#">'+List.Main[i]+'</a><ul>'
            for (let j = 0; j < List[List.Main[i]].length; j++){
                ul1 += ('<li><a href="'+web+html.Main[i]+'/'+html[html.Main[i]][j]+'">'+List[List.Main[i]][j]+'</a></li>')
            }
            ul1 += '</ul></li>'
            navbar1.innerHTML += ul1
        }else{
            navbar1.innerHTML += '<li><a href="#">'+List.Main[i]+'</a></li>'
        }
        
    } 
}else{
    for (let i = 0; i < List.Main.length; i++) {
    
        if (List[List.Main[i]] !== undefined){
            var ul1 = '<li><a href="#">'+List.Main[i]+'</a><ul>'
            for (let j = 0; j < List[List.Main[i]].length; j++){
                ul1 += ('<li><a href="')
                for (let jj = 0; jj < List[List.Main[i]].length; jj++){
                    ul1 += '../'
                }
                ul1 += web+html.Main[i]+'/'+html[html.Main[i]][j]+'">'+List[List.Main[i]][j]+'</a></li>'
            }

            ul1 += '</ul></li>'
            navbar1.innerHTML += ul1
        }else{
            var ul1 = '<li><a href="'
            for (let jj = 0; jj < loc1.length -2 ; jj++){
                ul1 += '../'
            }
            ul1 += html.Main[i]+'">'+List.Main[i]+'</a></li>'

            navbar1.innerHTML += ul1
        }
        
    } 
}



const toplogo = document.getElementById('idlogo')
if (loc.split('/').length ==2){
    toplogo.src = 'img/Logo/Logo1.gif'
}else{
    
    var l2 = '' 
    for (let j = 0; j < loc.split('/').length - 2; j++){
        l2 += '../'
    }
    l2 += 'img/Logo/Logo1.gif'
    toplogo.src = l2
}

// Topic when scroll down //
var Topic = document.getElementById("Topic");
var contant = document.getElementById("contant1")
var myScroolFunc = function(){
    var y = contant.scrollTop;
    if (y >= 40){
        Topic.className = "Topicshow"
        Topic.innerHTML = document.getElementById("Topic1").innerText
        document.getElementById("Topic1").style = "color: rgba(0,0,0,0)"

    }else{
        Topic.className = "Topichide"
        document.getElementById("Topic1").style = "color: blue;"

    }
};

contant.addEventListener("scroll", myScroolFunc);

var button = document.getElementById('Buttonzoom')
var iframe = document.getElementById('IdFrame')
button.style.cursor = 'pointer'
button.onclick = function(){
    if (iframe.style.position != 'relative'){
        iframe.style.position = 'relative'
    }else{
        iframe.style.position = 'absolute'
    }
}