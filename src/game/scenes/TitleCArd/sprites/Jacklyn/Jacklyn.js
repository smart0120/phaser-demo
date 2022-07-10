
        import _Jacklyn from './images/Jacklyn.png'
let paths = [
        ['TitleCArd_Jacklyn', _Jacklyn, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Jacklyn_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Jacklyn"
export const Id = 22;
export const GroupId = "0,1,2,-1"
export const Visible = true
export const X = 896;
export const Y = 14;
export const Height = 1066;
export const Interactive= true
export const Width = 1024;
export const Alpha = 1;
export let Scale = 1;

 
