import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SideBarComponent} from '../side-bar/side-bar.component';
import {ProfileService} from '../../data/services/profile.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SideBarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit, OnDestroy {
  profileService = inject(ProfileService)
  me$!: Subscription

  ngOnInit(): void {
    this.me$ = this.profileService.getMe().subscribe()
    console.log(this.me$)
  }

  ngOnDestroy(): void {
    this.me$.unsubscribe()
  }

}
