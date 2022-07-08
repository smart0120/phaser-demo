
        import _LindseyStreetwear from './images/LindseyStreetwear.png'
let paths = [
        ['SchoolMusicClass_LindseyStreetwear', _LindseyStreetwear, 20],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LindseyStreetwear_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LindseyStreetwear"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1158;
export const Y = 830;
export const Height = 225;
export const Interactive= true
export const Width = 180;
export const Alpha = 1;
export let Scale = 1;

 
