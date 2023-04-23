"use strict";(self.webpackChunkPanelSG=self.webpackChunkPanelSG||[]).push([[258],{3258:(F,g,l)=>{l.r(g),l.d(g,{UsuariosModule:()=>N});var h=l(4466),c=l(6895),u=l(668),t=l(433);class v{constructor(){this.form=new t.cw({name:new t.NI("",[t.kI.required,t.kI.minLength(6)]),lastName:new t.NI("",[t.kI.required,t.kI.minLength(6)]),age:new t.NI("",[t.kI.pattern("d"),t.kI.minLength(1),t.kI.maxLength(3)]),address:new t.NI("",[t.kI.minLength(10)]),phone:new t.NI("",[t.kI.minLength(6),t.kI.maxLength(10)]),email:new t.NI("",[t.kI.required,t.kI.email]),CI:new t.NI("",[t.kI.required,t.kI.minLength(10),t.kI.maxLength(10)]),password:new t.NI("",[t.kI.required,t.kI.minLength(6),t.kI.maxLength(10)]),password_confirmation:new t.NI("",[t.kI.required,t.kI.minLength(6),t.kI.maxLength(10)]),role:new t.NI("",[t.kI.required,t.kI.pattern(/^(ADMIN|TEACHER|DECE)$/)])},{validators:this.passwordMatchValidator})}passwordMatchValidator(s){const o=s.get("password"),i=s.get("password_confirmation");return o?.value!==i?.value?{passwordMismatch:!0}:null}}class Z{constructor(){this.form=new t.cw({id:new t.NI("",[t.kI.required]),password:new t.NI("",[t.kI.required,t.kI.minLength(6)]),password_confirmation:new t.NI("",[t.kI.required,t.kI.minLength(6)])},{validators:this.passwordMatchValidator})}passwordMatchValidator(s){const o=s.get("password"),i=s.get("password_confirmation");return o?.value!==i?.value?{passwordMismatch:!0}:null}}var m=l(6561),e=l(8256),x=l(5657),p=l(4992),b=l(1045),w=l(8622);function _(r,s){1&r&&(e.TgZ(0,"div",20),e._uU(1," Activo "),e.qZA())}function I(r,s){1&r&&(e.TgZ(0,"div",21),e._uU(1," Inactivo "),e.qZA())}function U(r,s){if(1&r){const o=e.EpF();e.TgZ(0,"tr")(1,"td",13),e._uU(2),e.qZA(),e.TgZ(3,"td",13),e._uU(4),e.qZA(),e.TgZ(5,"td",13),e._uU(6),e.qZA(),e.TgZ(7,"td",14),e.YNc(8,_,2,0,"div",15),e.YNc(9,I,2,0,"div",16),e.qZA(),e.TgZ(10,"td",17)(11,"button",18),e.NdJ("click",function(){const a=e.CHM(o).$implicit,d=e.oxw();return e.KtG(d.activate(a.id))}),e._uU(12," Activar "),e.qZA(),e.TgZ(13,"button",19),e.NdJ("click",function(){const a=e.CHM(o).$implicit,d=e.oxw();return e.KtG(d.delete(a.id))}),e._uU(14," Eliminar "),e.qZA()()()}if(2&r){const o=s.$implicit;e.xp6(2),e.Oqu(o.CI),e.xp6(2),e.Oqu(o.email),e.xp6(2),e.Oqu(o.role),e.xp6(2),e.Q6J("ngIf",o.status),e.xp6(1),e.Q6J("ngIf",!o.status)}}function T(r,s){1&r&&(e.TgZ(0,"div",20),e._uU(1," Activo "),e.qZA())}function A(r,s){1&r&&(e.TgZ(0,"div",21),e._uU(1," Inactivo "),e.qZA())}function C(r,s){if(1&r){const o=e.EpF();e.TgZ(0,"div",22)(1,"div",23)(2,"div",24),e._uU(3," CI: "),e.qZA(),e.TgZ(4,"div",25),e._uU(5),e.qZA()(),e.TgZ(6,"div",23)(7,"div",24),e._uU(8," Usuario: "),e.qZA(),e.TgZ(9,"div",25),e._uU(10),e.qZA()(),e.TgZ(11,"div",23)(12,"div",24),e._uU(13," Rol: "),e.qZA(),e.TgZ(14,"div",25),e._uU(15),e.qZA()(),e.TgZ(16,"div",23)(17,"div",24),e._uU(18," Estado: "),e.qZA(),e.TgZ(19,"div",25),e.YNc(20,T,2,0,"div",15),e.YNc(21,A,2,0,"div",16),e.qZA()(),e.TgZ(22,"div",26)(23,"button",18),e.NdJ("click",function(){const a=e.CHM(o).$implicit,d=e.oxw();return e.KtG(d.activate(a.id))}),e._uU(24," Activar "),e.qZA(),e.TgZ(25,"button",18),e.NdJ("click",function(){const a=e.CHM(o).$implicit,d=e.oxw();return e.KtG(d.delete(a.id))}),e._uU(26," Eliminar "),e.qZA()()()}if(2&r){const o=s.$implicit;e.xp6(5),e.hij(" ",o.CI," "),e.xp6(5),e.hij(" ",o.email," "),e.xp6(5),e.hij(" ",o.role," "),e.xp6(5),e.Q6J("ngIf",o.status),e.xp6(1),e.Q6J("ngIf",!o.status)}}let f=(()=>{class r{constructor(o,i,n,a,d,L,M){this.filterTable=o,this.cookieService=i,this.usuariosService=n,this.authService=a,this.jwtService=d,this.route=L,this.router=M,this.usuarios=[],this.modalActivate=!1,this.formValidator=new Z,this.search=""}ngOnInit(){this.cookie=this.cookieService.get("token"),this.nombreUser=this.jwtService.getTokenInformation(this.cookie).name,this.rolUser=this.jwtService.getTokenInformation(this.cookie).role,this.idUser=this.jwtService.getTokenInformation(this.cookie).user,this.formValidator.form.reset(),this.usuariosService.getAllUser().subscribe(o=>{this.usuarios=o})}delete(o){this.usuariosService.deleteUser(o).subscribe(i=>{const{message:n}=i;console.log(n),this.ngOnInit()},i=>{console.log(i)})}activate(o){this.usuariosService.activateUser(o).subscribe(i=>{const{message:n}=i;console.log(n),this.ngOnInit()},i=>{console.log(i)})}addValidator(o){this.authService.validateAddAdmin({id:o,password:this.formValidator.form.value.password}).subscribe(n=>{const{message:a}=n;console.log(a),this.router.navigate(["../registrar"],{relativeTo:this.route})},n=>{console.log(n)})}openModal(){this.modalActivate=!0,this.formValidator.form.reset(),this.formValidator.form.patchValue({id:this.idUser})}closeModal(){this.modalActivate=!1}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(m.u),e.Y36(x.N),e.Y36(p.K),e.Y36(b.e),e.Y36(w.T),e.Y36(u.gz),e.Y36(u.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-listar"]],features:[e._Bn([m.u])],decls:26,vars:7,consts:[[1,"w-[95%]","h-[90%]","lg:h-[95%]","lg:m-2","mx-4","my-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","lg:h-[7%]","text-center","text-3xl","font-bold","text-camelot","py-2"],[1,"w-full","lg:h-[8%]","h-[10%]","flex","flex-row","lg:justify-start","justify-between","py-2","lg:gap-4"],["placeholder","Buscar...",1,"ml-4","px-2","border-b-2","border-camelot","rounded-lg","bg-none","text-camelot","text-xs","font-semibold","tracking-wide","w-[40%]","lg:w-[20%]","focus:outline-none","focus:border-camelot-400",3,"ngModel","ngModelChange"],["type","button",1,"bg-nile-blue","ml-4","px-2","text-cameo","text-xs","font-bold","uppercase","rounded","shadow","hover:shadow-lg","outline-none","focus:outline-none","mr-1","mb-1","ease-linear","transition-all","duration-150",3,"routerLink"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","shadow","hidden","lg:block"],[1,"w-full","lg:h-[85%]","my-2"],[1,"bg-nile-blue-200","border-b-2","border-nile-blue","text-cameo"],[1,"p-3","text-sm","font-semibold","tracking-wide","text-center"],[1,""],[4,"ngFor","ngForOf"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","lg:hidden"],["class","w-full h-full flex flex-col mb-2 border border-camelot rounded-lg hover:shadow-sm hover:shadow-camelot-300",4,"ngFor","ngForOf"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-left"],[1,"p-3"],["class","bg-green bg-opacity-25 rounded-lg p-2 text-nile-blue text-center tracking-wider  text-sm",4,"ngIf"],["class","bg-red bg-opacity-25 rounded-lg p-2 text-nile-blue text-center tracking-wider  text-sm",4,"ngIf"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-center","flex","flex-row","items-center","justify-center"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"click"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1",3,"click"],[1,"bg-green","bg-opacity-25","rounded-lg","p-2","text-nile-blue","text-center","tracking-wider","text-sm"],[1,"bg-red","bg-opacity-25","rounded-lg","p-2","text-nile-blue","text-center","tracking-wider","text-sm"],[1,"w-full","h-full","flex","flex-col","mb-2","border","border-camelot","rounded-lg","hover:shadow-sm","hover:shadow-camelot-300"],[1,"w-full","grid","grid-cols-5","break-all","items-left","space-x-2","text","pl-2","py-2","pr-2"],[1,"col-span-2","break-all","font-bold","text-camelot"],[1,"col-span-3","break-all","text-nile-blue"],[1,"flex","flex-row","gap-2","justify-end","my-2"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Gesti\xf3n de usuarios "),e.qZA(),e.TgZ(3,"div",2)(4,"input",3),e.NdJ("ngModelChange",function(a){return i.search=a}),e.qZA(),e.TgZ(5,"button",4),e._uU(6," Registrar Admin "),e.qZA()(),e.TgZ(7,"div",5)(8,"table",6)(9,"thead",7)(10,"tr")(11,"th",8),e._uU(12,"CI"),e.qZA(),e.TgZ(13,"th",8),e._uU(14,"Usuario"),e.qZA(),e.TgZ(15,"th",8),e._uU(16,"Rol"),e.qZA(),e.TgZ(17,"th",8),e._uU(18,"Estado"),e.qZA(),e.TgZ(19,"th",8),e._uU(20," Acciones"),e.qZA()()(),e.TgZ(21,"tbody",9),e.YNc(22,U,15,5,"tr",10),e.ALo(23,"filterTables"),e.qZA()()(),e.TgZ(24,"div",11),e.YNc(25,C,27,5,"div",12),e.qZA()()),2&o&&(e.xp6(4),e.Q6J("ngModel",i.search),e.xp6(1),e.Q6J("routerLink","../registrar"),e.xp6(17),e.Q6J("ngForOf",e.xi3(23,4,i.usuarios,i.search)),e.xp6(3),e.Q6J("ngForOf",i.usuarios))},dependencies:[c.sg,c.O5,u.rH,t.Fj,t.JJ,t.On,m.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),r})();var k=l(4323);const q=[{path:"",component:f,pathMatch:"full"},{path:"registrar",component:(()=>{class r{constructor(o,i,n,a){this.userService=o,this.personService=i,this.router=n,this.route=a,this.formUser=new v}ngOnInit(){this.formUser.form.reset()}create(){const i={email:this.formUser.form.value.email,password:this.formUser.form.value.password,role:"ADMIN"};this.personService.createPersona({CI:this.formUser.form.value.CI,name:this.formUser.form.value.name,lastName:this.formUser.form.value.lastName,address:this.formUser.form.value.address,phone:this.formUser.form.value.phone,email:this.formUser.form.value.email}).subscribe(n=>{this.userService.createUser(i).subscribe(a=>{this.router.navigate(["../listar"],{relativeTo:this.route})},a=>{console.log(a)})},n=>{console.log(n)})}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(p.K),e.Y36(k.J),e.Y36(u.F0),e.Y36(u.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-registrar"]],decls:61,vars:1,consts:[[1,"w-[95%]","h-[95%]","m-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","h-[7%]","text-center","text-3xl","font-bold","text-camelot","py-2"],[3,"formGroup","ngSubmit"],[1,"subtitulo"],[1,"form-group"],[1,"labels"],["for","CIS"],[1,"inputs"],["type","text","id","CIS","formControlName","CI","placeholder","Ingrese el documento de identificaci\xf3n ",1,"form-control"],["for","name"],["type","text","id","name","formControlName","name","placeholder","Ingrese los nombres ",1,"form-control"],["for","lastName"],["type","text","id","lastName","formControlName","lastName","placeholder","Ingrese los apellidos ",1,"form-control"],["for","address"],["type","text","id","address","formControlName","address","placeholder","Ingrese la direcci\xf3n ",1,"form-control"],["for","phone"],["type","text","id","phone","formControlName","phone","placeholder","Ingrese el tel\xe9fono ",1,"form-control"],["for","email"],["type","email","id","email","formControlName","email","placeholder","Ingrese el correo electr\xf3nico ",1,"form-control"],["for","password"],["type","password","id","password","formControlName","password","placeholder","Ingrese la contrase\xf1a ",1,"form-control"],["type","password","id","password_confirmation","formControlName","password_confirmation","placeholder","Ingrese la contrase\xf1a ",1,"form-control"],[1,"buttons"],["type","submit",1,"btnEnviar"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Registro de usuarios "),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return i.create()}),e.TgZ(4,"fieldset")(5,"div",3),e._uU(6,"Datos personales"),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"label",6),e._uU(10,"Ingrese el CI :"),e.qZA()(),e.TgZ(11,"div",7),e._UZ(12,"input",8),e.qZA()(),e.TgZ(13,"div",4)(14,"div",5)(15,"label",9),e._uU(16,"Ingrese los nombres :"),e.qZA()(),e.TgZ(17,"div",7),e._UZ(18,"input",10),e.qZA()(),e.TgZ(19,"div",4)(20,"div",5)(21,"label",11),e._uU(22,"Ingrese los apellidos :"),e.qZA()(),e.TgZ(23,"div",7),e._UZ(24,"input",12),e.qZA()(),e.TgZ(25,"div",4)(26,"div",5)(27,"label",13),e._uU(28,"Ingrese la direcci\xf3n :"),e.qZA()(),e.TgZ(29,"div",7),e._UZ(30,"input",14),e.qZA()(),e.TgZ(31,"div",4)(32,"div",5)(33,"label",15),e._uU(34,"Ingrese el tel\xe9fono :"),e.qZA()(),e.TgZ(35,"div",7),e._UZ(36,"input",16),e.qZA()(),e.TgZ(37,"div",4)(38,"div",5)(39,"label",17),e._uU(40,"Ingrese el correo electr\xf3nico :"),e.qZA()(),e.TgZ(41,"div",7),e._UZ(42,"input",18),e.qZA()(),e.TgZ(43,"div",3),e._uU(44,"Datos para el login"),e.qZA(),e.TgZ(45,"div",4)(46,"div",5)(47,"label",19),e._uU(48,"Ingrese la contrase\xf1a :"),e.qZA()(),e.TgZ(49,"div",7),e._UZ(50,"input",20),e.qZA()(),e.TgZ(51,"div",4)(52,"div",5)(53,"label",19),e._uU(54,"Ingrese nuevamente la contrase\xf1a :"),e.qZA()(),e.TgZ(55,"div",7),e._UZ(56,"input",21),e.qZA()(),e.TgZ(57,"div",4)(58,"div",22)(59,"button",23),e._uU(60,"Registrar"),e.qZA()()()()()()),2&o&&(e.xp6(3),e.Q6J("formGroup",i.formUser.form))},dependencies:[t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),r})()},{path:"listar",component:f}];let y=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[u.Bz.forChild(q),u.Bz]}),r})(),N=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[c.ez,y,t.UX,t.u5,h.m]}),r})()}}]);