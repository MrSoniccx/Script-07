import Laberinto from "./laberinto.js"
import Dado from "./dado.js"

class Main {

    LetsGo(){
        let win=0
        let dado = new Dado()
        let laberinto = new Laberinto()
        let count1 = 0
        let count2 = 0
        while(win==0)
        {

            count1 += dado.Lanzar()
            count1 += laberinto.Check(count1,1)
            if(count1 >=100)
            {
                win=1
                break;
            }
                


            count2 += dado.Lanzar()
            count2 += laberinto.Check(count2,2)
            if(count2 >=100)
            {
                win=2
                break;
            }

        }
            return ("Gano el jugador "+win)
    }
}

let start = new Main()

console.log(start.LetsGo())