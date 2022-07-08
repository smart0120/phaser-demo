
        import _Flora from './images/Flora.png'
let paths = [
        ['HomeBathroom_Flora', _Flora, 28],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Flora_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Flora"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 614;
export const Y = 500;
export const Height = 198;
export const Interactive= true
export const Width = 93;
export const Alpha = 1;
export let Scale = 1;

 
