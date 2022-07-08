
        import _Sofaback from './images/Sofaback.png'
let paths = [
        ['School1WestCorridor_Sofaback', _Sofaback, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sofaback_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sofaback"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1240;
export const Y = 481;
export const Height = 231;
export const Interactive= true
export const Width = 208;
export const Alpha = 1;
export let Scale = 1;

 
