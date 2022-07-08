
        import _Jacklyn from './images/Jacklyn.png'
let paths = [
        ['SchoolEntrance_Jacklyn', _Jacklyn, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Jacklyn_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Jacklyn"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1518;
export const Y = 751;
export const Height = 128;
export const Interactive= true
export const Width = 45;
export const Alpha = 1;
export let Scale = 1;

 
