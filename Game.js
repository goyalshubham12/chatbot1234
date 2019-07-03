const GameState = Object.freeze({
    W:   Symbol("w"),
    P:  Symbol("p"),
    WO: Symbol("wo"),
    O: Symbol("o"),
    H: Symbol("Hh"),
    F: Symbol("f"),
    W: Symbol("w"),
    P: Symbol("p"),
    C: Symbol("c"),
    C1: Symbol("c1"),
    HOME: Symbol("home")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.W;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.W:
                sReply = "You went to hill station with your friends in holidays. You planned to do trekking in jungles. You want to go or not?";
                this.stateCur = GameState.P;
                break;
            case GameState.P:
                if(sInput.toLowerCase().match("wo")){
                    sReply = "You all are very excited and doing fun by hooting and clicking the pictures. Some are tired and do rest. You want to do rest or not?";
                    this.stateCur = GameState.WO
                }else{
                    sReply ="You plan to play volleyball near the river. Do you want to play or not?";
                    this.stateCur = GameState.O;
                }
      
                break;
            case GameState.WO:
                if(sInput.toLowerCase().match("h")){
                    sReply = "You started playing the game. Some of them are eating. You want to eat or not?;
                    this.stateCur = GameState.H;
                }else{
                    sReply = "Some of them planned to go back home due to night. you want to go back home or not?";
                    this.stateCur = GameState.HOME;

                }
        
                break;
            case GameState.H:
                if(sInput.toLowerCase().match("ahead")){
                    sReply = "Some of the people move forward towards the forest and some are resting. You want to move or rest?";
                    this.stateCur = GameState.F;

                }else{
                    sReply = "It was better to move forward and explore. You wan to research or not?";
                    this.stateCur = GameState.HOME;
    
                }
           
                break;
            case GameState.F:
                if(sInput.toLowerCase().match("ahead"))
                {
                    sReply = "You and some of your friends move forward. After covering some distance, you found a lady in white dress. You want to move towards or not?";
                    this.stateCur = GameState.W;
                }
                else
                {
                    sReply = "You want to go home or move further towards the forest?";
                    this.stateCur = GameState.HOME;
                }
        
                break;
            case GameState.WAIT:
                if(sInput.toLowerCase().match("w"))
                {
                    sReply = "The woman in white dress drinking some red thing like blood and her face was totally covered with blood.";
                }
                else
                {
                    sReply = "You want to go home or move further?";
                    this.stateCur = GameState.HOME;
                }
         
                break;
            case GameState.O:
                if(sInput.toLowerCase().match("p"))
                {
                    sReply = "Thunderstormimg starts in the jungle with loud hooting of animals. you want to go home or move further?";
                    this.stateCur = GameState.P;
                }
                else{
                    sReply = "You want to go home or move further?";
                    this.stateCur = GameState.HOME;
                }
            
                break;
            case GameState.PLAY:
                if(sInput.toLowerCase().match("p"))
                {
                    sReply = "After moving further towards jungle, there are lot of children crying in the house. You want to go home or play?";
                    this.stateCur = GameState.c;
                }
                else{
                    sReply = "You want to move further or wanna quit??";
                    this.stateCur = GameState.HOME;
                }
              
                break;
            case GameState.C:
                if(sInput.toLowerCase().match("c"))
                {
                    sReply = "Some of your friends planned to step back to save their life. You wnna go with them or not??";
                    this.stateCur = GameState.C1;
                }
                else
                {
                    sReply = "You wanna move towards the thick forest or go home?";
                    this.stateCur = GameState.HOME;
                }
              
                break;
            case GameState.C1:
                if(sInput.toLowerCase().match("c"))
                {
                    sReply = "At this point, you can't do anything. you are under the control of lady with white dress. You wanna go home or move futher?";
                }
                else{
                    sReply = "That's the end of game. See you soon";
                }
               
                break;
            case GameState.HOME:
                if(sInput.toLowerCase().match("sleep"))
                {
                    sReply = "Have a good day."
                }
                else{
                    sReply = "You wanna quit? Yes or No?"
                    this.stateCur = GameState.TIRED;
                }
              
                break;
            case GameState.TIRED:
                if(sInput.toLowerCase().match("yes"))
                {
                    sReply = "Sweet Dreams";
                    
                }
                else{
                    sReply = "Some of your friends are still want to move futher. Yes or No?";
                    
                }
              
                break;
        }
        return([sReply]);
    }
}