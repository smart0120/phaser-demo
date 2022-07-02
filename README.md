# phaser-demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with live reloading at localhost:8080
npm run serve

# build for production with transpilation / minification
npm run build

# serve your production build at localhost:5000
npm start
```

## Functionality

Loads a sprite up that can xray.

Also demonstrates the ability to collect 10 tokens (by clicking underwear) and then having a subsequent underwear become
visible.

So I build the means to build phaser stories really quickly with xray, collection, etc

I didn't reuse anything but an empty boilerplate that had the brainfuck of getting it "just right" in vue instead of
flat html (more on that later, -optimizations with webpack)

I added in Tailwind css and tested out some editor stuff.

The end goal is a visual editor (no code) that you can set up scenes with and have simple logical decisions. From what I
coded out you could feasibly make a pokemon type collect clone.

You could even have player health by having the palyer collect damage tokens by clicking the wrong thing.

use the above to run it, a girl should appear. you can mouse over her pants to xray and then click them 6 times to make
them vanish and then again

check `dtos.ts` though for the ideas the end product will have

conditions are in response to input or the scene loading or text being displayed

Results are ways to change the game state. Update a character piece (like the face)

Have ten tokens (condition?) add sprite.

Sprites have click logic (on click, on hover, on mouse out) // more to come

I minimally implemented a few examples and created xray and a declother 

```typescript
export class GameScene
{
    public frames: Frame[];
    public project: Project;
    public scene: Scene;
    public spriteSheets: SpriteSheet[];
    public addCharacterPieceGroupResults: AddCharacterPieceGroupResult[];
    public updateCharacterPieceGroupResults: UpdateCharacterPieceGroupResult[];
    public removeCharacterPieceGroupResults: RemoveCharacterPieceGroupResult[];
    public characterPieceSpriteSheetReferences: CharacterPieceSpriteSheetReference[];
    public characters: Character[];
    public spriteSheetRefs: SpriteSheetRef[];
    public spriteSheetRefResults: SpriteSheetRefResult[];
    public movesToFrameResult: MovesToFrameResult[];
    public masksImageResult: MasksImageResult[];
    public mouseSwipeCondition: MouseSwipeCondition[];
    public mouseHoverCondition: MouseHoverCondition[];
    public clickConditions: ClickCondition[];
    public inventoryClickCondition: InventoryClickCondition[];
    public spot: Spot[];
    public sceneStartCondition: SceneStartCondition[];
    public frameStartConditions: FrameStartCondition[];
    public gameItems: Item[];

    public constructor(init?: Partial<GameScene>) { (Object as any).assign(this, init); }
}


```
