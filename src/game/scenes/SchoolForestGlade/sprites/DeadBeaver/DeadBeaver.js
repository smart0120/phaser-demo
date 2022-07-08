
        import _DeadBeaver from './images/DeadBeaver.png'
let paths = [
        ['SchoolForestGlade_DeadBeaver', _DeadBeaver, 38],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./DeadBeaver_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "DeadBeaver"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 749;
export const Y = 900;
export const Height = 79;
export const Interactive= true
export const Width = 175;
export const Alpha = 1;
export let Scale = 1;

 
