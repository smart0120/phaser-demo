
        import _Pool from './images/Pool.png'
let paths = [
        ['School1EastCorridor_Pool', _Pool, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pool_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pool"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1172;
export const Y = 280;
export const Height = 295;
export const Interactive= true
export const Width = 91;
export const Alpha = 1;
export let Scale = 1;

 
