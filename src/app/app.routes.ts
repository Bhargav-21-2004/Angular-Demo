import { Routes } from '@angular/router';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { StructuralDirectives } from './structural-directives/structural-directives';
import { NgforDirective } from './ngfor-directive/ngfor-directive';
import { PageNotFound } from './page-not-found/page-not-found';
import { BuiltInPipes } from './built-in-pipes/built-in-pipes';
import { TemplateForm } from './template-form/template-form';
import { ReactiveForm } from './reactive-form/reactive-form';
import { SwitchDirective } from './switch-directive/switch-directive';
import { Signals } from './signals/signals';
import { LinkSignals } from './link-signals/link-signals';
import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { Profile } from './profile/profile';

export const routes: Routes = [
    {path:'',component:User},
    {path : 'user', component:User},
    {path:'data-binding' , component : DataBinding},
    {path:'directives', component:Directives},
    {path:'structural-directives',component:StructuralDirectives},
    {path:'ngfor-directives',component:NgforDirective},
    {path:'built-in-pipes',component:BuiltInPipes},
    {path:'switch-directive',component:SwitchDirective},
    {path:'Attribute-directive',component:AttributeDirectives},
    {path:'signals',component:Signals},
    {path:'Linkedsignals',component:LinkSignals},
    {path:'tdf',component:TemplateForm},
    {path:'reactive-form',component:ReactiveForm},
    {path:'Profile-Service',component:Profile},
    {path:'**',component: PageNotFound}
];
