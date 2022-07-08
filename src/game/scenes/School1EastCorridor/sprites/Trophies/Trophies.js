
        import _Trophies from './images/Trophies.png'
let paths = [
        ['School1EastCorridor_Trophies', _Trophies, 48],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Trophies_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Trophies"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 494;
export const Y = 197;
export const Height = 465;
export const Interactive= true
export const Width = 217;
export const Alpha = 1;
export let Scale = 1;

 
