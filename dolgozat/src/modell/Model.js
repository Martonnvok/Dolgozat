class Model {
    #lista = [];
    #allapot = "X";

    constructor() {
        this.feltolt();
    }

    feltolt() {
        for (let i = 0; i < 9; i++) {
            let szam = Math.floor((Math.random() * 2));
            this.#lista[i] = szam;
        }

    }

    getLista() {
        return [...this.#lista];
    }

    setLista(i) {
        this.#lista[i] = this.#allapot;
        if (this.#allapot === "X") {
            this.#allapot = "O";
        } else {
            this.#allapot = "X";
        }
    }

    /*setAllapot(i) {
        if (this.#lista[i] === 1) {
            this.#lista[i] = 0;
        } else {
            this.#lista[i] = 1;
        }
    }
*/
    szomszedokKeresese(id) {
        const szomszedFelsoSor = id > 5 ? id : id + 3;
        const szomszedAlsoSor = id < 3 ? id : id - 3;;
        const szomszedBal = id % 3 === 0 ? id : id - 1;;
        const szomszedJobb = id % 3 === 2 ? id : id + 1;
        const szomszedek = [szomszedFelsoSor, szomszedAlsoSor, szomszedBal, szomszedJobb, id];
        console.log(szomszedek)
        for (const szomszed of szomszedek) {
            if (szomszed != null) {
                if (this.#lista[szomszed] = 1) {
                    this.#lista[szomszed] = 0;
                } else {
                    this.#lista[szomszed] = 1;
                }
            }
        }
    }
}



export default Model;