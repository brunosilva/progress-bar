# Progress bar

basic code

## Component 'circle' -> WORKING

The base are working [progress bar - Working](https://github.com/brunosilva/progress-bar/issues/2#issue-1031801996).

The progress-bar have

```scss
stroke-dasharray: 585;
stroke-dashoffset: 585;
```

and when are empty, the value at `stroke-dashoffset` is `585` and when are full `stroke-dashoffset` is `0` at code bellow

```scss
@keyframes anim {
  100% {
    stroke-dashoffset: 350;
  }
}
```

![progress-bar](https://user-images.githubusercontent.com/17436856/138360317-27c06326-2aab-4e32-bfe7-2c5f39b168ab.png)

## Component 'circle-test' -> NOT WORKING

This video with example [Test progress bar - not working](https://github.com/brunosilva/progress-bar/issues/1#issue-1031641088).
