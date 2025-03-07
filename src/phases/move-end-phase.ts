import { globalScene } from "#app/global-scene";
import type { BattlerIndex } from "#app/battle";
import { BattlerTagLapseType } from "#app/data/battler-tags";
import { PokemonPhase } from "./pokemon-phase";
import { HitDamageModifier } from "#app/modifier/modifier";

export class MoveEndPhase extends PokemonPhase {
  constructor(battlerIndex: BattlerIndex) {
    super(battlerIndex);
  }

  start() {
    super.start();

    const pokemon = this.getPokemon();
    if (pokemon.isActive(true)) {
      pokemon.lapseTags(BattlerTagLapseType.AFTER_MOVE);
    }

    globalScene.applyModifier(HitDamageModifier, pokemon.isPlayer(), pokemon, null, true);

    globalScene.arena.setIgnoreAbilities(false);

    this.end();
  }
}
