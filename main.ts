//% color="#0055ff" icon="\uf148"
namespace Onde {
    /**
     * Calcola la posizione y per l'animazione
     */
    //% block="Calcolo y con x $x e offset $offset"
    export function calcoloY(x: number, offset: number): number {
        return Math.round(2 + Math.sin(offset + x * 1.2) * 2);
    }
}