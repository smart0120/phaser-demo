
        import _MaxineNewspaperXray from './images/MaxineNewspaperXray.png'
let paths = [
        ['SchoolCafeteria_MaxineNewspaperXray', _MaxineNewspaperXray, 40],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MaxineNewspaperXray_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MaxineNewspaperXray"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 806;
export const Y = 424;
export const Height = 122;
export const Interactive= true
export const Width = 72;
export const Alpha = 1;
export let Scale = 1;

 
