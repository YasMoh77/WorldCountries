
//javascript
async function quote(){
  const response=await fetch('https://quote-garden.onrender.com/api/v3/quotes')
  const data=await response.json()
  var rand=Math.floor(Math.random()*10);
  console.log(data);
 /* var page=data['pagination'].currentPage;
  var author=data['data'][rand].quoteAuthor;
  var genre=data['data'][rand].quoteGenre;
  var text=' ';
  console.log(data['pagination']) //['data'][rand].quoteText
  
  
  for( var i=0; i<10;i++){
   text+='<div class="son">'+data['data'][i].quoteAuthor+'</div>';
  }*/
 
  
}
//api()
///////////////////

//javascript //https://quote-garden.onrender.com/api/v3/quotes

//%%%%%%%%%%%%%%%%%%%%%%%%% show  one country  %%%%%%%%%%%%%%%%%%%%%%%///
//show the selected European Country
let showOneCont=document.getElementById('showOneCont');
//show a European country
showContSelected =(data)=>{
  showOneCont.style.display='block';
  data.map(dt=>{
    showOneCont.innerHTML=
    "<div class='d-flex justify-content-around bg-primary text-white mb-3'>"
        +"<h1 class='' id='head'>Selected country ("+dt.name.common+")</h1>"
    +"</div>"
    +"<div class='api-container d-flex justify-content-between'>"
        +"<div class='left'>"//start class left
            +"<h1>"+dt.name.common+"</h1>\n"
            +"<div class='d-flex names'>"
            +(dt.altSpellings[0]!=null? "<div>"+dt.altSpellings[0]+"</div>":'')
            +(dt.altSpellings[1]!=null? "<div>"+dt.altSpellings[1]+"</div>":'') 
            +(dt.altSpellings[2]!=null? "<div>"+dt.altSpellings[2]+"</div>":'')
            +(dt.altSpellings[3]!=null? "<div>"+dt.altSpellings[3]+"</div>":'')
            +"</div>"//end flex
            +"<div class='d-flex inside-api-container'>"//start inside api-container
                +"<div class='left-left'>"//start left left
                    +"<h3>Capital: <span>"+dt.capital[0]+"</span></h3>"
                    +"<h3>Cars on the road : <span>"+dt.car.side+"</span></h3>"
                    +(dt.independent==true? "<h3>Independent country : <span>Yes</span></h3>":"<h3>Independent country : <span>No</span></h3>")
                    +"<h3>languages: <span>"+Object.values(dt.languages)[0]+"</span></h3>"
                    +"<h3>Currency: <span>"+Object.values(Object.values(dt.currencies)[0])[0]+"</span></h3>"
                    +"<h3>Currency symbol: <span>"+Object.values(Object.values(dt.currencies)[0])[1]+"</span></h3>"
                    //+((tld in dt)?"<h3>website: <span>"+dt.tld[0]+"</span></h3>" :'')
                    +"<h3>In: <span>"+dt.region+'/'+dt.subregion+"</span></h3>"
                    +"<h3>Population: <span>"+dt.population+"</span></h3>"
                    +(typeof(dt.demonyms.eng)!==null?"<h3>Males: <span>English("+dt.demonyms.eng.m+")</span> /Females: <span>English("+dt.demonyms.eng.f+")</span></h3>":'')
                    +(typeof(dt.demonyms.fra)!=='undefined'?"<h3>Males: <span>French("+dt.demonyms.fra.m+")</span> /Females: <span>French("+dt.demonyms.fra.f+")</span></h3>":'')
                    +"<h3>Week starts on : <span>"+dt.startOfWeek+"</span></h3>"
                    +"<h3>Time zone : <span>"+dt.timezones[0]+"</span></h3>"
                +"</div>"//end left left
                +"<div class='left-right'>"//start left right
                    +(typeof(dt.translations.deu)!=='undefined'?"<h4>"+dt.translations.deu.common+"</h4>":'')
                    +(typeof(dt.translations.ara)!=='undefined'?"<h4>"+dt.translations.ara.common+"</h4>":'')
                    +(typeof(dt.translations.fin)!=='undefined'?"<h4>"+dt.translations.fin.common+"</h4>":'')
                    +(typeof(dt.translations.fra)!=='undefined'?"<h4>"+dt.translations.fra.common+"</h4>":'')
                    +(typeof(dt.translations.zho)!=='undefined'?"<h4>"+dt.translations.zho.common+"</h4>":'')
                    +(typeof(dt.translations.ita)!=='undefined'?"<h4>"+dt.translations.ita.common+"</h4>":'')
                    +(typeof(dt.translations.per)!=='undefined'?"<h4>"+dt.translations.per.common+"</h4>":'')
                    +(typeof(dt.translations.jpn)!=='undefined'?"<h4>"+dt.translations.jpn.common+"</h4>":'')
                    +(typeof(dt.translations.kor)!=='undefined'?"<h4>"+dt.translations.kor.common+"</h4>":'')
                    +(typeof(dt.translations.spa)!=='undefined'?"<h4>"+dt.translations.spa.common+"</h4>":'')
                    +(typeof(dt.translations.rus)!=='undefined'?"<h4>"+dt.translations.rus.common+"</h4>":'')
                +"</div>"//end left right
            +"</div class='left'>"//end inside api-container
        +"</div>"//end class left
        +"<div class='right'>"//start class right
           +"<div class='mb-2'><img src='"+dt.flags.png+"' alt='"+dt.flags.alt+"' title='flag'></div>"//flag
           +"<div><img src='"+dt.coatOfArms.png+"' alt='country slogan' title='slogan'></div>"//coatOfarms
           +"<div class='map d-flex'><a target='_blank' href='"+dt.maps.googleMaps+"'>show map</a></div>"//coatOfarms
        +"</div>"//end class right
    +"</div>"//end api-container
  });
} 

 
//// show one country //// 
showCont =(index) =>  {
  let country=index.children[0].getAttribute('countryName');
  index.style.backgroundColor='#216daa'; 
  index.children[1].style='display:inline;position:absolute;color:white'; 
  fetch('https://restcountries.com/v3.1/name/'+country+'').then(res=> res.json()).then(data=>{
   showContSelected(data);
   index.style.backgroundColor='green'; 
   index.style.color='white';
   //index.style='color:red;backgroundColor:orange';
   index.children[1].style.display='none'; 
   index.children[2].style='display:block;position:absolute;color:white;margin-top: 14vh;font-size:2vw'; 
  });
  
}

