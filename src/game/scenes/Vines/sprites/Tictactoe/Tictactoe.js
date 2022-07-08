
        import _Tictactoe from './images/Tictactoe.png'
let paths = [
        ['Vines_Tictactoe', _Tictactoe, 38],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Tictactoe_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Tictactoe"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 637;
export const Height = 92;
export const Interactive= true
export const Width = 70;
export const Alpha = 1;
export let Scale = 1;

 
