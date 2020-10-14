import { LightningElement,track } from 'lwc';

export default class FirstLWC extends LightningElement {
    @track userName = 'World';
    @track time;
    greeting = 'Good Evening';
    connectedCallback (){
        this.getDate();
        setInterval(() => {
            this.getDate();
        },1000)
    }
    getDate () {
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();
        this.time = `${this.getHour(hour)}:${this.getDoubleDigit(min)}:${date.getSeconds()} ${this.getMidday(hour)}`;
        this.getGreeting(hour);
    }
    getHour (hour){
        return hour === 0 ? 12 : hour > 12 ? (hour-12) : hour;
    }
    getDoubleDigit (digit){
        return digit < 10 ? "0"+digit : digit;
    }
    getMidday (hour) {
        return hour >= 12 ? 'PM' : 'AM';
    }
    getGreeting (hour) {
        if(hour < 12) {
        this.greeting = 'Good Morning'; 
        }
        else if (hour >= 12 && hour < 17)
        { 
            this.greeting = 'Good Afternoon';
        }
        else 
        {   
            this.greeting = 'Good Evening';
        }
    }
    changeHandler (event)
    {
        this.userName = event.target.value;
    }
    
}