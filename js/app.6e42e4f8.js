(function(){"use strict";var e={1546:function(e,a,t){var s=t(5130),i=t(6768);function n(e,a,t,s,n,o){const c=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.Wv)(c)}var o={name:"App"},c=t(1241);const r=(0,c.A)(o,[["render",n]]);var l=r,d=t(6061),m=t.n(d),u=t(1387);const p={class:"container-fluid"},g={class:"p-4"},v=(0,i.Lk)("h4",{class:"text-white",style:{"font-weight":"300"}},"Most Popular",-1),h={class:"row"},b={class:"col-md-8"},f={class:"col-md-4 p-4"};function k(e,a,t,s,n,o){const c=(0,i.g2)("headerHeroVue"),r=(0,i.g2)("movie_postVue"),l=(0,i.g2)("swiper-slide"),d=(0,i.g2)("swiper"),m=(0,i.g2)("category_listVue"),u=(0,i.g2)("searchVue"),k=(0,i.g2)("adsVue"),_=(0,i.g2)("side_cardVue"),y=(0,i.g2)("filter_cardVue"),w=(0,i.g2)("footerVue");return(0,i.uX)(),(0,i.CE)("div",p,[(0,i.bF)(c),(0,i.Lk)("div",g,[v,(0,i.bF)(d,{"slides-per-view":6,"space-between":10,onSwiper:e.onSwiper,onSlideChange:e.onSlideChange,autoplay:{delay:5e3,disableOnInteraction:!1}},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.media.most_popular,(e=>((0,i.uX)(),(0,i.Wv)(l,{key:e.id},{default:(0,i.k6)((()=>[(0,i.bF)(r,{details:e},null,8,["details"])])),_:2},1024)))),128))])),_:1},8,["onSwiper","onSlideChange"])]),(0,i.Lk)("div",h,[(0,i.Lk)("div",b,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.media.category_posts,(e=>((0,i.uX)(),(0,i.Wv)(m,{key:e.id,details:e},null,8,["details"])))),128))]),(0,i.Lk)("div",f,[(0,i.bF)(u),(0,i.bF)(k),(0,i.bF)(_,{name:"Genres",details:s.genre},null,8,["details"]),(0,i.bF)(k),(0,i.bF)(_,{name:"Category",details:s.category},null,8,["details"]),(0,i.bF)(k),(0,i.bF)(y)])]),(0,i.bF)(w)])}var _=t(144),y=t(4232);const w=e=>((0,i.Qi)("data-v-643a9dd6"),e=e(),(0,i.jt)(),e),L={class:"logo"},x=w((()=>(0,i.Lk)("i",{class:"fa-solid fa-magnifying-glass"},null,-1))),j=[x],C=w((()=>(0,i.Lk)("a",null,"Watch Cinemas",-1))),A=[C],F=w((()=>(0,i.Lk)("i",{class:"fa-solid fa-bars"},null,-1))),S=[F],V={id:"navbar_items"},I=w((()=>(0,i.Lk)("i",{class:"fa-solid fa-magnifying-glass"},null,-1))),M=[I],E=w((()=>(0,i.Lk)("input",{type:"text",placeholder:"Search.."},null,-1))),K=w((()=>(0,i.Lk)("i",{class:"fa-solid fa-x"},null,-1))),W=[K],T={id:"carouselExampleSlidesOnly",class:"carousel slide","data-ride":"carousel"},X={class:"carousel-inner"},D=["src"],q={class:"carousel-caption d-flex flex-column justify-content-center"},Q={class:"col-md-6"},R={class:"d-flex"},B={class:"misc"},O=w((()=>(0,i.Lk)("p",{class:"ms-2 misc"},">",-1))),H={class:"misc ms-2"},P={class:"d-flex"},z={class:"desc"},G={class:"misc"},N=w((()=>(0,i.Lk)("button",{class:"custom_button d-flex align-items-center"},[(0,i.Lk)("i",{class:"fa-solid fa-play"}),(0,i.eW)("Watch Now ")],-1))),U=w((()=>(0,i.Lk)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"},null,-1))),Y=[U],Z=w((()=>(0,i.Lk)("span",{class:"carousel-control-next-icon","aria-hidden":"true"},null,-1))),$=[Z];function J(e,a,t,s,n,o){const c=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",{class:(0,y.C4)(["navbar",{sticky:s.scrolled,active:s.menu}]),id:"navbar"},[(0,i.Lk)("div",L,[s.searchButton?((0,i.uX)(),(0,i.CE)("a",{key:0,class:"search-button mt-2 responsive",onClick:a[0]||(a[0]=(...e)=>s.isSearch&&s.isSearch(...e))},j)):(0,i.Q3)("",!0),(0,i.Lk)("h1",{class:(0,y.C4)(["navbar-brand",{hidden:s.search}])},A,2),s.searchButton?((0,i.uX)(),(0,i.CE)("button",{key:1,class:"navbar_open",onClick:a[1]||(a[1]=(...e)=>s.menu_toggle&&s.menu_toggle(...e))},S)):(0,i.Q3)("",!0)]),(0,i.Lk)("div",{class:(0,y.C4)(["navbar_items",{hidden:s.search}])},[(0,i.Lk)("ul",V,[(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/"},{default:(0,i.k6)((()=>[(0,i.eW)("Home")])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/Anime"},{default:(0,i.k6)((()=>[(0,i.eW)("Anime")])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/Movies"},{default:(0,i.k6)((()=>[(0,i.eW)("Movies")])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/Series"},{default:(0,i.k6)((()=>[(0,i.eW)("Series")])),_:1})])])],2),(0,i.Lk)("a",{class:(0,y.C4)(["search-button mt-2",{hidden:s.search}]),onClick:a[2]||(a[2]=(...e)=>s.isSearch&&s.isSearch(...e))},M,2),(0,i.Lk)("div",{class:(0,y.C4)(["search_container",{hidden:!s.search}])},[E,(0,i.Lk)("a",{onClick:a[3]||(a[3]=(...e)=>s.isSearch&&s.isSearch(...e))},W)],2)],2),(0,i.Lk)("div",T,[(0,i.Lk)("div",X,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.movies,((e,a)=>((0,i.uX)(),(0,i.CE)("div",{class:(0,y.C4)(["carousel-item",{active:s.active(a+1)}]),key:e.id},[(0,i.Lk)("img",{class:"d-block w-100 h-100",src:e.image,alt:"First slide",style:{"object-fit":"cover","object-position":"center"}},null,8,D),(0,i.Lk)("div",q,[(0,i.Lk)("div",Q,[(0,i.Lk)("div",R,[(0,i.Lk)("p",B,(0,y.v_)(e.category),1),O,(0,i.Lk)("p",H,(0,y.v_)(e.genre),1)]),(0,i.Lk)("h1",P,(0,y.v_)(e.name),1),(0,i.Lk)("p",z,(0,y.v_)(e.desc),1),(0,i.Lk)("p",G,"Rating: "+(0,y.v_)(e.rating),1),N])])],2)))),128))]),(0,i.Lk)("a",{class:"carousel-control-prev",role:"button","data-slide":"prev",onClick:a[4]||(a[4]=(...e)=>s.prev_slide&&s.prev_slide(...e))},Y),(0,i.Lk)("a",{class:"carousel-control-next",role:"button","data-slide":"next",onClick:a[5]||(a[5]=(...e)=>s.next_slide&&s.next_slide(...e))},$)])],64)}var ee={name:"header_hero",setup(){const e=(0,_.KR)(1),a=(0,_.KR)(!1),t=(0,_.KR)(!1),s=(0,_.KR)(!0),n=(0,_.KR)(!1),o=(0,_.KR)(0),c=(0,_.KR)(window.innerWidth),r=()=>{c.value=window.innerWidth},l=(0,_.KR)([{id:1,name:"Inception",desc:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",genre:"Action, Adventure, Sci-Fi",category:"Movie",rating:8.8,image:"https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"},{id:2,name:"The Dark Knight",desc:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",genre:"Action, Crime, Drama",category:"Movie",rating:9,image:"https://w0.peakpx.com/wallpaper/578/765/HD-wallpaper-dark-knight-poster-batman-dark-knight.jpg"},{id:3,name:"Interstellar",desc:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",genre:"Adventure, Drama, Sci-Fi",category:"Movie",rating:8.6,image:"https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"}]),d=a=>e.value==a;(0,i.sV)((()=>{setInterval((()=>{m()}),5e3)}));const m=()=>{l.value.length>e.value?e.value+=1:e.value=1},u=()=>{e.value>1?e.value-=1:e.value=l.value.length},p=()=>{o.value=window.scrollY,0==a.value?n.value=window.scrollY>0:n.value=window.scrollY>=0};(0,i.sV)((()=>{window.addEventListener("scroll",p),window.addEventListener("resize",r)})),(0,i.hi)((()=>{window.removeEventListener("scroll",p),window.removeEventListener("resize",r)}));const g=()=>{0==a.value?(a.value=!0,n.value=!0):(a.value=!1,o.value>0?n.value=!0:n.value=!1),700>=c.value&&(s.value=!s.value,t.value=!1)},v=()=>{t.value=!t.value};return{active:d,currentIndex:e,movies:l,next_slide:m,prev_slide:u,isSearch:g,search:a,scrolled:n,menu:t,menu_toggle:v,searchButton:s}}};const ae=(0,c.A)(ee,[["render",J],["__scopeId","data-v-643a9dd6"]]);var te=ae;const se=e=>((0,i.Qi)("data-v-dfa3bad4"),e=e(),(0,i.jt)(),e),ie={class:"col-md-12 movie_poster rounded"},ne=["src"],oe={class:"genre text-white"},ce={class:"play"},re=se((()=>(0,i.Lk)("i",{class:"fa-solid fa-play"},null,-1))),le={class:"movie_name"},de={class:"text-white"};function me(e,a,t,s,n,o){const c=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",ie,[(0,i.Lk)("img",{class:"rounded",src:t.details.image,width:"100%",height:"100%"},null,8,ne),(0,i.Lk)("div",oe,(0,y.v_)(t.details.category),1),(0,i.Lk)("div",ce,[(0,i.bF)(c,{to:"/"+t.details.category+"/"+t.details.name},{default:(0,i.k6)((()=>[re])),_:1},8,["to"])]),(0,i.Lk)("div",le,[(0,i.Lk)("p",de,(0,y.v_)(t.details.name),1)])])}var ue={name:"movie_post",props:["details"]};const pe=(0,c.A)(ue,[["render",me],["__scopeId","data-v-dfa3bad4"]]);var ge=pe,ve=t(8174),he=t(844);const be=e=>((0,i.Qi)("data-v-ef735034"),e=e(),(0,i.jt)(),e),fe={class:"card border-0 shadow bg-main mt-4",style:{background:"#1a191f"}},ke=be((()=>(0,i.Lk)("div",{class:"card-body p-4"},[(0,i.Lk)("div",{class:"search-container"},[(0,i.Lk)("input",{type:"text",placeholder:"Search..."}),(0,i.Lk)("a",null,[(0,i.Lk)("i",{class:"fa-solid fa-magnifying-glass"})])])],-1))),_e=[ke];function ye(e,a,t,s,n,o){return(0,i.uX)(),(0,i.CE)("div",fe,_e)}var we={name:"search_page"};const Le=(0,c.A)(we,[["render",ye],["__scopeId","data-v-ef735034"]]);var xe=Le;const je={class:"card border-0 shadow bg-main mt-4",style:{background:"#1a191f"}},Ce=(0,i.Fv)('<div class="card-header" data-v-411598c8><h5 class="text-white text-center" data-v-411598c8> Filter by Letters </h5></div><div class="card-body" data-v-411598c8><div class="d-flex flex-wrap justify-content-evenly" data-v-411598c8><button class="btn-custom mt-2" data-v-411598c8>A</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>B</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>C</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>D</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>E</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>F</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>G</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>H</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>I</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>J</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>K</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>L</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>M</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>N</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>O</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>P</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>Q</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>R</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>S</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>T</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>U</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>V</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>W</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>X</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>Y</button><button class="btn-custom ms-2 mt-2" data-v-411598c8>Z</button></div></div>',2),Ae=[Ce];function Fe(e,a,t,s,n,o){return(0,i.uX)(),(0,i.CE)("div",je,Ae)}var Se={name:"filter_card"};const Ve=(0,c.A)(Se,[["render",Fe],["__scopeId","data-v-411598c8"]]);var Ie=Ve;const Me=e=>((0,i.Qi)("data-v-4bcf7d94"),e=e(),(0,i.jt)(),e),Ee={class:"card border-0 shadow bg-main mt-4",style:{background:"#1a191f"}},Ke={class:"card-header"},We={class:"text-white text-center"},Te={class:"card-body p-0"},Xe={class:"d-flex flex-column genre-menu"},De=Me((()=>(0,i.Lk)("i",{class:"fa-regular fa-circle-play mb-2"},null,-1))),qe={class:"text-light-custom"};function Qe(e,a,t,s,n,o){const c=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",Ee,[(0,i.Lk)("div",Ke,[(0,i.Lk)("h5",We,(0,y.v_)(t.name),1)]),(0,i.Lk)("div",Te,[(0,i.Lk)("div",Xe,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.details,(e=>((0,i.uX)(),(0,i.Wv)(c,{key:e,class:"list-group-item list-group-item-action d-flex justify-content-between text-white ps-4 pe-4 pt-2 pb-2 pointer hover-items",to:"/"+e.name},{default:(0,i.k6)((()=>[(0,i.Lk)("span",null,[De,(0,i.eW)(" "+(0,y.v_)(e.name),1)]),(0,i.Lk)("span",qe,(0,y.v_)(e.count),1)])),_:2},1032,["to"])))),128))])])])}var Re={name:"side_card",props:["name","details"]};const Be=(0,c.A)(Re,[["render",Qe],["__scopeId","data-v-4bcf7d94"]]);var Oe=Be;const He=e=>((0,i.Qi)("data-v-68d271a7"),e=e(),(0,i.jt)(),e),Pe={class:"p-4"},ze={class:"d-flex justify-content-between p-2"},Ge={class:"text-white",style:{"font-weight":"300"}},Ne=He((()=>(0,i.Lk)("a",{class:"btn btn-red btn-sm"},"View All",-1))),Ue={class:"row g-2"};function Ye(e,a,t,s,n,o){const c=(0,i.g2)("movie_post_categoryVue");return(0,i.uX)(),(0,i.CE)("div",Pe,[(0,i.Lk)("div",ze,[(0,i.Lk)("h4",Ge,(0,y.v_)(t.details.name),1),Ne]),(0,i.Lk)("div",Ue,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.details.posts,(e=>((0,i.uX)(),(0,i.Wv)(c,{key:e.id,details:e},null,8,["details"])))),128))])])}const Ze=e=>((0,i.Qi)("data-v-3eaaac64"),e=e(),(0,i.jt)(),e),$e={class:"col-md-3 movie_poster rounded"},Je=["src"],ea={class:"genre text-white"},aa={class:"play"},ta=Ze((()=>(0,i.Lk)("i",{class:"fa-solid fa-play"},null,-1))),sa={class:"movie_name"},ia={class:"text-white"};function na(e,a,t,s,n,o){const c=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",$e,[(0,i.Lk)("img",{class:"rounded",src:t.details.image,width:"100%",height:"100%"},null,8,Je),(0,i.Lk)("div",ea,(0,y.v_)(t.details.category),1),(0,i.Lk)("div",aa,[(0,i.bF)(c,{to:"/"+t.details.category+"/"+t.details.name},{default:(0,i.k6)((()=>[ta])),_:1},8,["to"])]),(0,i.Lk)("div",sa,[(0,i.Lk)("p",ia,(0,y.v_)(t.details.name),1)])])}var oa={name:"movie_post_category",props:["details"]};const ca=(0,c.A)(oa,[["render",na],["__scopeId","data-v-3eaaac64"]]);var ra=ca,la={name:"category_list",components:{movie_post_categoryVue:ra},props:["details"]};const da=(0,c.A)(la,[["render",Ye],["__scopeId","data-v-68d271a7"]]);var ma=da;const ua={class:"text-center text-lg-start text-white mt-4",style:{"background-color":"#1c2331"}},pa=(0,i.Fv)('<section class="pt-2" data-v-4ac5890e><div class="container text-center text-md-start mt-5" data-v-4ac5890e><div class="row mt-3" data-v-4ac5890e><div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" data-v-4ac5890e><h6 class="text-uppercase fw-bold" data-v-4ac5890e>Watch Cinemas</h6><hr class="mb-4 mt-0 d-inline-block mx-auto" style="width:60px;background-color:#7c4dff;height:2px;" data-v-4ac5890e><p data-v-4ac5890e> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nihil aut modi atque, provident tenetur esse a voluptatem earum porro recusandae ea eius sint repellendus dolorum possimus est? Quisquam, corrupti. </p></div><div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" data-v-4ac5890e><h6 class="text-uppercase fw-bold" data-v-4ac5890e>Genres</h6><hr class="mb-4 mt-0 d-inline-block mx-auto" style="width:60px;background-color:#7c4dff;height:2px;" data-v-4ac5890e><p data-v-4ac5890e><a class="text-white" data-v-4ac5890e>Action</a></p><p data-v-4ac5890e><a class="text-white" data-v-4ac5890e>Crime</a></p><p data-v-4ac5890e><a class="text-white" data-v-4ac5890e>BrandFlow</a></p><p data-v-4ac5890e><a class="text-white" data-v-4ac5890e>Bootstrap Angular</a></p></div><div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" data-v-4ac5890e><h6 class="text-uppercase fw-bold" data-v-4ac5890e>Useful links</h6><hr class="mb-4 mt-0 d-inline-block mx-auto" style="width:60px;background-color:#7c4dff;height:2px;" data-v-4ac5890e><p data-v-4ac5890e><a class="text-white" data-v-4ac5890e>Your Account</a></p><p data-v-4ac5890e><a class="text-white" data-v-4ac5890e>Become an Affiliate</a></p><p data-v-4ac5890e><a class="text-white" data-v-4ac5890e>Shipping Rates</a></p><p data-v-4ac5890e><a class="text-white" data-v-4ac5890e>Help</a></p></div><div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" data-v-4ac5890e><img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Ad-MediumRectangle-300x250.jpg" alt="" data-v-4ac5890e></div></div></div></section><div class="text-center p-3" style="background-color:rgba(0, 0, 0, 0.2);" data-v-4ac5890e> © 2024 Copyright Watch Cinemas </div>',2),ga=[pa];function va(e,a,t,s,n,o){return(0,i.uX)(),(0,i.CE)("footer",ua,ga)}var ha={name:"footer_page"};const ba=(0,c.A)(ha,[["render",va],["__scopeId","data-v-4ac5890e"]]);var fa=ba;const ka={class:"card border-0 shadow bg-main mt-4",style:{background:"#1a191f"}},_a=(0,i.Lk)("div",{class:"card-body d-flex justify-content-center align-items-center"},[(0,i.Lk)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/2/24/Ad-MediumRectangle-300x250.jpg",alt:""})],-1),ya=[_a];function wa(e,a,t,s,n,o){return(0,i.uX)(),(0,i.CE)("div",ka,ya)}var La={name:"ads_page"};const xa=(0,c.A)(La,[["render",wa]]);var ja=xa,Ca={name:"home_page",components:{headerHeroVue:te,movie_postVue:ge,Swiper:ve.RC,SwiperSlide:ve.qr,side_cardVue:Oe,filter_cardVue:Ie,category_listVue:ma,footerVue:fa,adsVue:ja,searchVue:xe},setup(){he.A.use([he.Autoplay]);const e=(0,_.KR)([{name:"Action",count:95},{name:"Comedy",count:120},{name:"Drama",count:68},{name:"Horror",count:135},{name:"Sci-Fi",count:105}]),a=(0,_.KR)([{name:"Movies",count:95},{name:"Anime",count:120},{name:"Series",count:68}]),t=(0,_.Kh)({most_popular:[{id:1,name:"Inception",image:"https://i.pinimg.com/736x/fa/20/85/fa2085a086003ebe5cccafeeeaf9952e.jpg",category:"Movie"},{id:2,name:"Attack on Titan",image:"https://wallpapercave.com/wp/wp8326482.jpg",category:"Anime"},{id:3,name:"Breaking Bad",image:"https://m.media-amazon.com/images/I/71HuWAZ3ydL._AC_UF1000,1000_QL80_.jpg",category:"Series"},{id:4,name:"The Dark Knight",image:"https://w0.peakpx.com/wallpaper/578/765/HD-wallpaper-dark-knight-poster-batman-dark-knight.jpg",category:"Movie"},{id:5,name:"Death Note",image:"https://cdn.europosters.eu/image/750/posters/death-note-duo-i28405.jpg",category:"Anime"},{id:6,name:"Stranger Things",image:"https://i.pinimg.com/564x/9e/36/74/9e36748a38c77f161744bfb95a6de8f4.jpg",category:"Series"},{id:7,name:"Interstellar",image:"https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/s/g/3/large-newposter8503-movie-interstellar-hd-wallpaper-background-original-imaf5ttsfnfgt2zh.jpeg?q=90&crop=false",category:"Movie"},{id:8,name:"Naruto",image:"https://images.meesho.com/images/products/163097226/nj9ot_512.webp",category:"Anime"},{id:9,name:"Game of Thrones",image:"https://i.pinimg.com/736x/ae/8c/21/ae8c21bc78b35923cdd54ef5868915ef.jpg",category:"Series"},{id:10,name:"The Godfather",image:"https://m.media-amazon.com/images/I/71khjV-MoOS._AC_UF894,1000_QL80_.jpg",category:"Movie"}],category_posts:[{id:1,name:"Movie",posts:[{id:1,name:"Inception",image:"https://i.pinimg.com/736x/fa/20/85/fa2085a086003ebe5cccafeeeaf9952e.jpg",category:"Movie"},{id:2,name:"Attack on Titan",image:"https://wallpapercave.com/wp/wp8326482.jpg",category:"Anime"},{id:3,name:"Breaking Bad",image:"https://m.media-amazon.com/images/I/71HuWAZ3ydL._AC_UF1000,1000_QL80_.jpg",category:"Series"},{id:4,name:"The Dark Knight",image:"https://w0.peakpx.com/wallpaper/578/765/HD-wallpaper-dark-knight-poster-batman-dark-knight.jpg",category:"Movie"},{id:5,name:"Death Note",image:"https://cdn.europosters.eu/image/750/posters/death-note-duo-i28405.jpg",category:"Anime"},{id:6,name:"Stranger Things",image:"https://i.pinimg.com/564x/9e/36/74/9e36748a38c77f161744bfb95a6de8f4.jpg",category:"Series"},{id:7,name:"Interstellar",image:"https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/s/g/3/large-newposter8503-movie-interstellar-hd-wallpaper-background-original-imaf5ttsfnfgt2zh.jpeg?q=90&crop=false",category:"Movie"},{id:8,name:"Naruto",image:"https://images.meesho.com/images/products/163097226/nj9ot_512.webp",category:"Anime"},{id:9,name:"Game of Thrones",image:"https://i.pinimg.com/736x/ae/8c/21/ae8c21bc78b35923cdd54ef5868915ef.jpg",category:"Series"},{id:10,name:"The Godfather",image:"https://m.media-amazon.com/images/I/71khjV-MoOS._AC_UF894,1000_QL80_.jpg",category:"Movie"}]},{id:2,name:"Anime",posts:[{id:1,name:"Inception",image:"https://i.pinimg.com/736x/fa/20/85/fa2085a086003ebe5cccafeeeaf9952e.jpg",category:"Movie"},{id:2,name:"Attack on Titan",image:"https://wallpapercave.com/wp/wp8326482.jpg",category:"Anime"},{id:3,name:"Breaking Bad",image:"https://m.media-amazon.com/images/I/71HuWAZ3ydL._AC_UF1000,1000_QL80_.jpg",category:"Series"},{id:4,name:"The Dark Knight",image:"https://w0.peakpx.com/wallpaper/578/765/HD-wallpaper-dark-knight-poster-batman-dark-knight.jpg",category:"Movie"},{id:5,name:"Death Note",image:"https://cdn.europosters.eu/image/750/posters/death-note-duo-i28405.jpg",category:"Anime"},{id:6,name:"Stranger Things",image:"https://i.pinimg.com/564x/9e/36/74/9e36748a38c77f161744bfb95a6de8f4.jpg",category:"Series"},{id:7,name:"Interstellar",image:"https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/s/g/3/large-newposter8503-movie-interstellar-hd-wallpaper-background-original-imaf5ttsfnfgt2zh.jpeg?q=90&crop=false",category:"Movie"},{id:8,name:"Naruto",image:"https://images.meesho.com/images/products/163097226/nj9ot_512.webp",category:"Anime"},{id:9,name:"Game of Thrones",image:"https://i.pinimg.com/736x/ae/8c/21/ae8c21bc78b35923cdd54ef5868915ef.jpg",category:"Series"},{id:10,name:"The Godfather",image:"https://m.media-amazon.com/images/I/71khjV-MoOS._AC_UF894,1000_QL80_.jpg",category:"Movie"}]},{id:3,name:"seires",posts:[{id:1,name:"Inception",image:"https://i.pinimg.com/736x/fa/20/85/fa2085a086003ebe5cccafeeeaf9952e.jpg",category:"Movie"},{id:2,name:"Attack on Titan",image:"https://wallpapercave.com/wp/wp8326482.jpg",category:"Anime"},{id:3,name:"Breaking Bad",image:"https://m.media-amazon.com/images/I/71HuWAZ3ydL._AC_UF1000,1000_QL80_.jpg",category:"Series"},{id:4,name:"The Dark Knight",image:"https://w0.peakpx.com/wallpaper/578/765/HD-wallpaper-dark-knight-poster-batman-dark-knight.jpg",category:"Movie"},{id:5,name:"Death Note",image:"https://cdn.europosters.eu/image/750/posters/death-note-duo-i28405.jpg",category:"Anime"},{id:6,name:"Stranger Things",image:"https://i.pinimg.com/564x/9e/36/74/9e36748a38c77f161744bfb95a6de8f4.jpg",category:"Series"},{id:7,name:"Interstellar",image:"https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/s/g/3/large-newposter8503-movie-interstellar-hd-wallpaper-background-original-imaf5ttsfnfgt2zh.jpeg?q=90&crop=false",category:"Movie"},{id:8,name:"Naruto",image:"https://images.meesho.com/images/products/163097226/nj9ot_512.webp",category:"Anime"},{id:9,name:"Game of Thrones",image:"https://i.pinimg.com/736x/ae/8c/21/ae8c21bc78b35923cdd54ef5868915ef.jpg",category:"Series"},{id:10,name:"The Godfather",image:"https://m.media-amazon.com/images/I/71khjV-MoOS._AC_UF894,1000_QL80_.jpg",category:"Movie"}]}]});return{media:t,genre:e,category:a}}};const Aa=(0,c.A)(Ca,[["render",k]]);var Fa=Aa;const Sa=e=>((0,i.Qi)("data-v-3dab36f4"),e=e(),(0,i.jt)(),e),Va={class:"p-4",style:{"min-height":"100vh","margin-top":"4rem"}},Ia={class:"text-white"},Ma={class:"row"},Ea={class:"col-md-8"},Ka={class:"row g-2"},Wa={class:"mt-4"},Ta={class:"d-flex justify-content-center"},Xa={class:"custom-pagination"},Da=Sa((()=>(0,i.Lk)("i",{class:"fa-solid fa-chevron-left"},null,-1))),qa=[Da],Qa=["onClick"],Ra=Sa((()=>(0,i.Lk)("i",{class:"fa-solid fa-chevron-right"},null,-1))),Ba=[Ra],Oa={class:"col-md-4"};function Ha(e,a,t,n,o,c){const r=(0,i.g2)("headerVue"),l=(0,i.g2)("movie_post_categoryVue"),d=(0,i.g2)("searchVue"),m=(0,i.g2)("adsVue"),u=(0,i.g2)("side_cardVue"),p=(0,i.g2)("filter_cardVue"),g=(0,i.g2)("footerVue");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(r),(0,i.Lk)("div",Va,[(0,i.Lk)("h3",Ia,(0,y.v_)(n.category_name),1),(0,i.Lk)("div",Ma,[(0,i.Lk)("div",Ea,[(0,i.Lk)("div",Ka,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.currentPageItems,(e=>((0,i.uX)(),(0,i.Wv)(l,{key:e.id,details:e},null,8,["details"])))),128))]),(0,i.Lk)("div",Wa,[(0,i.Lk)("div",Ta,[(0,i.Lk)("ul",Xa,[(0,i.Lk)("li",null,[(0,i.Lk)("a",{class:(0,y.C4)(["pagination_items",{disabled:1===n.currentPage}]),onClick:a[0]||(a[0]=(0,s.D$)(((...e)=>n.prevPage&&n.prevPage(...e)),["prevent"]))},qa,2)]),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.pageList,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e},[(0,i.Lk)("a",{class:"pagination_items",onClick:(0,s.D$)((a=>n.changePage(e)),["prevent"])},(0,y.v_)(e),9,Qa)])))),128)),(0,i.Lk)("li",null,[(0,i.Lk)("a",{class:(0,y.C4)(["pagination_items",{disabled:n.currentPage===n.totalPages}]),onClick:a[1]||(a[1]=(0,s.D$)(((...e)=>n.nextPage&&n.nextPage(...e)),["prevent"]))},Ba,2)])])])])]),(0,i.Lk)("div",Oa,[(0,i.bF)(d),(0,i.bF)(m),(0,i.bF)(u,{name:"Genres",details:n.genre},null,8,["details"]),(0,i.bF)(m),(0,i.bF)(u,{name:"Category",details:n.category},null,8,["details"]),(0,i.bF)(m),(0,i.bF)(p)])])]),(0,i.bF)(g)],64)}t(4114);const Pa=e=>((0,i.Qi)("data-v-2605e119"),e=e(),(0,i.jt)(),e),za={class:"logo"},Ga=Pa((()=>(0,i.Lk)("i",{class:"fa-solid fa-magnifying-glass"},null,-1))),Na=[Ga],Ua=Pa((()=>(0,i.Lk)("a",null,"Watch Cinemas",-1))),Ya=[Ua],Za=Pa((()=>(0,i.Lk)("i",{class:"fa-solid fa-bars"},null,-1))),$a=[Za],Ja={id:"navbar_items"},et=Pa((()=>(0,i.Lk)("i",{class:"fa-solid fa-magnifying-glass"},null,-1))),at=[et],tt=Pa((()=>(0,i.Lk)("input",{type:"text",placeholder:"Search.."},null,-1))),st=Pa((()=>(0,i.Lk)("i",{class:"fa-solid fa-x"},null,-1))),it=[st];function nt(e,a,t,s,n,o){const c=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",{class:(0,y.C4)(["navbar sticky",{active:s.menu}]),id:"navbar"},[(0,i.Lk)("div",za,[s.searchButton?((0,i.uX)(),(0,i.CE)("a",{key:0,class:"search-button mt-2 responsive",onClick:a[0]||(a[0]=(...e)=>s.isSearch&&s.isSearch(...e))},Na)):(0,i.Q3)("",!0),(0,i.Lk)("h1",{class:(0,y.C4)(["navbar-brand",{hidden:s.search}])},Ya,2),s.searchButton?((0,i.uX)(),(0,i.CE)("button",{key:1,class:"navbar_open",onClick:a[1]||(a[1]=(...e)=>s.menu_toggle&&s.menu_toggle(...e))},$a)):(0,i.Q3)("",!0)]),(0,i.Lk)("div",{class:(0,y.C4)(["navbar_items",{hidden:s.search}])},[(0,i.Lk)("ul",Ja,[(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/"},{default:(0,i.k6)((()=>[(0,i.eW)("Home")])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/Anime"},{default:(0,i.k6)((()=>[(0,i.eW)("Anime")])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/Movies"},{default:(0,i.k6)((()=>[(0,i.eW)("Movies")])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/Series"},{default:(0,i.k6)((()=>[(0,i.eW)("Series")])),_:1})])])],2),(0,i.Lk)("a",{class:(0,y.C4)(["search-button mt-2 non-responsive",{hidden:s.search}]),onClick:a[2]||(a[2]=(...e)=>s.isSearch&&s.isSearch(...e))},at,2),(0,i.Lk)("div",{class:(0,y.C4)(["search_container",{hidden:!s.search}])},[tt,(0,i.Lk)("a",{onClick:a[3]||(a[3]=(...e)=>s.isSearch&&s.isSearch(...e))},it)],2)],2)}var ot={name:"header_page",setup(){const e=(0,_.KR)(!1),a=(0,_.KR)(!0),t=(0,_.KR)(!1),s=(0,_.KR)(window.innerWidth),n=()=>{s.value=window.innerWidth};(0,i.sV)((()=>{window.addEventListener("resize",n)})),(0,i.xo)((()=>{window.removeEventListener("resize",n)}));const o=()=>{e.value=!e.value,700>=s.value&&(a.value=!a.value,t.value=!1)},c=()=>{t.value=!t.value};return{isSearch:o,search:e,menu:t,menu_toggle:c,searchButton:a}}};const ct=(0,c.A)(ot,[["render",nt],["__scopeId","data-v-2605e119"]]);var rt=ct,lt={name:"movies_page",components:{side_cardVue:Oe,filter_cardVue:Ie,searchVue:xe,adsVue:ja,footerVue:fa,movie_post_categoryVue:ra,headerVue:rt},setup(){const e=(0,_.KR)("Movies"),a=(0,_.KR)(1),t=1,s=(0,u.lq)(),n=(0,_.KR)([{name:"Action",count:95},{name:"Comedy",count:120},{name:"Drama",count:68},{name:"Horror",count:135},{name:"Sci-Fi",count:105}]),o=(0,_.KR)([{name:"Movies",count:95},{name:"Anime",count:120},{name:"Series",count:68}]),c=(0,_.KR)([{id:1,name:"Inception",image:"https://i.pinimg.com/736x/fa/20/85/fa2085a086003ebe5cccafeeeaf9952e.jpg",category:"Movie"},{id:2,name:"Attack on Titan",image:"https://wallpapercave.com/wp/wp8326482.jpg",category:"Anime"},{id:3,name:"Breaking Bad",image:"https://m.media-amazon.com/images/I/71HuWAZ3ydL._AC_UF1000,1000_QL80_.jpg",category:"Series"},{id:4,name:"The Dark Knight",image:"https://w0.peakpx.com/wallpaper/578/765/HD-wallpaper-dark-knight-poster-batman-dark-knight.jpg",category:"Movie"},{id:5,name:"Death Note",image:"https://cdn.europosters.eu/image/750/posters/death-note-duo-i28405.jpg",category:"Anime"},{id:6,name:"Stranger Things",image:"https://i.pinimg.com/564x/9e/36/74/9e36748a38c77f161744bfb95a6de8f4.jpg",category:"Series"},{id:7,name:"Interstellar",image:"https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/s/g/3/large-newposter8503-movie-interstellar-hd-wallpaper-background-original-imaf5ttsfnfgt2zh.jpeg?q=90&crop=false",category:"Movie"},{id:8,name:"Naruto",image:"https://images.meesho.com/images/products/163097226/nj9ot_512.webp",category:"Anime"},{id:9,name:"Game of Thrones",image:"https://i.pinimg.com/736x/ae/8c/21/ae8c21bc78b35923cdd54ef5868915ef.jpg",category:"Series"},{id:10,name:"The Godfather",image:"https://m.media-amazon.com/images/I/71khjV-MoOS._AC_UF894,1000_QL80_.jpg",category:"Movie"}]),r=(0,i.EW)((()=>Math.ceil(c.value.length/t))),l=(0,i.EW)((()=>{const e=[];for(let a=1;a<=r.value;a++)e.push(a);return e})),d=(0,i.EW)((()=>{const e=(a.value-1)*t,s=e+t;return c.value.slice(e,s)})),m=e=>{a.value=e},p=()=>{a.value<r.value&&a.value++},g=()=>{a.value>1&&a.value--};return(0,i.sV)((()=>{e.value=s.params.category})),{genre:n,category:o,movies:c,currentPage:a,currentPageItems:d,totalPages:r,prevPage:g,changePage:m,nextPage:p,pageList:l,category_name:e}}};const dt=(0,c.A)(lt,[["render",Ha],["__scopeId","data-v-3dab36f4"]]);var mt=dt;const ut=e=>((0,i.Qi)("data-v-ad08b50a"),e=e(),(0,i.jt)(),e),pt={class:"p-4",style:{"min-height":"100vh","margin-top":"4rem"}},gt=ut((()=>(0,i.Lk)("div",{class:"background"},[(0,i.Lk)("img",{src:"https://image.tmdb.org/t/p/original/8lx9gRnmjhQKctYznxukltOoelr.jpg",alt:""})],-1))),vt={class:"row"},ht=(0,i.Fv)('<div class="col-md-8" data-v-ad08b50a><a class="title" data-v-ad08b50a>Silence 2: The Night Owl Bar Shootout (HD)</a><div class="misc" data-v-ad08b50a><p data-v-ad08b50a><span class="text-light-custom" data-v-ad08b50a>Director </span><span class="text-white" data-v-ad08b50a>: jivn suvkjs</span></p><p data-v-ad08b50a><span class="text-light-custom" data-v-ad08b50a>Duration </span><span class="text-white" data-v-ad08b50a>: 2h 30m</span></p><p data-v-ad08b50a><span class="text-light-custom" data-v-ad08b50a>Year </span><span class="text-white" data-v-ad08b50a>: 2024</span></p><p data-v-ad08b50a><span class="text-light-custom" data-v-ad08b50a>Genre </span><span class="text-white" data-v-ad08b50a>: Bollywood, Crime, Thriller</span></p><p data-v-ad08b50a><span class="text-light-custom" data-v-ad08b50a>Cast </span><span class="text-white" data-v-ad08b50a>: Dinker Sharma, Manoj Bajpayee, Parul Gulati, Prachi Desai, Sahil Vaid, Shruti Bapna, Vaquar Sheikh</span></p></div><div class="mt-4 text-white" data-v-ad08b50a> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eos id voluptatum quas ut illo, placeat non, ab impedit eius sequi necessitatibus, totam natus. Nam laboriosam, ex dolorum neque quas aspernatur deleniti enim quia eum expedita repudiandae hic natus officiis nemo consectetur magnam quaerat deserunt culpa mollitia sequi corporis quisquam totam. Aliquam culpa non eius nisi temporibus accusantium eligendi quas, nam consequuntur porro. Asperiores esse excepturi totam earum? Tenetur doloribus dolorem vel a molestiae, minus modi cum? Alias, quas assumenda cumque at minus consectetur repellendus sequi nam nisi consequatur sit ad quis quasi officia officiis omnis consequuntur, iure deserunt? Nihil! </div><div class="d-flex" data-v-ad08b50a><button class="custom_button d-flex align-items-center" data-v-ad08b50a><i class="fa-solid fa-play" data-v-ad08b50a></i>Watch Trailler </button><button class="custom_button ms-2 d-flex align-items-center" data-v-ad08b50a><i class="fa-solid fa-play" data-v-ad08b50a></i>Watch Now </button></div></div>',1),bt={class:"col-md-4"};function ft(e,a,t,s,n,o){const c=(0,i.g2)("headerVue"),r=(0,i.g2)("searchVue"),l=(0,i.g2)("adsVue"),d=(0,i.g2)("side_cardVue"),m=(0,i.g2)("filter_cardVue"),u=(0,i.g2)("footerVue");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(c),(0,i.Lk)("div",pt,[gt,(0,i.Lk)("div",vt,[ht,(0,i.Lk)("div",bt,[(0,i.bF)(r),(0,i.bF)(l),(0,i.bF)(d,{name:"Genres",details:e.genre},null,8,["details"]),(0,i.bF)(l),(0,i.bF)(d,{name:"Category",details:e.category},null,8,["details"]),(0,i.bF)(l),(0,i.bF)(m)])])]),(0,i.bF)(u)],64)}var kt={name:"movie_details",components:{side_cardVue:Oe,filter_cardVue:Ie,searchVue:xe,adsVue:ja,footerVue:fa,headerVue:rt}};const _t=(0,c.A)(kt,[["render",ft],["__scopeId","data-v-ad08b50a"]]);var yt=_t;const wt=[{name:"Movies_details",path:"/:category/:name",component:yt},{name:"Search",path:"/search",component:mt},{name:"Genre",path:"/genre/:genre",component:mt},{name:"Movies",path:"/:category",component:mt},{name:"Home",path:"/",component:Fa}],Lt=(0,u.aE)({history:(0,u.LA)(),routes:wt});var xt=Lt;(0,s.Ef)(l).use(m()).use(xt).mount("#app")}},a={};function t(s){var i=a[s];if(void 0!==i)return i.exports;var n=a[s]={exports:{}};return e[s].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(a,s,i,n){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],i=e[d][1],n=e[d][2];for(var c=!0,r=0;r<s.length;r++)(!1&n||o>=n)&&Object.keys(t.O).every((function(e){return t.O[e](s[r])}))?s.splice(r--,1):(c=!1,n<o&&(o=n));if(c){e.splice(d--,1);var l=i();void 0!==l&&(a=l)}}return a}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[s,i,n]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,s){var i,n,o=s[0],c=s[1],r=s[2],l=0;if(o.some((function(a){return 0!==e[a]}))){for(i in c)t.o(c,i)&&(t.m[i]=c[i]);if(r)var d=r(t)}for(a&&a(s);l<o.length;l++)n=o[l],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(d)},s=self["webpackChunkmovie"]=self["webpackChunkmovie"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=t.O(void 0,[504],(function(){return t(1546)}));s=t.O(s)})();
//# sourceMappingURL=app.6e42e4f8.js.map