
        import _English from './images/English.png'
let paths = [
        ['School1WestCorridor_English', _English, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./English_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "English"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 405;
export const Y = 264;
export const Height = 491;
export const Interactive= true
export const Width = 110;
export const Alpha = 1;
export let Scale = 1;

 
