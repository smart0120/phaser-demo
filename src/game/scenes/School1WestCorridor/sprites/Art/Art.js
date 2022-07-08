
        import _Art from './images/Art.png'
let paths = [
        ['School1WestCorridor_Art', _Art, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Art_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Art"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 194;
export const Height = 840;
export const Interactive= true
export const Width = 272;
export const Alpha = 1;
export let Scale = 1;

 
