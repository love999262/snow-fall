import SnowRender from './snow-render';

class CssRender extends SnowRender {
    constructor(config) {
        super(config);
        this.config = Object.assign({

        }, config);
        this.config.container.className = 'flakes';
        this.step = 0;
        this.requestDraw();
    }
    requestDraw() {
        // window.requestAnimationFrame(() => {
        //     this.draw();
        // });
        setInterval(() => {
            this.draw();
        }, 1 / 60);
    }
    draw() {
        this.config.container.style.cssText = `transform: translate(${this.config.x}px, ${this.config.y}px); background: ${this.config.bgColor}; width: ${this.config.size}px; height: ${this.config.size}px;`,
        this.requestNextFrame();
    }
    requestNextFrame() {
        this.step += this.config.stepSize;
        this.config.x = Math.cos(this.step) * 10;
        this.config.y += this.config.speed;
    }
}

export default CssRender;
