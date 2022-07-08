
        import _BookshelvesRight from './images/BookshelvesRight.png'
let paths = [
        ['HomeBedroom_BookshelvesRight', _BookshelvesRight, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BookshelvesRight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BookshelvesRight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1330;
export const Y = 32;
export const Height = 554;
export const Interactive= true
export const Width = 574;
export const Alpha = 1;
export let Scale = 1;

 
