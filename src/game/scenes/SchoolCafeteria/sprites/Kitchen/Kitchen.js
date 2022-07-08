
        import _Kitchen from './images/Kitchen.png'
let paths = [
        ['SchoolCafeteria_Kitchen', _Kitchen, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Kitchen_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Kitchen"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 416;
export const Y = 310;
export const Height = 289;
export const Interactive= true
export const Width = 137;
export const Alpha = 1;
export let Scale = 1;

 
