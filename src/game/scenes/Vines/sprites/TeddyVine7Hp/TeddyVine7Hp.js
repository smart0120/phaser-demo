
        import _TeddyVine7Hp from './images/TeddyVine7Hp.png'
let paths = [
        ['Vines_TeddyVine7Hp', _TeddyVine7Hp, 80],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TeddyVine7Hp_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TeddyVine7Hp"
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

 
