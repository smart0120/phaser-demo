
        import _Various from './images/Various.png'
let paths = [
        ['HomeBedroom_Various', _Various, 40],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Various_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Various"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1362;
export const Y = 542;
export const Height = 86;
export const Interactive= true
export const Width = 44;
export const Alpha = 1;
export let Scale = 1;

 