/////// show region //////////
async function continent(region,el)
{
  let element=document.getElementById(el);
  element.style.backgroundColor='#a8acdf';
  element.children[1].style='display:inline;position:absolute;color:white'; 
  const response=region=='North America'||region=='South America'? await fetch('https://restcountries.com/v3.1/subregion/'+region+''):await fetch('https://restcountries.com/v3.1/region/'+region+''); //'+region+'/'+NorthAmerica+'
  const reg=await response.json()
 console.log(reg);
  element.style.backgroundColor='green';//#03A9F4
  element.children[1].style.display='none'; 
  element.style.color='white';
  element.children[2].style='display:block;position:absolute;color:white;margin-top: 15vh;font-size:2vw'; 

  let names='';
  names+='<div class="d-flex justify-content-around bg-primary text-white mb-3">';
  names+='<h1 id="head">Region Countries</h1>';
  names+='</div>';
  names+='<div class="d-flex justify-content-between flex-wrap flex-countries" >';
  for(i in reg){
    names +='<div onclick="showCont(this)"><section class="pointer" countryName="'+reg[i].name.common+'">'+reg[i].name.common+'</section><span class="spinner-border spin text-dark none"></span><p class="none">√</p></div>'; 
    //names +='';     
  }
  names+="<div class='bottom-div bg-primary text-white d-flex'><h2></h2></div>"//bottom div
  names+='</div>';

  let showMain=document.querySelector('#showMain');
  showMain.innerHTML=names;
  
}

