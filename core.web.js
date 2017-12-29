

let Core = require('core.skeleton');

let core = new Core({
    name: 'core.web',
    plugins: [
        require('core.loader.extend'),
        require('core.plugin.uuid'),
        require('core.plugin.emitter'),
        require('core.plugin.injector'),
        require('core.plugin.monitor'),
        require('core.plugin.get-definition-object'),
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
        require('core.plugin.type'),
        require('core.plugin.build'),
        require('core.loader.types'),
        require('core.plugin.prepend'),
        require('core.type.module'),
        require('core.type.component'),
        require('core.type.action'),
        require('core.type.view'),
        require('core.loader.modules'),
        require('core.loader.components'),
        require('core.loader.tree'),
        require('core.loader.actions'),
        require('core.loader.views'),
        require('core.loader.events'),
        require('core.plugin.test'),
    ]
});

module.exports = core;