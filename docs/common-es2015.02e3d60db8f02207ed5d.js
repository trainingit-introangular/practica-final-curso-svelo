(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+qrf":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("fXoL"),n=r("tk/3");let a=(()=>{class e{constructor(e){this.httpClient=e,this.apiUrl="https://api-base.herokuapp.com/api/pub/projects",this.currentProyects=null,this.myProyects=null,this.projectsService=[{id:1,name:"Learn Angular (Service)"},{id:2,name:"Develop My Dream app (Service)"},{id:3,name:"Travel around the world (Service)"},{id:4,name:"Clean my room (Service)"}],this.projectsApi={children:[{Id:1,name:"Learn Angular (Service)"},{id:2,name:"Develop My Dream app (Service)"}]}}getProjects(){return this.httpClient.get(this.apiUrl)}postProject(e){this.httpClient.post(this.apiUrl,{name:e}).subscribe()}deleteProjects(){this.httpClient.delete(this.apiUrl).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(n.a))},e.\u0275prov=i.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);