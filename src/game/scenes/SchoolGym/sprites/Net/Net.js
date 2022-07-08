
        import _Net from './images/Net.png'
let paths = [
        ['SchoolGym_Net', _Net, 18],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Net_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Net"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 937;
export const Y = 473;
export const Height = 279;
export const Interactive= true
export const Width = 983;
export const Alpha = 1;
export let Scale = 1;

 
