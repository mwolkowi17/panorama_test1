import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js'

//klasa tworząca inkony nawigacyjne 'lewe' (ta ikona z lewej strony wykorzystana w panoramie 2)
export class create_icon_left {

    main: CSS3DObject;
    element: HTMLImageElement;


    constructor(x: number, y: number, z: number, id: string) {

        this.element = document.createElement('img');
        this.element.className = 'imagenav';
        this.element.id = id;
        this.element.src = './pap_circle_up_yellow.png'
        this.element.height = 5;
        this.element.width = 5;
        this.element.style.visibility = 'visible';
        this.element.style.cursor = 'pointer';

        this.main = new CSS3DObject(this.element);
        this.main.position.set(x, y, z);
        this.main.rotateY(Math.PI/2);
        this.main.element.style.overflow = 'visible';

        this.element.addEventListener('mouseover', () => {
            this.element.height = 6;
            this.element.width = 6;
          })
          this.element.addEventListener('mouseleave', () => {
            this.element.height = 5;
            this.element.width = 5;
          })

        

    }

    reset_size():void{
      this.element.height = 5;
      this.element.width = 5;
    }

};