// Importe la classe Card depuis le fichier 'Card.js'
import Card from './Card.js';

// Importe la fonction 'shuffle' depuis le module 'lodash-es/shuffle'
import shuffle from "./node_modules/lodash-es/shuffle.js";

// Définit la classe Deck
class Deck {
    // Utilise une propriété privée (#cards) pour stocker les cartes du deck
    #cards = [];

    // Constructeur de la classe Deck qui prend en paramètre un objet 'options'
    constructor(options) {
        // Initialise les valeurs et les enseignes du deck à partir des options fournies
        this.values = options.values;
        this.suits = options.suits;
    }

    // Méthode pour créer un deck complet en utilisant les valeurs et enseignes spécifiées
    createFullDeck() {
        this.values.forEach((v) => {
            this.suits.forEach((s) => {
                // Crée une nouvelle carte avec la valeur 'v' et l'enseigne 's' et l'ajoute au deck
                this.#cards.push(new Card(v, s));
            });
        });
        return this; // Retourne l'instance du deck pour permettre le chaînage des méthodes
    }

    // Méthode pour afficher chaque carte du deck en utilisant la méthode 'display' de la classe Card
    displayCards() {
        this.#cards.forEach((card) => {
            card.display();
        });
        return this; // Retourne l'instance du deck pour permettre le chaînage des méthodes
    }

    // Méthode pour mélanger les cartes du deck en utilisant la fonction 'shuffle' de lodash
    shuffleCards() {
        this.#cards = shuffle(this.#cards);
        return this; // Retourne l'instance du deck pour permettre le chaînage des méthodes
    }
}

// Exporte la classe Deck pour pouvoir l'utiliser dans d'autres fichiers
export default Deck;