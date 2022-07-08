
        import _CleanController from './images/CleanController.png'
let paths = [
        ['HomeBedroom_CleanController', _CleanController, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CleanController_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CleanController"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 271;
export const Y = 801;
export const Height = 41;
export const Interactive= true
export const Width = 71;
export const Alpha = 1;
export let Scale = 1;

 
