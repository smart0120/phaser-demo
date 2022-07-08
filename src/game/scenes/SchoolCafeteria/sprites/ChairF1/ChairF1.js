
        import _ChairF1 from './images/ChairF1.png'
let paths = [
        ['SchoolCafeteria_ChairF1', _ChairF1, 23],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairF1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairF1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 617;
export const Y = 538;
export const Height = 292;
export const Interactive= true
export const Width = 182;
export const Alpha = 1;
export let Scale = 1;

 
