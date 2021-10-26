# Progress bar

basic code

## Component 'circle'

The base are working [progress bar - Working](https://github.com/brunosilva/progress-bar/issues/2#issue-1031801996).

## Call the component

```html
<Circle completed="{6}" />
```

## Parametrize the component

For parametrize, define at your SCSS the values to progress

`// keyframes references -------------------------`
`// empty = 0% { stroke-dashoffset: 500; }`
`// ten = 9% { stroke-dashoffset: 429; }`
`// twenty = 22% { stroke-dashoffset: 358; }`
`// thirty = 35% { stroke-dashoffset: 287; }`
`// fourty = 48% { stroke-dashoffset: 216; }`
`// fifty = 61% { stroke-dashoffset: 145; }`
`// sixty = 74% { stroke-dashoffset: 74; }`
`// seventy = 87% { stroke-dashoffset: 225; }`
`// hundred = 100% { stroke-dashoffset: 174; }`
`// ----------------------------------------------`

### The SCSS progress-bar

Every time you need this mixin, just call it using the code below

```scss
@include setAnimationProgress(empty, 500);
```

- 1° parameter: is name to animation
- 2° parameter: is value to change at progress

For make animation I create a mixin

```scss
@mixin setAnimationProgress($name, $value) {
  circle {
    fill: none;
    stroke: var(--gray-500);
    stroke-width: 5px;
    stroke-dasharray: 582;
    stroke-dashoffset: 582;
    animation: $name 2s linear forwards;
  }

  @keyframes #{$name} {
    100% {
      stroke-dashoffset: $value;
    }
  }
}
```

### Somethings

```scss
stroke-dasharray: 500;
stroke-dashoffset: 500;
```

And when are empty, the value at `stroke-dashoffset` is `500` and when are full `stroke-dashoffset` is `0` at code bellow

![progress-bar](https://user-images.githubusercontent.com/17436856/138360317-27c06326-2aab-4e32-bfe7-2c5f39b168ab.png)
