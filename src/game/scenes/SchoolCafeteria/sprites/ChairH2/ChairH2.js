
        import _ChairH2 from './images/ChairH2.png'
let paths = [
        ['SchoolCafeteria_ChairH2', _ChairH2, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairH2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairH2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 798;
export const Y = 446;
export const Height = 135;
export const Interactive= true
export const Width = 84;
export const Alpha = 1;
export let Scale = 1;

 
