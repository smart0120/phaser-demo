
        import _PoolSign from './images/PoolSign.png'
let paths = [
        ['School1EastCorridor_PoolSign', _PoolSign, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./PoolSign_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "PoolSign"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1187;
export const Y = 247;
export const Height = 37;
export const Interactive= true
export const Width = 54;
export const Alpha = 1;
export let Scale = 1;

 