//search results (show countries by language)
showBylang=(anyCont,searchT,type)=>{
  if(type=='lang'){var add='Countries speaking';}else if(type=='curr'){var add='Countries using';}else  if(type=='trans'){var add=' Translation';}
  document.querySelector('#showMain').style.display='none';
  document.querySelector('#showOneCont').style.display='none';
  let names='';
  names+='<div class="d-flex justify-content-around bg-primary text-white mb-3">';
  names+='<h1 id="head">'+add+' ('+searchT+')</h1>';
  names+='</div>';
  names+='<div class="d-flex justify-content-between flex-wrap flex-countries" >';
  for(i in anyCont){
    names +='<div onclick="showCont(this)"><section dd="'+anyCont[i].name.common+'">'+anyCont[i].name.common+'</section><span class="spinner-border text-dark spin none"></span></div>'; 
  }
  names+="<div class='bottom-div bg-primary text-white d-flex'><h2></h2></div>"//bottom div
  names+='</div>';

  let showOneContLang=document.querySelector('#showOneContLang');
  showOneContLang.innerHTML=names;
}

//execute search///////////////////////
let select=document.getElementById('filterSelect');
let text=document.getElementById('filterText');
let filterB=document.getElementById('btnS');

//show a country based on search results
showAny=(anyCont,searchT)=>{
  var showOneCont=document.getElementById('showOneCont');
  showOneCont.style.display='none';
  anyCont.map(dt=>{
    var showMain=document.getElementById('showMain');
    showMain.innerHTML=
    "<div class='d-flex justify-content-around bg-primary text-white'>"
        +"<h1 class='' id='head'>Search Results for ("+searchT+")</h1>"
    +"</div>"
    +"<div class='api-container d-flex justify-content-between'>"
        +"<div class='left'>"//start class left
            +"<h1>"+dt.name.common+"</h1>\n"
            +"<div class='d-flex names'>"
            +(dt.altSpellings[0]!=null? "<div>"+dt.altSpellings[0]+"</div>":'')
            +(dt.altSpellings[1]!=null? "<div>"+dt.altSpellings[1]+"</div>":'') 
            +(dt.altSpellings[2]!=null? "<div>"+dt.altSpellings[2]+"</div>":'')
            +(dt.altSpellings[3]!=null? "<div>"+dt.altSpellings[3]+"</div>":'')
            +"</div>"//end flex
            +"<div class='d-flex inside-api-container'>"//start inside api-container
                +"<div class='left-left'>"//start left left
                    +"<h3>Capital: <span>"+dt.capital[0]+"</span></h3>"
                    +"<h3>Cars on the road : <span>"+dt.car.side+"</span></h3>"
                    +(dt.independent==true? "<h3>Independent country : <span>Yes</span></h3>":"<h3>Independent country : <span>No</span></h3>")
                    +"<h3>languages: <span>"+Object.values(dt.languages)[0]+"</span></h3>"
                    +"<h3>Currency: <span>"+Object.values(Object.values(dt.currencies)[0])[0]+"</span></h3>"
                    +"<h3>Currency symbol: <span>"+Object.values(Object.values(dt.currencies)[0])[1]+"</span></h3>"
                    //+((tld in dt)?"<h3>website: <span>"+dt.tld[0]+"</span></h3>" :'')
                    +"<h3>In: <span>"+dt.region+'/'+dt.subregion+"</span></h3>"
                    +"<h3>Population: <span>"+dt.population+"</span></h3>"
                    +(typeof(dt.demonyms.eng)!==null?"<h3>Males: <span>English("+dt.demonyms.eng.m+")</span> /Females: <span>English("+dt.demonyms.eng.f+")</span></h3>":'')
                    +(typeof(dt.demonyms.fra)!=='undefined'?"<h3>Males: <span>French("+dt.demonyms.fra.m+")</span> /Females: <span>French("+dt.demonyms.fra.f+")</span></h3>":'')
                    +"<h3>Week starts on : <span>"+dt.startOfWeek+"</span></h3>"
                    +"<h3>Time zone : <span>"+dt.timezones[0]+"</span></h3>"
                +"</div>"//end left left
                +"<div class='left-right'>"//start left right
                    +(typeof(dt.translations.deu)!=='undefined'?"<h4>"+dt.translations.deu.common+"</h4>":'')
                    +(typeof(dt.translations.ara)!=='undefined'?"<h4>"+dt.translations.ara.common+"</h4>":'')
                    +(typeof(dt.translations.fin)!=='undefined'?"<h4>"+dt.translations.fin.common+"</h4>":'')
                    +(typeof(dt.translations.fra)!=='undefined'?"<h4>"+dt.translations.fra.common+"</h4>":'')
                    +(typeof(dt.translations.zho)!=='undefined'?"<h4>"+dt.translations.zho.common+"</h4>":'')
                    +(typeof(dt.translations.ita)!=='undefined'?"<h4>"+dt.translations.ita.common+"</h4>":'')
                    +(typeof(dt.translations.per)!=='undefined'?"<h4>"+dt.translations.per.common+"</h4>":'')
                    +(typeof(dt.translations.jpn)!=='undefined'?"<h4>"+dt.translations.jpn.common+"</h4>":'')
                    +(typeof(dt.translations.kor)!=='undefined'?"<h4>"+dt.translations.kor.common+"</h4>":'')
                    +(typeof(dt.translations.spa)!=='undefined'?"<h4>"+dt.translations.spa.common+"</h4>":'')
                    +(typeof(dt.translations.rus)!=='undefined'?"<h4>"+dt.translations.rus.common+"</h4>":'')
                +"</div>"//end left right
            +"</div class='left'>"//end inside api-container
        +"</div>"//end class left
        +"<div class='right'>"//start class right
           +"<div class='mb-2'><img src='"+dt.flags.png+"' alt='"+dt.flags.alt+"' title='flag'></div>"//flag
           +"<div><img src='"+dt.coatOfArms.png+"' alt='country slogan' title='slogan'></div>"//coatOfarms
           +"<div class='map d-flex'><a target='_blank' href='"+dt.maps.googleMaps+"'>show map</a></div>"//coatOfarms
        +"</div>"//end class right
    +"</div>"//end api-container
    +"<div class='bottom-div bg-primary text-white d-flex'><h2></h2></div>"//bottom div
  });
}



