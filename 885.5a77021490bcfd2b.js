"use strict";(self.webpackChunkPanelSG=self.webpackChunkPanelSG||[]).push([[885],{9885:(b,u,s)=>{s.r(u),s.d(u,{CasoTestDocenteModule:()=>A});var d=s(6895),g=s(668),a=s(6561),e=s(8256),h=s(7643),r=s(433);function m(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td",11)(2,"div",12)(3,"div",13)(4,"strong"),e._uU(5,"CI:"),e.qZA(),e.TgZ(6,"strong"),e._uU(7,"Nombres:"),e.qZA()(),e.TgZ(8,"div",14)(9,"label"),e._uU(10),e.qZA(),e.TgZ(11,"label"),e._uU(12),e.qZA()()()(),e.TgZ(13,"td",11)(14,"div",12)(15,"div",13)(16,"strong"),e._uU(17,"CI:"),e.qZA(),e.TgZ(18,"strong"),e._uU(19,"Nombres:"),e.qZA()(),e.TgZ(20,"div",14)(21,"label"),e._uU(22),e.qZA(),e.TgZ(23,"label"),e._uU(24),e.qZA()()()(),e.TgZ(25,"td",11),e._uU(26),e.qZA(),e.TgZ(27,"td",11),e._uU(28),e.qZA(),e.TgZ(29,"td",11),e._uU(30),e.ALo(31,"date"),e.qZA(),e.TgZ(32,"td",11)(33,"button",15),e.NdJ("click",function(){const i=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.deleteTest(i._id))}),e._UZ(34,"i",16),e.qZA()()()}if(2&o){const t=n.$implicit;e.xp6(10),e.Oqu(t.ciTeacher),e.xp6(2),e.AsE("",t.nameTeacher," ",t.lastNameTeacher,""),e.xp6(10),e.Oqu(t.ciStudent),e.xp6(2),e.AsE("",t.nameStudent," ",t.lastNameStudent,""),e.xp6(2),e.hij(" ",t.status,""),e.xp6(2),e.hij(" ",t.score,""),e.xp6(2),e.hij(" ",e.xi3(31,9,t.createdAt,"dd/MM/yyyy")," ")}}function f(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",17)(1,"div",18),e._uU(2," Evaluador "),e.qZA(),e.TgZ(3,"div",19)(4,"div",20),e._uU(5," CI: "),e.qZA(),e.TgZ(6,"div",21),e._uU(7),e.qZA()(),e.TgZ(8,"div",19)(9,"div",20),e._uU(10," Nombre: "),e.qZA(),e.TgZ(11,"div",21),e._uU(12),e.qZA()(),e.TgZ(13,"div",18),e._uU(14," Estudiante "),e.qZA(),e.TgZ(15,"div",19)(16,"div",20),e._uU(17," CI: "),e.qZA(),e.TgZ(18,"div",21),e._uU(19),e.qZA()(),e.TgZ(20,"div",19)(21,"div",20),e._uU(22," Nombre: "),e.qZA(),e.TgZ(23,"div",21),e._uU(24),e.qZA()(),e.TgZ(25,"div",19)(26,"div",20),e._uU(27," Estado: "),e.qZA(),e.TgZ(28,"div",21),e._uU(29),e.qZA()(),e.TgZ(30,"div",19)(31,"div",20),e._uU(32," Puntaje: "),e.qZA(),e.TgZ(33,"div",21),e._uU(34),e.qZA()(),e.TgZ(35,"div",19)(36,"div",20),e._uU(37," Fecha Aplicacion: "),e.qZA(),e.TgZ(38,"div",21),e._uU(39),e.ALo(40,"date"),e.qZA()(),e.TgZ(41,"div",22)(42,"button",15),e.NdJ("click",function(){const i=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.deleteTest(i._id))}),e._UZ(43,"i",16),e.qZA()()()}if(2&o){const t=n.$implicit;e.xp6(7),e.hij(" ",t.ciDece," "),e.xp6(5),e.AsE(" ",t.nameDece," ",t.lastNameDece," "),e.xp6(7),e.hij(" ",t.ciStudent," "),e.xp6(5),e.AsE(" ",t.nameStudent," ",t.lastNameStudent," "),e.xp6(5),e.hij(" ",t.status," "),e.xp6(5),e.hij(" ",t.score," "),e.xp6(5),e.hij(" ",e.xi3(40,9,t.createdAt,"dd/MM/yyyy")," ")}}let Z=(()=>{class o{constructor(t,l){this.serviceCasoTeacher=t,this.filterTable=l,this.tests=[],this.search=""}ngOnInit(){this.serviceCasoTeacher.getAll().subscribe(t=>{this.tests=t,console.log(this.tests)})}deleteTest(t){this.serviceCasoTeacher.delete(t).subscribe(l=>{console.log(l),this.ngOnInit()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.O),e.Y36(a.u))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-listar"]],features:[e._Bn([d.uU,a.u])],decls:26,vars:6,consts:[[1,"w-[95%]","h-[90%]","lg:h-[95%]","lg:m-2","mx-4","my-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","lg:h-[7%]","text-center","text-3xl","font-bold","text-camelot","py-2"],[1,"w-full","lg:h-[8%]","h-[10%]","flex","flex-row","lg:justify-start","justify-between","py-2","lg:gap-4"],["placeholder","Buscar...",1,"ml-4","px-2","border-b-2","border-camelot","rounded-lg","bg-none","text-camelot","text-xs","font-semibold","tracking-wide","w-[40%]","lg:w-[20%]","focus:outline-none","focus:border-camelot-400",3,"ngModel","ngModelChange"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","shadow","hidden","lg:block"],[1,"w-full","lg:h-[92%]","my-2"],[1,"bg-nile-blue-200","border-b-2","border-nile-blue","text-cameo"],[1,"p-3","text-sm","font-semibold","tracking-wide","text-center"],[4,"ngFor","ngForOf"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","lg:hidden"],["class","w-full h-full flex flex-col mb-2 border border-camelot rounded-lg hover:shadow-sm hover:shadow-camelot-300",4,"ngFor","ngForOf"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-left"],[1,"grid","grid-cols-5"],[1,"col-span-2","flex","flex-col"],[1,"col-span-3","flex","flex-col"],[1,"bg-red-500","hover:bg-red-700","text-white","font-bold","py-2","px-4","rounded-full",3,"click"],[1,"fas","fa-trash-alt"],[1,"w-full","h-full","flex","flex-col","mb-2","border","border-camelot","rounded-lg","hover:shadow-sm","hover:shadow-camelot-300"],[1,"w-full","grid","grid-cols-1","break-all","items-center","space-x-2","text-center","text-camelot","text-lg","px-2","font-bold","underline"],[1,"w-full","grid","grid-cols-5","break-all","items-left","space-x-2","text","pl-2","py-2","pr-2"],[1,"col-span-2","break-all","font-bold","text-camelot"],[1,"col-span-3","break-all","text-nile-blue"],[1,"flex","flex-row","gap-2","justify-end","my-2"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Gesti\xf3n de tests docentes "),e.qZA(),e.TgZ(3,"div",2)(4,"input",3),e.NdJ("ngModelChange",function(i){return l.search=i}),e.qZA()(),e.TgZ(5,"div",4)(6,"table",5)(7,"thead",6)(8,"tr")(9,"th",7),e._uU(10,"Docente Evaluador"),e.qZA(),e.TgZ(11,"th",7),e._uU(12,"Estudiante"),e.qZA(),e.TgZ(13,"th",7),e._uU(14,"Estado"),e.qZA(),e.TgZ(15,"th",7),e._uU(16,"Puntaje"),e.qZA(),e.TgZ(17,"th",7),e._uU(18,"Fecha Aplicacion"),e.qZA(),e.TgZ(19,"th",7),e._uU(20,"Acciones"),e.qZA()()(),e.TgZ(21,"tbody"),e.YNc(22,m,35,12,"tr",8),e.ALo(23,"filterTables"),e.qZA()()(),e.TgZ(24,"div",9),e.YNc(25,f,44,12,"div",10),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngModel",l.search),e.xp6(18),e.Q6J("ngForOf",e.xi3(23,3,l.tests,l.search)),e.xp6(3),e.Q6J("ngForOf",l.tests))},dependencies:[d.sg,r.Fj,r.JJ,r.On,d.uU,a.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),o})();const x=[{path:"",component:Z,pathMatch:"full"},{path:"listar",component:Z}];let T=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(x),g.Bz]}),o})();var v=s(4466);let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,T,r.u5,v.m]}),o})()}}]);