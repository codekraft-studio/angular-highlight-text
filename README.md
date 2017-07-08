# angular-highlight-text
> filter and directive to highlight text portions inside a element

### [DEMO](https://codekraft-studio.github.io/angular-highlight-text/)

## Getting Started
Clone it with GitHub:
```bash
git clone https://github.com/codekraft-studio/angular-highlight-text.git
```

Download it with Bower:
```bash
bower install --save angular-highlight-text
```

Than add it to your module dependencies:
```javascript
angular.module('app', ['angular-highlight-text']);
```

---

## How it works?
It searches in a given text input one or more occurrences of a given keyword and highlight it with a customizable style. The module has a directive and a filter, called __highlightText__ which you can use in different ways:

#### As a directive:
```html
<any highlight-text="{ text: someString, match: searchText }"></any>
```
You can pass to it a $scope variable or a normal string:
```html
<p highlight-text="{ text: 'some text', match: 'some' }"></p>
<p highlight-text="{ text: myText, match: myMatch }"></p>
```
where myText and myMatch are:
```javascript
$scope.myText = 'some text';
$scope.myMatch = 'some';
```

#### As a filter:
```html
highlightText: searchText:highlightClass
```
Where the first parameter is the text you want to search in the input and the second parameter is the class you want to be applied on the `<span>` element that wrap the highlighted results.
```javascript
ng-bind-html="myStrings | highlightText: matchText"
```
Or with a custom highlight class:
```javascript
ng-bind-html="myStrings | highlightText: matchText:'highlighted-blu'"
```

---

## Contributing

1. Create an issue and describe your idea
2. Fork the project (https://github.com/codekraft-studio/angular-highlight-text/fork)
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Publish the branch (`git push origin my-new-feature`)
6. Add some test for your new feature
7. Create a new Pull Request
