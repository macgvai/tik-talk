import {Component, Input} from '@angular/core';

@Component({
    selector: 'svg[icon]',
    standalone: true,
    imports: [],
    template: `
        <svg>
            <use [attr.href]="url"></use>
        </svg>`,
    styles: ['']
})
export class SvgImgComponent {
    @Input() icon: string = ''

    get url(): string {
        return `/assets/imgs/svg/sprite.svg#${this.icon}`;
    }
}
