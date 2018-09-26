# core.web
The basic web client for the <a href="https://github.com/ido-ofir/core">core</a>.

## installation

```sh
npm i --save core.web
```

## usage

### initial rendering

load your app as a plugin, then render one of it's components:

```jsx
// entry point of your bundler

var React = require('react');
var ReactDom = require('react-dom');
var core = require('core.web');

core.plugin([
    require('./myApp')
]);

core.require([
    'myApp.Root'
], Root => 
    ReactDom.render(<Root/>, document.getElementById('app'))
)
```


```jsx
// ./myApp/index.js

module.exports = {
    name: 'myApp',
    components: [
        {
            name: 'Root',
            get(){
                
                return {
                    render(){
                        return <div> App Root </div>;
                    }
                }
            }
        }
    ]
}
```

### plugin definition

```jsx

module.exports = {
    name: 'somePlugin',
    modules: [
        require('./modules/moduleA'),
        require('./modules/moduleB')
    ],
    components: [
        require('./components/ComponentA'),
        require('./components/ComponentB')
    ],
    actions: [
        require('./actions/actionA'),
        require('./actions/actionB')
    ],
    views: [
        require('./views/ViewA'),
        require('./views/ViewB')
    ],
    types: [
        require('./types/typeA'),
        require('./types/typeB')
    ]
}
```
