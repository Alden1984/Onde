//% color="#0055ff" icon="\uf148"
namespace Onde {
    // --- Internal State Tracking ---
    // The offset is tracked entirely behind the scenes for the wave
    let offset = 0;

    // The step index is tracked for the circle animation
    let circleStep = 0;
    const circleX = [2, 3, 4, 4, 4, 3, 2, 1, 0, 0, 0, 1];
    const circleY = [0, 0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0];

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

    /**
     * Fa scorrere un punto in cerchio lungo i bordi
     */
    //% block="mostra punto in cerchio"
    export function mostraPuntoCerchio(): void {
        basic.clearScreen();

        // Plot the LED at the current step of the circle
        led.plot(circleX[circleStep], circleY[circleStep]);

        // Move to the next step, looping back to 0 after 11
        circleStep = (circleStep + 1) % 12;

        basic.pause(100);
    }
}