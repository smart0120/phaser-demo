
        import _Waterpuddles from './images/Waterpuddles.png'
let paths = [
        ['HomeBathroom_Waterpuddles', _Waterpuddles, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Waterpuddles_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Waterpuddles"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1347;
export const Y = 894;
export const Height = 186;
export const Interactive= true
export const Width = 388;
export const Alpha = 1;
export let Scale = 1;

 
