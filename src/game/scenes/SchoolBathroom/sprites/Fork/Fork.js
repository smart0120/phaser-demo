
        import _Fork from './images/Fork.png'
let paths = [
        ['SchoolBathroom_Fork', _Fork, 19],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Fork_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Fork"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 44;
export const Y = 289;
export const Height = 239;
export const Interactive= true
export const Width = 87;
export const Alpha = 1;
export let Scale = 1;

 
