
        import _Bookvine from './images/Bookvine.png'
let paths = [
        ['Vines_Bookvine', _Bookvine, 155],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bookvine_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bookvine"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 91;
export const Y = 118;
export const Height = 202;
export const Interactive= true
export const Width = 705;
export const Alpha = 1;
export let Scale = 1;

 
