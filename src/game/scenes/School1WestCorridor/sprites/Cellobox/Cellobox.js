
        import _Cellobox from './images/Cellobox.png'
let paths = [
        ['School1WestCorridor_Cellobox', _Cellobox, 18],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Cellobox_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Cellobox"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 525;
export const Y = 340;
export const Height = 330;
export const Interactive= true
export const Width = 188;
export const Alpha = 1;
export let Scale = 1;

 
