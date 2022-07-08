
        import _Light from './images/Light.png'
let paths = [
        ['SchoolClubroom_Light', _Light, 27],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Light_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Light"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 845;
export const Y = 125;
export const Height = 385;
export const Interactive= true
export const Width = 798;
export const Alpha = 1;
export let Scale = 1;

 
