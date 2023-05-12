

export class invoDiv {

    main: HTMLElement
    offButton: HTMLElement
    valvleDetails: HTMLElement
    image1: HTMLElement
    image_adress: string

    constructor(plik:string) {
        this.image_adress=plik
        this.main = document.createElement('div');
        //console.log(this.main);

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
        this.offButton.style.color='green'
        this.offButton.textContent = '[close details]'


        this.valvleDetails = document.createElement('div');
        this.valvleDetails.className = 'details_valve';
        this.valvleDetails.textContent = 'The 1/2 in. SharkBite Push-to-Connect Ball Valve is the easiest way to install a new or replacement shut-off ball valve. The single lever control allows for easy operation and the valve is perfect for potable water and hydronic applications where a shut-off is needed. SharkBite fittings allow you to join copper, CPVC or PEX pipe in any combination with no soldering, clamps, unions or glue. Just insert the pipe and the stainless steel teeth bite down and grip tight, while a specially formulated O-ring compresses to create a perfect seal.'
        
        this.image1 = document.createElement('img')
        this.image1.id = 'picture_1'
        const img = new Image(680, 400);
        img.src=this.image_adress
        //this.main.appendChild(this.valvleDetails);
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