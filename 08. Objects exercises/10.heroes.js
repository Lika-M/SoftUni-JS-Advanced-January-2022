function solve() {

    const fighter = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100,
            fight() {
                state.stamina --;
                console.log(`${state.name} slashes at the foe!`);
            }
        }
        return state;
    }

    const mage = (name) => {
        let state = {
            name,
            health: 100,
            mana: 100,
            cast: (spell) => {
                state.mana --;
                console.log(`${state.name} cast ${spell}`);
            }
        }
        return state;
    }

    return {fighter: fighter, mage: mage}
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
