
        import _CleanDesk from './images/CleanDesk.png'
let paths = [
        ['HomeBedroom_CleanDesk', _CleanDesk, 27],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CleanDesk_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CleanDesk"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1060;
export const Y = 621;
export const Height = 214;
export const Interactive= true
export const Width = 467;
export const Alpha = 1;
export let Scale = 1;

 
