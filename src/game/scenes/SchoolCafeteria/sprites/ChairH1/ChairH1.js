
        import _ChairH1 from './images/ChairH1.png'
let paths = [
        ['SchoolCafeteria_ChairH1', _ChairH1, 18],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairH1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairH1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 691;
export const Y = 467;
export const Height = 173;
export const Interactive= true
export const Width = 129;
export const Alpha = 1;
export let Scale = 1;

 
