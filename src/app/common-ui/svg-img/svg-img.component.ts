import {Component, Input} from '@angular/core';

@Component({
    selector: 'svg[icon]',
    standalone: true,
    imports: [],
    template: `
        <svg>
            <use [attr.href]="'/assets/imgs/svg/sprite.svg#' + icon"></use>
        </svg>`,
    styles: ['']
})
export class SvgImgComponent {
    @Input() icon: string = ''
}
