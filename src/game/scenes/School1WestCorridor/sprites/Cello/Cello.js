
        import _Cello from './images/Cello.png'
let paths = [
        ['School1WestCorridor_Cello', _Cello, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Cello_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Cello"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 580;
export const Y = 347;
export const Height = 295;
export const Interactive= true
export const Width = 105;
export const Alpha = 1;
export let Scale = 1;

 
