
        import _SmallPc from './images/SmallPc.png'
let paths = [
        ['HomeBedroom_SmallPc', _SmallPc, 33],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SmallPc_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SmallPc"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1143;
export const Y = 485;
export const Height = 147;
export const Interactive= true
export const Width = 183;
export const Alpha = 1;
export let Scale = 1;

 