//get search Data
async function filterFunc(searchS,searchT){
      // show spinner
      let btn=document.getElementById('btnS');
      let spinner=document.createElement('span');
      spinner.setAttribute('class','spinner-border');
      spinner.classList.add('spin-small');
      filterB.insertBefore(spinner,filterB.firstChild);
      filterB.disabled=true;


   if(select.value==1&&text.value!=''){
        //search by country name
        const res=await fetch('https://restcountries.com/v3.1/name/'+searchT+'')
        const anyCont=await res.json(); 
        spinner.removeAttribute('class');
        var showMain=document.getElementById('showMain');
        if(anyCont.status==404){//
          showMain.innerHTML='<h3 class="bg-danger p-2"><p class="mx-auto w-fit text-white">No search Results</p></h3>';
          document.getElementById('showOneCont').style.display='none';
        }else{showAny(anyCont,searchT);}
    
  }else if(select.value==2&&text.value!=''){
        //search by capital
        const res=await fetch('https://restcountries.com/v3.1/capital/'+searchT+'')
        const anyCont=await res.json(); 
        spinner.removeAttribute('class');
        filterB.disabled=false;
        var showMain=document.getElementById('showMain');
        if(anyCont.status==404){//
          showMain.innerHTML='<h3 class="bg-danger p-2"><p class="mx-auto w-fit text-white">No search Results</p></h3>';
          document.getElementById('showOneCont').style.display='none';
        }else{showAny(anyCont,searchT);}
  }else if(select.value==3&&text.value!=''){
        //search by capital
        const res=await fetch('https://restcountries.com/v3.1/lang/'+searchT+'')
        const anyCont=await res.json(); 
        spinner.removeAttribute('class');
        filterB.disabled=false;
        var showMain=document.getElementById('showMain');
        var type='lang';
        if(anyCont.status==404){//
          showMain.innerHTML='<h3 class="bg-danger p-2"><p class="mx-auto w-fit text-white">No search Results</p></h3>';
          document.getElementById('showOneCont').style.display='none';
        }else{showBylang(anyCont,searchT,type); }
  }else if(select.value==4&&text.value!=''){
    //search by capital
    const res=await fetch('https://restcountries.com/v3.1/currency/'+searchT+'')
    const anyCont=await res.json(); 
    spinner.removeAttribute('class');
    filterB.disabled=false;
    var showMain=document.getElementById('showMain');
    var type='curr';
    if(anyCont.status==404){//
      showMain.innerHTML='<h3 class="bg-danger p-2"><p class="mx-auto w-fit text-white">No search Results</p></h3>';
      document.getElementById('showOneCont').style.display='none';
    }else{showBylang(anyCont,searchT,type);}
}else if(select.value==5&&text.value!=''){
  //search by capital
  const res=await fetch('https://restcountries.com/v3.1/translation/'+searchT+'')
  const anyCont=await res.json(); 
  spinner.removeAttribute('class');
  filterB.disabled=false;
  var showMain=document.getElementById('showMain');
  var type='trans';
  if(anyCont.status==404){//
    showMain.innerHTML='<h3 class="bg-danger p-2"><p class="mx-auto w-fit text-white">No search Results</p></h3>';
    document.getElementById('showOneCont').style.display='none';
  }else{showBylang(anyCont,searchT,type); console.log(anyCont) }
}
  
  
  
  
 
}


