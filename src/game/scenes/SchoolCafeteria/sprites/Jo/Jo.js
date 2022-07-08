
        import _Jo from './images/Jo.png'
let paths = [
        ['SchoolCafeteria_Jo', _Jo, 71],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Jo_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Jo"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1389;
export const Y = 325;
export const Height = 186;
export const Interactive= true
export const Width = 80;
export const Alpha = 1;
export let Scale = 1;

 
