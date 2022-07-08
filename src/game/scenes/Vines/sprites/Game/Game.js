
        import _Game from './images/Game.png'
let paths = [
        ['Vines_Game', _Game, 74],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Game_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Game"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 637;
export const Height = 89;
export const Interactive= true
export const Width = 54;
export const Alpha = 1;
export let Scale = 1;

 
