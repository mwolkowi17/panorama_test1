import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js'


//klasa tworząca ikonę-obrazek
export class create_info_icon{

    main: CSS3DObject;
    element: HTMLImageElement;

    constructor(x: number, y: number, z: number, id: string) {

        this.element = document.createElement('img');
        this.element.className = 'infonav';
        this.element.id = id;
        this.element.src = './pap_spot_yellow.png'
        this.element.height = 5;
        this.element.width = 5;
        this.element.style.visibility = 'visible';
        this.element.style.cursor = 'pointer';

        this.main = new CSS3DObject(this.element);
        this.main.position.set(x, y, z);
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

}