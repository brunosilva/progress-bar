# Progress bar

basic code

## Component 'circle' -> WORKING

The base are working [progress bar - Working](https://github.com/brunosilva/progress-bar/issues/2#issue-1031801996).

The progress-bar have

```scss
stroke-dasharray: 585;
stroke-dashoffset: 585;
```

And when are empty, the value at `stroke-dashoffset` is `585` and when are full `stroke-dashoffset` is `0` at code bellow

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

and every time you need this mixin, just call it using the code below

```scss
@include setAnimationProgress(empty, 582);
```

- 1° parameter: is name to animation
- 2° parameter: is value to change at progress

![progress-bar](https://user-images.githubusercontent.com/17436856/138360317-27c06326-2aab-4e32-bfe7-2c5f39b168ab.png)

## Component 'circle-test' -> NOT WORKING

This video with example [Test progress bar - not working](https://github.com/brunosilva/progress-bar/issues/1#issue-1031641088).
