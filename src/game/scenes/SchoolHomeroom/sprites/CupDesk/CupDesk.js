
        import _CupDesk from './images/CupDesk.png'
let paths = [
        ['SchoolHomeroom_CupDesk', _CupDesk, 19],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CupDesk_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CupDesk"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1073;
export const Y = 755;
export const Height = 257;
export const Interactive= true
export const Width = 293;
export const Alpha = 1;
export let Scale = 1;

 
