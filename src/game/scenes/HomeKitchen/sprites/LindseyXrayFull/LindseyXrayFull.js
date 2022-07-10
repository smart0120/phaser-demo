
        import _LindseyXrayFull from './images/LindseyXrayFull.png'
let paths = [
        ['HomeKitchen_LindseyXrayFull', _LindseyXrayFull, 33],

    ]

      import {store} from "@/store";

   export const event_file = require('./LindseyXrayFull_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LindseyXrayFull"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = false
export const X = 1509;
export const Y = 375;
export const Height = 505;
export const Interactive= true
export const Width = 176;
export const Alpha = 1;
export let Scale = 1;


