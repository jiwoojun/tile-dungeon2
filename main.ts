namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
}
namespace StatusBarKind {
    export const Enemy2Health = StatusBarKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inventoryVisible) {
        closeInventory()
    } else {
        openInventory()
    }
})
function closeInventory () {
    inventoryVisible = false
    controller.moveSprite(ffddfdgd)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
	
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    statusbar.spriteAttachedTo().destroy()
})
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -1
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -1
    }
})
statusbars.onZero(StatusBarKind.Enemy2Health, function (status) {
    statusbar3.spriteAttachedTo().destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Enemy2Health, otherSprite).value += -1
    }
})
function openInventory () {
    inventoryVisible = true
    controller.moveSprite(ffddfdgd, 0, 0)
}
spriteutils.createRenderable(100, function (screen2) {
    if (inventoryVisible) {
        screen2.fillRect(10, 10, 140, 100, 14)
        screen2.drawRect(10, 10, 140, 100, 15)
        images.print(screen2, "Inventory", 14, 14, 1)
        screen2.fillRect(14, 24, 132, 1, 1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    }
})
let inventoryVisible = false
let statusbar3: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let ffddfdgd: Sprite = null
ffddfdgd = sprites.create(img`
    . . . . f f f f f f f . . . . . 
    . . . f 5 5 5 5 5 5 5 f . . . . 
    . . f 5 5 f d d d f d f . . . . 
    . . . f f d d d d d d f . . . . 
    . . . . f d f f f d d f . . . . 
    . . . . f d d d d d d f . . . . 
    . . . . . f f f f f f . . . . . 
    d . . f f f f 5 5 f f f f . . d 
    d d d f e e f 9 e f e e f d d d 
    d . . f f f f e 9 f f f f . . d 
    . . . . . . f 9 e f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . d . . d . . . . . . 
    . . . . . . d . . d . . . . . . 
    . . . . . 8 8 . . 8 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(ffddfdgd)
let potions = [
img`
    . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . 
    . . . . . 1 . . . 1 . . . . . 
    . . . . . . 1 . 1 . . . . . . 
    . . . . . . 1 . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . 
    . . . . . 1 . . . 1 . . . . . 
    . . . . 1 . . . . . 1 . . . . 
    . . . . 1 7 7 7 7 6 1 . . . . 
    . . . 1 7 7 7 7 7 7 6 1 . . . 
    . . . 1 7 7 7 7 7 7 6 1 . . . 
    . . . 1 7 7 7 7 7 7 6 1 . . . 
    . . . . 1 7 7 7 6 6 1 . . . . 
    . . . . . 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . 
    . . . . . 1 . . . 1 . . . . . 
    . . . . . . 1 . 1 . . . . . . 
    . . . . . . 1 . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . 
    . . . . . 1 . . . 1 . . . . . 
    . . . . 1 . . . . . 1 . . . . 
    . . . . 1 4 4 4 4 2 1 . . . . 
    . . . 1 4 4 4 4 4 4 2 1 . . . 
    . . . 1 4 4 4 4 4 4 2 1 . . . 
    . . . 1 4 4 4 4 4 4 2 1 . . . 
    . . . . 1 4 4 4 2 2 1 . . . . 
    . . . . . 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . 
    . . . . . 1 . . . 1 . . . . . 
    . . . . . . 1 . 1 . . . . . . 
    . . . . . . 1 . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . 
    . . . . . 1 . . . 1 . . . . . 
    . . . . 1 . . . . . 1 . . . . 
    . . . . 1 5 5 5 5 4 1 . . . . 
    . . . 1 5 5 5 5 5 5 4 1 . . . 
    . . . 1 5 5 5 5 5 5 4 1 . . . 
    . . . 1 5 5 5 5 5 5 4 1 . . . 
    . . . . 1 5 5 5 4 4 1 . . . . 
    . . . . . 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . 
    . . . . . 1 . . . 1 . . . . . 
    . . . . . . 1 . 1 . . . . . . 
    . . . . . . 1 . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . 
    . . . . . 1 . . . 1 . . . . . 
    . . . . 1 . . . . . 1 . . . . 
    . . . . 1 9 9 9 9 8 1 . . . . 
    . . . 1 9 9 9 9 9 9 8 1 . . . 
    . . . 1 9 9 9 9 9 9 8 1 . . . 
    . . . 1 9 9 9 9 9 9 8 1 . . . 
    . . . . 1 9 9 9 8 8 1 . . . . 
    . . . . . 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . 
    `
]
let potion = sprites.create(potions[randint(0, 3)], SpriteKind.Food)
potion.setPosition(33, 25)
tiles.loadMap(tiles.createMap(tilemap`level1`))
scene.cameraFollowSprite(ffddfdgd)
let monster1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . 7 7 7 7 f 7 7 f 7 7 7 7 . . . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
    7 7 7 7 f f f f f f 7 7 7 . . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(monster1, tiles.getTileLocation(11, 17))
let monster2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . 9 9 9 9 f 9 9 f 9 9 9 9 . . . 
    9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
    9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
    9 9 9 9 f f f f f f 9 9 9 . . . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy2)
tiles.placeOnTile(monster2, tiles.getTileLocation(15, 7))
statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
statusbar.attachToSprite(monster1)
statusbar.value = 30
statusbar3 = statusbars.create(20, 4, StatusBarKind.Enemy2Health)
statusbar3.attachToSprite(monster2)
statusbar3.value = 30
let statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
statusbar2.attachToSprite(ffddfdgd)
statusbar2.value = 150
