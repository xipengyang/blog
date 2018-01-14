---
path: "/2017-07-11-viewport"
date: "2017-07-11T01:00:24.902Z"
title: "Using viewport percentage length to dynamically change the list height based on browser window height"
tags: ['css']
---

We have a dropdown that shows a number of sites for a customer. We want to change the dropdown menu's height dynamically dependents on user's browser size.

For example, we want the scroll bar to display on a small screen (e.g. 13' Macbook Air 1440 px x 900px) when the content breaks out its bound:

![](./sm.png "Small Screen")

When user's screen is on a large device, and there is enough space for all items to be displayed, then the scrollbar should be hidden.

![](./lg.png "Large Screen")

It is straight forward to display and hide the scrollbar at a certain height. e.g. with css just use overflow-y:scroll and define the max height: xxxpx.

```css
overflow-y: scroll;
max-height: 70vh;
```

However, this solution doesn't scale according to screen size.  Because the max height value is different for each screen size. We could use CSS media query to solve this issue. The better solution is through use of the view port units.


