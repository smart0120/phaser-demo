
        import _Ouijaboard from './images/Ouijaboard.png'
let paths = [
        ['HomeBedroom_Ouijaboard', _Ouijaboard, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Ouijaboard_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Ouijaboard"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 471;
export const Y = 817;
export const Height = 33;
export const Interactive= true
export const Width = 170;
export const Alpha = 1;
export let Scale = 1;

 
