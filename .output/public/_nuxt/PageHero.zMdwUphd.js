import{o as n,m as d,w as p,t as o,d as u,e as x,_ as m,c,a as e,b as g}from"./entry.3hYQ1CiK.js";const h={__name:"CtaButton",props:{link:String,text:String},setup(a){const s=a;return(t,r)=>{const i=x;return n(),d(i,{to:`${s.link}`},{default:p(()=>[u(o(s.text),1)]),_:1},8,["to"])}}},_=h,k={name:"pagehero",components:{CtaButton:_},props:{link:{type:String},text:{type:String},pageTitle:{type:String,required:!1},pageHeading:{type:String,required:!0},sectionId:{type:String,required:!0}}},f=["id"],y={class:"d-flex align-items-center"},S={key:0,class:"row flex-column flex-md-row align-items-center"},B={class:"col-12 col-md-4 text-center text-md-start p-3"},v={class:"col-12 col-md-8 p-0"},w={key:1,class:"text-center"},C={class:"home-hero-text"};function N(a,s,t,r,i,T){const l=_;return n(),c("section",{id:t.sectionId},[e("div",y,[t.pageTitle?(n(),c("div",S,[e("div",B,[e("h1",null,o(t.pageTitle),1)]),e("div",v,[e("h2",null,o(t.pageHeading),1)])])):(n(),c("div",w,[e("h1",C,o(t.pageHeading),1),g(l,{class:"btn text-uppercase",link:t.link,text:t.text},null,8,["link","text"])]))])],8,f)}const H=m(k,[["render",N]]);export{H as _};
