
//klasa tworząca div - obrazek
export class invoDiv {

    main: HTMLElement
    offButton: HTMLElement
    image1: HTMLElement
    image_adress: string

    constructor(plik:string) {
        this.image_adress=plik
        this.main = document.createElement('div');
        this.main.className = 'display';
        this.main.id = 'display1';
        this.main.style.backgroundColor = 'rgba(255,255,255,0.5)';
        this.main.textContent = "Zniszczenia";
        this.main.style.color = 'black'
        this.main.style.height = "480px";
        this.main.style.width = "700px";
        this.main.style.fontSize = "15px";
        this.main.style.textAlign = "center";
        this.main.style.lineHeight = "1.8";
        this.main.style.position = 'absolute';
        this.main.style.top = '40px';
        this.main.style.left = '40px';
      

        this.offButton = document.createElement('div')
        this.offButton.className = 'offButton'
        this.offButton.style.cursor='pointer'
        this.offButton.style.color='black'
        this.offButton.style.fontWeight='bold'
        this.offButton.textContent = '[Zamknij]'

        this.image1 = document.createElement('img')
        this.image1.id = 'picture_1'
        const img = new Image(680, 400);
        img.src=this.image_adress
        this.main.appendChild(img);
        this.main.appendChild(this.image1)
        
        this.main.appendChild(this.offButton);
        

        this.offButton.addEventListener("click", function () {

            // const dispalyDetails = document.getElementsByClassName('display')[0];
            // dispalyDetails.style.visibility = 'hidden';
            
               

            // const imageDivInfo= document.getElementsByClassName('imageInfo1')[0];
            // imageDivInfo.style.visibility = 'visible';

        })
        
        
    }

    
}