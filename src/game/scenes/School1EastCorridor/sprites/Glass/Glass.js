
        import _Glass from './images/Glass.png'
let paths = [
        ['School1EastCorridor_Glass', _Glass, 49],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Glass_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Glass"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 496;
export const Y = 161;
export const Height = 543;
export const Interactive= true
export const Width = 230;
export const Alpha = 1;
export let Scale = 1;

 
