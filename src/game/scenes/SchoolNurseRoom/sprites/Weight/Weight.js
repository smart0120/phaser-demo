
        import _Weight from './images/Weight.png'
let paths = [
        ['SchoolNurseRoom_Weight', _Weight, 27],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Weight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Weight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 319;
export const Y = 406;
export const Height = 318;
export const Interactive= true
export const Width = 159;
export const Alpha = 1;
export let Scale = 1;

 
