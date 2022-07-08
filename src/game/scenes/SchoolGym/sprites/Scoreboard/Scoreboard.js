
        import _Scoreboard from './images/Scoreboard.png'
let paths = [
        ['SchoolGym_Scoreboard', _Scoreboard, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Scoreboard_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Scoreboard"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 388;
export const Y = 247;
export const Height = 136;
export const Interactive= true
export const Width = 305;
export const Alpha = 1;
export let Scale = 1;

 
