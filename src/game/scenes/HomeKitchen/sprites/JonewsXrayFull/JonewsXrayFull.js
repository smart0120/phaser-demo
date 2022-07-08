
        import _JonewsXrayFull from './images/JonewsXrayFull.png'
let paths = [
        ['HomeKitchen_JonewsXrayFull', _JonewsXrayFull, 58],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./JonewsXrayFull_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "JonewsXrayFull"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 676;
export const Y = 391;
export const Height = 239;
export const Interactive= true
export const Width = 223;
export const Alpha = 1;
export let Scale = 1;

 
