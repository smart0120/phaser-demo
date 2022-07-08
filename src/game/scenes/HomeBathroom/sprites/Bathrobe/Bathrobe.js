
        import _Bathrobe from './images/Bathrobe.png'
let paths = [
        ['HomeBathroom_Bathrobe', _Bathrobe, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bathrobe_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bathrobe"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1503;
export const Y = 151;
export const Height = 375;
export const Interactive= true
export const Width = 99;
export const Alpha = 1;
export let Scale = 1;

 
