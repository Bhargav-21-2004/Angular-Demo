import { Component, linkedSignal, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { StructuralDirectives } from './structural-directives/structural-directives';
import { NgforDirective } from './ngfor-directive/ngfor-directive';
import { SwitchDirective } from './switch-directive/switch-directive';
import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { Signals } from './signals/signals';
import { LinkSignals } from './link-signals/link-signals';
import { BuiltInPipes } from './built-in-pipes/built-in-pipes';
import { ReactiveForm } from './reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,RouterLinkActive,BuiltInPipes,ReactiveForm,
    User,DataBinding,Directives,StructuralDirectives,NgforDirective,SwitchDirective,AttributeDirectives,Signals,LinkSignals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_tutoriala');
}
