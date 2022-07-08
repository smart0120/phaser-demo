
        import _Controller from './images/Controller.png'
let paths = [
        ['HomeBedroom_Controller', _Controller, 23],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Controller_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Controller"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 280;
export const Y = 726;
export const Height = 174;
export const Interactive= true
export const Width = 191;
export const Alpha = 1;
export let Scale = 1;

 
