
        import _TiedVineSaltedcola from './images/TiedVineSaltedcola.png'
let paths = [
        ['Vines_TiedVineSaltedcola', _TiedVineSaltedcola, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TiedVineSaltedcola_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TiedVineSaltedcola"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1106;
export const Y = 659;
export const Height = 135;
export const Interactive= true
export const Width = 299;
export const Alpha = 1;
export let Scale = 1;

 
