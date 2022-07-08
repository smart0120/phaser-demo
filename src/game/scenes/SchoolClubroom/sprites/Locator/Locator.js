
        import _Locator from './images/Locator.png'
let paths = [
        ['SchoolClubroom_Locator', _Locator, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Locator_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Locator"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 243;
export const Y = 682;
export const Height = 94;
export const Interactive= true
export const Width = 80;
export const Alpha = 1;
export let Scale = 1;

 
