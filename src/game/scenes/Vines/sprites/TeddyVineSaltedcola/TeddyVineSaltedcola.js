
        import _TeddyVineSaltedcola from './images/TeddyVineSaltedcola.png'
let paths = [
        ['Vines_TeddyVineSaltedcola', _TeddyVineSaltedcola, 77],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TeddyVineSaltedcola_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TeddyVineSaltedcola"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 223;
export const Y = 638;
export const Height = 373;
export const Interactive= true
export const Width = 613;
export const Alpha = 1;
export let Scale = 1;

 
