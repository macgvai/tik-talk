import { Component } from '@angular/core';
import {SvgImgComponent} from '../svg-img/svg-img.component';
import {NgClass} from '@angular/common';
import {MenuButtonInterface} from './interfaces/menu-button.interface';

@Component({
  selector: 'app-side-bar',
  standalone: true,
    imports: [
        SvgImgComponent,
        NgClass
    ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
    menuButtons: MenuButtonInterface[] = [
        {
            name: 'Моя страница',
            icon: 'telegram'
        },
        {
            name: 'Моя страница2',
            icon: 'eye'
        },
        {
            name: 'Моя страница3',
            icon: 'telegram'
        }
    ]


}
