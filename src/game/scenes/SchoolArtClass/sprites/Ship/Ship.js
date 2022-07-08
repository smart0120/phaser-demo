
        import _Ship from './images/Ship.png'
let paths = [
        ['SchoolArtClass_Ship', _Ship, 27],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Ship_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Ship"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 905;
export const Y = 4;
export const Height = 398;
export const Interactive= true
export const Width = 235;
export const Alpha = 1;
export let Scale = 1;

 
