import {
    trigger,
    transition,
    style,
    query,
    group,
    animate,
    state,
    keyframes
} from '@angular/animations';

// fader animation with transition query
export const fader = trigger('routeAnimations', [
    // state('void, exit', style({ opacity: 0, transform: 'scale(0.7)' })),
    // state('enter', style({ opacity: 1, transform: 'none' })),
    // transition('* => enter', animate('150ms cubic-bezier(0, 0, 0.2, 1)', style({ transform: 'none', opacity: 1 }))),
    // transition('* => void, * => exit', animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 0 }))),
    transition('* => *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                display: 'block',
                left: 0,
                opacity: 0,
                width: '100%',
                transform: 'scale(0) translateY(100%)',
            }),
        ], { optional: true} ),
        query(':enter', [
            animate('600ms ease',
                style({ opacity: 1, transform: 'scale(1) translateY(0)'})
            ),
        ], { optional: true} ),
    ]),
]);


// slider animation with group function
export const slider = trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left')),
    transition('* => isRight', slideTo('right')),
    transition('isRight => *', slideTo('left')),
    transition('isLeft => *', slideTo('right')),
]);
function slideTo(direction: any){
    const optional = {optional: true};
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%',
            })
        ], optional),
        query(':enter', [
            style({ [direction]: '-100%'}),
        ]),
        group([
            query(':leave', [
                animate('600ms ease-in', style({ [direction]: '100%' })),
            ], optional),
            query(':enter', [
                animate('600ms ease-in', style({ [direction]: '0%' })),
            ], optional),
        ]),
    ];
}

// transformer animation with rotate
export const transformer = trigger('routeAnimations', [
    transition('* => isLeft', translateTo({ x:-100, y:-100, rotate:-720 })),
    transition('* => isRight', translateTo({ x:100, y:-100, rotate:-90 })),
    transition('isRight => *', translateTo({ x:-100, y:-100, rotate:360 })),
    transition('isLeft => *', translateTo({ x:100, y:-100, rotate:-360 })),
]);
function translateTo ({ x=100, y=0, rotate=0 }){
    const optional = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            })
        ], optional ),
        query(':enter', [
            style({ transform: `translate( ${x}%, ${y}% ) rotate(${rotate}deg)` }),
        ]),
        group([
            query(':leave',[
                animate('600ms ease-out',
                    style({ transform: `translate( ${x}%, ${y}% ) rotate(${rotate}deg)` })
                )
            ], optional),
            query(':enter',[
                animate('600ms ease-out',
                    style({ transform: `translate( 0, 0 ) rotate(0)` })
                )
            ], optional),
        ]),
    ];
}

// stepper animation with keyframes
export const stepper = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
            }),
        ], { optional: true} ),
        group([
            query(':enter', [
                animate('2000ms ease', keyframes([
                    style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
                    style({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
                    style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
                ])),
            ], { optional: true} ),
            query(':leave', [
                animate('2000ms ease', keyframes([
                    style({ transform: 'scale(1)', offset: 0 }),
                    style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.3 }),
                    style({ opacity: 0, transform: 'scale(0) translateX(-150%) rotate(-180deg)', offset: 1 }),
                ])),
            ], { optional: true} ),
        ]),
    ]),
]);