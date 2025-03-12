
//javascript
async function quote(){
  const response=await fetch('https://quote-garden.onrender.com/api/v3/quotes')
  const data=await response.json()
  var rand=Math.floor(Math.random()*10);
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
let showOneContLang=document.querySelector('#showOneContLang');
//execute search///////////////////////
let select=document.getElementById('filterSelect');
let text=document.getElementById('filterText');
let filterB=document.getElementById('btnS');

//show the selected European Country
let showOneCont=document.getElementById('showOneCont');
let showOneContS=document.getElementById('showOneContS');

//show one country
showContSelected =(data,more)=>{
  //if from search go to showOneContS
  const div=more==='lang'?showOneContS:showOneCont;
  data.map(dt=>{
    div.style.display='block'
    div.innerHTML=''
    div.innerHTML=
    "<div class='d-flex justify-content-around bg-primary text-white mb-3 p-3'>"
        +"<h1 class='' id='head'>Selected country ("+dt.name.common+")</h1>"
    +"</div>"
    +"<div class='api-container row d-flex justify-content-between p-2'>"
        +"<div class='left col-12 col-lg-7 mb-3 mb-lg-0'>"//start class left
            +"<h1 class='text-uppercase mb-5'>"+dt.name.common+"</h1>\n"
            +"<div class='d-lg-flex names'>"
                +(dt.altSpellings[0]!=null? "<div>"+dt.altSpellings[0]+"</div>":'')
                +(dt.altSpellings[1]!=null? "<div>"+dt.altSpellings[1]+"</div>":'') 
                +(dt.altSpellings[2]!=null? "<div>"+dt.altSpellings[2]+"</div>":'')
                +(dt.altSpellings[3]!=null? "<div>"+dt.altSpellings[3]+"</div>":'')
            +"</div>"//end flex
            +"<div class='d-lg-flex justify-content-between inside-api-container'>"//start inside api-container
                +"<div class='left-left p-2'>"//start left left
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
                +"<div class='left-right p-2 w-25'>"//start left right
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

      +"<div class='right col-12 col-lg-4'>"//start class right
            +"<div class='mb-3'><img class='h-100 w-100' src='"+dt.flags.png+"' alt='"+dt.flags.alt+"' title='flag'></div>"//flag
            +"<div class='mb-3'><img class='h-100 w-100' src='"+dt.coatOfArms.png+"' alt='country slogan' title='slogan'></div>"//coatOfarms
            +"<div class='map d-flex'><a class='w-100 border border-1 fs-3 text-center align-content-center' target='_blank' href='"+dt.maps.googleMaps+"'>show map</a></div>"//coatOfarms
       +"</div>"//end class right

    +"</div>"//end api-container
  });
} 

 
//// show one country //// 
showCont =(index) =>  {
  let more=index.children[0].getAttribute('id');
  let country=index.children[1].getAttribute('countryName');

  index.style.backgroundColor='#216daa'; 
  index.children[2].style='display:inline;position:absolute;color:white'; 
  fetch('https://restcountries.com/v3.1/name/'+country+'').then(res=> res.json()).then(data=>{
   showContSelected(data,more);

   index.style.backgroundColor='green'; 
   index.style.color='white';
   index.children[2].style.display='none'; 
   index.children[3].style='display:block;margin:0 1vw'; 
  });
  
}

/////// show region //////////
async function continent(region,el) //el=element(h1)
{ 
  //empty last search results
  showOneContLang.style.display='none'
  let element=document.getElementById(el);
  element.style.backgroundColor='#a8acdf';
  element.children[1].style='display:inline;position:absolute;color:white'; 
  const response=region=='North America'||region=='South America'? await fetch('https://restcountries.com/v3.1/subregion/'+region+''):await fetch('https://restcountries.com/v3.1/region/'+region+''); //'+region+'/'+NorthAmerica+'
  const reg=await response.json()
 //
  element.style.backgroundColor='green';//#03A9F4
  element.children[1].style.display='none'; 
  element.style.color='white';
  element.children[2].style='display:block;color:white;'; 

  let names='';
  names+='<div class="region-countries d-flex justify-content-around align-items-center bg-primary text-white mb-3">';
  names+='<p class="fs-1" id="head">Region Countries</p>';
  names+='</div>';
  names+='<div class="d-flex justify-content-between flex-wrap flex-countries" >';
  for(i in reg){
    names +='<div class="d-flex justify-content-center align-items-center border-info border-1 mb-3" onclick="showCont(this)"><p id="none"></p><section class="pointer" countryName="'+reg[i].name.common+'">'+reg[i].name.common+'</section><span class="spinner-border spin text-dark none"></span><p class="none"><i class="bi bi-check-lg "></i></p></div>'; 
  }
  names+='</div>';//end of flex-countries

  let showMain=document.querySelector('#showMain');
  showMain.style.display='block'
  showMain.innerHTML=names;
  
}

//search results (show countries by language)
showBylang=(anyCont,searchT,type)=>{//anycont=data brought, searchT=search word, type=language, currency or translation
  //
  showOneContLang.innerHTML='';
  showOneCont.innerHTML='';
  if(type=='lang'){var add=`Countries speaking (${searchT})`;}else if(type=='curr'){var add=`Countries using (${searchT}) as Currency`;}else if(type=='trans'){var add=`Countries having (${searchT}) as translation`;}
  document.querySelector('#showMain').style.display='none';
  document.querySelector('#showOneCont').style.display='none';
  let names='';
  names+='<div class="d-flex justify-content-around bg-primary text-white mb-3">';
  names+='<h1 id="head">'+add+'</h1>';
  names+='</div>';
  names+='<div class="d-flex justify-content-between flex-wrap flex-countries" >';
  for(i in anyCont){
    names +='<div class="d-flex justify-content-center align-items-center border-info border-1 mb-3 pointer" onclick="showCont(this)"><p id="lang"></p><section countryName="'+anyCont[i].name.common+'">'+anyCont[i].name.common+'</section><span class="spinner-border text-dark spin none"></span><p class="none"><i class="bi bi-check-lg "></i></p></div>'; 
  }
  names+='</div>';
  showOneContLang.style.display='block'
  showOneContLang.innerHTML=names;
}



//show a country based on search results
showAny=(anyCont,searchT)=>{
 // showOneCont.style.display='none';
  showMain.style.display='block'
  anyCont.map(dt=>{
    var showMain=document.getElementById('showMain');
    showMain.innerHTML=
    "<div class='d-flex justify-content-around bg-primary text-white mb-3 p-3'>"
        +"<h1 class='' id='head'>Search Results for ("+searchT+")</h1>"
    +"</div>"
    +"<div class='api-container row d-flex justify-content-between p-2'>"
        +"<div class='left col-12 col-lg-7 mb-3 mb-lg-0'>"//start class left
            +"<h1 class='text-uppercase mb-5'>"+dt.name.common+"</h1>\n"
            +"<div class='d-flex names'>"
            +(dt.altSpellings[0]!=null? "<div>"+dt.altSpellings[0]+"</div>":'')
            +(dt.altSpellings[1]!=null? "<div>"+dt.altSpellings[1]+"</div>":'') 
            +(dt.altSpellings[2]!=null? "<div>"+dt.altSpellings[2]+"</div>":'')
            +(dt.altSpellings[3]!=null? "<div>"+dt.altSpellings[3]+"</div>":'')
            +"</div>"//end flex
            +"<div class='d-lg-flex justify-content-between inside-api-container'>"//start inside api-container
                +"<div class='left-left p-2'>"//start left left
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
                +"<div class='left-right p-2 w-25'>"//start left right
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

        +"<div class='right col-12 col-lg-4'>"//start class right
            +"<div class='mb-3'><img class='h-100 w-100' src='"+dt.flags.png+"' alt='"+dt.flags.alt+"' title='flag'></div>"//flag
            +"<div class='mb-3'><img class='h-100 w-100' src='"+dt.coatOfArms.png+"' alt='country slogan' title='slogan'></div>"//coatOfarms
            +"<div class='map d-flex'><a class='w-100 border border-1 fs-3 text-center align-content-center' target='_blank' href='"+dt.maps.googleMaps+"'>show map</a></div>"//coatOfarms
        +"</div>"//end class right
    +"</div>"//end api-container
    //+"<div class='bottom-div bg-primary text-white d-flex'><h2></h2></div>"//bottom div
  });
}



//get search Data, searchT=search term
async function filterFunc(searchS,searchT){
      // show spinner
      let spinner=document.createElement('span');
      spinner.setAttribute('class','spinner-border');
      spinner.classList.add('spin-small');
      filterB.insertBefore(spinner,filterB.firstChild);
      filterB.disabled=true;
      showOneContLang.innerHTML=''
      showOneCont.style.display='none'
      showMain.style.display='none'


   if(select.value==1&&text.value!=''){
        //search by country name
        const res=await fetch('https://restcountries.com/v3.1/name/'+searchT+'')
        const anyCont=await res.json(); 
        spinner.removeAttribute('class');
        filterB.disabled=false;
       //if search returned null
        if(anyCont.status==404){//
          showOneContLang.style.display='block'
          showOneContLang.innerHTML='<h3 class="bg-danger p-3 mb-5"><p class="mx-auto w-fit my-0 text-white">No search Results</p></h3>';
          document.getElementById('showOneContS').style.display='none';
        }else{showAny(anyCont,searchT);}
    
  }else if(select.value==2&&text.value!=''){
        //search by capital
        const res=await fetch('https://restcountries.com/v3.1/capital/'+searchT+'')
        const anyCont=await res.json(); 
        spinner.removeAttribute('class');
        filterB.disabled=false;
         //if search returned null
        if(anyCont.status==404){//
          showOneContLang.style.display='block'
          showOneContLang.innerHTML='<h3 class="bg-danger p-3 mb-5"><p class="mx-auto w-fit my-0 text-white">No search Results</p></h3>';
          document.getElementById('showOneContS').style.display='none';
        }else{showAny(anyCont,searchT);}

  }else if(select.value==3&&text.value!=''){
        //search by language
        const res=await fetch('https://restcountries.com/v3.1/lang/'+searchT+'')
        const anyCont=await res.json(); 
        spinner.removeAttribute('class');
        filterB.disabled=false;
         //if search returned null
        var type='lang';
        if(anyCont.status==404){//
          showOneContLang.style.display='block'
          showOneContLang.innerHTML='<h3 class="bg-danger p-3 mb-5"><p class="mx-auto w-fit my-0 text-white">No search Results</p></h3>';
          document.getElementById('showOneContS').style.display='none';
        }else{showBylang(anyCont,searchT,type); }

  }else if(select.value==4&&text.value!=''){
    //search by currency
    const res=await fetch('https://restcountries.com/v3.1/currency/'+searchT+'')
    const anyCont=await res.json(); 
    spinner.removeAttribute('class');
    filterB.disabled=false;
     //if search returned null
    var type='curr';
    if(anyCont.status==404){//
      showOneContLang.style.display='block'
      showOneContLang.innerHTML='<h3 class="bg-danger p-3 mb-5"><p class="mx-auto w-fit my-0 text-white">No search Results</p></h3>';
      document.getElementById('showOneContS').style.display='none';
    }else{showBylang(anyCont,searchT,type);}

}else if(select.value==5&&text.value!=''){
  //search by translation
  const res=await fetch('https://restcountries.com/v3.1/translation/'+searchT+'')
  const anyCont=await res.json(); 
  spinner.removeAttribute('class');
  filterB.disabled=false;

  //if search returned null
  var type='trans';
  if(anyCont.status==404){//
    showOneContLang.style.display='block'
    showOneContLang.innerHTML='<h3 class="bg-danger p-3 mb-5"><p class="mx-auto my-0 w-fit text-white">No search Results</p></h3>';
    document.getElementById('showOneContS').style.display='none';
  }else{showBylang(anyCont,searchT,type);  }
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
  alert("offline");
});
document.querySelector('.refresh').onclick=function () {
  window.location.reload();
};




    

