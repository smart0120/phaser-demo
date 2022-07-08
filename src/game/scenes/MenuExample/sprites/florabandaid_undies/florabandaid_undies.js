
        import _florabandaid_undies from './images/florabandaid_undies.png'
let paths = [
        ['MenuExample_florabandaid_undies', _florabandaid_undies, 50],

    ]


   export const event_file = require('./florabandaid_undies_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "florabandaid_undies"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1034;
export const Y = 446;
export const Height = 520;
export const Interactive= true
export const Width = 222;
export const Alpha = 1;
export let Scale = 1;


