# Progress bar

Test how make a progress bar.

## Component 'circle' -> WORKING

The base are working [progress bar - Working](https://github.com/brunosilva/progress-bar/issues/2#issue-1031801996).

The progress-bar have

```scss
stroke-dasharray: 395;
stroke-dashoffset: 395;
```

and when are empty, the value at `stroke-dashoffset` is `395` and when are full `stroke-dashoffset` is `0` at code bellow

```scss
@keyframes anim {
  100% {
    stroke-dashoffset: 150;
  }
}
```

![progress-bar](https://github.com/brunosilva/progress-bar/issues/3#issue-1031807495)

## Component 'circle-test' -> NOT WORKING

This video with example [Test progress bar - not working](https://github.com/brunosilva/progress-bar/issues/1#issue-1031641088).
