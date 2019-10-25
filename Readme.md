🎍 Ukrop.css is an instant solution to styling web pages. It does not aim to be the most slim solution, but to be a complete one, which you can reliably use for any project. It is also an attempt to show that using css classes everywhere is a signal of bad atomic design in layouts — meaning that *you don't need to use css classes for most of the content*.

* No classes required, just your semantic HTML code
* Responsive and `em`/`rem`-driven
* Predictable layout thanks to consistent use of `padding` and `margin-bottom`
* Looks cool with 0 effort
* Has callouts for your quotes, links and forms
* Custom radio and checkbox elements with 0 extra elements
* Configurable via [Stylus](http://stylus-lang.com/). See [_vars.styl](https://github.com/CosmoMyzrailGorynych/ukrop/blob/master/lib/_vars.styl)
* Easy to build upon due to its modularity
* Automagically turns to black if a user has a dark UI theme ([and if a browser supports it](https://caniuse.com/#feat=prefers-color-scheme))

# Install

Ukrop can be used as a plain css file or as a collection of stylus files.

## Plain CSS

Download [the minified CSS file](https://raw.githubusercontent.com/CosmoMyzrailGorynych/ukrop/master/dist/ukrop.min.css) and put it to your site's `/css` folder. Then, add this tag to your html's `head` section:

```html
<link rel="stylesheet" href="/css/ukrop.min.css"></link>
```

## Stylus

[Download the repo's folder](https://github.com/CosmoMyzrailGorynych/ukrop/archive/master.zip) or install it to your project as a git submodule (assuming you have a `stylus` folder):

```sh
git submodule add https://github.com/CosmoMyzrailGorynych/ukrop.git ./stylus/ukrop
```

Then, e.g. in your `./styl/index.styl`, add this line:

```css
@require './ukrop/index.styl'
```