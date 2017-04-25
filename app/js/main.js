/* --------------------------- 

main js file

--------------------------- */

// Menu Modal
// animatedModal.js plugin thanks to https://github.com/joaopereirawd

$("#menu-modal-trigger").animatedModal({ // #menu-modal-trigger id on trigger/button
    modalTarget:'menu-modal-01', // id on element
    animatedIn:'fadeIn',
    animatedOut:'fadeOut',
    color:'#fff',
    // Callbacks
    beforeOpen: function() {
        console.log("The animation was called");
    },           
    afterOpen: function() {
        console.log("The animation is completed");
    }, 
    beforeClose: function() {
        console.log("The animation was called");
    }, 
    afterClose: function() {
        console.log("The animation is completed");
    }
});
