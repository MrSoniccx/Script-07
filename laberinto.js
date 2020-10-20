export default class Laberinto{


    Check(x,p)
    {
        switch(x)
        {
            case 7: case 35: case 70:
                console.log(p+" Avanzo y esta en: "+(x)+" Pero subio por una escalera y ahora esta en: "+(x+20))
                return 20
                break;
            case 11: case 88: case 46: case 50:
                console.log(p+" Avanzo y esta en: "+(x)+" Pero subio por una escalera pequeña y ahora esta en: "+(x+10))
                return 10
                break;
            case 2:
                console.log(p+" Avanzo y esta en: "+(x)+" Pero subio por una escalera grande y ahora esta en: "+(x+70))
                return 70
                break;
            case 20: case 40: case 77:
                console.log(p+" Avanzo y esta en: "+(x)+" Pero se deslizo por una serpiente y ahora esta en: "+(x-20))
                return -20
                break;
            case 34: case 51: case 82: case 93:
                console.log(p+" Avanzo y esta en: "+(x)+" Pero se deslizo por una serpiente pequeña y ahora esta en: "+(x-10))
                return -10
                break;
            case 99:
                console.log(p+" Avanzo y esta en: "+(x)+" Pero se deslizo por una serpiente grande y ahora esta en: "+(x-80))
                return -80
                break;
            default:
                console.log(p+" Avanzo y ahora esta en: "+(x))
                return 0
                break;
        }
    }

}