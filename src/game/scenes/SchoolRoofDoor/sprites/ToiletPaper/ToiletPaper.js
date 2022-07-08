
        import _ToiletPaper from './images/ToiletPaper.png'
let paths = [
        ['SchoolRoofDoor_ToiletPaper', _ToiletPaper, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ToiletPaper_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ToiletPaper"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1526;
export const Y = 800;
export const Height = 384;
export const Interactive= true
export const Width = 394;
export const Alpha = 1;
export let Scale = 1;

 
