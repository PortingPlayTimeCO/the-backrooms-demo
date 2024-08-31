namespace SpriteKind {
    export const GOD1 = SpriteKind.create()
    export const GOD2 = SpriteKind.create()
    export const GOD3 = SpriteKind.create()
    export const GOD4 = SpriteKind.create()
    export const GOD5 = SpriteKind.create()
    export const almondwater = SpriteKind.create()
    export const battery = SpriteKind.create()
    export const bottle = SpriteKind.create()
    export const worth1 = SpriteKind.create()
    export const worth2 = SpriteKind.create()
    export const energybar = SpriteKind.create()
    export const itempicker = SpriteKind.create()
    export const cabinet_full = SpriteKind.create()
    export const cabinet_empty = SpriteKind.create()
    export const medkit = SpriteKind.create()
    export const house1 = SpriteKind.create()
    export const duller = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.worth1)
    sprites.destroyAllSpritesOfKind(SpriteKind.worth2)
    sprites.destroyAllSpritesOfKind(SpriteKind.cabinet_full)
    sprites.destroyAllSpritesOfKind(SpriteKind.almondwater)
    sprites.destroyAllSpritesOfKind(SpriteKind.battery)
    sprites.destroyAllSpritesOfKind(SpriteKind.medkit)
    sprites.destroyAllSpritesOfKind(SpriteKind.house1)
    sprites.destroyAllSpritesOfKind(SpriteKind.energybar)
    sprites.destroyAllSpritesOfKind(SpriteKind.bottle)
    scene.setBackgroundImage(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    tiles.setCurrentTilemap(tilemap`level 1`)
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(Render.getRenderSpriteInstance(), assets.tile`myTile10`)
    timer.after(25, function () {
        game.showLongText("Walk up to buttons on walls to open wooden doors.", DialogLayout.Bottom)
    })
    encounter_1 = false
    music.stopAllSounds()
    for (let index = 0; index < 3; index++) {
        almond_water = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ........88..........
            ........11..........
            .......1111.........
            .......8888.........
            .......8888.........
            .......8888.........
            .......8888.........
            .......1111.........
            .......1111.........
            `, SpriteKind.almondwater)
        tiles.placeOnRandomTile(almond_water, assets.tile`myTile13`)
    }
    for (let index = 0; index < 4; index++) {
        _1_battery = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ........44..........
            ........ff..........
            ........ff..........
            `, SpriteKind.battery)
        tiles.placeOnRandomTile(_1_battery, assets.tile`myTile23`)
    }
    for (let index = 0; index < 4; index++) {
        empty_bottle = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ......dd888d........
            ......dd888dd.......
            ......dd888dd.......
            ......118881..88....
            `, SpriteKind.worth1)
        tiles.placeOnRandomTile(empty_bottle, assets.tile`myTile2`)
    }
    for (let index = 0; index < 2; index++) {
        cabinet = sprites.create(img`
            b b b b b b 
            b d d d d b 
            b d d d d b 
            b b b b b b 
            b d d d d b 
            b d d d d b 
            b b b b b b 
            b f f f f b 
            `, SpriteKind.cabinet_full)
        tiles.placeOnRandomTile(cabinet, assets.tile`myTile5`)
        med_kit = sprites.create(img`
            . . 1 1 1 . . 
            . 1 . . . 1 . 
            2 2 2 2 2 2 2 
            2 2 2 1 2 2 2 
            2 2 1 1 1 2 2 
            2 2 2 1 2 2 2 
            2 2 2 2 2 2 2 
            `, SpriteKind.medkit)
        tiles.placeOnRandomTile(med_kit, assets.tile`myTile6`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(15, 15), false)
    tiles.setWallAt(tiles.getTileLocation(14, 15), false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    stamina.value += -0.1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (change_item == 1) {
        selected_item.setImage(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ........88..........
            ........11..........
            .......1111.........
            .......8888.........
            .......8888.........
            .......8888.........
            .......8888.........
            .......1111.........
            .......1111.........
            `)
        if (almond_water_bottles > 0) {
            if (stamina.value < 100) {
                almond_water_bottles += -1
                stamina.value += 50
                music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            }
        } else {
            selected_item.setImage(img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ........88..........
                ........11..........
                .......1111.........
                .......8888.........
                .......8888.........
                .......8888.........
                .......8888.........
                .......1111.........
                .......1111.........
                `)
        }
    } else if (change_item == 2) {
        selected_item.setImage(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ........bbb.........
            .......b...b........
            ......2222222.......
            ......2221222.......
            ......2211122.......
            ......2221222.......
            ......2222222.......
            `)
        if (med_kits > 0) {
            if (healthbar.value < 100) {
                med_kits += -1
                healthbar.value += 25
                music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.UntilDone)
            }
        } else {
            selected_item.setImage(img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ........bbb.........
                .......b...b........
                ......2222222.......
                ......2221222.......
                ......2211122.......
                ......2221222.......
                ......2222222.......
                `)
        }
    } else if (change_item == 3) {
        if (energy_bars > 0) {
            selected_item.setImage(img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                .....33333eee.......
                ....e3383eeeee......
                ....e383eeeeee......
                .....33eeeeee.......
                `)
            if (stamina.value < 100) {
                energy_bars += -1
                stamina.value += 100
                healthbar.value += 5
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
            }
        } else {
            selected_item.setImage(img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                .....33333eee.......
                ....e3383eeeee......
                ....e383eeeeee......
                .....33eeeeee.......
                `)
        }
    } else if (change_item == 4) {
        if (batterys > 0) {
            selected_item.setImage(img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ........44..........
                ........ff..........
                ........ff..........
                `)
            if (battery_charge < 3) {
                batterys += -1
                battery_charge += 1
                music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
            }
        } else {
            selected_item.setImage(img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ........44..........
                ........ff..........
                ........ff..........
                `)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.medkit, function (sprite, otherSprite) {
    if (med_kits < 5) {
        sprites.destroy(otherSprite)
        sprites.destroy(med_kit)
        med_kits += 1
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
    if (med_kits >= 5) {
    	
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (controller.A.isPressed()) {
        if (stamina_true == true) {
            if (stamina.value >= 50) {
                Render.moveWithController(5, 5, 2.5)
                stamina.value += -0.5
            }
            if (stamina.value < 50) {
                Render.moveWithController(4, 5, 2)
                stamina.value += -0.4
            }
        }
        if (stamina.value < 25) {
            Render.moveWithController(3, 5, 1.5)
            stamina.value += -0.3
        }
        if (stamina.value <= 5) {
            Render.moveWithController(2, 5, 1)
            stamina.value += -0.2
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(27, 24), false)
    tiles.setWallAt(tiles.getTileLocation(26, 24), false)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    Render.moveWithController(2, 5, 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.almondwater, function (sprite, otherSprite) {
    if (almond_water_bottles < 5) {
        sprites.destroy(otherSprite)
        sprites.destroy(almond_water)
        almond_water_bottles += 1
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
    if (almond_water_bottles >= 5) {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.battery, function (sprite, otherSprite) {
    if (battery_charge < 3) {
        sprites.destroy(otherSprite)
        sprites.destroy(_1_battery)
        battery_charge += 1
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
    if (battery_charge <= 3) {
    	
    }
})
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.GT, statusbars.ComparisonType.Percentage, 0, function (status) {
    stamina_true = true
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    game.setGameOverMessage(true, "DEMO OVER!")
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Render.moveWithController(2, 5, 1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    healthbar.value += -1
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    Render.moveWithController(2, 5, 1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    stamina.value += -0.1
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    change_item += 1
})
info.onLifeZero(function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.worth1, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(empty_bottle)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    info.changeLifeBy(1)
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    stamina_true = false
    Render.moveWithController(2, 4, 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.energybar, function (sprite, otherSprite) {
    if (energy_bars < 5) {
        let energy_bar: Sprite = null
        sprites.destroy(otherSprite)
        sprites.destroy(energy_bar)
        energy_bars += 1
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
    if (energy_bars >= 5) {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cabinet_full, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(cabinet)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    if (Math.percentChance(50)) {
        almond_water_bottles += 1
    } else if (Math.percentChance(50)) {
        batterys += 1
    } else if (Math.percentChance(50)) {
        med_kits += 1
    } else if (Math.percentChance(50)) {
        energy_bars += 1
    }
})
let med_kit: Sprite = null
let _1_battery: Sprite = null
let almond_water: Sprite = null
let cabinet: Sprite = null
let empty_bottle: Sprite = null
let stamina: StatusBarSprite = null
let healthbar: StatusBarSprite = null
let battery_charge = 0
let change_item = 0
let almond_water_bottles = 0
let energy_bars = 0
let batterys = 0
let med_kits = 0
let stamina_true = false
let selected_item: Sprite = null
let encounter_1 = false
game.showLongText("This is a demo, some things you see may not be in the full game.", DialogLayout.Full)
game.showLongText("Press WASD to move, hold SPACE to run, stand on things to interact with them, press F to use items and MENU to switch items.", DialogLayout.Full)
info.setLife(0)
controller.configureRepeatEventDefaults(1, 1)
controller.combos.setTimeout(800)
tiles.setCurrentTilemap(tilemap`level 0`)
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    `)
info.changeScoreBy(1)
encounter_1 = true
let gun = Render.getRenderSpriteVariable()
gun = sprites.create(assets.image`mysprite`, SpriteKind.Player)
let battery = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
selected_item = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ........88..........
    ........11..........
    .......1111.........
    .......8888.........
    .......8888.........
    .......8888.........
    .......8888.........
    .......1111.........
    .......1111.........
    `, SpriteKind.Player)
stamina_true = true
let the_bacteria = sprites.create(img`
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    `, SpriteKind.Enemy)
let set_bacteria_true = 0
med_kits = 0
batterys = 0
energy_bars = 0
almond_water_bottles = 0
change_item = 1
battery_charge = 4
let almond_meter = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Render.setViewMode(ViewMode.raycastingView)
timer.after(0, function () {
    tiles.placeOnRandomTile(Render.getRenderSpriteVariable(), assets.tile`myTile10`)
})
Render.setAttribute(Render.attribute.fov, 1)
Render.moveWithController(2, 5, 1)
gun.setPosition(80, 95)
selected_item.setPosition(139, 90)
almond_meter.setPosition(40, 90)
battery.setPosition(140, 0)
gun.setFlag(SpriteFlag.RelativeToCamera, true)
almond_meter.setFlag(SpriteFlag.RelativeToCamera, true)
battery.setFlag(SpriteFlag.RelativeToCamera, true)
selected_item.setFlag(SpriteFlag.RelativeToCamera, true)
Render.getRenderSpriteInstance().setFlag(SpriteFlag.GhostThroughSprites, false)
gun.scale = 4
gun.sy = 5
almond_meter.scale = 2
almond_meter.sy = 2
battery.scale = 2
battery.sy = 2
selected_item.scale = 2
selected_item.sy = 2
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.ONE,
MakeyMakey.MakeyMakeyKey.W,
MakeyMakey.MakeyMakeyKey.S,
MakeyMakey.MakeyMakeyKey.A,
MakeyMakey.MakeyMakeyKey.D,
MakeyMakey.MakeyMakeyKey.SPACE,
MakeyMakey.MakeyMakeyKey.F
)
spriteutils.setLifeImage(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `)
healthbar = statusbars.create(8, 100, StatusBarKind.Health)
healthbar.setColor(7, 15, 2)
healthbar.positionDirection(CollisionDirection.Right)
healthbar.max = 100
healthbar.value = 100
stamina = statusbars.create(8, 100, StatusBarKind.Energy)
stamina.setColor(8, 15, 8)
stamina.positionDirection(CollisionDirection.Left)
stamina.max = 100
stamina.value = 100
music.setVolume(255)
for (let index = 0; index < 2; index++) {
    empty_bottle = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ......dd888d........
        ......dd888dd.......
        ......dd888dd.......
        ......118881..88....
        `, SpriteKind.worth1)
    tiles.placeOnRandomTile(empty_bottle, assets.tile`myTile2`)
    cabinet = sprites.create(img`
        b b b b b b 
        b d d d d b 
        b d d d d b 
        b b b b b b 
        b d d d d b 
        b d d d d b 
        b b b b b b 
        b f f f f b 
        `, SpriteKind.cabinet_full)
    tiles.placeOnRandomTile(cabinet, assets.tile`myTile5`)
}
forever(function () {
    if (change_item == 1) {
        selected_item.setImage(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ........88..........
            ........11..........
            .......1111.........
            .......8888.........
            .......8888.........
            .......8888.........
            .......8888.........
            .......1111.........
            .......1111.........
            `)
    } else if (change_item == 2) {
        selected_item.setImage(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ........111.........
            .......1...1........
            ......2222222.......
            ......2221222.......
            ......2211122.......
            ......2221222.......
            ......2222222.......
            `)
    } else if (change_item == 3) {
        selected_item.setImage(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .....33333eee.......
            ....e3383eeeee......
            ....e383eeeeee......
            .....33eeeeee.......
            `)
    } else if (change_item == 4) {
        selected_item.setImage(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ........44..........
            ........ff..........
            ........ff..........
            `)
    } else if (change_item > 4) {
        selected_item.setImage(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ........88..........
            ........11..........
            .......1111.........
            .......8888.........
            .......8888.........
            .......8888.........
            .......8888.........
            .......1111.........
            .......1111.........
            `)
        change_item = 1
    }
})
forever(function () {
    music.setVolume(255)
    if (encounter_1 == true) {
        timer.throttle("encounter lvl 1", 10000, function () {
            if (Math.percentChance(0.1)) {
                the_bacteria = sprites.create(img`
                    .....................
                    .....fffffff.........
                    .....f.f.fff.........
                    ..........fff........
                    ......f.f.ff.f.......
                    ......fffffff........
                    ....ffffffffffffff...
                    ...fff....f...f.f.f..
                    ...f.ffffffffffff.f..
                    ..ff.....fff....ff...
                    .f.f....f.ff....f....
                    .f.f.....ffff...f....
                    .f.f......ff.f..f....
                    ..ff......fff..ff....
                    ...ff....ff.....f....
                    ...f.f..ffff....ff...
                    ...ff..f.f..f...f.f..
                    ...f..fff...f...ff...
                    ...f...f....ff..f....
                    ...f...f....f...f....
                    .......f....f........
                    `, SpriteKind.Enemy)
                animation.runImageAnimation(
                the_bacteria,
                [img`
                    ..............................
                    .......ffffffff...............
                    .......f.f.ffff...............
                    ............ffff..............
                    ........f.f.fff.f.............
                    ......ffffffffff..............
                    .....ffffffffffffffff.........
                    .....f.f....f....f.f.f........
                    ....ff.fffffffffffff.f........
                    ...f.f.....fff......ff........
                    ...f.f....f.ff......f.........
                    ...f.f.....ffff.....f.........
                    ....ff......ff.f....f.........
                    .....ff.....fff.....f.........
                    .....f.f...ff.......ff........
                    .....ff...ffff......f.f.......
                    .....f...f.f..f.....ff........
                    .....f..fff...f.....f.........
                    .....f...f....f.....f.........
                    .....f........ff....f.........
                    ..............f...............
                    `,img`
                    ..............................
                    .......ffffffff...............
                    .......f.f.ffff...............
                    ............ffff..............
                    ........f.f.fff.f.............
                    ......ffffffffff..............
                    .....ffffffffffffffff.........
                    .....f.f....f....f.f.f........
                    ....ff.fffffffffffff.f........
                    ...f.f.....fff......ff........
                    ...f.f....f.ff......f.........
                    ...f.f.....ffff.....f.........
                    ....ff......ff.f....f.........
                    .....ff.....fff.....f.........
                    .....f.f...ff.......ff........
                    .....ff...ffff......f.f.......
                    .....f...f.f..f.....ff........
                    .....f..fff...f.....f.........
                    .....f...f....f.....f.........
                    .....f...f..........f.........
                    .........f....................
                    `,img`
                    ..............................
                    .......ffffffff...............
                    .......f.f.ffff...............
                    ............ffff..............
                    ........f.f.fff.f.............
                    ......ffffffffff..............
                    .....ffffffffffffffff.........
                    .....f.f....f....f.f.f........
                    ....ff.fffffffffffff.f........
                    ...f.f.....fff......ff........
                    ...f.f....f.ff......f.........
                    ...f.f.....ffff.....f.........
                    ....ff......ff.f....f.........
                    .....ff.....fff.....f.........
                    .....f.f...ff.......ff........
                    .....ff...ffff......f.f.......
                    .....f...f.f..f.....ff........
                    .....f..fff...f.....f.........
                    .....f...f....f.....f.........
                    .....f........ff....f.........
                    ..............f...............
                    `,img`
                    .......ffffff.................
                    .......f.f.ffff...............
                    ...........ffff...............
                    ............ffff..............
                    ........f.f.fff.f.............
                    ......ffffffffff..............
                    .....ffffffffffffffff.........
                    .....f.f....f....f.f.f........
                    ....ff.fffffffffffff.f........
                    ...f.f.....fff......ff........
                    ...f.f....f.ff......f.........
                    ...f.f.....ffff.....f.........
                    ....ff......ff.f....f.........
                    .....ff.....fff.....f.........
                    .....f.f...ff.......ff........
                    .....ff...ffff......f.f.......
                    .....f...f.f..f.....ff........
                    .....f..fff...f.....f.........
                    .....f...f....f.....f.........
                    .....f...f..........f.........
                    .........f....................
                    `,img`
                    ..............................
                    ..............................
                    .......ffffffff...............
                    .......f.f.fffff..............
                    ........f.f.fff.f.............
                    ......ffffffffff..............
                    .....ffffffffffffffff.........
                    .....f.f....f....f.f.f........
                    ....ff.fffffffffffff.f........
                    ...f.f.....fff......ff........
                    ...f.f....f.ff......f.........
                    ...f.f.....ffff.....f.........
                    ....ff......ff.f....f.........
                    .....ff.....fff.....f.........
                    .....f.f...ff.......ff........
                    .....ff...ffff......f.f.......
                    .....f...f.f..f.....ff........
                    .....f..fff...f.....f.........
                    .....f...f....f.....f.........
                    .....f........ff....f.........
                    ..............f...............
                    `,img`
                    ..............................
                    ..............................
                    ..............................
                    .......fffffffff..............
                    .......ffffffff.f.............
                    ......ffffffffff..............
                    .....ffffffffffffffff.........
                    .....f.f....f....f.f.f........
                    ....ff.fffffffffffff.f........
                    ...f.f.....fff......ff........
                    ...f.f....f.ff......f.........
                    ...f.f.....ffff.....f.........
                    ....ff......ff.f....f.........
                    .....ff.....fff.....f.........
                    .....f.f...ff.......ff........
                    .....ff...ffff......f.f.......
                    .....f...f.f..f.....ff........
                    .....f..fff...f.....f.........
                    .....f...f....f.....f.........
                    .....f...f..........f.........
                    .........f....................
                    `],
                150,
                true
                )
                tiles.placeOnRandomTile(the_bacteria, assets.tile`transparency16`)
                set_bacteria_true += 1
                timer.after(0, function () {
                    music.play(music.createSoundEffect(WaveShape.Noise, 617, 677, 255, 255, 9999, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.LoopingInBackground)
                })
            }
        })
    }
})
forever(function () {
    stamina.value += 0.1
})
forever(function () {
    if (change_item == 2) {
        if (med_kits == 6) {
            med_kits = 5
        }
        if (med_kits == 5) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                . . . f . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                `)
        }
        if (med_kits == 4) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f . f . . . . . . . . . . . . . 
                f f f f . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                `)
        }
        if (med_kits == 3) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                `)
        }
        if (med_kits == 2) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                `)
        }
        if (med_kits == 1) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                `)
        }
        if (med_kits == 0) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f . f . . . . . . . . . . . . 
                . f . f . . . . . . . . . . . . 
                . f . f . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                `)
            med_kits = 0
        }
        if (med_kits < 0) {
            med_kits = 0
        }
    }
})
forever(function () {
    timer.throttle("battery drain", 60000, function () {
        battery_charge += -1
    })
})
forever(function () {
    if (change_item == 1) {
        if (almond_water_bottles == 6) {
            almond_water_bottles = 5
        }
        if (almond_water_bottles == 5) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                . . . f . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                `)
        }
        if (almond_water_bottles == 4) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f . f . . . . . . . . . . . . . 
                f f f f . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                `)
        }
        if (almond_water_bottles == 3) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                `)
        }
        if (almond_water_bottles == 2) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                `)
        }
        if (almond_water_bottles == 1) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                `)
        }
        if (almond_water_bottles == 0) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f . f . . . . . . . . . . . . 
                . f . f . . . . . . . . . . . . 
                . f . f . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                `)
            almond_water_bottles = 0
        }
        if (almond_water_bottles < 0) {
            almond_water_bottles = 0
        }
    }
})
forever(function () {
    if (change_item == 4) {
        if (batterys == 6) {
            batterys = 5
        }
        if (batterys == 5) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                . . . f . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                `)
        }
        if (batterys == 4) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f . f . . . . . . . . . . . . . 
                f f f f . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                `)
        }
        if (batterys == 3) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                `)
        }
        if (batterys == 2) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                `)
        }
        if (batterys == 1) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                `)
        }
        if (batterys == 0) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f . f . . . . . . . . . . . . 
                . f . f . . . . . . . . . . . . 
                . f . f . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                `)
            batterys = 0
        }
        if (batterys < 0) {
            batterys = 0
        }
    }
})
forever(function () {
    if (change_item == 3) {
        if (energy_bars == 6) {
            energy_bars = 5
        }
        if (energy_bars == 5) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                . . . f . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                `)
        }
        if (energy_bars == 4) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f . f . . . . . . . . . . . . . 
                f f f f . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                `)
        }
        if (energy_bars == 3) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                `)
        }
        if (energy_bars == 2) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                `)
        }
        if (energy_bars == 1) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f f f . . . . . . . . . . . . 
                `)
        }
        if (energy_bars == 0) {
            almond_meter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . f . f . . . . . . . . . . . . 
                . f . f . . . . . . . . . . . . 
                . f . f . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                `)
            energy_bars = 0
        }
        if (energy_bars < 0) {
            energy_bars = 0
        }
    }
})
forever(function () {
    if (battery_charge > 3) {
        battery_charge = 3
        battery.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f . . . . . 
            . . f f 7 7 7 7 7 7 f . . . . . 
            . . f f 7 7 7 7 7 7 f . . . . . 
            . . . f f f f f f f f . . . . . 
            `)
        animation.stopAnimation(animation.AnimationTypes.All, battery)
    }
    if (battery_charge == 3) {
        battery.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f . . . . . 
            . . f f 7 7 7 7 7 7 f . . . . . 
            . . f f 7 7 7 7 7 7 f . . . . . 
            . . . f f f f f f f f . . . . . 
            `)
        animation.stopAnimation(animation.AnimationTypes.All, battery)
    }
    if (battery_charge == 2) {
        battery.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f . . . . . 
            . . f f f f 5 5 5 5 f . . . . . 
            . . f f f f 5 5 5 5 f . . . . . 
            . . . f f f f f f f f . . . . . 
            `)
        animation.stopAnimation(animation.AnimationTypes.All, battery)
    }
    if (battery_charge == 1) {
        battery.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f . . . . . 
            . . f f f f f f 2 2 f . . . . . 
            . . f f f f f f 2 2 f . . . . . 
            . . . f f f f f f f f . . . . . 
            `)
        animation.stopAnimation(animation.AnimationTypes.All, battery)
    }
    if (battery_charge == 0) {
        battery.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f . . . . . 
            . . f f f f f f f f f . . . . . 
            . . f f f f f f f f f . . . . . 
            . . . f f f f f f f f . . . . . 
            `)
        game.setGameOverMessage(false, "Out of batteries...")
        game.gameOver(false)
        animation.stopAnimation(animation.AnimationTypes.All, battery)
    }
})
forever(function () {
    if (healthbar.value > 75) {
        gun.setImage(assets.image`mysprite`)
        music.setVolume(255)
        Render.setAttribute(Render.attribute.fov, 1)
    }
    if (healthbar.value <= 75) {
        gun.setImage(img`
            ff2222..........................222222ff
            ff22...............................222ff
            ff2.................................22ff
            ff2..................................2ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff...................................2ff
            ff2..................................2ff
            ff22................................22ff
            ff2222............................2222ff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            `)
        music.setVolume(200)
        Render.setAttribute(Render.attribute.fov, 0.9)
    }
    if (healthbar.value <= 50) {
        gun.setImage(img`
            ff22222..........................22222ff
            ff22...............................222ff
            ff2.................................22ff
            ff2..................................2ff
            ff2...................................ff
            ff....................................ff
            ff..........................2.........ff
            ff..........................2.........ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff.......2............................ff
            ff.......2............................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff............................2.......ff
            ff............................2.......ff
            ff2..................................2ff
            ff22................................22ff
            ff222..............................222ff
            ff22222..........................22222ff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            `)
        music.setVolume(150)
        Render.setAttribute(Render.attribute.fov, 0.9)
    }
    if (healthbar.value <= 25) {
        gun.setImage(img`
            ff222222222222222222222222222222222222ff
            ff2222.....2...22.........2....2.22222ff
            ff22.2..........2.........2....2..2222ff
            ff2..2..........2..............2...222ff
            ff2..2.......2.................2....22ff
            ff2..2.......2.................2....22ff
            ff...2......................2..2.....2ff
            ff..........................2..2.....2ff
            ff...................................2ff
            ff...................................2ff
            ff....................................ff
            ff.......2............................ff
            ff.......2............................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff....................................ff
            ff2...................................ff
            ff2...................................ff
            ff2...........................2......2ff
            ff22..........................2......2ff
            ff222.........2.....................22ff
            ff2222........2...................2222ff
            ff222222.........................22222ff
            ff2222222222................2222222222ff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff
            `)
        music.setVolume(100)
        stamina.value += -0.1
        color.Darken.startScreenEffect(100)
        Render.setAttribute(Render.attribute.fov, 0.7)
        Render.moveWithController(1, 3, 0)
    }
})
game.onUpdateInterval(500, function () {
    scene.followPath(the_bacteria, scene.aStar(tiles.locationOfSprite(the_bacteria), tiles.locationOfSprite(Render.getRenderSpriteInstance())), 70)
})
