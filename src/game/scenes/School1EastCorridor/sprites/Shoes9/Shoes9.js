
        import _Shoes9 from './images/Shoes9.png'
let paths = [
        ['School1EastCorridor_Shoes9', _Shoes9, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shoes9_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shoes9"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1508;
export const Y = 721;
export const Height = 30;
export const Interactive= true
export const Width = 23;
export const Alpha = 1;
export let Scale = 1;

 
