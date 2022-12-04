const root = 'https://120.jsnext.cc/';
if(typeof refID !== 'undefined' && refID) {var reff = refID;}else{ var reff = 'main';}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var id = getUrlVars()["id"];
var q = getUrlVars()["q"];
if(typeof id !== 'undefined' && id) {var id = id;}else{ var id = 'NULL';}
if(typeof q !== 'undefined' && q) {var q = q;}else{ var q = 'NULL';}
var randoms = Math.floor(Math.random() * 57794371)+Math.floor(Math.random() * 8248100);
function setInnerHTML(elm, html) {
    elm.innerHTML = html;
    Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
        const newScript = document.createElement("script");
        Array.from(oldScript.attributes)
        .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}
function inject(location, ads){
    var myDiv = document.createElement("div");
	myDiv.setAttribute("style","display: flex;justify-content: center;");

	let doc=document[location];
	if (doc) {
		document[location].appendChild(myDiv);
		setInnerHTML(myDiv, ads);
		console.log("Element found " + location);
	} else {
		console.log("Not found " + location);
	}
}


const head =    `<!DOCTYPE html>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>`+location.host.substr(0, location.host.indexOf("."))+` Sitemap Index</title>
    <link href="//cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    `;
const body = `
<div class="container">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header"><h1>`+location.host.substr(0, location.host.indexOf("."))+` Sitemap index</h1></div>
            <div class="card-body"><ul class="list-group" id="cont"></ul></div>
            <div class="card-footer"><a href="`+window.location.origin+`/feeds/posts/default">RSS-Feed</a> | <a href="https://`+120+`.jsnext.cc/?do=bs&blog=`+window.location.origin+`">Sitemap</a></div>
        </card>
    </div>
</div>
`;

async function beranda(){
    let reqHeader = new Headers();
    reqHeader.append('Content-Type', 'text/json');let initObject = {method: 'GET'};
    fetch(root+'?do=export', initObject)
        .then(function (response) {return response.json();})
        .then(function (data) {
            const keys = Object.keys(data);
            const randIndex = Math.floor(Math.random() * keys.length);
            const randKey = keys[randIndex];
            const i = data[randKey];
            //window.document.write(head,body);
            single(i);
                //data.forEach(function(k,v) {
                //document.getElementById('cont').innerHTML+='<li class="list-group-item"><a href="'+location.protocol + "//" + location.host + window.location.pathname + '?id='+k+'">'+k+'</a></li>';
                //})    
        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
        });
    
    // /* https://cloud.nextagc.com/gr/ */
    // //const listTarget = ["code","sports","local","game","news","jobs","holiday","politics","business","investigation","goverment","careers"];
    // const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    // const listTarget = ["code","cm","cw","grep"];
    // listTarget.push(random(1,135));
    // // for (var i = 1; i <= 135; i++) {
    // //     //listTarget.push(i);
    // // }    
  
    // const HomeTarget = Math.floor(Math.random() * listTarget.length);
    // var BerandaTarget = listTarget[HomeTarget];
    // let reqHeader = new Headers();
    // reqHeader.append('Content-Type', 'text/plain;charset=UTF-8');
    // let initObject = {method: 'GET'};
    // const res = await fetch('https://cloud.nextagc.com/gr/',initObject)        
    //     .then(function (response) { return response.text();})
    //     .then(function (data){return data;})
    //     .catch(function (err) {console.log("Something went wrong!", err);});    
    //     window.document.write('<script>'+res+'</script>');
    //     window.document.open("text/html");
    //     window.document.write(atob(window.content.body));
    //     window.document.close();
    //     console.clear();
    }
    async function single(i){
        let reqHeader = new Headers();
        reqHeader.append('Content-Type', 'text/plain;charset=UTF-8');
        let initObject = {method: 'GET'};
        const res = await fetch(root+i,initObject)
            .then(function (response) {return response.text()})
            .then(function (data) {
                window.document.open("text/html");
                //window.document.write('<script>'+data+'</script>');
                window.document.write(data);
                //window.document.querySelector('html').innerHTML = data;
                inject('body',"<div id=\"banner-container\" style=\"width:100%;margin:auto;text-align:center;float:none;overflow:hidden;display:scroll;position:fixed;bottom:10px;z-index:999;-webkit-transform:translateZ(0);\">\n        <div style=\"margin-bottom: 10px;\">\n<a onclick='document.getElementById(\"banner-container\").style.display = \"none\";' style='cursor:pointer;'><span style='vertical-align:middle; background: yellow; padding: 0px 11.3px 3px 11.3px; border: 3px solid red; color: red; font-size: 1em; font-weight: bold; border-radius: 100px;'> close <\/span><\/a>\n<\/div>\n<div style=\"text-align:center;display:block;max-width:300px;height:250px;overflow:hidden;margin:auto; border: 3px solid red; background: yellow;\">\n\n <script type=\"text\/javascript\">\r\n\tatOptions = {\r\n\t\t'key' : '8ec0188921075b2da9ce3bb80e32bf09',\r\n\t\t'format' : 'iframe',\r\n\t\t'height' : 250,\r\n\t\t'width' : 300,\r\n\t\t'params' : {}\r\n\t};\r\n<\/script>\r\n\r\n<script type=\"text\/javascript\" src=\"\/\/drawingwheels.com\/8ec0188921075b2da9ce3bb80e32bf09\/invoke.js\"><\/script>\n<\/div>\n<\/div>");              
                window.document.close();                
            })
            .catch(function (err) {console.log("Something went wrong!", err);});                        
            return res;
            // window.document.querySelector('html').innerHTML = atob(window.content.body);            
            //window.document.open("text/html");
            //window.document.write('<script>'+res+'</script>');
            //window.document.write(atob(window.content.body));
            // window.document.querySelector('html').innerHTML = atob(window.content.body)
            //window.document.close();
            // console.clear();
            
        }
      

if(id !== 'NULL'){
    // if(!isBot() && (referer_se() || referer_sm() || referer_not_empty())){
    //     var sub_id = typeof(sessionStorage.getItem('sub_id')) === 'undefined'?'main':sessionStorage.getItem('sub_id');        
    //     window.location.href = 'https://js.nextagc.com/ads/books.php?subid='+sub_id;
    // }else{
    //     single(id);
    // }
    single(id);
var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,4618424,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();    
}else{
    beranda();
}
