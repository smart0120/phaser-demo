
        import _SquashedVine7Hp from './images/SquashedVine7Hp.png'
let paths = [
        ['Vines_SquashedVine7Hp', _SquashedVine7Hp, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SquashedVine7Hp_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SquashedVine7Hp"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 133;
export const Y = 549;
export const Height = 220;
export const Interactive= true
export const Width = 949;
export const Alpha = 1;
export let Scale = 1;

 
