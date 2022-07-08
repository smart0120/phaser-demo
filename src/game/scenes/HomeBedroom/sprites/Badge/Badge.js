
        import _Badge from './images/Badge.png'
let paths = [
        ['HomeBedroom_Badge', _Badge, 49],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Badge_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Badge"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 307;
export const Y = 435;
export const Height = 63;
export const Interactive= true
export const Width = 56;
export const Alpha = 1;
export let Scale = 1;

 
