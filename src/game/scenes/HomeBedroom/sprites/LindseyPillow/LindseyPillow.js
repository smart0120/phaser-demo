
        import _LindseyPillow from './images/LindseyPillow.png'
let paths = [
        ['HomeBedroom_LindseyPillow', _LindseyPillow, 64],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LindseyPillow_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LindseyPillow"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 479;
export const Y = 599;
export const Height = 56;
export const Interactive= true
export const Width = 49;
export const Alpha = 1;
export let Scale = 1;

 
