import CssRender from './css-render';

/**
 * class Snowfall
 * @constructor
 * @param {Object}  [config]                           - the config of snowfall.
 * @param {number}  [config.range=80]                  - range of flake.
 * @param {number}  [config.width=window.innerWidth]   - width of area.
 * @param {number}  [config.height=window.innerHeight] - height of area.
 * @param {number}  [config.size=10]                   - size of flake.
 * @param {number}  [config.speed=0.2]                 - speed gene expect 0 - 1.
 * @param {boolean} [config.shadow=false]              - if true, give the flake shadow.
 * @param {string}  [config.color='#fff']              - color of flake.
 * @param {string}  [config.container='body']          - container of flake.
 */
class Snowfall {
    constructor(config) {
        this.config = Object.assign({
            container: 'body',
            range: 80,
            width: window.innerWidth,
            height: window.innerHeight,
            size: 10,
            speed: 0.2,
            shadow: false,
            color: '#000',
        }, config);

        this.render();
    }
    render() {
        const flake = new CssRender({
            size: Math.random() * this.config.size,
            x: (Math.random() * this.config.width),
            y: 20,
            stepSize: (Math.random() * 10),
            bgColor: this.config.color,
            container: document.createElement('div'),
            speed: this.config.speed,
        });
        document.querySelectorAll(this.config.container)[0].appendChild(flake.config.container);
    }
}

export default Snowfall;
