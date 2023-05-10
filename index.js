//--------------------------------------------------

class Subjet {

    constructor(){
        this.observers = [];
    }
    
    subscribe(obj){
        this.observers.push(obj)
    }
    
    desusb(obj){    // elimino el subscriptor
        this.observers = this.observers.filter((e)=>e !=0);
    }

    notify(obj){
    
        this.observers.forEach((observer)=>{
            observer.notify(obj)
        })
    
    }
}



//--------------------------------------------------



class TextSubject extends Subjet{ // esta clase es la que se encarda de enviar la notify
    constructor(){
        super();    // mando a llamar el mismo contructor del padre
        this.text = "";
    }
    
    notify(text){ // el valor que le pase sera el que se guardara en div1
        this.text = text;
        
        super.notify(this);
    }
}



//--------------------------------------------------
class DivObserver01{
    notify(subject){
    
        document.getElementById('div1').innerHTML = subject.text;
    
    }
}

class DivObserver02{
    notify(subject){
    
        document.getElementById('div2').innerHTML = subject.text.length;
    
    }
}


class DivObserver03{
    notify(subject){
    
    if(subject.text.search(" code") > 0){
        document.getElementById('div3').innerHTML = `🔥 Hola mundo, "token: code" 🔥`;
    }else{
        document.getElementById('div3').innerHTML = ` code 😪 ? `;
    }
        
    
    }
}

//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------



let textSubject = new TextSubject();
let miDiv01 = new DivObserver01();
let miDiv02 = new DivObserver02();
let miDiv03 = new DivObserver03();

textSubject.subscribe(miDiv01);
textSubject.subscribe(miDiv02);
textSubject.subscribe(miDiv03);

document.getElementById('msj').addEventListener('input',(e)=>{
    textSubject.notify(e.target.value);
})