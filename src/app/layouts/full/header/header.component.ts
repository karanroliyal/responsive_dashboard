import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    CommonModule,
    NgScrollbarModule,
    MaterialModule,
    MatBadgeModule
  ],
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  constructor(private router:Router ){

  }
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
 
  logout(){
  localStorage.removeItem('token');
  localStorage.clear();
  this.router.navigate(['/authentication/login']);
  }

}