

let Core = require('core.constructor');

let core = new Core({
    name: 'core.web',
    plugins: [
        require('core.plugin.uuid'),
        require('core.plugin.emitter'),
        require('core.loader.events'),
        require('core.plugin.injector'),
        require('core.plugin.monitor'),
        require('core.loader.injector'),
        require('core.plugin.type'),
        require('core.loader.channels'),
        require('core.loader.hooks'),
        require('core.plugin.import'),
        require('core.loader.imports'),
        require('core.import.react'),
        require('core.import.create-react-class'),
        require('core.import.prop-types'),
        require('core.import.q'),
        require('core.import.baobab'),
        require('core.import.react-dom'),
        require('core.loader.types'),
        require('core.plugin.prepend'),
        require('core.plugin.tree'),
        require('core.plugin.bindings'),
        require('core.type.module'),
        require('core.type.component'),
        require('core.type.action'),
        require('core.type.view'),
        require('core.loader.modules'),
        require('core.loader.components'),
        require('core.loader.tree'),
        require('core.loader.actions'),
        require('core.loader.views'),
        require('core.plugin.test'),
        require('core.type.style'),
        require('core.web.dom'),
    ]
});

window.core = core;

module.exports = core;