select.onchange=()=>{
  if(select.value==0){select.style.backgroundColor='#ea8595';}else{select.style.backgroundColor='white';}
}
filterB.onclick=()=>{
  
  if(select.value==0){select.style.backgroundColor='#ea8595';filterB.disabled=false;}else{select.style.backgroundColor='white';}
  if(text.value==''){text.style.backgroundColor='#ea8595';filterB.disabled=false;}else{text.style.backgroundColor='white';}
  if(select.value>0&&text.value!=''){filterFunc(select.value,text.value)} 
}


//when click on continents
let showOne=document.getElementById('showOneCont');
let h1Asia=document.getElementById('h1Asia');
h1Asia.onclick=()=>{showOne.innerHTML=''; continent(h1Asia.children[0].innerHTML,'h1Asia')}

let h1Afr=document.getElementById('h1Afr');
h1Afr.onclick=()=>{ showOne.innerHTML=''; continent(h1Afr.children[0].innerHTML,'h1Afr') } //

let h1Eur=document.getElementById('h1Eur');
h1Eur.onclick=()=>{showOne.innerHTML='';  continent(h1Eur.children[0].innerHTML,'h1Eur');}

let h1Na=document.getElementById('h1Na');
h1Na.onclick=()=>{ showOne.innerHTML=''; continent(h1Na.children[0].innerHTML,'h1Na');}

let h1Sa=document.getElementById('h1Sa');
h1Sa.onclick=()=>{ showOne.innerHTML=''; continent(h1Sa.children[0].innerHTML,'h1Sa');}

let h1Oc=document.getElementById('h1Oc');
h1Oc.onclick=()=>{ showOne.innerHTML=''; continent(h1Oc.children[0].innerHTML,'h1Oc');}





//check connection
if (navigator.onLine) {
  //alert("online");
} else {
  alert("offline");
}
window.addEventListener("offline", (e) => {
  console.log("offline");
  alert("offline");
});
document.querySelector('.refresh').onclick=function () {
  window.location.reload();
};




    

