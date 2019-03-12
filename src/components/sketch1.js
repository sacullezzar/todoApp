export default function (s) {
    const totalFrames = 480
    let counter = 0
    
    s.props = {}
    let particles = new Array(50)
    s.onSetAppState = () => {}

    s.setup = function() {
        s.createCanvas(900, 300)
        for(let i=0; i<particles.length; i++){
            particles[i] = new Particle()
        }
    }

    s.draw = function() {
        if (s.frameCount % 60 === 1) {
            s.onSetAppState({ frameRate: s.frameRate().toFixed(1) })
        }
        let percent = s.float(counter % totalFrames) / totalFrames
        render(percent)
        counter++
    }

    function render(percent) {
        s.background(s.props.slider)
        let a = percent * s.TWO_PI
        for(let p of particles) {
            p.render(a)
        }
    }


    class Particle {
        constructor() {
            this.xNoise = new NoiseLoop(s.props.value, -s.width, s.width * 2);
            this.yNoise = new NoiseLoop(0.5, -s.height, s.height * 2);
            this.dNoise = new NoiseLoop(7, 10, 120);
            this.rNoise = new NoiseLoop(7, 100, 255);
            this.bNoise = new NoiseLoop(7, 100, 255);
        }
  
        render(a) {
            s.noStroke();
            let x = this.xNoise.value(a);
            let y = this.yNoise.value(a);
            let d = this.dNoise.value(a);
            let r = this.rNoise.value(a);
            let b = this.bNoise.value(a);
            s.fill(r, 50, b, 200);
            s.ellipse(x, y, d);
        }
    }

    class NoiseLoop {
        constructor(diameter, min, max) {
          this.diameter = diameter;
          this.min = min;
          this.max = max;
          this.cx = s.random(1000);
          this.cy = s.random(1000);
        }
      
        value(a) {
          let xoff = s.map(s.cos(a), -1, 1, this.cx, this.cx + this.diameter);
          let yoff = s.map(s.sin(a), -1, 1, this.cy, this.cy + this.diameter);
          let r = s.noise(xoff, yoff);
          return s.map(r, 0, 1, this.min, this.max);
        }
      }
}