
        import _StabbedVineSaltedcola from './images/StabbedVineSaltedcola.png'
let paths = [
        ['Vines_StabbedVineSaltedcola', _StabbedVineSaltedcola, 41],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./StabbedVineSaltedcola_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "StabbedVineSaltedcola"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 815;
export const Y = 735;
export const Height = 345;
export const Interactive= true
export const Width = 412;
export const Alpha = 1;
export let Scale = 1;

 
