
        import _MaxineNewspaper from './images/MaxineNewspaper.png'
let paths = [
        ['SchoolCafeteria_MaxineNewspaper', _MaxineNewspaper, 41],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MaxineNewspaper_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MaxineNewspaper"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 798;
export const Y = 417;
export const Height = 129;
export const Interactive= true
export const Width = 88;
export const Alpha = 1;
export let Scale = 1;

 
