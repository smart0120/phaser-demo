
        import _KettleStove from './images/KettleStove.png'
let paths = [
        ['HomeKitchen_KettleStove', _KettleStove, 22],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./KettleStove_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "KettleStove"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 745;
export const Y = 496;
export const Height = 54;
export const Interactive= true
export const Width = 75;
export const Alpha = 1;
export let Scale = 1;

 
