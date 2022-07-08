
        import _CleanCloset from './images/CleanCloset.png'
let paths = [
        ['HomeBedroom_CleanCloset', _CleanCloset, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CleanCloset_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CleanCloset"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 943;
export const Y = 238;
export const Height = 492;
export const Interactive= true
export const Width = 334;
export const Alpha = 1;
export let Scale = 1;

 
