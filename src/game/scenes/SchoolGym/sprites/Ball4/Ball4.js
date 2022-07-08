
        import _Ball4 from './images/Ball4.png'
let paths = [
        ['SchoolGym_Ball4', _Ball4, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Ball4_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Ball4"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1641;
export const Y = 1042;
export const Height = 38;
export const Interactive= true
export const Width = 112;
export const Alpha = 1;
export let Scale = 1;

 
