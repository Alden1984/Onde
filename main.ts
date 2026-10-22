//% color="#0055ff" icon="\uf148"
namespace Onde {
    // The offset is now tracked entirely behind the scenes
    let offset = 0;

    /**
     * Disegna e fa scorrere l'onda sul display
     */
    //% block="mostra onda animata"
    export function mostraOnda(): void {
        basic.clearScreen();

        for (let x = 0; x <= 4; x++) {
            let y = Math.round(2 + Math.sin(offset + x * 1.2) * 2);
            led.plot(x, y);
        }

        offset -= 0.5;
        basic.pause(100);
    }
}