class JaponFeodal extends Epoque {
    constructor() {
        super("Japon Féodal", "Découvrez les samouraïs et les ninjas dans le Japon Féodal.", "Katana du Dragon");
    }

    afficherQuete() {
        return "Quête du Japon Féodal : Trouvez le Katana du Dragon.";
    }

    realiserQuete() {
        console.log("Vous avez trouvé le Katana du Dragon !");
        return this.recompense;
    }
}

